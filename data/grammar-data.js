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
    "explanation": "В английском вопросе порядок слов зависит от типа глагола. С be мы ставим am / is / are / was / were перед подлежащим. С can ставим can перед подлежащим. С обычными глаголами в Present Simple нужны do / does, а в Past Simple — did. После do / does / did основной глагол используется в базовой форме.",
    "formula": "Question word + be / can / do / does / did + subject + main verb ...?",
    "glanceCards": [
      {
        "icon": "🔹",
        "label": "be",
        "hint": "am / is / are / was / were",
        "pattern": "Where are you from?",
        "example": "When is your birthday?"
      },
      {
        "icon": "🟣",
        "label": "can",
        "hint": "can + subject + base verb",
        "pattern": "Can I help you?",
        "example": "Can you speak English?"
      },
      {
        "icon": "🟢",
        "label": "Present Simple",
        "hint": "do / does",
        "pattern": "What do you do?",
        "example": "Does your sister have a job?"
      },
      {
        "icon": "🟠",
        "label": "Past Simple",
        "hint": "did",
        "pattern": "Where did you go?",
        "example": "Did you see the match?"
      }
    ],
    "miniRules": [
      {
        "title": "1. Вопросы с be",
        "text": "Поставь форму be перед подлежащим. Дополнительный do / does / did не нужен.",
        "example": "You are from Poland. → Where are you from?"
      },
      {
        "title": "2. Вопросы с can",
        "text": "Can ставится перед подлежащим, а следующий глагол остаётся в базовой форме без to.",
        "example": "You can swim. → Can you swim?"
      },
      {
        "title": "3. Present Simple",
        "text": "С обычным глаголом используй do для I / you / we / they и does для he / she / it. После does глагол без -s.",
        "example": "She works here. → Where does she work?"
      },
      {
        "title": "4. Past Simple",
        "text": "С обычным глаголом используй did для всех лиц. После did глагол возвращается в базовую форму.",
        "example": "You went out. → Where did you go?"
      },
      {
        "title": "5. Question words",
        "text": "What, where, when, why, how и how often обычно стоят в самом начале вопроса.",
        "example": "How often do you go out?"
      },
      {
        "title": "6. Короткие ответы",
        "text": "Повтори вспомогательный или модальный глагол из вопроса.",
        "example": "Do you work? — Yes, I do. / No, I don’t."
      }
    ],
    "tables": [
      {
        "title": "Question patterns",
        "headers": [
          "Type",
          "Statement / negative",
          "Question"
        ],
        "rows": [
          [
            "be",
            "You are / You aren’t tired.",
            "Are you tired?"
          ],
          [
            "can",
            "You can / can’t drive.",
            "Can you drive?"
          ],
          [
            "Present Simple",
            "She works / doesn’t work.",
            "Does she work?"
          ],
          [
            "Past Simple",
            "They went / didn’t go.",
            "Did they go?"
          ]
        ]
      },
      {
        "title": "Short answers",
        "headers": [
          "Question",
          "Yes",
          "No"
        ],
        "rows": [
          [
            "Are you...?",
            "Yes, I am.",
            "No, I’m not."
          ],
          [
            "Can you...?",
            "Yes, I can.",
            "No, I can’t."
          ],
          [
            "Do you...?",
            "Yes, I do.",
            "No, I don’t."
          ],
          [
            "Did you...?",
            "Yes, I did.",
            "No, I didn’t."
          ]
        ]
      }
    ],
    "exampleGroups": [
      {
        "title": "Compare the word order",
        "items": [
          "Where are you from?",
          "Can I help you?",
          "What do you do at the weekend?",
          "Where did you go last Saturday?"
        ]
      }
    ],
    "commonMistakes": [
      "Where you live? ✗ → Where do you live? ✓",
      "Does she works here? ✗ → Does she work here? ✓",
      "Where did you went? ✗ → Where did you go? ✓",
      "Can you to help me? ✗ → Can you help me? ✓"
    ],
    "exercises": [
      {
        "id": "questions-step-1",
        "title": "Choose the correct question word helper.",
        "difficulty": "Starter",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "___ your sister have a job?",
            "options": [
              "Does",
              "Is",
              "Did"
            ],
            "answer": 0
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "___ you born in Budapest?",
            "options": [
              "Were",
              "Did",
              "Do"
            ],
            "answer": 0
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "Hello. ___ I help you?",
            "options": [
              "Can",
              "Am",
              "Does"
            ],
            "answer": 0
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "___ you see the match last night?",
            "options": [
              "Did",
              "Do",
              "Were"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "questions-step-2",
        "title": "Complete the questions with do, does, or did.",
        "difficulty": "Practice",
        "instructions": "Write one word in each gap.",
        "items": [
          {
            "id": "1",
            "input": "gaps",
            "segments": [
              "Where ",
              " you live?"
            ],
            "answers": [
              [
                "do"
              ]
            ]
          },
          {
            "id": "2",
            "input": "gaps",
            "segments": [
              "What ",
              " your boyfriend do?"
            ],
            "answers": [
              [
                "does"
              ]
            ]
          },
          {
            "id": "3",
            "input": "gaps",
            "segments": [
              "Where ",
              " she learn English?"
            ],
            "answers": [
              [
                "did"
              ]
            ]
          },
          {
            "id": "4",
            "input": "gaps",
            "segments": [
              "What time ",
              " you get up?"
            ],
            "answers": [
              [
                "do"
              ]
            ]
          }
        ]
      },
      {
        "id": "questions-step-3",
        "title": "Choose the correct word order.",
        "difficulty": "Challenge",
        "items": [
          {
            "id": "1",
            "input": "circle-or-tick",
            "segments": [
              "Where ",
              " last Saturday?"
            ],
            "options": [
              "did you go",
              "did you went"
            ],
            "answer": "0"
          },
          {
            "id": "2",
            "input": "circle-or-tick",
            "segments": [
              "Does ",
              " a job?"
            ],
            "options": [
              "your sister have",
              "your sister has"
            ],
            "answer": "0"
          },
          {
            "id": "3",
            "input": "circle-or-tick",
            "segments": [
              "Can ",
              " English?"
            ],
            "options": [
              "you speak",
              "you to speak"
            ],
            "answer": "0"
          },
          {
            "id": "4",
            "input": "circle-or-tick",
            "segments": [
              "When ",
              "?"
            ],
            "options": [
              "is your birthday",
              "your birthday is"
            ],
            "answer": "0"
          }
        ]
      },
      {
        "id": "questions-step-4",
        "title": "Write the complete question.",
        "difficulty": "Build it",
        "instructions": "Use the words in brackets.",
        "items": [
          {
            "id": "1",
            "input": "text",
            "prompt": "(your parents / do / what)",
            "answer": "What do your parents do?"
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "(your girlfriend / be / a student)",
            "answer": "Is your girlfriend a student?"
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "(you / have / a nice time / last weekend)",
            "answer": "Did you have a nice time last weekend?"
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "(your best friend / can / drive)",
            "answer": "Can your best friend drive?"
          }
        ]
      }
    ],
    "linkedLessonId": "lesson-1"
  }
];
