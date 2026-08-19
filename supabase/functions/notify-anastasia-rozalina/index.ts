import { withSupabase } from 'npm:@supabase/server@^1'

const encoder = new TextEncoder()
const ALLOWED_STUDENTS = new Set(['anastasia', 'rozalina'])
const FUNCTION_VERSION = 'anastasia-rozalina-telegram-v2-diagnostics'
const DIAGNOSTIC_VERSION = 'anastasia-rozalina-diagnostics-v1'
const lastDiagnosticTelegramSendAt = new Map<string, number>()
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-notify-secret',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

function json(body: Record<string, unknown>, status = 200) {
  return Response.json({ ...body, functionVersion: FUNCTION_VERSION }, { status, headers: corsHeaders })
}

function secureEqual(left: string, right: string): boolean {
  const a = encoder.encode(left)
  const b = encoder.encode(right)
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i += 1) diff |= a[i] ^ b[i]
  return diff === 0
}

function isHttpUrl(value: unknown): value is string {
  if (typeof value !== 'string' || !value) return false
  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

async function getRecipient(ctx: any, studentId: string) {
  if (!ALLOWED_STUDENTS.has(studentId)) {
    const error = new Error('Unknown student for this pair function')
    ;(error as any).status = 403
    throw error
  }
  const { data, error } = await ctx.supabaseAdmin
    .from('pair_telegram_recipients')
    .select('chat_id,message_thread_id,enabled')
    .eq('student_id', studentId)
    .maybeSingle()
  if (error) throw error
  if (!data || !data.enabled) {
    const notFound = new Error('Telegram recipient is not configured or is disabled')
    ;(notFound as any).status = 404
    throw notFound
  }
  return data
}

async function sendTelegramMessage(
  token: string,
  recipient: any,
  text: string,
  inlineKeyboard: Array<Array<{ text: string; url: string }>> = [],
) {
  const payload: Record<string, unknown> = {
    chat_id: Number(recipient.chat_id),
    text,
    parse_mode: 'HTML',
  }
  const threadId = Number(recipient.message_thread_id || 0)
  if (threadId > 0) payload.message_thread_id = threadId
  if (inlineKeyboard.length) payload.reply_markup = { inline_keyboard: inlineKeyboard }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const result = await response.json().catch(() => null)
  if (!response.ok || !result?.ok) {
    throw new Error(result?.description || `Telegram HTTP ${response.status}`)
  }
  return result.result
}

function buildHomeworkReport(row: any): string {
  const correct = Number(row.score_correct || 0)
  const total = Number(row.score_total || 0)
  const percent = Number(row.score_percent ?? (total > 0 ? Math.round((correct / total) * 100) : 0))
  const mistakes = Math.max(0, total - correct)
  const submittedAt = row.submitted_at || row.updated_at || row.checked_at
  const submittedLabel = submittedAt
    ? new Date(submittedAt).toLocaleString('ru-RU', { timeZone: 'Asia/Yekaterinburg' })
    : 'нет данных'

  return [
    '✅ <b>Домашняя работа сдана</b>',
    '',
    `👤 <b>Ученица:</b> ${escapeHtml(row.student_name || row.student_id)}`,
    `📝 <b>Задание:</b> ${escapeHtml(row.lesson_title || row.lesson_id)}`,
    `📊 Результат: <b>${correct} / ${total} (${percent}%)</b>`,
    `❌ Ошибок: <b>${mistakes}</b>`,
    `🕒 Сдано: ${escapeHtml(submittedLabel)}`,
  ].join('\n')
}

async function handleHomeworkReport(payload: any, ctx: any, botToken: string) {
  const studentId = String(payload.studentId || '').trim().toLowerCase()
  const lessonId = String(payload.lessonId || '').trim()
  const lessonUrl = isHttpUrl(payload.homeworkUrl) ? payload.homeworkUrl : (isHttpUrl(payload.lessonUrl) ? payload.lessonUrl : '')
  if (!studentId || !lessonId) return json({ ok: false, error: 'studentId and lessonId are required' }, 400)

  let recipient
  try {
    recipient = await getRecipient(ctx, studentId)
  } catch (error) {
    return json({ ok: false, error: error instanceof Error ? error.message : String(error) }, (error as any)?.status || 500)
  }

  const { data: row, error: progressError } = await ctx.supabaseAdmin
    .from('homework_progress')
    .select('student_id,student_name,lesson_id,lesson_title,status,answers,score_correct,score_total,score_percent,checked_at,submitted_at,updated_at')
    .eq('student_id', studentId)
    .eq('lesson_id', lessonId)
    .maybeSingle()
  if (progressError) return json({ ok: false, error: progressError.message }, 500)
  if (!row || !['submitted_pending_report', 'submitted'].includes(String(row.status || ''))) {
    return json({ ok: false, error: 'Submitted homework was not found in homework_progress' }, 409)
  }

  const submissionKey = String(row.submitted_at || row.updated_at || row.checked_at || '')
  if (!submissionKey) return json({ ok: false, error: 'Homework has no submission timestamp' }, 409)

  const { data: existing, error: existingError } = await ctx.supabaseAdmin
    .from('pair_homework_reports')
    .select('id,status,telegram_message_id,sent_at')
    .eq('student_id', studentId)
    .eq('lesson_id', lessonId)
    .eq('submission_key', submissionKey)
    .maybeSingle()
  if (existingError) return json({ ok: false, error: existingError.message }, 500)
  if (existing?.status === 'sent') {
    return json({ ok: true, skipped: true, reason: 'already_sent', telegramMessageId: existing.telegram_message_id, reportSentAt: existing.sent_at })
  }

  let reportId = existing?.id as string | undefined
  const reportRow = {
    student_id: studentId,
    lesson_id: lessonId,
    submission_key: submissionKey,
    status: 'pending',
    score_correct: row.score_correct,
    score_total: row.score_total,
    score_percent: row.score_percent,
    payload: row,
    error_message: null,
    updated_at: new Date().toISOString(),
  }

  if (reportId) {
    const { error } = await ctx.supabaseAdmin.from('pair_homework_reports').update(reportRow).eq('id', reportId)
    if (error) return json({ ok: false, error: error.message }, 500)
  } else {
    const { data: created, error } = await ctx.supabaseAdmin.from('pair_homework_reports').insert(reportRow).select('id').single()
    if (error) {
      if (error.code === '23505') return json({ ok: true, skipped: true, reason: 'already_claimed' })
      return json({ ok: false, error: error.message }, 500)
    }
    reportId = created.id
  }

  const keyboard = lessonUrl ? [[{ text: '📝 Открыть домашнюю работу', url: lessonUrl }]] : []
  try {
    const telegramMessage = await sendTelegramMessage(botToken, recipient, buildHomeworkReport(row), keyboard)
    const sentAt = new Date().toISOString()
    const { error: logError } = await ctx.supabaseAdmin.from('pair_homework_reports').update({
      status: 'sent', telegram_message_id: telegramMessage.message_id, sent_at: sentAt, error_message: null, updated_at: sentAt,
    }).eq('id', reportId)
    if (logError) throw new Error(`Telegram sent, but report log update failed: ${logError.message}`)

    const { error: progressUpdateError } = await ctx.supabaseAdmin.from('homework_progress').update({
      status: 'submitted', report_status: 'sent', report_sent_at: sentAt, report_error: null, updated_at: sentAt,
    }).eq('student_id', studentId).eq('lesson_id', lessonId)
    if (progressUpdateError) throw new Error(`Telegram sent, but homework status update failed: ${progressUpdateError.message}`)

    return json({ ok: true, skipped: false, telegramMessageId: telegramMessage.message_id, reportSentAt: sentAt })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    await ctx.supabaseAdmin.from('pair_homework_reports').update({ status: 'failed', error_message: message, updated_at: new Date().toISOString() }).eq('id', reportId)
    await ctx.supabaseAdmin.from('homework_progress').update({ report_status: 'failed', report_error: message }).eq('student_id', studentId).eq('lesson_id', lessonId)
    return json({ ok: false, error: message }, 502)
  }
}

const MOTIVATION = [
  'Small steps every day lead to big progress. ✨',
  'Practice, notice, improve — you have got this! 🙌',
  'Consistency beats intensity — keep going! 🌟',
  'Every exercise is another step forward. 🎯',
]

function buildMaterialMessage(homework: any, hasVocabulary: boolean, seed: string): string {
  const topic = escapeHtml(homework?.topic || homework?.title || homework?.id || 'Homework')
  let hash = 0
  for (const ch of seed) hash = ((hash << 5) - hash + ch.charCodeAt(0)) | 0
  const motivation = MOTIVATION[Math.abs(hash) % MOTIVATION.length]
  return [
    '📚 <b>Новые материалы по английскому</b>',
    '',
    `📝 <b>Домашняя работа:</b> ${topic}`,
    '',
    hasVocabulary ? 'Сначала повторите новые слова, затем переходите к домашней работе.' : 'Новая домашняя работа уже доступна.',
    '',
    `💫 ${motivation}`,
  ].join('\n')
}

async function handleMaterialNotification(payload: any, req: Request, ctx: any, botToken: string) {
  const expectedSecret = Deno.env.get('NOTIFY_WEBHOOK_SECRET') ?? ''
  const actualSecret = req.headers.get('x-notify-secret') ?? ''
  if (!expectedSecret || !secureEqual(actualSecret, expectedSecret)) return json({ ok: false, error: 'Unauthorized' }, 401)

  const studentId = String(payload.studentId || '').trim().toLowerCase()
  const materialType = String(payload.materialType || '').trim()
  const materialId = String(payload.materialId || '').trim()
  const notificationVersion = Number(payload.notificationVersion)
  const homework = payload.homework
  const vocabulary = payload.vocabulary
  const grammar = Array.isArray(payload.grammar) ? payload.grammar : []
  if (!studentId || !materialType || !materialId || !Number.isInteger(notificationVersion) || notificationVersion < 1) {
    return json({ ok: false, error: 'Missing or invalid notification identity' }, 400)
  }
  if (!homework || !isHttpUrl(homework.url)) return json({ ok: false, error: 'Valid homework URL is required' }, 400)

  let recipient
  try {
    recipient = await getRecipient(ctx, studentId)
  } catch (error) {
    return json({ ok: false, error: error instanceof Error ? error.message : String(error) }, (error as any)?.status || 500)
  }

  const { data: existing, error: existingError } = await ctx.supabaseAdmin.from('pair_material_publications')
    .select('id,status,telegram_message_id').eq('student_id', studentId).eq('material_type', materialType)
    .eq('material_id', materialId).eq('notification_version', notificationVersion).maybeSingle()
  if (existingError) return json({ ok: false, error: existingError.message }, 500)
  if (existing?.status === 'sent') return json({ ok: true, skipped: true, reason: 'already_sent', telegramMessageId: existing.telegram_message_id })

  let publicationId = existing?.id as string | undefined
  if (publicationId) {
    const { error } = await ctx.supabaseAdmin.from('pair_material_publications').update({ status: 'pending', payload, error_message: null, updated_at: new Date().toISOString() }).eq('id', publicationId)
    if (error) return json({ ok: false, error: error.message }, 500)
  } else {
    const { data: created, error } = await ctx.supabaseAdmin.from('pair_material_publications').insert({
      student_id: studentId, material_type: materialType, material_id: materialId,
      notification_version: notificationVersion, status: 'pending', payload,
    }).select('id').single()
    if (error) {
      if (error.code === '23505') return json({ ok: true, skipped: true, reason: 'already_claimed' })
      return json({ ok: false, error: error.message }, 500)
    }
    publicationId = created.id
  }

  const keyboard: Array<Array<{ text: string; url: string }>> = []
  if (vocabulary && isHttpUrl(vocabulary.url)) keyboard.push([{ text: '📚 Слова', url: vocabulary.url }])
  keyboard.push([{ text: '📝 Домашняя работа', url: homework.url }])
  for (const item of grammar) if (item && isHttpUrl(item.url)) keyboard.push([{ text: '📐 Грамматика', url: item.url }])

  try {
    const telegramMessage = await sendTelegramMessage(botToken, recipient, buildMaterialMessage(homework, Boolean(vocabulary), `${materialId}:${notificationVersion}`), keyboard)
    const sentAt = new Date().toISOString()
    const { error } = await ctx.supabaseAdmin.from('pair_material_publications').update({
      status: 'sent', telegram_message_id: telegramMessage.message_id, sent_at: sentAt, error_message: null, updated_at: sentAt,
    }).eq('id', publicationId)
    if (error) throw new Error(`Telegram sent, but log update failed: ${error.message}`)
    return json({ ok: true, skipped: false, telegramMessageId: telegramMessage.message_id })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    await ctx.supabaseAdmin.from('pair_material_publications').update({ status: 'failed', error_message: message, updated_at: new Date().toISOString() }).eq('id', publicationId)
    return json({ ok: false, error: message }, 502)
  }
}


function diagnosticsApiKey(req: Request): string {
  const direct = req.headers.get('apikey') ?? ''
  if (direct) return direct.trim()
  const authorization = req.headers.get('authorization') ?? ''
  return authorization.replace(/^Bearer\s+/i, '').trim()
}

function isDiagnosticsAuthorized(req: Request, studentId: string): boolean {
  if (!ALLOWED_STUDENTS.has(studentId)) return false
  const expected = Deno.env.get('SUPABASE_ANON_KEY') ?? ''
  const actual = diagnosticsApiKey(req)
  return Boolean(expected && actual && secureEqual(actual, expected))
}

async function telegramApi(token: string, method: string, body: Record<string, unknown> = {}) {
  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
    const result = await response.json().catch(() => null)
    if (!response.ok || !result?.ok) {
      return { ok: false, error: result?.description || `Telegram HTTP ${response.status}` }
    }
    return { ok: true, result: result.result }
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : String(error) }
  }
}

function diagnoseHomeworkRow(row: any): string | null {
  const status = String(row?.status || '')
  const reportStatus = String(row?.report_status || '')
  if (status === 'draft') {
    if (reportStatus && reportStatus !== 'not_sent') return `draft имеет report_status=${reportStatus}`
    if (row?.submitted_at || row?.locked_at || row?.report_sent_at) return 'draft содержит финальные даты'
    return null
  }
  if (status === 'submitted_pending_report') {
    if (!['pending', 'failed'].includes(reportStatus)) return `submitted_pending_report имеет report_status=${reportStatus || 'NULL'}`
    if (!row?.submitted_at || !row?.locked_at) return 'submitted_pending_report без submitted_at/locked_at'
    return null
  }
  if (status === 'submitted') {
    if (reportStatus !== 'sent') return `submitted имеет report_status=${reportStatus || 'NULL'}`
    if (!row?.submitted_at || !row?.locked_at || !row?.report_sent_at) return 'submitted без обязательных финальных дат'
    return null
  }
  return `неизвестный status=${status || 'NULL'}`
}

async function diagnosticHealth(studentId: string, ctx: any, botToken: string) {
  let staleDiagnosticProbesRemoved = 0
  let database: any = { ok: false, homeworkRows: 0, staleDiagnosticProbesRemoved: 0, suspiciousHomework: [], pendingHomework: [] }

  try {
    const { data: probes, error: probesError } = await ctx.supabaseAdmin
      .from('homework_progress')
      .select('lesson_id')
      .eq('student_id', studentId)
      .like('lesson_id', '__diagnostic_probe__%')

    if (probesError) throw probesError
    const probeIds = (probes || []).map((row: any) => String(row.lesson_id || '')).filter(Boolean)
    if (probeIds.length) {
      const { error: cleanupError } = await ctx.supabaseAdmin
        .from('homework_progress')
        .delete()
        .eq('student_id', studentId)
        .in('lesson_id', probeIds)
      if (cleanupError) throw cleanupError
      staleDiagnosticProbesRemoved = probeIds.length
    }

    const { data: homeworkRows, error: homeworkError } = await ctx.supabaseAdmin
      .from('homework_progress')
      .select('lesson_id,status,report_status,report_error,score_correct,score_total,submitted_at,locked_at,report_sent_at')
      .eq('student_id', studentId)

    if (homeworkError) throw homeworkError
    const rows = homeworkRows || []
    const suspiciousHomework = rows
      .map((row: any) => ({ lessonId: String(row.lesson_id || 'unknown'), reason: diagnoseHomeworkRow(row) }))
      .filter((item: any) => Boolean(item.reason))
    const pendingHomework = rows
      .filter((row: any) => String(row.status || '') === 'submitted_pending_report' || ['pending', 'failed'].includes(String(row.report_status || '')))
      .map((row: any) => ({
        lessonId: String(row.lesson_id || 'unknown'),
        status: String(row.status || 'unknown'),
        reportStatus: String(row.report_status || 'unknown'),
        error: row.report_error || null,
      }))

    database = {
      ok: true,
      homeworkRows: rows.length,
      staleDiagnosticProbesRemoved,
      suspiciousHomework,
      pendingHomework,
    }
  } catch (error) {
    database = {
      ok: false,
      homeworkRows: 0,
      staleDiagnosticProbesRemoved,
      suspiciousHomework: [],
      pendingHomework: [],
      error: error instanceof Error ? error.message : String(error),
    }
  }

  let reportLog: any = { ok: true, pendingOrFailed: [] }
  try {
    const { data: reportRows, error: reportError } = await ctx.supabaseAdmin
      .from('pair_homework_reports')
      .select('lesson_id,status,error_message')
      .eq('student_id', studentId)
      .limit(50)

    if (reportError) throw reportError
    reportLog = {
      ok: true,
      pendingOrFailed: (reportRows || [])
        .filter((row: any) => String(row.status || '') !== 'sent')
        .map((row: any) => ({
          lessonId: String(row.lesson_id || 'unknown'),
          status: String(row.status || 'unknown'),
          error: row.error_message || null,
        })),
    }
  } catch (error) {
    reportLog = { ok: false, pendingOrFailed: [], error: error instanceof Error ? error.message : String(error) }
  }

  let recipientInfo: any = { ok: false, enabled: false, source: 'pair_telegram_recipients', threadId: null }
  let recipient: any = null
  try {
    recipient = await getRecipient(ctx, studentId)
    recipientInfo = {
      ok: true,
      enabled: Boolean(recipient.enabled),
      source: 'pair_telegram_recipients',
      threadId: recipient.message_thread_id == null ? null : Number(recipient.message_thread_id),
    }
  } catch (error) {
    recipientInfo = { ...recipientInfo, error: error instanceof Error ? error.message : String(error) }
  }

  const botCheck = await telegramApi(botToken, 'getMe')
  const chatCheck = recipient
    ? await telegramApi(botToken, 'getChat', { chat_id: Number(recipient.chat_id) })
    : { ok: false, error: 'Recipient is not configured' }

  return json({
    ok: true,
    diagnosticVersion: DIAGNOSTIC_VERSION,
    database,
    reportLog,
    recipient: recipientInfo,
    telegram: {
      bot: botCheck.ok
        ? { ok: true, username: botCheck.result?.username || null, id: botCheck.result?.id || null }
        : { ok: false, error: botCheck.error || 'getMe failed' },
      chat: chatCheck.ok
        ? { ok: true, type: chatCheck.result?.type || null, title: chatCheck.result?.title || null }
        : { ok: false, error: chatCheck.error || 'getChat failed' },
    },
  })
}

async function diagnosticHomeworkProbe(payload: any, ctx: any) {
  const studentId = String(payload.studentId || '').trim().toLowerCase()
  const lessonId = String(payload.lessonId || '').trim()
  if (!ALLOWED_STUDENTS.has(studentId)) {
    return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: 'Unknown student for diagnostics' }, 403)
  }
  if (!lessonId.startsWith('__diagnostic_probe__')) {
    return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: 'Invalid diagnostic lessonId' }, 400)
  }

  const { data: before, error: beforeError } = await ctx.supabaseAdmin
    .from('homework_progress')
    .select('lesson_id,status,report_status,submitted_at,locked_at,report_sent_at')
    .eq('student_id', studentId)
    .eq('lesson_id', lessonId)
    .maybeSingle()

  if (beforeError) return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: beforeError.message }, 500)
  if (!before) return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: 'Browser diagnostic row was not found' }, 404)
  if (String(before.status || '') !== 'draft' || String(before.report_status || '') !== 'not_sent') {
    return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: `Expected draft/not_sent, got ${before.status || 'NULL'}/${before.report_status || 'NULL'}` }, 409)
  }

  const submittedAt = new Date().toISOString()
  const { error: pendingError } = await ctx.supabaseAdmin
    .from('homework_progress')
    .update({
      status: 'submitted_pending_report',
      submitted_at: submittedAt,
      locked_at: submittedAt,
      report_status: 'pending',
      report_sent_at: null,
      report_error: null,
      updated_at: submittedAt,
    })
    .eq('student_id', studentId)
    .eq('lesson_id', lessonId)

  if (pendingError) return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: pendingError.message }, 500)

  const { data: pending, error: pendingReadError } = await ctx.supabaseAdmin
    .from('homework_progress')
    .select('status,report_status,submitted_at,locked_at')
    .eq('student_id', studentId)
    .eq('lesson_id', lessonId)
    .maybeSingle()
  if (pendingReadError) return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: pendingReadError.message }, 500)
  if (!pending || String(pending.status || '') !== 'submitted_pending_report' || String(pending.report_status || '') !== 'pending' || !pending.submitted_at || !pending.locked_at) {
    return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: 'Server transition to submitted_pending_report was not persisted' }, 409)
  }

  const sentAt = new Date().toISOString()
  const { error: finalError } = await ctx.supabaseAdmin
    .from('homework_progress')
    .update({
      status: 'submitted',
      report_status: 'sent',
      report_sent_at: sentAt,
      report_error: null,
      updated_at: sentAt,
    })
    .eq('student_id', studentId)
    .eq('lesson_id', lessonId)

  if (finalError) return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: finalError.message }, 500)

  const { data: finalRow, error: finalReadError } = await ctx.supabaseAdmin
    .from('homework_progress')
    .select('status,report_status,submitted_at,locked_at,report_sent_at')
    .eq('student_id', studentId)
    .eq('lesson_id', lessonId)
    .maybeSingle()
  if (finalReadError) return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: finalReadError.message }, 500)
  if (!finalRow || String(finalRow.status || '') !== 'submitted' || String(finalRow.report_status || '') !== 'sent' || !finalRow.submitted_at || !finalRow.locked_at || !finalRow.report_sent_at) {
    return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: 'Server transition to submitted/sent was not persisted' }, 409)
  }

  const { error: deleteError } = await ctx.supabaseAdmin
    .from('homework_progress')
    .delete()
    .eq('student_id', studentId)
    .eq('lesson_id', lessonId)
  if (deleteError) return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: deleteError.message }, 500)

  return json({
    ok: true,
    diagnosticVersion: DIAGNOSTIC_VERSION,
    stages: {
      browserWrite: 'draft/not_sent',
      serverPending: 'submitted_pending_report/pending',
      serverFinal: 'submitted/sent',
      cleanup: 'deleted',
    },
  })
}

async function diagnosticCleanupProbe(payload: any, ctx: any) {
  const studentId = String(payload.studentId || '').trim().toLowerCase()
  const lessonId = String(payload.lessonId || '').trim()
  if (!ALLOWED_STUDENTS.has(studentId)) {
    return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: 'Unknown student for diagnostics' }, 403)
  }
  if (!lessonId.startsWith('__diagnostic_probe__')) {
    return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: 'Invalid diagnostic lessonId' }, 400)
  }
  const { error } = await ctx.supabaseAdmin
    .from('homework_progress')
    .delete()
    .eq('student_id', studentId)
    .eq('lesson_id', lessonId)
  if (error) return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: error.message }, 500)
  return json({ ok: true, diagnosticVersion: DIAGNOSTIC_VERSION })
}

async function diagnosticSendReport(studentId: string, ctx: any, botToken: string, pageUrl: unknown) {
  const now = Date.now()
  const cooldownMs = 30_000
  const previous = lastDiagnosticTelegramSendAt.get(studentId) || 0
  if (previous && now - previous < cooldownMs) {
    const retryAfterSeconds = Math.max(1, Math.ceil((cooldownMs - (now - previous)) / 1000))
    return json({
      ok: true,
      diagnosticVersion: DIAGNOSTIC_VERSION,
      skipped: true,
      retryAfterSeconds,
      threadId: null,
    })
  }

  let recipient
  try {
    recipient = await getRecipient(ctx, studentId)
  } catch (error) {
    return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: error instanceof Error ? error.message : String(error) }, (error as any)?.status || 500)
  }

  const names: Record<string, string> = { anastasia: 'Анастасия', rozalina: 'Розалина' }
  const source = isHttpUrl(pageUrl) ? String(pageUrl) : 'diagnostics.html'
  const threadId = recipient.message_thread_id == null ? null : Number(recipient.message_thread_id)
  const text = [
    '🧪 <b>Диагностика English Space</b>',
    '',
    `👤 <b>Ученица:</b> ${escapeHtml(names[studentId] || studentId)}`,
    '✅ Связка Edge Function → Telegram работает.',
    `🧵 <b>Тема:</b> ${threadId ?? 'не задана'}`,
    `🌐 <b>Источник:</b> ${escapeHtml(source)}`,
  ].join('\n')

  try {
    const telegramMessage = await sendTelegramMessage(botToken, recipient, text)
    lastDiagnosticTelegramSendAt.set(studentId, now)
    return json({
      ok: true,
      diagnosticVersion: DIAGNOSTIC_VERSION,
      skipped: false,
      telegramMessageId: telegramMessage.message_id,
      threadId,
    })
  } catch (error) {
    return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: error instanceof Error ? error.message : String(error) }, 502)
  }
}

async function handleDiagnostics(payload: any, req: Request, ctx: any, botToken: string) {
  const studentId = typeof payload.studentId === 'string' ? payload.studentId.trim().toLowerCase() : ''
  if (!isDiagnosticsAuthorized(req, studentId)) {
    return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: 'Unauthorized diagnostics request' }, 401)
  }

  switch (payload.kind) {
    case 'diagnostics_health':
      return diagnosticHealth(studentId, ctx, botToken)
    case 'diagnostics_homework_probe':
      return diagnosticHomeworkProbe(payload, ctx)
    case 'diagnostics_cleanup_probe':
      return diagnosticCleanupProbe(payload, ctx)
    case 'diagnostics_send_report':
      return diagnosticSendReport(studentId, ctx, botToken, payload.pageUrl)
    default:
      return json({ ok: false, diagnosticVersion: DIAGNOSTIC_VERSION, error: 'Unknown diagnostics request' }, 400)
  }
}

export default {
  fetch: withSupabase({ auth: 'none' }, async (req, ctx) => {
    if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
    if (req.method !== 'POST') return json({ ok: false, error: 'Method not allowed' }, 405)

    const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN') ?? ''
    if (!botToken) return json({ ok: false, error: 'TELEGRAM_BOT_TOKEN is not configured in Supabase Edge Function secrets' }, 500)

    let payload: any
    try { payload = await req.json() } catch { return json({ ok: false, error: 'Invalid JSON' }, 400) }

    if (typeof payload?.kind === 'string' && payload.kind.startsWith('diagnostics_')) {
      return handleDiagnostics(payload, req, ctx, botToken)
    }
    if (payload?.kind === 'homework_submit_report' || payload?.eventType === 'homework_report') {
      return handleHomeworkReport(payload, ctx, botToken)
    }
    return handleMaterialNotification(payload, req, ctx, botToken)
  }),
}
