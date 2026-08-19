/** A1 grammar for Anastasia and Rozalina. */
window.GRAMMAR_DATA = [
  {
    "id": "grammar-to-be",
    "order": 1,
    "title": "Verb be: am, is, are",
    "level": "A1",
    "status": "available",
    "page": "grammar-topic.html?id=grammar-to-be",
    "passed": false,
    "attempts": 0,
    "lockOnPass": false,
    "revealAnswersOnError": true,
    "explanation": "Глагол be нужен, когда мы говорим, кто мы, откуда мы, сколько нам лет или в каком мы состоянии.",
    "formula": "I am · he/she/it is · you/we/they are",
    "glanceCards": [
      {
        "icon": "🙋",
        "label": "I",
        "hint": "только am",
        "pattern": "I am",
        "example": "I am a student."
      },
      {
        "icon": "👤",
        "label": "He / She / It",
        "hint": "используем is",
        "pattern": "He is · She is · It is",
        "example": "She is from Riga."
      },
      {
        "icon": "👥",
        "label": "You / We / They",
        "hint": "используем are",
        "pattern": "You are · We are · They are",
        "example": "We are friends."
      }
    ],
    "miniRules": [
      {
        "title": "1. Утверждение",
        "text": "Поставь am / is / are после подлежащего.",
        "example": "They are at home."
      },
      {
        "title": "2. Отрицание",
        "text": "Добавь not после am / is / are.",
        "example": "He is not tired."
      },
      {
        "title": "3. Вопрос",
        "text": "Поставь am / is / are перед подлежащим.",
        "example": "Are you ready?"
      }
    ],
    "tables": [
      {
        "title": "Forms of be",
        "headers": [
          "Subject",
          "Positive",
          "Negative",
          "Question"
        ],
        "rows": [
          [
            "I",
            "am",
            "am not",
            "Am I...?"
          ],
          [
            "he / she / it",
            "is",
            "is not / isn’t",
            "Is he...?"
          ],
          [
            "you / we / they",
            "are",
            "are not / aren’t",
            "Are you...?"
          ]
        ]
      }
    ],
    "exampleGroups": [
      {
        "title": "Examples",
        "items": [
          "I am Anastasia.",
          "She is my friend.",
          "We are in English class.",
          "Are you from Latvia?"
        ]
      }
    ],
    "commonMistakes": [
      "I is ✗ → I am ✓",
      "She are ✗ → She is ✓",
      "You is ✗ → You are ✓"
    ],
    "exercises": [
      {
        "id": "be-practice",
        "title": "Choose the correct form.",
        "difficulty": "Starter",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "I ___ happy.",
            "options": [
              "am",
              "is",
              "are"
            ],
            "answer": 0
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "He ___ my teacher.",
            "options": [
              "am",
              "is",
              "are"
            ],
            "answer": 1
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "They ___ at home.",
            "options": [
              "am",
              "is",
              "are"
            ],
            "answer": 2
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "We ___ ready.",
            "options": [
              "am",
              "is",
              "are"
            ],
            "answer": 2
          }
        ]
      }
    ],
    "linkedLessonId": "lesson-1"
  },
  {
    "id": "grammar-have-got",
    "order": 2,
    "title": "Have got / has got",
    "level": "A1",
    "status": "available",
    "page": "grammar-topic.html?id=grammar-have-got",
    "passed": false,
    "attempts": 0,
    "lockOnPass": false,
    "revealAnswersOnError": true,
    "explanation": "Have got означает «иметь». Форма зависит от подлежащего.",
    "formula": "I/you/we/they have got · he/she/it has got",
    "glanceCards": [
      {
        "icon": "🎒",
        "label": "I / You / We / They",
        "hint": "have got",
        "pattern": "We have got",
        "example": "We have got a dog."
      },
      {
        "icon": "👤",
        "label": "He / She / It",
        "hint": "has got",
        "pattern": "She has got",
        "example": "She has got a sister."
      }
    ],
    "miniRules": [
      {
        "title": "1. I / you / we / they",
        "text": "Используй have got.",
        "example": "I have got a brother."
      },
      {
        "title": "2. he / she / it",
        "text": "Используй has got.",
        "example": "He has got a car."
      },
      {
        "title": "3. Вопрос",
        "text": "Have / Has ставим в начало.",
        "example": "Have you got a sister?"
      }
    ],
    "tables": [
      {
        "title": "Have got forms",
        "headers": [
          "Subject",
          "Positive",
          "Negative",
          "Question"
        ],
        "rows": [
          [
            "I / you / we / they",
            "have got",
            "haven’t got",
            "Have ... got?"
          ],
          [
            "he / she / it",
            "has got",
            "hasn’t got",
            "Has ... got?"
          ]
        ]
      }
    ],
    "exampleGroups": [
      {
        "title": "Examples",
        "items": [
          "I have got two sisters.",
          "Tom has got a new phone.",
          "Have you got a pet?",
          "She hasn’t got a car."
        ]
      }
    ],
    "commonMistakes": [
      "She have got ✗ → She has got ✓",
      "I has got ✗ → I have got ✓"
    ],
    "exercises": [
      {
        "id": "have-got-practice",
        "title": "Choose have got or has got.",
        "difficulty": "Starter",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "I ___ a cat.",
            "options": [
              "have got",
              "has got"
            ],
            "answer": 0
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "Anna ___ a brother.",
            "options": [
              "have got",
              "has got"
            ],
            "answer": 1
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "They ___ two children.",
            "options": [
              "have got",
              "has got"
            ],
            "answer": 0
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "My dad ___ a bike.",
            "options": [
              "have got",
              "has got"
            ],
            "answer": 1
          }
        ]
      }
    ],
    "linkedLessonId": "lesson-2"
  },
  {
    "id": "grammar-present-simple",
    "order": 3,
    "title": "Present simple",
    "level": "A1",
    "status": "available",
    "page": "grammar-topic.html?id=grammar-present-simple",
    "passed": false,
    "attempts": 0,
    "lockOnPass": false,
    "revealAnswersOnError": true,
    "explanation": "Present simple используем для регулярных действий, привычек и фактов.",
    "formula": "I/you/we/they work · he/she/it works · Do/Does ...?",
    "glanceCards": [
      {
        "icon": "🔁",
        "label": "Routine",
        "hint": "регулярное действие",
        "pattern": "I work every day.",
        "example": "We study on Mondays."
      },
      {
        "icon": "➕",
        "label": "He / She / It",
        "hint": "обычно добавляем -s",
        "pattern": "She works",
        "example": "He gets up at 7."
      },
      {
        "icon": "❓",
        "label": "Questions",
        "hint": "do / does",
        "pattern": "Do you...? · Does she...?",
        "example": "Does she work here?"
      }
    ],
    "miniRules": [
      {
        "title": "1. I / you / we / they",
        "text": "Используй базовую форму глагола.",
        "example": "They live in Riga."
      },
      {
        "title": "2. he / she / it",
        "text": "Обычно добавь -s к глаголу.",
        "example": "She lives in Riga."
      },
      {
        "title": "3. Вопрос",
        "text": "Do для I/you/we/they, does для he/she/it.",
        "example": "Does he work?"
      }
    ],
    "tables": [
      {
        "title": "Present simple forms",
        "headers": [
          "Subject",
          "Positive",
          "Negative",
          "Question"
        ],
        "rows": [
          [
            "I / you / we / they",
            "work",
            "don’t work",
            "Do ... work?"
          ],
          [
            "he / she / it",
            "works",
            "doesn’t work",
            "Does ... work?"
          ]
        ]
      }
    ],
    "exampleGroups": [
      {
        "title": "Examples",
        "items": [
          "I get up at 7.",
          "She goes to work by bus.",
          "We don’t work on Sunday.",
          "Does he like coffee?"
        ]
      }
    ],
    "commonMistakes": [
      "He work ✗ → He works ✓",
      "Does she works? ✗ → Does she work? ✓"
    ],
    "exercises": [
      {
        "id": "present-simple-practice",
        "title": "Choose the correct form.",
        "difficulty": "Starter",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "I ___ English.",
            "options": [
              "study",
              "studies"
            ],
            "answer": 0
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "She ___ coffee.",
            "options": [
              "like",
              "likes"
            ],
            "answer": 1
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "They ___ at 8.",
            "options": [
              "start",
              "starts"
            ],
            "answer": 0
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "He ___ TV in the evening.",
            "options": [
              "watch",
              "watches"
            ],
            "answer": 1
          }
        ]
      }
    ],
    "linkedLessonId": "lesson-3"
  },
  {
    "id": "grammar-there-is-are",
    "order": 4,
    "title": "There is / There are",
    "level": "A1",
    "status": "available",
    "page": "grammar-topic.html?id=grammar-there-is-are",
    "passed": false,
    "attempts": 0,
    "lockOnPass": false,
    "revealAnswersOnError": true,
    "explanation": "There is / there are используем, чтобы сказать, что что-то находится или существует в каком-то месте.",
    "formula": "There is + singular · There are + plural",
    "glanceCards": [
      {
        "icon": "1️⃣",
        "label": "One thing",
        "hint": "единственное число",
        "pattern": "There is",
        "example": "There is a table."
      },
      {
        "icon": "🔢",
        "label": "Two or more",
        "hint": "множественное число",
        "pattern": "There are",
        "example": "There are two chairs."
      }
    ],
    "miniRules": [
      {
        "title": "1. Один предмет",
        "text": "Используй there is.",
        "example": "There is a bed in the room."
      },
      {
        "title": "2. Несколько предметов",
        "text": "Используй there are.",
        "example": "There are books on the shelf."
      },
      {
        "title": "3. Вопрос",
        "text": "Is there...? / Are there...?",
        "example": "Is there a kitchen?"
      }
    ],
    "tables": [
      {
        "title": "There is / are forms",
        "headers": [
          "Number",
          "Positive",
          "Negative",
          "Question"
        ],
        "rows": [
          [
            "one",
            "There is",
            "There isn’t",
            "Is there...?"
          ],
          [
            "two or more",
            "There are",
            "There aren’t",
            "Are there...?"
          ]
        ]
      }
    ],
    "exampleGroups": [
      {
        "title": "Examples",
        "items": [
          "There is a sofa in the living room.",
          "There are three windows.",
          "Is there a bathroom?",
          "There aren’t any chairs."
        ]
      }
    ],
    "commonMistakes": [
      "There are a table ✗ → There is a table ✓",
      "There is two chairs ✗ → There are two chairs ✓"
    ],
    "exercises": [
      {
        "id": "there-practice",
        "title": "Choose there is or there are.",
        "difficulty": "Starter",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "___ a lamp on the desk.",
            "options": [
              "There is",
              "There are"
            ],
            "answer": 0
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "___ two beds in the room.",
            "options": [
              "There is",
              "There are"
            ],
            "answer": 1
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "___ a picture on the wall.",
            "options": [
              "There is",
              "There are"
            ],
            "answer": 0
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "___ books on the table.",
            "options": [
              "There is",
              "There are"
            ],
            "answer": 1
          }
        ]
      }
    ],
    "linkedLessonId": "lesson-4"
  }
];
