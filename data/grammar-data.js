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
          {"word": "do", "translation": "не переводим", "role": "Помощник / be", "kind": "helper"},
          {"word": "you", "translation": "ты", "role": "Кто? / подлежащее", "kind": "subject"},
          {"word": "live?", "translation": "живёшь?", "role": "Глагол + остальное", "kind": "action"}
        ]
      },
      "withoutQuestionWord": {
        "label": "Если вопросительного слова нет",
        "parts": [
          {"word": "Can", "translation": "можешь?", "role": "Помощник / be", "kind": "helper"},
          {"word": "you", "translation": "ты", "role": "Кто? / подлежащее", "kind": "subject"},
          {"word": "speak English?", "translation": "говорить по-английски?", "role": "Глагол + остальное", "kind": "action"}
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
        "instructions": "В каждой строке даны слова для пропуска. Поставь их в правильном порядке и впиши только пропущенную часть. Слова не изменяй.",
        "items": [
          {
            "id": "1",
            "input": "gaps",
            "prompt": "Поставь слова в правильном порядке: ",
            "wordBank": ["you", "are"],
            "inputSize": "wide",
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
            "prompt": "Поставь слова в правильном порядке: ",
            "wordBank": ["speak", "you"],
            "inputSize": "wide",
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
            "prompt": "Поставь слова в правильном порядке: ",
            "wordBank": ["you", "were"],
            "inputSize": "wide",
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
            "prompt": "Поставь слова в правильном порядке: ",
            "wordBank": ["your parents", "do"],
            "inputSize": "wide",
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
        "instructions": "Слова в карточках перемешаны. Используй все слова и напиши полный вопрос в правильном порядке.",
        "items": [
          {
            "id": "1",
            "input": "text",
            "prompt": "Собери полный вопрос.",
            "wordBank": ["live", "you", "where", "do"],
            "placeholder": "Напиши полный вопрос",
            "answer": "Where do you live?"
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "Собери полный вопрос.",
            "wordBank": ["your father", "do", "what", "does"],
            "placeholder": "Напиши полный вопрос",
            "answer": "What does your father do?"
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "Собери полный вопрос.",
            "wordBank": ["last Saturday", "go", "did", "where", "you"],
            "placeholder": "Напиши полный вопрос",
            "answer": "Where did you go last Saturday?"
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "Собери полный вопрос.",
            "wordBank": ["listen to", "you", "what kind of music", "do"],
            "placeholder": "Напиши полный вопрос",
            "answer": "What kind of music do you listen to?"
          }
        ]
      }
    ],
    "linkedLessonId": "lesson-1"
  },
  {
    "id": "grammar-present-simple",
    "order": 2,
    "title": "Present Simple",
    "level": "A1",
    "status": "available",
    "page": "grammar-topic.html?id=grammar-present-simple",
    "passed": false,
    "attempts": 0,
    "lockOnPass": true,
    "revealAnswersOnError": false,
    "questionScheme": {
      "title": "Как строится вопрос в Present Simple",
      "subtitle": "В вопросе do или does ставим перед подлежащим, а основной глагол используем без окончания -s.",
      "withQuestionWord": {
        "label": "Если есть вопросительное слово",
        "parts": [
          { "word": "Where", "translation": "где?", "role": "Вопросительное слово", "kind": "question" },
          { "word": "does", "translation": "не переводим", "role": "Помощник", "kind": "helper" },
          { "word": "Anna", "translation": "Анна", "role": "Кто?", "kind": "subject" },
          { "word": "live?", "translation": "живёт?", "role": "Глагол без -s", "kind": "action" }
        ]
      },
      "withoutQuestionWord": {
        "label": "Если вопросительного слова нет",
        "parts": [
          { "word": "Do", "translation": "не переводим", "role": "Помощник", "kind": "helper" },
          { "word": "you", "translation": "ты / вы", "role": "Кто?", "kind": "subject" },
          { "word": "work?", "translation": "работаешь?", "role": "Глагол без -s", "kind": "action" }
        ]
      },
      "memoryTip": "После does и doesn’t основной глагол всегда возвращается в начальную форму: Does she live? She doesn’t live."
    },
    "glanceCards": [
      {
        "icon": "1",
        "label": "Когда используем",
        "hint": "Для привычек, регулярных действий, расписаний, фактов и постоянных ситуаций.",
        "pattern": "usually / every day / always",
        "example": "I usually work on Saturdays. — Я обычно работаю по субботам."
      },
      {
        "icon": "2",
        "label": "Утверждение",
        "hint": "С I / you / we / they используем обычную форму. С he / she / it добавляем -s или -es.",
        "pattern": "I work. · She works.",
        "example": "He watches a lot of TV. — Он смотрит много телевизора."
      },
      {
        "icon": "3",
        "label": "Отрицание",
        "hint": "Используем don’t или doesn’t и основной глагол без окончания -s.",
        "pattern": "don’t / doesn’t + verb",
        "example": "It doesn’t rain in summer. — Летом дождь не идёт."
      },
      {
        "icon": "4",
        "label": "Вопрос",
        "hint": "Начинаем с do или does. После подлежащего ставим глагол без окончания -s.",
        "pattern": "Do / Does + subject + verb?",
        "example": "Does Louisa want to get married? — Луиза хочет выйти замуж?"
      }
    ],
    "miniRules": [
      {
        "title": "1. Значение",
        "text": "Present Simple описывает то, что происходит регулярно или обычно, а также факты и постоянные ситуации.",
        "example": "We play tennis in winter. · She lives in Italy."
      },
      {
        "title": "2. Утверждение",
        "text": "С I, you, we, they форма глагола не меняется. С he, she, it обычно добавляем -s.",
        "example": "I work. · Anna works."
      },
      {
        "title": "3. Отрицание",
        "text": "С I, you, we, they используем don’t. С he, she, it — doesn’t. После них глагол стоит без -s.",
        "example": "We don’t play. · He doesn’t play."
      },
      {
        "title": "4. Вопрос",
        "text": "Do ставим перед I, you, we, they; does — перед he, she, it. Основной глагол в вопросе используется без -s.",
        "example": "Do you work? · Does she speak Spanish?"
      },
      {
        "title": "5. Короткий ответ",
        "text": "В коротком ответе повторяем do или does, а не основной глагол.",
        "example": "Do they live together? — No, they don’t. · Does she work? — Yes, she does."
      },
      {
        "title": "6. Окончания -s и -es",
        "text": "После -s, -sh, -ch, -x и -o обычно добавляем -es. Если глагол заканчивается на согласную + y, меняем y на -ies. У have особая форма has.",
        "example": "watch → watches · go → goes · study → studies · have → has"
      },
      {
        "title": "7. Наречия частотности",
        "text": "Always, usually, often, sometimes, hardly ever и never обычно стоят перед смысловым глаголом, но после формы be. Every day и during the week обычно ставим в конце.",
        "example": "I never go out. · She is always busy. · Candice sees him every day."
      },
      {
        "title": "8. Не путай с Present Continuous",
        "text": "Present Simple говорит о привычке или факте. Present Continuous описывает действие, которое происходит прямо сейчас или временно.",
        "example": "I work on Saturdays. · I’m working now."
      }
    ],
    "tables": [
      {
        "title": "Утверждения",
        "headers": ["Кто?", "Форма", "Пример"],
        "rows": [
          ["I / you / we / they", "verb", "They live together."],
          ["he / she / it", "verb + s / es", "She speaks Italian."]
        ]
      },
      {
        "title": "Отрицания и вопросы",
        "headers": ["Форма", "I / you / we / they", "he / she / it"],
        "rows": [
          ["Отрицание", "don’t + verb", "doesn’t + verb"],
          ["Вопрос", "Do … + verb?", "Does … + verb?"]
        ]
      },
      {
        "title": "Короткие ответы",
        "headers": ["Вопрос", "Да", "Нет"],
        "rows": [
          ["Do you / they …?", "Yes, I / they do.", "No, I / they don’t."],
          ["Does he / she …?", "Yes, he / she does.", "No, he / she doesn’t."]
        ]
      },
      {
        "title": "Написание формы he / she / it",
        "headers": ["Окончание глагола", "Что делаем", "Пример"],
        "rows": [
          ["обычно", "+ s", "work → works"],
          ["-s, -sh, -ch, -x, -o", "+ es", "watch → watches"],
          ["согласная + y", "y → ies", "study → studies"],
          ["have", "особая форма", "have → has"]
        ]
      }
    ],
    "exampleGroups": [
      {
        "title": "Одна мысль в четырёх формах",
        "items": [
          "Утверждение: Louisa wants to get married. — Луиза хочет выйти замуж.",
          "Отрицание: Louisa doesn’t want to get married. — Луиза не хочет выходить замуж.",
          "Вопрос: Does Louisa want to get married? — Луиза хочет выйти замуж?",
          "Короткий ответ: Yes, she does. / No, she doesn’t."
        ]
      },
      {
        "title": "Где ставить наречие",
        "items": [
          "I often play tennis. — often стоит перед play.",
          "He doesn’t often go out. — often стоит после doesn’t.",
          "She is always friendly. — с be наречие стоит после is.",
          "Candice sees her boyfriend every day. — every day стоит в конце."
        ]
      }
    ],
    "commonMistakes": [
      "She work on Saturdays. ✗ → She works on Saturdays. ✓ — с she добавляем -s.",
      "Does she speaks Spanish? ✗ → Does she speak Spanish? ✓ — после does глагол без -s.",
      "He doesn’t watches TV. ✗ → He doesn’t watch TV. ✓ — после doesn’t глагол без -s.",
      "I go never out. ✗ → I never go out. ✓ — never ставим перед смысловым глаголом.",
      "I’m work every day. ✗ → I work every day. ✓ — для обычного действия форма am не нужна."
    ],
    "exercises": [
      {
        "id": "present-simple-step-1",
        "title": "1. Выбери правильную форму.",
        "difficulty": "Легко",
        "instructions": "Выбери вариант, который правильно завершает предложение.",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "I ___ from Monday to Friday.",
            "options": ["work", "works"],
            "answer": 0
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "Anna ___ in Italy.",
            "options": ["live", "lives"],
            "answer": 1
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "We ___ play tennis very often.",
            "options": ["don’t", "doesn’t"],
            "answer": 0
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "___ your brother work on Saturdays?",
            "options": ["Does", "Do"],
            "answer": 0
          }
        ]
      },
      {
        "id": "present-simple-step-2",
        "title": "2. Поставь глагол в правильную форму.",
        "difficulty": "Средне",
        "instructions": "Впиши правильную форму глагола в Present Simple.",
        "items": [
          {
            "id": "1",
            "input": "gaps",
            "segments": ["My sister ", " Italian. (speak)"],
            "answers": [["speaks"]]
          },
          {
            "id": "2",
            "input": "gaps",
            "segments": ["They ", " together. (not live)"],
            "answers": [["don't live", "do not live"]]
          },
          {
            "id": "3",
            "input": "gaps",
            "segments": ["", " you ", " in the evenings? (work)"],
            "answers": [["Do"], ["work"]]
          },
          {
            "id": "4",
            "input": "gaps",
            "segments": ["It ", " a lot in winter. (rain)"],
            "answers": [["rains"]]
          }
        ]
      },
      {
        "id": "present-simple-step-3",
        "title": "3. Выбери правильный вариант.",
        "difficulty": "Повышенная сложность",
        "instructions": "Выбери форму, которая подходит по смыслу и правилу.",
        "items": [
          {
            "id": "1",
            "input": "circle-or-tick",
            "segments": ["He ", " TV in the evenings."],
            "options": ["watch", "watches"],
            "answer": "1"
          },
          {
            "id": "2",
            "input": "circle-or-tick",
            "segments": ["I ", " during the week."],
            "options": ["don’t go out", "doesn’t go out"],
            "answer": "0"
          },
          {
            "id": "3",
            "input": "circle-or-tick",
            "segments": ["", " Louisa want to get married?"],
            "options": ["Do", "Does"],
            "answer": "1"
          },
          {
            "id": "4",
            "input": "circle-or-tick",
            "segments": ["It ", " in summer."],
            "options": ["doesn’t rain", "doesn’t rains"],
            "answer": "0"
          }
        ]
      },
      {
        "id": "present-simple-step-4",
        "title": "4. Построй полное предложение или вопрос.",
        "difficulty": "Самое сложное",
        "instructions": "Используй все слова и напиши полное предложение или вопрос в Present Simple.",
        "items": [
          {
            "id": "1",
            "input": "text",
            "prompt": "Составь утверждение.",
            "wordBank": ["José", "watch", "a lot of TV", "in the evenings"],
            "placeholder": "Напиши полное предложение",
            "answer": "José watches a lot of TV in the evenings."
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "Составь отрицание.",
            "wordBank": ["we", "not play", "tennis", "very often"],
            "placeholder": "Напиши полное предложение",
            "acceptedAnswers": [
              "We don’t play tennis very often.",
              "We do not play tennis very often."
            ]
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "Составь вопрос.",
            "wordBank": ["your sister", "speak", "Spanish"],
            "placeholder": "Напиши полный вопрос",
            "answer": "Does your sister speak Spanish?"
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "Составь предложение с наречием в правильном месте.",
            "wordBank": ["Alice", "meet", "people", "on the internet", "sometimes"],
            "placeholder": "Напиши полное предложение",
            "answer": "Alice sometimes meets people on the internet."
          }
        ]
      }
    ],
    "linkedLessonId": "lesson-3"
  }
];
