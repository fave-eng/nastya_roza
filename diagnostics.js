(() => {
  'use strict';

  const EXPECTED_DIAGNOSTIC_VERSION = 'anastasia-rozalina-diagnostics-v2';
  const FUNCTION_NAME = 'notify-anastasia-rozalina';
  const ACTIVE_STUDENT_KEY = 'english_space_active_student';
  const config = window.APP_CONFIG || {};
  const students = Array.isArray(config.students) && config.students.length
    ? config.students
    : [config.student || {}];

  const normalizeStudentId = (value) => String(value || '').trim().toLowerCase();
  const byStudentId = new Map(students.map((item) => [normalizeStudentId(item?.id), item]));

  function resolveStudent() {
    const params = new URLSearchParams(window.location.search);
    const requested = normalizeStudentId(params.get('student'));
    let stored = '';
    try {
      stored = normalizeStudentId(window.localStorage.getItem(ACTIVE_STUDENT_KEY));
    } catch {}

    const fallback =
      normalizeStudentId(config.student?.id) ||
      normalizeStudentId(students[0]?.id);

    const id = byStudentId.has(requested)
      ? requested
      : byStudentId.has(stored)
        ? stored
        : fallback;

    const selected = byStudentId.get(id) || students[0] || {};

    try {
      window.localStorage.setItem(
        ACTIVE_STUDENT_KEY,
        normalizeStudentId(selected?.id)
      );
    } catch {}

    return selected;
  }

  const student = resolveStudent();
  const studentId = normalizeStudentId(student.id);
  const studentName = String(
    student.nameRu ||
    student.nameEn ||
    studentId ||
    'Ученица'
  );

  const checksEl = document.getElementById('checks');
  const summaryEl = document.getElementById('main-summary');
  const rawEl = document.getElementById('raw-output');
  const configInfoEl = document.getElementById('config-info');
  const telegramInfoEl = document.getElementById('telegram-info');
  const dbWriteResultEl = document.getElementById('db-write-result');
  const sendResultEl = document.getElementById('send-result');
  const runAllBtn = document.getElementById('run-all');
  const dbWriteBtn = document.getElementById('test-db-write');
  const sendBtn = document.getElementById('send-test-report');
  const studentSwitcherEl = document.getElementById('student-switcher');
  const activeStudentNameEl = document.getElementById('active-student-name');

  let supabaseClient = null;

  let lastReport = {
    studentId,
    studentName,
    startedAt: null,
    checks: [],
    health: null,
    directRows: [],
    errors: []
  };

  const esc = (value) =>
    String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');

  function addKV(target, key, value, mono = false) {
    target.insertAdjacentHTML(
      'beforeend',
      `<div class="kv">
        <span>${esc(key)}</span>
        <strong class="${mono ? 'mono' : ''}">${esc(value)}</strong>
      </div>`
    );
  }

  function renderStudentSwitcher() {
    activeStudentNameEl.textContent = studentName;

    studentSwitcherEl.innerHTML = students
      .map((item) => {
        const id = normalizeStudentId(item?.id);
        const active = id === studentId;
        const name = String(item?.nameRu || item?.nameEn || id);

        return `
          <button
            type="button"
            class="student-btn${active ? ' active' : ''}"
            data-student-id="${esc(id)}"
            aria-pressed="${active ? 'true' : 'false'}"
          >
            ${esc(name)}
          </button>
        `;
      })
      .join('');

    studentSwitcherEl.addEventListener('click', (event) => {
      const button = event.target.closest('[data-student-id]');
      if (!button) return;

      const nextId = normalizeStudentId(button.dataset.studentId);

      if (!byStudentId.has(nextId) || nextId === studentId) return;

      try {
        window.localStorage.setItem(ACTIVE_STUDENT_KEY, nextId);
      } catch {}

      const url = new URL(window.location.href);
      url.searchParams.set('student', nextId);
      window.location.assign(url.toString());
    });
  }

  function renderConfig() {
    configInfoEl.innerHTML = '';

    addKV(configInfoEl, 'student_id', studentId || '—', true);
    addKV(configInfoEl, 'Имя', studentName);

    addKV(
      configInfoEl,
      'Уровень',
      student.level ||
      config.course?.level ||
      '—'
    );

    addKV(
      configInfoEl,
      'Учебник',
      [student.textbook, student.textbookEdition]
        .filter(Boolean)
        .join(' · ') || '—'
    );

    addKV(
      configInfoEl,
      'Supabase URL',
      config.supabase?.url || 'не задан',
      true
    );

    addKV(
      configInfoEl,
      'Anon key',
      config.supabase?.anonKey ? 'есть' : 'НЕТ'
    );

    addKV(
      configInfoEl,
      'Edge Function',
      FUNCTION_NAME,
      true
    );

    addKV(
      configInfoEl,
      'cloudSync',
      String(config.features?.cloudSync !== false)
    );

    addKV(
      configInfoEl,
      'telegramNotifications',
      String(config.features?.telegramNotifications !== false)
    );

    addKV(
      configInfoEl,
      'Origin',
      window.location.origin,
      true
    );
  }

  function resetChecks() {
    checksEl.innerHTML = '';

    lastReport = {
      studentId,
      studentName,
      startedAt: new Date().toISOString(),
      checks: [],
      health: null,
      directRows: [],
      errors: []
    };
  }

  function addCheck(name, status, detail) {
    const icon =
      status === 'ok'
        ? '✓'
        : status === 'bad'
          ? '!'
          : status === 'warn'
            ? '!'
            : '…';

    checksEl.insertAdjacentHTML(
      'beforeend',
      `
        <div class="check ${status}">
          <div class="ico">${icon}</div>
          <div>
            <div class="name">${esc(name)}</div>
            <div class="detail">${esc(detail || '')}</div>
          </div>
        </div>
      `
    );

    lastReport.checks.push({
      name,
      status,
      detail: detail || ''
    });
  }

  function setSummary(status, text) {
    summaryEl.className = `summary ${status || ''}`.trim();
    summaryEl.textContent = text;
  }

  function getClient() {
    if (supabaseClient) {
      return supabaseClient;
    }

    if (!window.supabase?.createClient) {
      throw new Error('Supabase JS SDK не загрузился');
    }

    const url = String(config.supabase?.url || '').trim();
    const anonKey = String(config.supabase?.anonKey || '').trim();

    if (!url || !anonKey) {
      throw new Error(
        'В config.js отсутствуют supabase.url или supabase.anonKey'
      );
    }

    supabaseClient = window.supabase.createClient(
      url,
      anonKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false
        }
      }
    );

    return supabaseClient;
  }

  function functionUrl() {
    const base = String(config.supabase?.url || '').replace(/\/+$/, '');

    return `${base}/functions/v1/${FUNCTION_NAME}`;
  }

  async function invokeDiagnostic(body) {
    const anonKey = String(config.supabase?.anonKey || '').trim();

    const response = await fetch(
      functionUrl(),
      {
        method: 'POST',

        headers: {
          'content-type': 'application/json',
          apikey: anonKey,
          authorization: `Bearer ${anonKey}`
        },

        body: JSON.stringify(body)
      }
    );

    const text = await response.text();

    let data = null;

    try {
      data = text
        ? JSON.parse(text)
        : null;
    } catch {
      data = {
        raw: text
      };
    }

    return {
      ok: response.ok,
      status: response.status,
      data
    };
  }

  function explainFunctionFailure(result) {
    const message = String(
      result?.data?.error ||
      result?.data?.message ||
      result?.data?.raw ||
      ''
    ).trim();

    if (result?.status === 404) {
      return `Edge Function ${FUNCTION_NAME} не найдена или не задеплоена.`;
    }

    if (
      result?.status === 401 &&
      /Unauthorized diagnostics request/i.test(message)
    ) {
      const version = result?.data?.diagnosticVersion
        ? ` Версия функции: ${result.data.diagnosticVersion}.`
        : '';

      return `Edge Function отвечает, но не принимает публичный ключ из config.js.${version}`;
    }

    if (
      result?.status === 401 &&
      /Unauthorized/i.test(message)
    ) {
      return `Edge Function отклонила авторизацию. Проверь deploy ${FUNCTION_NAME}.`;
    }

    if (result?.status === 403) {
      return message || `Диагностика запрещена для student_id=${studentId}.`;
    }

    if (/Failed to fetch/i.test(message)) {
      return 'Браузер не смог вызвать Edge Function: проверь сеть, URL проекта и CORS.';
    }

    return `HTTP ${result?.status || '—'}${message ? `: ${message}` : ''}`;
  }

  function formatError(error) {
    if (!error) {
      return 'Неизвестная ошибка';
    }

    const code = error.code
      ? `${error.code}: `
      : '';

    const message =
      error.message ||
      error.error_description ||
      String(error);

    if (/homework_progress_final_dates_check/i.test(message)) {
      return `${code}${message}. Для финально отправленной работы Supabase требует submitted_at и locked_at.`;
    }

    if (/homework_progress_report_check/i.test(message)) {
      return `${code}${message}. Нарушена state machine отчёта: draft/not_sent → submitted_pending_report/pending|failed → submitted/sent.`;
    }

    if (
      /Final homework submission is immutable|Submitted homework cannot be changed|Invalid homework status transition/i.test(message)
    ) {
      return `${code}${message}. Сработала защита от изменения уже отправленной домашней работы.`;
    }

    if (
      /row-level security|permission denied|42501/i.test(message)
    ) {
      return `${code}${message}. Ошибка прав доступа / RLS Supabase.`;
    }

    return `${code}${message}`;
  }

  async function runAll() {
    runAllBtn.disabled = true;

    resetChecks();

    setSummary(
      '',
      `Проверяю подключения для ${studentName}…`
    );

    telegramInfoEl.innerHTML = '';

    try {
      const hasConfig = Boolean(
        config.supabase?.url &&
        config.supabase?.anonKey &&
        studentId &&
        byStudentId.has(studentId)
      );

      addCheck(
        '1. config.js и профиль ученицы',
        hasConfig ? 'ok' : 'bad',
        hasConfig
          ? `Конфигурация загружена для ${studentName} (${studentId}).`
          : 'Не хватает student_id / Supabase URL / anon key.'
      );

      if (!hasConfig) {
        throw new Error('Некорректный config.js');
      }

      const sdkOk = Boolean(window.supabase?.createClient);

      addCheck(
        '2. Supabase JS SDK',
        sdkOk ? 'ok' : 'bad',
        sdkOk
          ? 'Библиотека @supabase/supabase-js загружена.'
          : 'CDN Supabase JS не загрузился.'
      );

      if (!sdkOk) {
        throw new Error('Supabase SDK не загрузился');
      }

      const client = getClient();

      const homeworkTable =
        config.supabase?.tables?.homework ||
        'homework_progress';

      const readResponse = await client
        .from(homeworkTable)
        .select(
          'student_id,student_name,lesson_id,lesson_title,status,checked_at,submitted_at,locked_at,report_status,report_sent_at,report_error,score_correct,score_total,score_percent,answers,updated_at'
        )
        .eq('student_id', studentId)
        .order('lesson_id', {
          ascending: false
        })
        .limit(100);

      if (readResponse.error) {
        const detail = formatError(readResponse.error);

        addCheck(
          '3. Supabase Database / чтение homework_progress',
          'bad',
          detail
        );

        lastReport.errors.push({
          stage: 'database_read',
          error: detail
        });
      } else {
        lastReport.directRows =
          readResponse.data || [];

        addCheck(
          '3. Supabase Database / чтение homework_progress',
          'ok',
          `Доступ есть. Строк прогресса ${studentName}: ${(readResponse.data || []).length}.`
        );
      }

      let edgeResult;

      try {
        edgeResult = await invokeDiagnostic({
          kind: 'diagnostics_health',
          studentId
        });
      } catch (error) {
        edgeResult = {
          ok: false,
          status: 0,
          data: {
            error:
              error.message ||
              String(error)
          }
        };
      }

      if (
        !edgeResult.ok ||
        edgeResult.data?.diagnosticVersion !==
          EXPECTED_DIAGNOSTIC_VERSION
      ) {
        const detail = edgeResult.ok
          ? `Функция отвечает, но версия диагностики другая: ${edgeResult.data?.diagnosticVersion || 'не указана'}.`
          : explainFunctionFailure(edgeResult);

        addCheck(
          `4. Supabase Edge Function ${FUNCTION_NAME}`,
          'bad',
          detail
        );

        lastReport.errors.push({
          stage: 'edge_function',
          error: detail,
          response: edgeResult
        });
      } else {
        lastReport.health = edgeResult.data;

        addCheck(
          `4. Supabase Edge Function ${FUNCTION_NAME}`,
          'ok',
          `Задеплоена нужная версия: ${edgeResult.data.diagnosticVersion}.`
        );

        const h = edgeResult.data;

        const browserRows =
          Array.isArray(lastReport.directRows)
            ? lastReport.directRows.length
            : 0;

        const serviceRows =
          Number(h.database?.homeworkRows || 0);

        const removedProbes =
          Number(
            h.database?.staleDiagnosticProbesRemoved ||
            0
          );

        const browserRowsAfterCleanup =
          Math.max(
            0,
            browserRows - removedProbes
          );

        const visibilityOk =
          !readResponse.error &&
          browserRowsAfterCleanup === serviceRows;

        addCheck(
          '5. RLS / одинаковое чтение browser и service role',
          visibilityOk ? 'ok' : 'bad',
          visibilityOk
            ? `Браузер и сервер видят одинаковое количество рабочих строк ДЗ: ${serviceRows}${removedProbes ? ` (ещё ${removedProbes} технических probe удалено сервером)` : ''}.`
            : `Браузер видит ${browserRowsAfterCleanup} рабочих строк после cleanup, Edge Function видит ${serviceRows}. Проверь SELECT policy для student_id=${studentId}.`
        );

        addCheck(
          '6. Edge Function → Supabase (service role)',
          h.database?.ok ? 'ok' : 'bad',
          h.database?.ok
            ? `Сервер читает общие таблицы Supabase. Строк ДЗ: ${h.database.homeworkRows}.`
            : h.database?.error ||
              'Сервер не может читать Supabase.'
        );

        addCheck(
          '7. Получатель Telegram',
          h.recipient?.ok ? 'ok' : 'bad',
          h.recipient?.ok
            ? `Получатель для ${studentName} найден и включён в pair_telegram_recipients.`
            : h.recipient?.error ||
              'Получатель не найден/выключен.'
        );

        addCheck(
          '8. Тема Telegram',
          h.recipient?.ok &&
          Number(h.recipient?.threadId) === 2
            ? 'ok'
            : 'bad',
          h.recipient?.ok
            ? `message_thread_id=${h.recipient.threadId ?? 'NULL'}; ожидается 2.`
            : 'Нельзя проверить тему без настроенного получателя.'
        );

        addCheck(
          '9. Telegram Bot API / бот',
          h.telegram?.bot?.ok ? 'ok' : 'bad',
          h.telegram?.bot?.ok
            ? `Telegram видит бота @${h.telegram.bot.username || 'без username'}.`
            : h.telegram?.bot?.error ||
              'getMe завершился ошибкой.'
        );

        addCheck(
          '10. Telegram Bot API / группа',
          h.telegram?.chat?.ok ? 'ok' : 'bad',
          h.telegram?.chat?.ok
            ? `Бот имеет доступ к целевой группе (${h.telegram.chat.type || 'chat'}).`
            : h.telegram?.chat?.error ||
              'Бот не имеет доступа к целевой группе.'
        );

        if (
          Array.isArray(h.database?.suspiciousHomework) &&
          h.database.suspiciousHomework.length
        ) {
          addCheck(
            '11. Состояние сохранённых ДЗ',
            'warn',
            `Есть несогласованные записи: ${h.database.suspiciousHomework
              .map(
                (item) =>
                  `${item.lessonId || 'unknown'}${
                    item.reason
                      ? ` — ${item.reason}`
                      : ''
                  }`
              )
              .join('; ')}.`
          );
        } else {
          addCheck(
            '11. Состояние сохранённых ДЗ',
            'ok',
            'Записи соответствуют state machine draft → submitted_pending_report → submitted.'
          );
        }

        const pendingHomework =
          Array.isArray(h.database?.pendingHomework)
            ? h.database.pendingHomework
            : [];

        const pendingReports =
          Array.isArray(h.reportLog?.pendingOrFailed)
            ? h.reportLog.pendingOrFailed
            : [];

        if (
          pendingHomework.length ||
          pendingReports.length
        ) {
          const parts = [];

          if (pendingHomework.length) {
            parts.push(
              `homework_progress: ${pendingHomework
                .map(
                  (item) =>
                    `${item.lessonId} (${item.reportStatus || 'pending'})`
                )
                .join(', ')}`
            );
          }

          if (pendingReports.length) {
            parts.push(
              `pair_homework_reports: ${pendingReports
                .map(
                  (item) =>
                    `${item.lessonId} (${item.status || 'unknown'})`
                )
                .join(', ')}`
            );
          }

          addCheck(
            '12. Telegram-отчёты по ДЗ',
            'warn',
            `Есть ожидающие/ошибочные записи. ${parts.join(' · ')}`
          );
        } else {
          addCheck(
            '12. Telegram-отчёты по ДЗ',
            'ok',
            'Зависших отчётов по выбранной ученице нет.'
          );
        }

        if (removedProbes > 0) {
          addCheck(
            '13. Очистка диагностики',
            'ok',
            `Удалено старых технических probe-записей: ${removedProbes}.`
          );
        }

        telegramInfoEl.innerHTML = '';

        addKV(
          telegramInfoEl,
          'Ученица',
          studentName
        );

        addKV(
          telegramInfoEl,
          'student_id',
          studentId,
          true
        );

        addKV(
          telegramInfoEl,
          'Edge version',
          h.diagnosticVersion || '—',
          true
        );

        addKV(
          telegramInfoEl,
          'Recipient',
          h.recipient?.ok
            ? 'найден'
            : 'ошибка'
        );

        addKV(
          telegramInfoEl,
          'Source',
          h.recipient?.source || '—',
          true
        );

        addKV(
          telegramInfoEl,
          'Enabled',
          String(Boolean(h.recipient?.enabled))
        );

        addKV(
          telegramInfoEl,
          'message_thread_id',
          h.recipient?.threadId ?? 'NULL',
          true
        );

        addKV(
          telegramInfoEl,
          'Bot API',
          h.telegram?.bot?.ok
            ? 'OK'
            : 'ERROR'
        );

        addKV(
          telegramInfoEl,
          'Доступ к группе',
          h.telegram?.chat?.ok
            ? 'OK'
            : 'ERROR'
        );
      }

      const bad =
        lastReport.checks.filter(
          (item) =>
            item.status === 'bad'
        );

      const warn =
        lastReport.checks.filter(
          (item) =>
            item.status === 'warn'
        );

      if (bad.length) {
        setSummary(
          'bad',
          `Найдена проблема для ${studentName}: ${bad[0].name}. Смотри первую красную строку выше.`
        );
      } else if (warn.length) {
        setSummary(
          'warn',
          `Основные подключения ${studentName} работают, но есть предупреждение по сохранённым данным.`
        );
      } else {
        setSummary(
          'ok',
          `Все проверенные подключения ${studentName} работают. Теперь можно отдельно проверить запись Supabase и тестовое сообщение в Telegram.`
        );
      }
    } catch (error) {
      const detail =
        formatError(error);

      addCheck(
        'Проверка остановлена',
        'bad',
        detail
      );

      lastReport.errors.push({
        stage: 'fatal',
        error: detail
      });

      setSummary(
        'bad',
        detail
      );
    } finally {
      lastReport.finishedAt =
        new Date().toISOString();

      rawEl.textContent =
        JSON.stringify(
          lastReport,
          null,
          2
        );

      runAllBtn.disabled =
        false;
    }
  }

  async function bestEffortDeleteProbe(
    client,
    table,
    probeId
  ) {
    try {
      await client
        .from(table)
        .delete()
        .eq(
          'student_id',
          studentId
        )
        .eq(
          'lesson_id',
          probeId
        );
    } catch {}
  }

  async function testDatabaseWrite() {
    dbWriteBtn.disabled = true;

    dbWriteResultEl.innerHTML =
      `<div class="summary">Проверяю полный путь сохранения ДЗ для ${esc(studentName)}…</div>`;

    const client =
      getClient();

    const table =
      config.supabase?.tables?.homework ||
      'homework_progress';

    const probeId =
      `__diagnostic_probe__${Date.now()}_${Math.random()
        .toString(36)
        .slice(2, 8)}`;

    try {
      const {
        error: insertError
      } = await client
        .from(table)
        .insert({
          student_id:
            studentId,

          student_name:
            studentName,

          lesson_id:
            probeId,

          lesson_title:
            `Diagnostics probe · ${studentName}`,

          status:
            'draft',

          answers:
            {},

          score_correct:
            null,

          score_total:
            null,

          score_percent:
            null,

          checked_at:
            null,

          submitted_at:
            null,

          locked_at:
            null,

          report_status:
            'not_sent',

          report_sent_at:
            null,

          report_error:
            null
        });

      if (insertError) {
        throw new Error(
          `browser_draft_insert: ${formatError(insertError)}`
        );
      }

      const probe =
        await invokeDiagnostic({
          kind:
            'diagnostics_homework_probe',

          studentId,

          lessonId:
            probeId
        });

      if (
        !probe.ok ||
        !probe.data?.ok
      ) {
        throw new Error(
          probe.data?.error ||
          explainFunctionFailure(probe)
        );
      }

      dbWriteResultEl.innerHTML =
        `<div class="summary ok">✓ Полный путь homework_progress для ${esc(studentName)} работает: browser draft → submitted_pending_report → submitted → cleanup. Реальные ДЗ не изменялись.</div>`;

      lastReport.databaseWriteProbe = {
        ok: true,
        studentId,
        lessonId: probeId,
        stages: probe.data.stages || null
      };
    } catch (error) {
      const detail =
        formatError(error);

      dbWriteResultEl.innerHTML =
        `<div class="summary bad">✕ Ошибка пути homework_progress для ${esc(studentName)}: ${esc(detail)}</div>`;

      lastReport.errors.push({
        stage:
          'database_write_probe',

        error:
          detail,

        studentId,

        lessonId:
          probeId
      });

      try {
        await invokeDiagnostic({
          kind:
            'diagnostics_cleanup_probe',

          studentId,

          lessonId:
            probeId
        });
      } catch {}

      await bestEffortDeleteProbe(
        client,
        table,
        probeId
      );
    } finally {
      rawEl.textContent =
        JSON.stringify(
          lastReport,
          null,
          2
        );

      dbWriteBtn.disabled =
        false;
    }
  }

  async function sendTestReport() {
    sendBtn.disabled = true;

    sendResultEl.innerHTML =
      `<div class="summary">Отправляю тестовое сообщение для ${esc(studentName)}…</div>`;

    try {
      const result =
        await invokeDiagnostic({
          kind:
            'diagnostics_send_report',

          studentId,

          pageUrl:
            window.location.href
        });

      if (
        !result.ok ||
        !result.data?.ok
      ) {
        const message =
          result.data?.error ||
          explainFunctionFailure(result);

        const retry =
          result.data?.retryAfterSeconds
            ? ` Повтори через ${result.data.retryAfterSeconds} сек.`
            : '';

        throw new Error(
          `${message}${retry}`
        );
      }

      if (
        result.data.skipped
      ) {
        const retry =
          Number(
            result.data.retryAfterSeconds ||
            30
          );

        sendResultEl.innerHTML =
          `<div class="summary warn">Тест для ${esc(studentName)} уже отправлялся совсем недавно. Повтори примерно через ${retry} сек.</div>`;
      } else {
        sendResultEl.innerHTML =
          `<div class="summary ok">✓ Telegram принял тест для ${esc(studentName)}. message_id=${esc(result.data.telegramMessageId)}; thread_id=${esc(result.data.threadId ?? 'NULL')}.</div>`;
      }

      lastReport.telegramSendProbe =
        result.data || null;
    } catch (error) {
      const detail =
        formatError(error);

      sendResultEl.innerHTML =
        `<div class="summary bad">✕ Тестовое сообщение не отправлено: ${esc(detail)}</div>`;

      lastReport.errors.push({
        stage:
          'telegram_test_send',

        error:
          detail,

        studentId
      });
    } finally {
      rawEl.textContent =
        JSON.stringify(
          lastReport,
          null,
          2
        );

      sendBtn.disabled =
        false;
    }
  }

  async function copyReport() {
    const text =
      rawEl.textContent || '';

    try {
      await navigator.clipboard.writeText(text);

      const button =
        document.getElementById(
          'copy-report'
        );

      const old =
        button.textContent;

      button.textContent =
        'Скопировано ✓';

      setTimeout(
        () => {
          button.textContent =
            old;
        },
        1300
      );
    } catch {
      window.prompt(
        'Скопируй отчёт вручную:',
        text
      );
    }
  }

  document
    .getElementById('run-all')
    .addEventListener(
      'click',
      runAll
    );

  document
    .getElementById('test-db-write')
    .addEventListener(
      'click',
      testDatabaseWrite
    );

  document
    .getElementById('send-test-report')
    .addEventListener(
      'click',
      sendTestReport
    );

  document
    .getElementById('copy-report')
    .addEventListener(
      'click',
      copyReport
    );

  document
    .getElementById('reload-page')
    .addEventListener(
      'click',
      () =>
        window.location.reload()
    );

  renderStudentSwitcher();
  renderConfig();
})();
