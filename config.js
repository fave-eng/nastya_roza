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

  student: {
    id: "anastasia",
    nameRu: "Анастасия",
    nameEn: "Anastasia",
    level: "A1",
    textbook: "English File",
    textbookEdition: "4th Edition · Pre-Intermediate"
  },

  // Общий Supabase-проект, который уже используется другими сайтами.
  supabase: {
    url: "https://zqzgarvmpqqqaobeicpc.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxemdhcnZtcHFxcWFvYmVpY3BjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2ODQwNTIsImV4cCI6MjA5NzI2MDA1Mn0.gARetYwVZfInx3QKS0RvB2I5cOwegPMY5q3nJPX4ZP8",
    authMode: "none",

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
