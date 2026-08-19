window.APP_CONFIG = {
  course: {
    nameRu: "Анастасия и Розалина",
    nameEn: "Anastasia & Rozalina",
    level: "A1",
    mode: "pair"
  },

  students: [
    {
      id: "anastasia",
      nameRu: "Анастасия",
      nameEn: "Anastasia",
      level: "A1",
      textbook: "English File",
      textbookEdition: "4th Edition · Pre-Intermediate"
    },
    {
      id: "rozalina",
      nameRu: "Розалина",
      nameEn: "Rozalina",
      level: "A1",
      textbook: "English File",
      textbookEdition: "4th Edition · Pre-Intermediate"
    }
  ],

  // Backward compatibility for the diagnostics/test pages.
  // The main app uses `students` and the active student selector.
  student: {
    id: "anastasia",
    nameRu: "Анастасия",
    nameEn: "Anastasia",
    level: "A1",
    textbook: "English File",
    textbookEdition: "4th Edition · Pre-Intermediate"
  },

  supabase: {
    url: "https://svejqcrkxkiheucglikq.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2ZWpxY3JreGtpaGV1Y2dsaWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwMTE5MDUsImV4cCI6MjA5OTU4NzkwNX0.UUX5_atNjuNdexdhrGQG24UgXLibOE9VgpNcQo3t3nw",
    authMode: "password",

    tables: {
      homework: "homework_progress",
      vocabulary: "vocabulary_progress",
      vocabularyTopics: "vocabulary_topic_progress",
      grammar: "grammar_progress"
    }
  },

  features: {
    homework: true,
    vocabulary: true,
    wordPronunciation: true,
    grammar: true,
    cloudSync: true,
    telegramNotifications: true
  }
};
