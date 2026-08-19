/** A1 grammar for Anastasia and Rozalina. */
window.GRAMMAR_DATA = [
  {
    "id": "grammar-word-order-questions",
    "order": 1,
    "title": "Word order in questions",
    "level": "A1",
    "status": "available",
    "page": "grammar-topic.html?id=grammar-word-order-questions",
    "passed": false,
    "attempts": 0,
    "lockOnPass": true,
    "revealAnswersOnError": false,
    "questionScheme": {
      "title": "Как строится английский вопрос",
      "subtitle": "Запомни порядок цветных блоков — так будет легче собирать вопросы.",
      "withQuestionWord": {
        "label": "Если есть вопросительное слово",
        "parts": [
          {"word": "Where", "translation": "где?", "role": "Вопросительное слово", "kind": "question"},
          {"word": "do", "translation": "не переводим", "role": "Помощник / форма be", "kind": "helper"},
          {"word": "you", "translation": "ты", "role": "Кто? / подлежащее", "kind": "subject"},
          {"word": "live?", "translation": "живёшь?", "role": "Действие / остальное", "kind": "action"}
        ]
      },
      "withoutQuestionWord": {
        "label": "Если вопросительного слова нет",
        "parts": [
          {"word": "Can", "translation": "можешь?", "role": "Помощник / форма be", "kind": "helper"},
          {"word": "you", "translation": "ты", "role": "Кто? / подлежащее", "kind": "subject"},
          {"word": "speak English?", "translation": "говорить по-английски?", "role": "Действие / остальное", "kind": "action"}
        ]
      },
      "memoryTip": "Главное: в вопросе помощник или форма be обычно стоит ПЕРЕД тем, о ком мы спрашиваем."
    },
    "glanceCards": [
      {
        "icon": "1",
        "label": "Вопросительное слово",
        "hint": "What — что/какой, Where — где/куда, When — когда, How — как. Если оно есть, ставим его первым.",
        "pattern": "Where ...?",
        "example": "Where do you live? — Где ты живёшь?"
      },
      {
        "icon": "2",
        "label": "Помощник / форма be",
        "hint": "Затем идёт служебное слово do / does / did / can или форма глагола be («быть»): am / is / are / was / were.",
        "pattern": "Where + do ...?",
        "example": "Where are you from? — Откуда ты?"
      },
      {
        "icon": "3",
        "label": "Кто? / подлежащее",
        "hint": "Дальше ставим того, о ком спрашиваем: I, you, she, your sister, your parents и т. д.",
        "pattern": "Where + do + you ...?",
        "example": "Can your friend drive? — Твой друг умеет водить?"
      },
      {
        "icon": "4",
        "label": "Действие и остальные слова",
        "hint": "После подлежащего ставим основной глагол и всё, что осталось в вопросе.",
        "pattern": "Where + do + you + live?",
        "example": "What music do you listen to? — Какую музыку ты слушаешь?"
      }
    ],
    "miniRules": [
      {
        "title": "1. Есть What / Where / When / How?",
        "text": "Поставь вопросительное слово в самое начало.",
        "example": "Where do you live? — Где ты живёшь?"
      },
      {
        "title": "2. После него — помощник или форма be",
        "text": "После вопросительного слова ставим помощник (do / does / did / can) или форму be: am / is / are / was / were.",
        "example": "Where DO you live?  •  Where ARE you from?"
      },
      {
        "title": "3. Потом — кто?",
        "text": "Следующим идёт подлежащее: человек или предмет, о котором мы спрашиваем.",
        "example": "Where do YOU live?  •  Can YOUR SISTER swim?"
      },
      {
        "title": "4. Затем — действие и остальные слова",
        "text": "После подлежащего ставим основной глагол и оставшуюся часть вопроса.",
        "example": "How often do you GO OUT? — Как часто ты куда-нибудь выходишь?"
      },
      {
        "title": "5. Вопрос без What / Where / When / How",
        "text": "Тогда начинай сразу с помощника или формы be.",
        "example": "Can you speak English? — Ты умеешь говорить по-английски?"
      }
    ],
    "exampleGroups": [
      {
        "title": "Собираем вопрос по порядку",
        "items": [
          "where / do / you / live → Where do you live? — Где ты живёшь?",
          "where / were / you / born → Where were you born? — Где ты родился / родилась?",
          "can / you / speak / English → Can you speak English? — Ты умеешь говорить по-английски?",
          "what kind of music / do / you / listen to → What kind of music do you listen to? — Какую музыку ты слушаешь?"
        ]
      }
    ],
    "commonMistakes": [
      "Where you do live? ✗ → Where do you live? ✓ — помощник do ставим перед you.",
      "Where you are from? ✗ → Where are you from? ✓ — are ставим перед you.",
      "Can speak you English? ✗ → Can you speak English? ✓ — после can сначала идёт you.",
      "Where did go you last Saturday? ✗ → Where did you go last Saturday? ✓ — после did сначала идёт you.",
      "What kind of music you do listen to? ✗ → What kind of music do you listen to? ✓ — do ставим перед you."
    ],
    "exercises": [
      {
        "id": "word-order-v2-step-1",
        "title": "1. Выбери правильный вопрос.",
        "difficulty": "Легко",
        "instructions": "Выбери предложение с правильным порядком слов.",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "Выбери правильный вопрос.",
            "options": [
              "Where do you live?",
              "Where you do live?"
            ],
            "answer": 0
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "Выбери правильный вопрос.",
            "options": [
              "Can you speak English?",
              "Can speak you English?"
            ],
            "answer": 0
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "Выбери правильный вопрос.",
            "options": [
              "When is your birthday?",
              "When your birthday is?"
            ],
            "answer": 0
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "Выбери правильный вопрос.",
            "options": [
              "Did you see the match?",
              "Did see you the match?"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "word-order-v2-step-2",
        "title": "2. Поставь слова в правильном порядке.",
        "difficulty": "Легко → Средне",
        "instructions": "Впиши пропущенные слова одной фразой. Слова не изменяй.",
        "items": [
          {
            "id": "1",
            "input": "gaps",
            "segments": [
              "Where ",
              " from?"
            ],
            "answers": [
              [
                "are you"
              ]
            ]
          },
          {
            "id": "2",
            "input": "gaps",
            "segments": [
              "Can ",
              " English?"
            ],
            "answers": [
              [
                "you speak"
              ]
            ]
          },
          {
            "id": "3",
            "input": "gaps",
            "segments": [
              "Where ",
              " born?"
            ],
            "answers": [
              [
                "were you"
              ]
            ]
          },
          {
            "id": "4",
            "input": "gaps",
            "segments": [
              "What ",
              " do?"
            ],
            "answers": [
              [
                "do your parents"
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-v2-step-3",
        "title": "3. Выбери правильный порядок слов.",
        "difficulty": "Средне",
        "instructions": "Выбери вариант, в котором слова стоят в правильном порядке.",
        "items": [
          {
            "id": "1",
            "input": "circle-or-tick",
            "segments": [
              "Where ",
              "?"
            ],
            "options": [
              "do you work",
              "you do work"
            ],
            "answer": "0"
          },
          {
            "id": "2",
            "input": "circle-or-tick",
            "segments": [
              "Does ",
              "?"
            ],
            "options": [
              "your sister live here",
              "live your sister here"
            ],
            "answer": "0"
          },
          {
            "id": "3",
            "input": "circle-or-tick",
            "segments": [
              "How often ",
              "?"
            ],
            "options": [
              "do you go out",
              "you do go out"
            ],
            "answer": "0"
          },
          {
            "id": "4",
            "input": "circle-or-tick",
            "segments": [
              "Where ",
              " last Saturday?"
            ],
            "options": [
              "did you go",
              "did go you"
            ],
            "answer": "0"
          }
        ]
      },
      {
        "id": "word-order-v2-step-4",
        "title": "4. Собери вопрос из всех слов.",
        "difficulty": "Сложнее",
        "instructions": "Используй все данные слова и поставь их в правильном порядке.",
        "items": [
          {
            "id": "1",
            "input": "text",
            "prompt": "where / do / you / live",
            "answer": "Where do you live?"
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "what / does / your father / do",
            "answer": "What does your father do?"
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "where / did / you / go / last Saturday",
            "answer": "Where did you go last Saturday?"
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "what kind of music / do / you / listen to",
            "answer": "What kind of music do you listen to?"
          }
        ]
      }
    ],
    "linkedLessonId": "lesson-1"
  }
];
