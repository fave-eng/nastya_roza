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
    "explanation": "В этой теме тренируем только ПОРЯДОК СЛОВ в английском вопросе. Тебе не нужно выбирать между do / does / did — если такое слово нужно, оно уже будет дано. Смотри на готовые части вопроса и ставь их в правильном порядке.",
    "formula": "Question word + helper + subject + main verb ...?  |  With be: Question word + be + subject ...?",
    "glanceCards": [
      {
        "icon": "1️⃣",
        "label": "Question word",
        "hint": "Если есть What / Where / When / How..., оно обычно стоит первым.",
        "pattern": "Where ...?",
        "example": "Where do you live?"
      },
      {
        "icon": "2️⃣",
        "label": "Helper / be",
        "hint": "Следом идёт уже данное слово: do, does, did, can, are, is, were и т. п.",
        "pattern": "Where + do ...?",
        "example": "Where do you live?"
      },
      {
        "icon": "3️⃣",
        "label": "Subject",
        "hint": "После helper / be ставим человека или предмет: I, you, she, your parents...",
        "pattern": "Where + do + you ...?",
        "example": "Where do you live?"
      },
      {
        "icon": "4️⃣",
        "label": "Rest of the question",
        "hint": "После подлежащего идёт оставшаяся часть вопроса.",
        "pattern": "Where + do + you + live?",
        "example": "What kind of music do you listen to?"
      }
    ],
    "miniRules": [
      {
        "title": "1. Если есть вопросительное слово",
        "text": "What, Where, When, How, How often, What time и другие вопросительные слова ставим в начало.",
        "example": "Where do you live? | What do your parents do?"
      },
      {
        "title": "2. После него идёт helper или be",
        "text": "В этой теме helper уже дан: do, does, did, can и т. п. Если в вопросе используется be, его форма тоже уже дана: am, is, are, was, were.",
        "example": "Where + do ...? | Where + were ...? | Can ...?"
      },
      {
        "title": "3. Потом ставим подлежащее",
        "text": "После helper / be обычно идёт тот, о ком мы спрашиваем: I, you, she, your sister, your parents...",
        "example": "Where do YOU live? | Where were YOU born? | Can YOUR FRIEND drive?"
      },
      {
        "title": "4. Потом — оставшаяся часть",
        "text": "После подлежащего ставим основной глагол и остальные слова вопроса.",
        "example": "How often do you GO OUT? | What kind of music do you LISTEN TO?"
      },
      {
        "title": "Yes / No questions",
        "text": "Если вопросительного слова нет, вопрос начинается сразу с helper / be.",
        "example": "Can you speak English? | Did you see the match? | Is your sister at home?"
      },
      {
        "title": "Важно для этой темы",
        "text": "Не нужно решать, почему в одном вопросе стоит do, а в другом does или did. Это отдельная тема. Здесь эти слова уже даны — твоя задача только поставить слова в правильном порядке.",
        "example": "does / your father / work / here → Does your father work here?"
      }
    ],
    "tables": [
      {
        "title": "The basic order",
        "headers": [
          "Part",
          "Position",
          "Example"
        ],
        "rows": [
          [
            "Question word",
            "1",
            "Where"
          ],
          [
            "Helper / be",
            "2",
            "do"
          ],
          [
            "Subject",
            "3",
            "you"
          ],
          [
            "Main verb / rest",
            "4",
            "live?"
          ]
        ]
      },
      {
        "title": "Two useful patterns",
        "headers": [
          "Type",
          "Pattern",
          "Example"
        ],
        "rows": [
          [
            "Wh-question",
            "Question word + helper / be + subject + rest",
            "Where do you live?"
          ],
          [
            "Yes / No question",
            "Helper / be + subject + rest",
            "Can you speak English?"
          ]
        ]
      }
    ],
    "exampleGroups": [
      {
        "title": "See the order",
        "items": [
          "where / do / you / live → Where do you live?",
          "where / were / you / born → Where were you born?",
          "can / you / speak / English → Can you speak English?",
          "what kind of music / do / you / listen to → What kind of music do you listen to?"
        ]
      },
      {
        "title": "The helper is already given",
        "items": [
          "do / you / live / here → Do you live here?",
          "does / your sister / work / here → Does your sister work here?",
          "did / you / see / the match → Did you see the match?",
          "are / you / from / Poland → Are you from Poland?"
        ]
      }
    ],
    "commonMistakes": [
      "Where you do live? ✗ → Where do you live? ✓",
      "Where you are from? ✗ → Where are you from? ✓",
      "Can speak you English? ✗ → Can you speak English? ✓",
      "Where did go you last Saturday? ✗ → Where did you go last Saturday? ✓",
      "What kind of music you do listen to? ✗ → What kind of music do you listen to? ✓"
    ],
    "exercises": [
      {
        "id": "word-order-v2-step-1",
        "title": "1. Choose the correct question.",
        "difficulty": "Easy",
        "instructions": "Choose the sentence with the correct word order. The helper is already given.",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "Choose the correct question.",
            "options": [
              "Where do you live?",
              "Where you do live?"
            ],
            "answer": 0
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "Choose the correct question.",
            "options": [
              "Can you speak English?",
              "Can speak you English?"
            ],
            "answer": 0
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "Choose the correct question.",
            "options": [
              "When is your birthday?",
              "When your birthday is?"
            ],
            "answer": 0
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "Choose the correct question.",
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
        "title": "2. Complete the question with the words in the correct order.",
        "difficulty": "Easy → Medium",
        "instructions": "Write the missing words as one phrase. Do not change the words.",
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
        "title": "3. Choose the correct word order.",
        "difficulty": "Medium",
        "instructions": "The helper is already correct. Choose only the correct order of the other words.",
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
        "title": "4. Put all the words in the correct order.",
        "difficulty": "Challenge",
        "instructions": "All the words you need are given. Do not add a different helper.",
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
