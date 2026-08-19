import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'

const root = process.cwd()

function requiredEnv(name) {
  const value = process.env[name]?.trim()
  if (!value) throw new Error(`Missing environment variable: ${name}`)
  return value
}

function loadWindowValue(relativePath, globalName) {
  const absolutePath = path.join(root, relativePath)
  if (!fs.existsSync(absolutePath)) throw new Error(`Missing file: ${relativePath}`)
  const source = fs.readFileSync(absolutePath, 'utf8')
  const sandbox = { window: {} }
  vm.createContext(sandbox)
  vm.runInContext(source, sandbox, { filename: relativePath, timeout: 2000 })
  return sandbox.window[globalName]
}

function loadWindowArray(relativePath, globalName) {
  const value = loadWindowValue(relativePath, globalName)
  return Array.isArray(value) ? value : []
}

function loadLessons() {
  const lessonsDir = path.join(root, 'data', 'lessons')
  if (!fs.existsSync(lessonsDir)) return []
  return fs.readdirSync(lessonsDir)
    .filter((filename) => /^lesson-\d+\.json$/i.test(filename))
    .map((filename) => JSON.parse(fs.readFileSync(path.join(lessonsDir, filename), 'utf8')))
    .sort((left, right) => Number(left.number || 0) - Number(right.number || 0))
}

function pageUrl(baseUrl, page, fallback) {
  const target = typeof page === 'string' && page.trim() ? page.trim() : fallback
  return new URL(target, `${baseUrl}/`).toString()
}

function isNotifiable(lesson) {
  return lesson.status === 'available' && lesson.notification?.enabled === true
}

const siteBaseUrl = requiredEnv('SITE_BASE_URL').replace(/\/+$/, '')
const notifySecret = requiredEnv('NOTIFY_WEBHOOK_SECRET')
const selectedLessonId = requiredEnv('LESSON_ID')
const appConfig = loadWindowValue('config.js', 'APP_CONFIG') || {}
const supabaseUrl = String(appConfig?.supabase?.url || '').replace(/\/+$/, '')
const anonKey = String(appConfig?.supabase?.anonKey || '').trim()
if (!supabaseUrl || !anonKey) throw new Error('config.js does not contain Supabase URL/anonKey')

const vocabularyData = loadWindowArray('data/vocabulary-data.js', 'VOCABULARY_DATA')
const grammarData = loadWindowArray('data/grammar-data.js', 'GRAMMAR_DATA')
const lessons = loadLessons().filter((lesson) => lesson.id === selectedLessonId && isNotifiable(lesson))
if (lessons.length === 0) {
  throw new Error(`Lesson ${selectedLessonId} was not found, is unavailable, or notification.enabled is not true`)
}

const endpoint = `${supabaseUrl}/functions/v1/notify-anastasia-rozalina`
let failures = 0

for (const lesson of lessons) {
  const vocabulary = vocabularyData.find((topic) => topic.id === lesson.vocabularyId)
  const validVocabulary = vocabulary && Array.isArray(vocabulary.words) && vocabulary.words.length > 0
    ? {
        id: vocabulary.id,
        title: vocabulary.title || 'Lesson vocabulary',
        wordCount: vocabulary.words.length,
        url: pageUrl(siteBaseUrl, vocabulary.page, `vocabulary.html?id=${encodeURIComponent(vocabulary.id)}`),
      }
    : null

  const explicitGrammarIds = Array.isArray(lesson.grammarIds) ? lesson.grammarIds : []
  const grammarTopics = grammarData
    .filter((topic) => topic.status === 'available')
    .filter((topic) => explicitGrammarIds.includes(topic.id) || topic.linkedLessonId === lesson.id)
    .map((topic) => ({
      id: topic.id,
      title: topic.title || 'Grammar',
      url: pageUrl(siteBaseUrl, topic.page, `grammar-topic.html?id=${encodeURIComponent(topic.id)}`),
    }))

  // One notification is enough because both students use the same Telegram topic.
  const payload = {
    studentId: 'anastasia',
    studentName: 'Анастасия и Розалина',
    materialType: 'lesson_bundle',
    materialId: lesson.id,
    notificationVersion: Number(lesson.notification?.version || 1),
    homework: {
      id: lesson.id,
      title: lesson.title || 'Homework',
      subtitle: lesson.subtitle || '',
      topic: [lesson.title || 'Homework', lesson.subtitle || ''].filter(Boolean).join(' — '),
      url: pageUrl(siteBaseUrl, lesson.page, `lesson.html?id=${encodeURIComponent(lesson.id)}`),
    },
    vocabulary: validVocabulary,
    grammar: grammarTopics,
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      apikey: anonKey,
      authorization: `Bearer ${anonKey}`,
      'x-notify-secret': notifySecret,
    },
    body: JSON.stringify(payload),
  })

  const result = await response.json().catch(() => ({ error: `HTTP ${response.status}` }))
  if (!response.ok || !result.ok) {
    failures += 1
    console.error(`Failed ${lesson.id}:`, result)
  } else if (result.skipped) {
    console.log(`Skipped ${lesson.id}: ${result.reason}`)
  } else {
    console.log(`Sent ${lesson.id}; Telegram message id: ${result.telegramMessageId}`)
  }
}

if (failures > 0) process.exitCode = 1
