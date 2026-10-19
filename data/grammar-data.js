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
          {
            "word": "Where",
            "translation": "где?",
            "role": "Вопросительное слово",
            "kind": "question"
          },
          {
            "word": "do",
            "translation": "не переводим",
            "role": "Помощник / be",
            "kind": "helper"
          },
          {
            "word": "you",
            "translation": "ты",
            "role": "Кто? / подлежащее",
            "kind": "subject"
          },
          {
            "word": "live?",
            "translation": "живёшь?",
            "role": "Глагол + остальное",
            "kind": "action"
          }
        ]
      },
      "withoutQuestionWord": {
        "label": "Если вопросительного слова нет",
        "parts": [
          {
            "word": "Can",
            "translation": "можешь?",
            "role": "Помощник / be",
            "kind": "helper"
          },
          {
            "word": "you",
            "translation": "ты",
            "role": "Кто? / подлежащее",
            "kind": "subject"
          },
          {
            "word": "speak English?",
            "translation": "говорить по-английски?",
            "role": "Глагол + остальное",
            "kind": "action"
          }
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
            "wordBank": [
              "you",
              "are"
            ],
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
            "wordBank": [
              "speak",
              "you"
            ],
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
            "wordBank": [
              "you",
              "were"
            ],
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
            "wordBank": [
              "your parents",
              "do"
            ],
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
            "wordBank": [
              "live",
              "you",
              "where",
              "do"
            ],
            "placeholder": "Напиши полный вопрос",
            "answer": "Where do you live?"
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "Собери полный вопрос.",
            "wordBank": [
              "your father",
              "do",
              "what",
              "does"
            ],
            "placeholder": "Напиши полный вопрос",
            "answer": "What does your father do?"
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "Собери полный вопрос.",
            "wordBank": [
              "last Saturday",
              "go",
              "did",
              "where",
              "you"
            ],
            "placeholder": "Напиши полный вопрос",
            "answer": "Where did you go last Saturday?"
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "Собери полный вопрос.",
            "wordBank": [
              "listen to",
              "you",
              "what kind of music",
              "do"
            ],
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
      "title": "Present Simple: обычные и повторяющиеся действия",
      "subtitle": "Используем для привычек, расписаний, фактов и постоянных состояний.",
      "withQuestionWord": {
        "label": "Вопрос с вопросительным словом",
        "parts": [
          {
            "word": "Where",
            "translation": "где?",
            "role": "Вопросительное слово",
            "kind": "question"
          },
          {
            "word": "does",
            "translation": "не переводим",
            "role": "Помощник",
            "kind": "helper"
          },
          {
            "word": "Anna",
            "translation": "Анна",
            "role": "Подлежащее",
            "kind": "subject"
          },
          {
            "word": "live?",
            "translation": "живёт?",
            "role": "Глагол без -s",
            "kind": "action"
          }
        ]
      },
      "withoutQuestionWord": {
        "label": "Общий вопрос",
        "parts": [
          {
            "word": "Do",
            "translation": "не переводим",
            "role": "Помощник",
            "kind": "helper"
          },
          {
            "word": "you",
            "translation": "ты",
            "role": "Подлежащее",
            "kind": "subject"
          },
          {
            "word": "work?",
            "translation": "работаешь?",
            "role": "Глагол",
            "kind": "action"
          }
        ]
      },
      "memoryTip": "Только в утвердительном предложении с he / she / it основной глагол получает -s или -es. После does / doesn't глагол снова без -s."
    },
    "glanceCards": [
      {
        "icon": "+",
        "label": "Утверждение",
        "hint": "I / you / we / they + глагол. He / she / it + глагол с -s / -es.",
        "pattern": "She works.  •  They work.",
        "example": "José watches TV in the evenings. — Хосе смотрит телевизор по вечерам."
      },
      {
        "icon": "−",
        "label": "Отрицание",
        "hint": "Используй don't или doesn't. После них основной глагол стоит в начальной форме.",
        "pattern": "I don't work.  •  She doesn't work.",
        "example": "It doesn't rain in summer. — Летом дождя не бывает."
      },
      {
        "icon": "?",
        "label": "Вопрос",
        "hint": "Do ставим с I / you / we / they, does — с he / she / it.",
        "pattern": "Do you work?  •  Does she work?",
        "example": "Does your sister speak Spanish? — Твоя сестра говорит по-испански?"
      },
      {
        "icon": "✓",
        "label": "Короткий ответ",
        "hint": "Повторяем помощник do / does, а не основной глагол.",
        "pattern": "Yes, I do.  •  No, she doesn't.",
        "example": "Do they live together? — No, they don't."
      }
    ],
    "miniRules": [
      {
        "title": "1. Когда используем Present Simple",
        "text": "Для привычек, регулярных действий, расписаний, фактов и постоянных состояний.",
        "example": "I work Monday to Friday. — Я работаю с понедельника по пятницу."
      },
      {
        "title": "2. Утверждение",
        "text": "С I / you / we / they используем начальную форму. С he / she / it добавляем -s или -es.",
        "example": "We play tennis.  •  She loves Italy."
      },
      {
        "title": "3. Окончания -s и -es",
        "text": "Обычно добавляем -s. После -s, -ss, -sh, -ch, -x, -o обычно добавляем -es. Согласная + y меняется на -ies.",
        "example": "live → lives, watch → watches, study → studies"
      },
      {
        "title": "4. Исключения",
        "text": "У have форма has, у do — does, у go — goes.",
        "example": "He has a car.  •  She does yoga.  •  Anna goes out."
      },
      {
        "title": "5. Отрицание",
        "text": "С I / you / we / they ставим don't, с he / she / it — doesn't. Основной глагол после них без -s.",
        "example": "We don't play.  •  He doesn't like parties."
      },
      {
        "title": "6. Вопрос",
        "text": "Do / Does ставим перед подлежащим. После подлежащего основной глагол идёт без -s.",
        "example": "Do you work?  •  Does Louisa want to marry him?"
      },
      {
        "title": "7. Слова частоты",
        "text": "Always, often, sometimes, hardly ever, never обычно стоят перед смысловым глаголом, но после be.",
        "example": "I often go out.  •  She is always friendly."
      },
      {
        "title": "8. Present Simple и действие сейчас",
        "text": "Present Simple описывает привычку или факт, а не действие, которое происходит прямо сейчас.",
        "example": "I work every day. — привычка; I am working now. — прямо сейчас."
      }
    ],
    "exampleGroups": [
      {
        "title": "Формы в одном примере",
        "items": [
          "She speaks English. — Она говорит по-английски.",
          "She doesn't speak Spanish. — Она не говорит по-испански.",
          "Does she speak Italian? — Она говорит по-итальянски?",
          "Yes, she does. / No, she doesn't. — Да. / Нет."
        ]
      }
    ],
    "commonMistakes": [
      "He watch TV. ✗ → He watches TV. ✓ — с he нужен -s / -es.",
      "She doesn't likes parties. ✗ → She doesn't like parties. ✓ — после doesn't глагол без -s.",
      "Does Anna lives here? ✗ → Does Anna live here? ✓ — после does глагол без -s.",
      "I never don't go out. ✗ → I never go out. ✓ — never уже содержит отрицательное значение."
    ],
    "exercises": [
      {
        "id": "present-simple-step-1",
        "title": "1. Выбери правильную форму.",
        "difficulty": "Легко",
        "instructions": "Выбери правильный вариант.",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "I ___ from Monday to Friday.",
            "options": [
              "work",
              "works"
            ],
            "answer": 0
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "Anna ___ in Italy.",
            "options": [
              "live",
              "lives"
            ],
            "answer": 1
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "We ___ play tennis very often.",
            "options": [
              "don't",
              "doesn't"
            ],
            "answer": 0
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "___ your brother work on Saturdays?",
            "options": [
              "Does",
              "Do"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "present-simple-step-2",
        "title": "2. Заполни пропуски.",
        "difficulty": "Легко → Средне",
        "instructions": "Поставь слова в Present Simple.",
        "items": [
          {
            "id": "1",
            "input": "gaps",
            "prompt": "speak",
            "segments": [
              "My sister ",
              " Italian."
            ],
            "answers": [
              [
                "speaks"
              ]
            ]
          },
          {
            "id": "2",
            "input": "gaps",
            "prompt": "not live",
            "segments": [
              "They ",
              " together."
            ],
            "answers": [
              [
                "don't live",
                "do not live"
              ]
            ]
          },
          {
            "id": "3",
            "input": "gaps",
            "prompt": "work",
            "segments": [
              "",
              " you ",
              " in the evenings?"
            ],
            "answers": [
              [
                "Do"
              ],
              [
                "work"
              ]
            ]
          },
          {
            "id": "4",
            "input": "gaps",
            "prompt": "rain",
            "segments": [
              "It ",
              " a lot in winter."
            ],
            "answers": [
              [
                "rains"
              ]
            ]
          }
        ]
      },
      {
        "id": "present-simple-step-3",
        "title": "3. Обведи правильный вариант.",
        "difficulty": "Средне",
        "instructions": "Выбери грамматически правильную форму.",
        "items": [
          {
            "id": "1",
            "input": "circle-or-tick",
            "segments": [
              "He ",
              " TV in the evenings."
            ],
            "options": [
              "watch",
              "watches"
            ],
            "answer": "1"
          },
          {
            "id": "2",
            "input": "circle-or-tick",
            "segments": [
              "I ",
              " go out during the week."
            ],
            "options": [
              "don't",
              "doesn't"
            ],
            "answer": "0"
          },
          {
            "id": "3",
            "input": "circle-or-tick",
            "segments": [
              "",
              " Louisa want to get married?"
            ],
            "options": [
              "Do",
              "Does"
            ],
            "answer": "1"
          },
          {
            "id": "4",
            "input": "circle-or-tick",
            "segments": [
              "It ",
              " in summer."
            ],
            "options": [
              "doesn't rain",
              "doesn't rains"
            ],
            "answer": "0"
          }
        ]
      },
      {
        "id": "present-simple-step-4",
        "title": "4. Напиши полное предложение.",
        "difficulty": "Средне",
        "instructions": "Используй подсказку и напиши предложение или вопрос полностью.",
        "items": [
          {
            "id": "1",
            "input": "text",
            "prompt": "José / watch / a lot of TV / in the evenings",
            "placeholder": "Напиши предложение",
            "answer": "José watches a lot of TV in the evenings."
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "We / not play / tennis / very often",
            "placeholder": "Напиши предложение",
            "answer": [
              "We don't play tennis very often.",
              "We do not play tennis very often."
            ]
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "your sister / speak / Spanish?",
            "placeholder": "Напиши вопрос",
            "answer": "Does your sister speak Spanish?"
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "Alice / sometimes / meet / people / on the internet",
            "placeholder": "Напиши предложение",
            "answer": "Alice sometimes meets people on the internet."
          }
        ]
      }
    ],
    "linkedLessonId": "lesson-3"
  },
  {
    "id": "grammar-present-continuous",
    "order": 3,
    "title": "Present Continuous",
    "level": "A1",
    "status": "available",
    "page": "grammar-topic.html?id=grammar-present-continuous",
    "passed": false,
    "attempts": 0,
    "lockOnPass": true,
    "revealAnswersOnError": false,
    "questionScheme": {
      "title": "Как строится вопрос в Present Continuous",
      "subtitle": "Форму am, is или are ставим перед подлежащим, а смысловой глагол используем с окончанием -ing.",
      "withQuestionWord": {
        "label": "Если есть вопросительное слово",
        "parts": [
          {
            "word": "What",
            "translation": "что?",
            "role": "Вопросительное слово",
            "kind": "question"
          },
          {
            "word": "is",
            "translation": "не переводим",
            "role": "Форма be",
            "kind": "helper"
          },
          {
            "word": "she",
            "translation": "она",
            "role": "Кто?",
            "kind": "subject"
          },
          {
            "word": "wearing?",
            "translation": "на ней надето?",
            "role": "Глагол + -ing",
            "kind": "action"
          }
        ]
      },
      "withoutQuestionWord": {
        "label": "Если вопросительного слова нет",
        "parts": [
          {
            "word": "Is",
            "translation": "не переводим",
            "role": "Форма be",
            "kind": "helper"
          },
          {
            "word": "he",
            "translation": "он",
            "role": "Кто?",
            "kind": "subject"
          },
          {
            "word": "sleeping?",
            "translation": "спит?",
            "role": "Глагол + -ing",
            "kind": "action"
          }
        ]
      },
      "memoryTip": "В Present Continuous всегда нужны две части: подходящая форма be и смысловой глагол с -ing."
    },
    "glanceCards": [
      {
        "icon": "1",
        "label": "Когда используем",
        "hint": "Для действия, которое происходит сейчас, около настоящего момента или временно.",
        "pattern": "now / at the moment",
        "example": "She’s wearing a tracksuit now. — Сейчас на ней спортивный костюм."
      },
      {
        "icon": "2",
        "label": "Утверждение",
        "hint": "Используем am, is или are и добавляем -ing к смысловому глаголу.",
        "pattern": "subject + am / is / are + verb-ing",
        "example": "They’re playing football. — Они играют в футбол."
      },
      {
        "icon": "3",
        "label": "Отрицание",
        "hint": "Добавляем not после am, is или are. Часто используем сокращения isn’t и aren’t.",
        "pattern": "am not / isn’t / aren’t + verb-ing",
        "example": "He isn’t smiling. — Он не улыбается."
      },
      {
        "icon": "4",
        "label": "Вопрос",
        "hint": "Переносим am, is или are перед подлежащим.",
        "pattern": "Am / Is / Are + subject + verb-ing?",
        "example": "Are you looking at the photo? — Ты смотришь на фотографию?"
      }
    ],
    "miniRules": [
      {
        "title": "1. Значение",
        "text": "Present Continuous описывает действие, которое происходит сейчас, около настоящего момента или в течение временного периода.",
        "example": "The woman is carrying a bag. · I’m studying this week."
      },
      {
        "title": "2. Утверждение",
        "text": "После подлежащего ставим am, is или are, затем смысловой глагол с окончанием -ing.",
        "example": "I’m looking. · She’s riding. · They’re playing."
      },
      {
        "title": "3. Отрицание",
        "text": "Частицу not ставим после am, is или are. Возможны сокращения isn’t и aren’t; форма am not обычно сокращается как I’m not.",
        "example": "I’m not sleeping. · He isn’t smiling. · They aren’t working."
      },
      {
        "title": "4. Вопрос",
        "text": "Форму am, is или are ставим перед подлежащим. После подлежащего идёт глагол с -ing.",
        "example": "What is she doing? · Are they playing football?"
      },
      {
        "title": "5. Короткий ответ",
        "text": "В коротком ответе повторяем am, is или are. Смысловой глагол не повторяем.",
        "example": "Is he sleeping? — Yes, he is. / No, he isn’t."
      },
      {
        "title": "6. Как добавить -ing",
        "text": "Обычно просто добавляем -ing. Конечную немую e убираем. После короткого ударного гласного конечную согласную часто удваиваем. В lie буквы ie меняются на y.",
        "example": "work → working · live → living · run → running · lie → lying"
      },
      {
        "title": "7. Глаголы состояния",
        "text": "Глаголы like, love, want, know, understand и believe обычно не используют в Continuous, когда они обозначают состояние, а не действие.",
        "example": "I like this painting. ✓ · I’m liking this painting. ✗"
      },
      {
        "title": "8. Не путай с Present Simple",
        "text": "Present Simple описывает привычку или факт, а Present Continuous — действие сейчас или временную ситуацию.",
        "example": "He sleeps eight hours every night. · He’s sleeping now."
      }
    ],
    "tables": [
      {
        "title": "Формы be",
        "headers": [
          "Кто?",
          "Полная форма",
          "Сокращение"
        ],
        "rows": [
          [
            "I",
            "am",
            "I’m"
          ],
          [
            "he / she / it",
            "is",
            "he’s / she’s / it’s"
          ],
          [
            "you / we / they",
            "are",
            "you’re / we’re / they’re"
          ]
        ]
      },
      {
        "title": "Утверждение, отрицание и вопрос",
        "headers": [
          "Форма",
          "Схема",
          "Пример"
        ],
        "rows": [
          [
            "Утверждение",
            "subject + be + verb-ing",
            "She is wearing a dress."
          ],
          [
            "Отрицание",
            "subject + be + not + verb-ing",
            "She isn’t wearing a dress."
          ],
          [
            "Вопрос",
            "be + subject + verb-ing?",
            "Is she wearing a dress?"
          ]
        ]
      },
      {
        "title": "Короткие ответы",
        "headers": [
          "Вопрос",
          "Да",
          "Нет"
        ],
        "rows": [
          [
            "Am I …?",
            "Yes, you are.",
            "No, you aren’t."
          ],
          [
            "Is he / she / it …?",
            "Yes, he / she / it is.",
            "No, he / she / it isn’t."
          ],
          [
            "Are you / we / they …?",
            "Yes, you / we / they are.",
            "No, you / we / they aren’t."
          ]
        ]
      },
      {
        "title": "Написание формы -ing",
        "headers": [
          "Тип глагола",
          "Что делаем",
          "Пример"
        ],
        "rows": [
          [
            "обычно",
            "+ ing",
            "wear → wearing"
          ],
          [
            "немая -e",
            "убираем e",
            "ride → riding"
          ],
          [
            "короткая гласная + согласная",
            "удваиваем согласную",
            "sit → sitting"
          ],
          [
            "-ie",
            "ie → y",
            "lie → lying"
          ]
        ]
      }
    ],
    "exampleGroups": [
      {
        "title": "Одна мысль в четырёх формах",
        "items": [
          "Утверждение: She’s wearing a tracksuit. — На ней спортивный костюм.",
          "Отрицание: She isn’t wearing a tracksuit. — На ней не спортивный костюм.",
          "Вопрос: Is she wearing a tracksuit? — На ней спортивный костюм?",
          "Короткий ответ: Yes, she is. / No, she isn’t."
        ]
      },
      {
        "title": "Present Simple или Present Continuous",
        "items": [
          "He rides a bike every day. — регулярное действие.",
          "He’s riding a bike now. — действие происходит сейчас.",
          "She usually wears jeans. — привычка.",
          "She’s wearing a dress today. — временная ситуация сегодня."
        ]
      }
    ],
    "commonMistakes": [
      "She wearing a dress. ✗ → She is wearing a dress. ✓ — нужна форма be.",
      "They is playing football. ✗ → They are playing football. ✓ — с they используем are.",
      "He is rideing a bike. ✗ → He is riding a bike. ✓ — конечную e убираем.",
      "Is wearing she a tracksuit? ✗ → Is she wearing a tracksuit? ✓ — после is ставим подлежащее.",
      "I’m knowing the answer. ✗ → I know the answer. ✓ — know обычно не используется в Continuous."
    ],
    "exercises": [
      {
        "id": "present-continuous-step-1",
        "title": "1. Выбери правильную форму.",
        "difficulty": "Легко",
        "instructions": "Выбери вариант, который правильно завершает предложение.",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "I ___ looking at the photo.",
            "options": [
              "am",
              "is"
            ],
            "answer": 0
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "She ___ wearing a tracksuit.",
            "options": [
              "is",
              "are"
            ],
            "answer": 0
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "They ___ playing football.",
            "options": [
              "is",
              "are"
            ],
            "answer": 1
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "He is ___ a bike.",
            "options": [
              "riding",
              "rideing"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "present-continuous-step-2",
        "title": "2. Поставь глагол в Present Continuous.",
        "difficulty": "Средне",
        "instructions": "Впиши полную правильную форму глагола в Present Continuous.",
        "items": [
          {
            "id": "1",
            "input": "gaps",
            "segments": [
              "The woman ",
              " a bag. (carry)"
            ],
            "answers": [
              [
                "is carrying",
                "'s carrying"
              ]
            ]
          },
          {
            "id": "2",
            "input": "gaps",
            "segments": [
              "We ",
              " shorts today. (wear)"
            ],
            "answers": [
              [
                "are wearing",
                "'re wearing"
              ]
            ]
          },
          {
            "id": "3",
            "input": "gaps",
            "segments": [
              "He ",
              ". (not smile)"
            ],
            "answers": [
              [
                "isn't smiling",
                "is not smiling"
              ]
            ]
          },
          {
            "id": "4",
            "input": "gaps",
            "segments": [
              "I ",
              " my homework. (do)"
            ],
            "answers": [
              [
                "am doing",
                "'m doing"
              ]
            ]
          }
        ]
      },
      {
        "id": "present-continuous-step-3",
        "title": "3. Выбери форму по контексту.",
        "difficulty": "Повышенная сложность",
        "instructions": "Выбери Present Simple или Present Continuous по смыслу предложения.",
        "items": [
          {
            "id": "1",
            "input": "circle-or-tick",
            "segments": [
              "Look! They ",
              " football."
            ],
            "options": [
              "play",
              "are playing"
            ],
            "answer": "1"
          },
          {
            "id": "2",
            "input": "circle-or-tick",
            "segments": [
              "He usually ",
              " a bike to work."
            ],
            "options": [
              "rides",
              "is riding"
            ],
            "answer": "0"
          },
          {
            "id": "3",
            "input": "circle-or-tick",
            "segments": [
              "She ",
              " a dress today."
            ],
            "options": [
              "wears",
              "is wearing"
            ],
            "answer": "1"
          },
          {
            "id": "4",
            "input": "circle-or-tick",
            "segments": [
              "I ",
              " this painting."
            ],
            "options": [
              "like",
              "am liking"
            ],
            "answer": "0"
          }
        ]
      },
      {
        "id": "present-continuous-step-4",
        "title": "4. Построй полное предложение или вопрос.",
        "difficulty": "Самое сложное",
        "instructions": "Используй все слова и напиши полное предложение или вопрос в Present Continuous.",
        "items": [
          {
            "id": "1",
            "input": "text",
            "prompt": "Составь утверждение.",
            "wordBank": [
              "the woman",
              "wear",
              "a dress and a cardigan"
            ],
            "placeholder": "Напиши полное предложение",
            "acceptedAnswers": [
              "The woman is wearing a dress and a cardigan.",
              "The woman’s wearing a dress and a cardigan."
            ]
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "Составь отрицание.",
            "wordBank": [
              "he",
              "not sleep"
            ],
            "placeholder": "Напиши полное предложение",
            "acceptedAnswers": [
              "He isn’t sleeping.",
              "He is not sleeping."
            ]
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "Составь вопрос.",
            "wordBank": [
              "what",
              "she",
              "do"
            ],
            "placeholder": "Напиши полный вопрос",
            "answer": "What is she doing?"
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "Составь вопрос.",
            "wordBank": [
              "they",
              "play football"
            ],
            "placeholder": "Напиши полный вопрос",
            "answer": "Are they playing football?"
          }
        ]
      }
    ],
    "linkedLessonId": "lesson-4"
  },
  {
    "id": "grammar-will-offers",
    "order": 4,
    "title": "I’ll for offers",
    "level": "A1",
    "status": "available",
    "page": "grammar-topic.html?id=grammar-will-offers",
    "passed": false,
    "attempts": 0,
    "lockOnPass": true,
    "revealAnswersOnError": false,
    "miniRules": [
      {
        "title": "1. I’ll = I will",
        "text": "I’ll — краткая форма I will. В разговорной речи она используется чаще полной формы.",
        "example": "I’ll send somebody up. — Я сейчас кого-нибудь пришлю."
      },
      {
        "title": "2. Предлагаем помощь",
        "text": "Используй I’ll, когда решаешь помочь прямо сейчас или реагируешь на проблему собеседника.",
        "example": "The room is noisy. — I’ll see if we have a quieter one."
      },
      {
        "title": "3. После will — начальная форма",
        "text": "После will и ’ll глагол не получает окончаний: send, put, ask, see.",
        "example": "I’ll ask her. Не: I’ll asks her."
      },
      {
        "title": "4. Отрицательная форма",
        "text": "Will not сокращается до won’t.",
        "example": "I won’t forget. — Я не забуду."
      }
    ],
    "tables": [
      {
        "title": "Короткая памятка",
        "headers": [
          "Значение",
          "Форма",
          "Пример"
        ],
        "rows": [
          [
            "Предложение помощи",
            "I’ll + verb",
            "I’ll send two bottles."
          ],
          [
            "Решение сейчас",
            "I’ll + verb",
            "I’ll call the manager."
          ],
          [
            "Отказ / обещание не делать",
            "I won’t + verb",
            "I won’t be late."
          ]
        ]
      }
    ],
    "exampleGroups": [
      {
        "title": "Проблема → предложение помощи",
        "items": [
          "I have a problem with the wi-fi. — I’ll put you through to IT.",
          "This room is very noisy. — I’ll see if we have a quieter one.",
          "There’s no water in my mini-bar. — I’ll send two bottles right now."
        ]
      }
    ],
    "commonMistakes": [
      "После I’ll ставим глагол без to: I’ll send, не I’ll to send.",
      "После I’ll не добавляем -s: I’ll ask, не I’ll asks.",
      "Не путай I’ll и I: I’ll call — я позвоню; I call — я звоню обычно."
    ],
    "exercises": [
      {
        "id": "will-offers-step-1",
        "title": "1. Выбери грамматически правильную форму.",
        "difficulty": "Легко",
        "instructions": "После I’ll нужен глагол в начальной форме — без to, -s и -ing.",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "I ___ somebody up right now.",
            "options": [
              "’ll send",
              "’ll sends"
            ],
            "answer": 0
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "I ___ you through to IT.",
            "options": [
              "’ll put",
              "’ll to put"
            ],
            "answer": 0
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "I ___ the manager now.",
            "options": [
              "will calling",
              "’ll call"
            ],
            "answer": 1
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "I ___ if we have a quieter room.",
            "options": [
              "’ll see",
              "’ll seeing"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "will-offers-step-2",
        "title": "2. Дополни предложения формой I’ll.",
        "difficulty": "Средне",
        "instructions": "Впиши I’ll и подходящий глагол.",
        "items": [
          {
            "id": "1",
            "input": "gaps",
            "segments": [
              "I’m sorry about the shower. ",
              " somebody up. (send)"
            ],
            "answers": [
              [
                "I’ll send",
                "I will send"
              ]
            ]
          },
          {
            "id": "2",
            "input": "gaps",
            "segments": [
              "The wi-fi isn’t working. ",
              " you through to IT. (put)"
            ],
            "answers": [
              [
                "I’ll put",
                "I will put"
              ]
            ]
          },
          {
            "id": "3",
            "input": "gaps",
            "segments": [
              "You want the manager? ",
              " her to call you. (ask)"
            ],
            "answers": [
              [
                "I’ll ask",
                "I will ask"
              ]
            ]
          },
          {
            "id": "4",
            "input": "gaps",
            "segments": [
              "The room is noisy. ",
              " if we have a quieter one. (see)"
            ],
            "answers": [
              [
                "I’ll see",
                "I will see"
              ]
            ]
          }
        ]
      },
      {
        "id": "will-offers-step-3",
        "title": "3. Выбери предложение с правильным порядком слов.",
        "difficulty": "Повышенная сложность",
        "instructions": "Проверь схему: I + ’ll + глагол + остальные слова.",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "Выбери правильное предложение.",
            "options": [
              "I’ll send somebody up.",
              "I send will somebody up."
            ],
            "answer": 0
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "Выбери правильное предложение.",
            "options": [
              "I put’ll you through to IT.",
              "I’ll put you through to IT."
            ],
            "answer": 1
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "Выбери правильное предложение.",
            "options": [
              "I’ll ask her to call you.",
              "I’ll ask to her call you."
            ],
            "answer": 0
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "Выбери правильное предложение.",
            "options": [
              "I’ll see if we has a quieter one.",
              "I’ll see if we have a quieter one."
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "will-offers-step-4",
        "title": "4. Напиши предложение помощи.",
        "difficulty": "Самое сложное",
        "instructions": "Используй I’ll и все слова из подсказки.",
        "items": [
          {
            "id": "1",
            "input": "text",
            "prompt": "Проблема с wi-fi.",
            "wordBank": [
              "I’ll",
              "put",
              "you",
              "through",
              "to IT"
            ],
            "acceptedAnswers": [
              "I’ll put you through to IT.",
              "I will put you through to IT."
            ]
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "В номере нет воды.",
            "wordBank": [
              "I’ll",
              "send",
              "two bottles",
              "right now"
            ],
            "acceptedAnswers": [
              "I’ll send two bottles right now.",
              "I will send two bottles right now."
            ]
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "Гость хочет поговорить с менеджером.",
            "wordBank": [
              "I’ll",
              "ask",
              "her",
              "to call you"
            ],
            "acceptedAnswers": [
              "I’ll ask her to call you.",
              "I will ask her to call you."
            ]
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "Номер слишком шумный.",
            "wordBank": [
              "I’ll",
              "see",
              "if",
              "we have",
              "a quieter one"
            ],
            "acceptedAnswers": [
              "I’ll see if we have a quieter one.",
              "I will see if we have a quieter one."
            ]
          }
        ]
      }
    ],
    "linkedLessonId": "lesson-6"
  },
  {
    "id": "grammar-past-simple-regular-irregular",
    "order": 5,
    "title": "Past simple: regular and irregular verbs",
    "level": "A1",
    "status": "available",
    "page": "grammar-topic.html?id=grammar-past-simple-regular-irregular",
    "passed": false,
    "attempts": 0,
    "lockOnPass": true,
    "revealAnswersOnError": false,
    "glanceCards": [
      {
        "icon": "1",
        "label": "When we use it",
        "hint": "Use the past simple for finished actions and situations in the past, often with a finished time such as yesterday, last week, or four years ago.",
        "pattern": "finished past action",
        "example": "We arrived at two o’clock. — Мы приехали в два часа."
      },
      {
        "icon": "2",
        "label": "Positive",
        "hint": "Regular verbs usually add -ed. Irregular verbs have a special past form that you need to learn.",
        "pattern": "subject + past form",
        "example": "They booked a flat. / They went home."
      },
      {
        "icon": "3",
        "label": "Negative",
        "hint": "Use didn’t + base verb. After didn’t, do not use the past form.",
        "pattern": "subject + didn’t + verb",
        "example": "They didn’t rent a car."
      },
      {
        "icon": "4",
        "label": "Questions",
        "hint": "Use did + subject + base verb. The main verb goes back to its base form.",
        "pattern": "Did + subject + verb ...?",
        "example": "Where did they go?"
      }
    ],
    "miniRules": [
      {
        "title": "1. Regular verbs: + -ed",
        "text": "Most regular verbs form the past simple with -ed.",
        "example": "ask → asked · rent → rented · stay → stayed"
      },
      {
        "title": "2. Spelling changes",
        "text": "If a verb ends in -e, add -d. If it ends in consonant + y, change y to i and add -ed. Some short verbs double the final consonant before -ed.",
        "example": "invite → invited · study → studied · stop → stopped"
      },
      {
        "title": "3. Irregular verbs",
        "text": "Irregular verbs do not follow the -ed rule. Learn their past forms individually.",
        "example": "buy → bought · choose → chose · eat → ate · go → went"
      },
      {
        "title": "4. Negative",
        "text": "Use didn’t + the base form for almost all verbs. With be, use wasn’t / weren’t.",
        "example": "I didn’t swim. · They weren’t friendly."
      },
      {
        "title": "5. Questions and short answers",
        "text": "Use did before the subject and the base form after the subject. Short answers use did / didn’t.",
        "example": "Did they book online? — Yes, they did. / No, they didn’t."
      },
      {
        "title": "6. The verb be is different",
        "text": "Past forms of be are was / were. Questions invert was / were and the subject; negatives are wasn’t / weren’t.",
        "example": "They were tired. · Were they tired? · They weren’t tired."
      },
      {
        "title": "7. -ed pronunciation",
        "text": "The ending -ed can sound /t/, /d/, or /ɪd/. The spelling stays -ed; only the pronunciation changes.",
        "example": "booked /t/ · arrived /d/ · wanted /ɪd/"
      }
    ],
    "exampleGroups": [
      {
        "title": "Positive, negative, question",
        "items": [
          "They booked an apartment. → They didn’t book a hotel. → Did they book online?",
          "She went to Portugal. → She didn’t go to Spain. → Where did she go?",
          "They were at the airport. → They weren’t at home. → Were they at the airport?"
        ]
      }
    ],
    "commonMistakes": [
      "They didn’t went home. ✗ → They didn’t go home. ✓ — after didn’t, use the base verb.",
      "Did they booked online? ✗ → Did they book online? ✓ — after did, use the base verb.",
      "I studyed English. ✗ → I studied English. ✓ — consonant + y changes to -ied.",
      "They was at the airport. ✗ → They were at the airport. ✓ — use were with they / we / you."
    ],
    "exercises": [
      {
        "id": "past-simple-step-1",
        "title": "1. Choose the correct past form.",
        "difficulty": "Easy",
        "instructions": "Choose the correct past simple form.",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "arrive",
            "options": [
              "arrived",
              "arriveed"
            ],
            "answer": 0
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "buy",
            "options": [
              "buyed",
              "bought"
            ],
            "answer": 1
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "study",
            "options": [
              "studied",
              "studyed"
            ],
            "answer": 0
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "go",
            "options": [
              "went",
              "goed"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "past-simple-step-2",
        "title": "2. Complete the negative sentences.",
        "difficulty": "Medium",
        "instructions": "Write the correct negative form.",
        "items": [
          {
            "id": "1",
            "input": "gaps",
            "segments": [
              "They ",
              " a car. (rent)"
            ],
            "answers": [
              [
                "didn't rent",
                "didn’t rent"
              ]
            ]
          },
          {
            "id": "2",
            "input": "gaps",
            "segments": [
              "I ",
              " in the sea. (swim)"
            ],
            "answers": [
              [
                "didn't swim",
                "didn’t swim"
              ]
            ]
          },
          {
            "id": "3",
            "input": "gaps",
            "segments": [
              "We ",
              " at home. (be)"
            ],
            "answers": [
              [
                "weren't",
                "weren’t"
              ]
            ]
          },
          {
            "id": "4",
            "input": "gaps",
            "segments": [
              "She ",
              " the passport. (find)"
            ],
            "answers": [
              [
                "didn't find",
                "didn’t find"
              ]
            ]
          }
        ]
      },
      {
        "id": "past-simple-step-3",
        "title": "3. Choose the correct form in context.",
        "difficulty": "Harder",
        "instructions": "Choose the form that makes the sentence grammatically correct.",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "We ___ an apartment online.",
            "options": [
              "booked",
              "did book"
            ],
            "answer": 0
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "Where ___ they go?",
            "options": [
              "did",
              "were"
            ],
            "answer": 0
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "They ___ find their passports.",
            "options": [
              "couldn’t",
              "didn’t could"
            ],
            "answer": 0
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "The people ___ very helpful.",
            "options": [
              "weren’t",
              "didn’t were"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "past-simple-step-4",
        "title": "4. Build the sentence or question.",
        "difficulty": "Most difficult",
        "instructions": "Write the complete sentence or question using the words in brackets.",
        "items": [
          {
            "id": "1",
            "input": "text",
            "prompt": "(they / arrive / at two o’clock)",
            "answer": [
              "They arrived at two o'clock.",
              "They arrived at two o’clock."
            ]
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "(we / not / take / a taxi)",
            "answer": [
              "We didn't take a taxi.",
              "We didn’t take a taxi."
            ]
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "(where / they / go / in the end?)",
            "answer": "Where did they go in the end?"
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "(the woman / ask / for their passports?)",
            "answer": "Did the woman ask for their passports?"
          }
        ]
      }
    ],
    "linkedLessonId": "lesson-8"
  },
  {
    "id": "grammar-past-continuous",
    "order": 6,
    "title": "Past continuous",
    "level": "A2",
    "status": "available",
    "page": "grammar-topic.html?id=grammar-past-continuous",
    "passed": false,
    "attempts": 0,
    "lockOnPass": true,
    "revealAnswersOnError": false,
    "linkedLessonId": "lesson-11",
    "glanceCards": [],
    "miniRules": [],
    "tables": [],
    "exampleGroups": [],
    "commonMistakes": [],
    "exercises": [
      {
        "id": "past-continuous-step-1",
        "title": "1. Выбери правильную форму.",
        "difficulty": "Легко",
        "instructions": "Выбери вариант, который правильно образует past continuous.",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "At 8.00 last night, I ___ dinner.",
            "options": [
              "was making",
              "made"
            ],
            "answer": 0
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "They ___ TV when I called.",
            "options": [
              "were watching",
              "watched"
            ],
            "answer": 0
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "It ___ when we left home.",
            "options": [
              "was raining",
              "rained"
            ],
            "answer": 0
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "What ___ at 10.00 yesterday?",
            "options": [
              "were you doing",
              "did you do"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "past-continuous-step-2",
        "title": "2. Поставь глагол в past continuous.",
        "difficulty": "Средне",
        "instructions": "Впиши was / were и нужную -ing форму.",
        "items": [
          {
            "id": "1",
            "input": "gaps",
            "prompt": "work",
            "segments": [
              "She ",
              " at 6.00 yesterday."
            ],
            "answers": [
              [
                "was working"
              ]
            ]
          },
          {
            "id": "2",
            "input": "gaps",
            "prompt": "not sleep",
            "segments": [
              "We ",
              " when the phone rang."
            ],
            "answers": [
              [
                "weren't sleeping",
                "weren’t sleeping",
                "were not sleeping"
              ]
            ]
          },
          {
            "id": "3",
            "input": "gaps",
            "prompt": "wait",
            "segments": [
              "",
              " they ",
              " for the bus?"
            ],
            "answers": [
              [
                "Were"
              ],
              [
                "waiting"
              ]
            ]
          },
          {
            "id": "4",
            "input": "gaps",
            "prompt": "write",
            "segments": [
              "I ",
              " a report when my computer crashed."
            ],
            "answers": [
              [
                "was writing"
              ]
            ]
          }
        ]
      },
      {
        "id": "past-continuous-step-3",
        "title": "3. Выбери past simple или past continuous по контексту.",
        "difficulty": "Повышенная сложность",
        "instructions": "Выбери форму, которая подходит по смыслу предложения.",
        "items": [
          {
            "id": "1",
            "input": "select-gap",
            "segments": [
              "I ",
              " home when it started to rain."
            ],
            "options": [
              "walked",
              "was walking"
            ],
            "answer": 1
          },
          {
            "id": "2",
            "input": "select-gap",
            "segments": [
              "The visitors arrived while the children ",
              " computer games."
            ],
            "options": [
              "played",
              "were playing"
            ],
            "answer": 1
          },
          {
            "id": "3",
            "input": "select-gap",
            "segments": [
              "I dropped my passport when I ",
              " into the taxi."
            ],
            "options": [
              "got",
              "was getting"
            ],
            "answer": 1
          },
          {
            "id": "4",
            "input": "select-gap",
            "segments": [
              "At 10.30 yesterday, Amy ",
              " in the park."
            ],
            "options": [
              "walked",
              "was walking"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "past-continuous-step-4",
        "title": "4. Построй предложение самостоятельно.",
        "difficulty": "Самое сложное",
        "instructions": "Используй данные слова и контекст. Напиши полное предложение или вопрос.",
        "items": [
          {
            "id": "1",
            "input": "text",
            "prompt": "at 9.00 last night / I / study",
            "acceptedAnswers": [
              "I was studying at 9.00 last night.",
              "At 9.00 last night, I was studying."
            ]
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "what / you / do / when / I / call ?",
            "acceptedAnswers": [
              "What were you doing when I called?"
            ]
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "we / not sleep / at midnight",
            "acceptedAnswers": [
              "We weren't sleeping at midnight.",
              "We weren’t sleeping at midnight.",
              "We were not sleeping at midnight."
            ]
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "the children / play computer games / when / the visitors / arrive",
            "acceptedAnswers": [
              "The children were playing computer games when the visitors arrived."
            ]
          }
        ]
      }
    ],
    "textbookSections": [
      {
        "type": "text",
        "eyebrow": "Значение",
        "title": "Что показывает Past Continuous",
        "paragraphs": [
          "Past Continuous показывает действие, которое уже шло в определённый момент в прошлом. Нас интересует не факт завершения действия, а процесс вокруг этого момента.",
          "Сравни: At 5.30 yesterday I was driving home. — В 5:30 вчера я ехал домой. Мы как будто смотрим внутрь процесса: в 5:30 поездка уже шла."
        ],
        "bullets": [
          "момент может быть назван: at 5.30, at midnight, this time yesterday;",
          "момент может быть понятен из ситуации: What were you doing when I called?;",
          "Past Continuous сам по себе не говорит, закончилось действие или нет."
        ]
      },
      {
        "type": "timeline",
        "eyebrow": "Схема времени",
        "title": "Процесс и событие на линии времени",
        "intro": "Длинная полоса показывает действие в процессе. Точка показывает короткое событие или конкретный момент.",
        "items": [
          {
            "title": "Действие было в процессе в конкретный момент",
            "label": "5.30 yesterday",
            "during": "I was driving home",
            "example": "At 5.30 yesterday I was driving home."
          },
          {
            "title": "Короткое событие произошло во время процесса",
            "label": "the phone rang",
            "during": "I was having dinner",
            "example": "I was having dinner when the phone rang."
          }
        ]
      },
      {
        "type": "formula",
        "eyebrow": "Форма",
        "title": "Как образовать Past Continuous",
        "intro": "Основа одна: was / were + глагол с -ing. Меняется только форма be.",
        "rows": [
          {
            "label": "I / he / she / it",
            "form": "was + verb-ing",
            "example": "She was working."
          },
          {
            "label": "you / we / they",
            "form": "were + verb-ing",
            "example": "They were waiting."
          },
          {
            "label": "Отрицание",
            "form": "was not / were not + verb-ing",
            "example": "It wasn’t raining. We weren’t sleeping."
          },
          {
            "label": "Вопрос",
            "form": "Was / Were + subject + verb-ing?",
            "example": "Were you working?"
          },
          {
            "label": "Короткий ответ",
            "form": "Yes, … was/were. / No, … wasn’t/weren’t.",
            "example": "Yes, I was. / No, they weren’t."
          }
        ]
      },
      {
        "type": "table",
        "eyebrow": "Окончание -ing",
        "title": "Как писать -ing форму",
        "intro": "Сначала правильно образуй -ing форму, затем добавляй was или were.",
        "headers": [
          "Случай",
          "Правило",
          "Примеры"
        ],
        "rows": [
          [
            "Обычный глагол",
            "+ ing",
            "work → working; rain → raining"
          ],
          [
            "Конечная -e",
            "-e + ing",
            "write → writing; make → making; live → living"
          ],
          [
            "Короткая ударная гласная + согласная",
            "последнюю согласную обычно удваиваем",
            "sit → sitting; get → getting; run → running"
          ],
          [
            "-ie",
            "ie → y + ing",
            "lie → lying; die → dying"
          ]
        ]
      },
      {
        "type": "compare",
        "eyebrow": "Главное сравнение",
        "title": "Past Continuous или Past Simple?",
        "intro": "Выбирай форму по смыслу, а не только по словам when или while.",
        "left": {
          "title": "Past Continuous: процесс / фон",
          "points": [
            "действие уже происходило в выбранный момент;",
            "мы видим ситуацию в процессе;",
            "часто это фон для другого события."
          ],
          "examples": [
            "I was walking home at 8.00.",
            "The children were playing when the visitors arrived."
          ]
        },
        "right": {
          "title": "Past Simple: факт / завершённое событие",
          "points": [
            "действие рассматривается как целый завершённый факт;",
            "часто двигает рассказ вперёд;",
            "может быть коротким событием, которое происходит во время процесса."
          ],
          "examples": [
            "I walked home after work.",
            "The visitors arrived at 8.00."
          ]
        },
        "note": "I was writing a report when my computer crashed. — was writing = процесс; crashed = короткое завершённое событие."
      },
      {
        "type": "text",
        "eyebrow": "When и while",
        "title": "Как соединять два действия",
        "paragraphs": [
          "Когда короткое событие происходит во время более длинного процесса, длинный процесс обычно ставим в Past Continuous, а короткое событие — в Past Simple.",
          "While чаще вводит именно процесс. When может вводить и момент, и событие — поэтому смотри на смысл каждого действия."
        ],
        "bullets": [
          "I was walking home when it started to rain.",
          "While I was walking home, it started to rain.",
          "While I was cooking, Jack was washing the dishes. — два процесса шли одновременно."
        ]
      },
      {
        "type": "note",
        "eyebrow": "Важно",
        "title": "Глаголы состояния обычно не ставим в Continuous",
        "text": "Глаголы know, understand, want, need, like, love, believe обычно описывают состояние, а не действие в процессе. Поэтому обычно: I knew the answer, а не I was knowing the answer."
      },
      {
        "type": "examples",
        "eyebrow": "Типичные ошибки",
        "title": "Проверь себя перед практикой",
        "items": [
          "They was playing. ✗  →  They were playing. ✓",
          "I was work at 9.00. ✗  →  I was working at 9.00. ✓",
          "Were you worked? ✗  →  Were you working? ✓",
          "I was writing a report when my computer was crashing. ✗  →  I was writing a report when my computer crashed. ✓"
        ]
      }
    ],
    "examples": []
  },
  {
    "id": "grammar-at-in-on",
    "order": 7,
    "title": "At, in, on",
    "level": "A2",
    "status": "available",
    "page": "grammar-topic.html?id=grammar-at-in-on",
    "passed": false,
    "attempts": 0,
    "lockOnPass": true,
    "revealAnswersOnError": false,
    "linkedLessonId": "lesson-11",
    "visualGuide": {
      "eyebrow": "Схема",
      "title": "Как запомнить at, in, on",
      "src": "images/grammar-at-in-on-guide.png",
      "alt": "Инфографика по предлогам at, in, on: место и время",
      "note": "Смотри на картинку как на карту-подсказку: IN = внутри / в границах, ON = на поверхности / на транспорте / в дни и даты, AT = в точке / в конкретном месте / в точное время."
    },
    "glanceCards": [],
    "miniRules": [],
    "tables": [],
    "exampleGroups": [],
    "commonMistakes": [],
    "exercises": [
      {
        "id": "at-in-on-step-1",
        "title": "1. Выбери правильный предлог.",
        "difficulty": "Легко",
        "instructions": "Выбери in, on или at.",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "___ Monday",
            "options": [
              "in",
              "on",
              "at"
            ],
            "answer": 1
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "___ a car",
            "options": [
              "in",
              "on",
              "at"
            ],
            "answer": 0
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "___ the table",
            "options": [
              "in",
              "on",
              "at"
            ],
            "answer": 1
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "___ 7.15",
            "options": [
              "in",
              "on",
              "at"
            ],
            "answer": 2
          }
        ]
      },
      {
        "id": "at-in-on-step-2",
        "title": "2. Вставь нужный предлог.",
        "difficulty": "Средне",
        "instructions": "Впиши один предлог: at, in или on.",
        "items": [
          {
            "id": "1",
            "input": "gaps",
            "segments": [
              "We live ",
              " Moscow."
            ],
            "answers": [
              [
                "in"
              ]
            ]
          },
          {
            "id": "2",
            "input": "gaps",
            "segments": [
              "I left my bag ",
              " the bus."
            ],
            "answers": [
              [
                "on"
              ]
            ]
          },
          {
            "id": "3",
            "input": "gaps",
            "segments": [
              "Let’s meet ",
              " the station."
            ],
            "answers": [
              [
                "at"
              ]
            ]
          },
          {
            "id": "4",
            "input": "gaps",
            "segments": [
              "My birthday is ",
              " 9th May."
            ],
            "answers": [
              [
                "on"
              ]
            ]
          }
        ]
      },
      {
        "id": "at-in-on-step-3",
        "title": "3. Выбери вариант по контексту.",
        "difficulty": "Повышенная сложность",
        "instructions": "Выбери предлог, который подходит по смыслу.",
        "items": [
          {
            "id": "1",
            "input": "select-gap",
            "segments": [
              "I usually study ",
              " the evening."
            ],
            "options": [
              "at",
              "in",
              "on"
            ],
            "answer": 1
          },
          {
            "id": "2",
            "input": "select-gap",
            "segments": [
              "The photo is ",
              " the wall."
            ],
            "options": [
              "at",
              "in",
              "on"
            ],
            "answer": 2
          },
          {
            "id": "3",
            "input": "select-gap",
            "segments": [
              "My dad is usually ",
              " work between 9.00 and 5.00."
            ],
            "options": [
              "at",
              "in",
              "on"
            ],
            "answer": 0
          },
          {
            "id": "4",
            "input": "select-gap",
            "segments": [
              "We’re going to Greece ",
              " the summer."
            ],
            "options": [
              "at",
              "in",
              "on"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "at-in-on-step-4",
        "title": "4. Построй предложение самостоятельно.",
        "difficulty": "Самое сложное",
        "instructions": "Используй данные слова. Напиши полное предложение с правильным предлогом или предлогами.",
        "items": [
          {
            "id": "1",
            "input": "text",
            "prompt": "we / meet / the station / 8.30",
            "acceptedAnswers": [
              "We met at the station at 8.30."
            ]
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "my parents / live / Dublin",
            "acceptedAnswers": [
              "My parents live in Dublin."
            ]
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "the keys / be / the table",
            "acceptedAnswers": [
              "The keys are on the table."
            ]
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "I / usually / study / the evening",
            "acceptedAnswers": [
              "I usually study in the evening."
            ]
          }
        ]
      }
    ],
    "textbookSections": [
      {
        "type": "text",
        "eyebrow": "Сначала раздели две темы",
        "title": "At, in, on: место и время — это не одно правило",
        "paragraphs": [
          "Одни и те же предлоги используются и для места, и для времени, но логика разная. Поэтому сначала реши: ты говоришь о месте или о времени.",
          "Для места удобно думать так: IN = внутри / в пределах пространства; ON = на поверхности или на транспорте; AT = точка или конкретное место. Для времени: IN = большой период; ON = день / дата; AT = точное время или точка во времени."
        ]
      },
      {
        "type": "table",
        "eyebrow": "Место",
        "title": "IN: внутри пространства или в пределах территории",
        "intro": "IN используем, когда представляем место как пространство, внутри которого находится человек или предмет.",
        "headers": [
          "Ситуация",
          "Примеры",
          "Почему"
        ],
        "rows": [
          [
            "страна / город / район",
            "in England; in Moscow; in the city centre",
            "мы находимся внутри территории"
          ],
          [
            "комната / здание / закрытое пространство",
            "in the living room; in the museum; in a shop",
            "внутри помещения"
          ],
          [
            "машина / такси",
            "in a car; in a taxi",
            "маленькое закрытое транспортное средство"
          ],
          [
            "парк / сад / вода",
            "in the park; in the garden; in the sea",
            "в пределах пространства"
          ]
        ]
      },
      {
        "type": "table",
        "eyebrow": "Место",
        "title": "ON: поверхность и транспорт",
        "intro": "ON используем, когда важна поверхность, линия или транспорт, в котором мы воспринимаем себя как пассажира.",
        "headers": [
          "Ситуация",
          "Примеры",
          "Обрати внимание"
        ],
        "rows": [
          [
            "поверхность",
            "on the table; on the wall; on the floor; on the shelf",
            "предмет находится на поверхности"
          ],
          [
            "этаж",
            "on the 11th floor",
            "этаж — уровень здания"
          ],
          [
            "общественный транспорт",
            "on the bus; on the train; on a plane",
            "обычно можно встать / двигаться внутри"
          ],
          [
            "велосипед / мотоцикл",
            "on a bike; on a motorbike",
            "человек находится сверху на транспортном средстве"
          ]
        ]
      },
      {
        "type": "table",
        "eyebrow": "Место",
        "title": "AT: место как точка",
        "intro": "AT нужен, когда важна не внутренняя часть пространства, а само место как точка, адрес, место встречи или функция.",
        "headers": [
          "Ситуация",
          "Примеры",
          "Смысл"
        ],
        "rows": [
          [
            "точка встречи / остановка",
            "at the station; at the bus stop; at the door",
            "мы указываем конкретную точку"
          ],
          [
            "учёба / работа / дом",
            "at school; at work; at home",
            "место рассматривается по его функции"
          ],
          [
            "мероприятие",
            "at a party; at a concert",
            "мы на мероприятии"
          ],
          [
            "адрес",
            "at 23 State Street",
            "конкретная точка по адресу"
          ]
        ]
      },
      {
        "type": "compare",
        "eyebrow": "Смысл меняется",
        "title": "AT и IN с одним и тем же местом",
        "intro": "Иногда оба предлога возможны, но они показывают место по-разному.",
        "left": {
          "title": "AT = место как точка / функция",
          "points": [
            "I’m at school. — я в школе как ученик / нахожусь там;",
            "Meet me at the station. — встретимся у/на станции как в точке."
          ],
          "examples": [
            "She’s at the hospital visiting her dad.",
            "We met at the airport."
          ]
        },
        "right": {
          "title": "IN = физически внутри",
          "points": [
            "I’m in the school. — я физически внутри здания школы;",
            "He’s in the station. — он внутри здания станции."
          ],
          "examples": [
            "There are 500 students in the school.",
            "It was warm inside the station."
          ]
        },
        "note": "В обычных фразах at school / at work / at home предлог часто связан с функцией места, а не с его стенами."
      },
      {
        "type": "table",
        "eyebrow": "Время",
        "title": "IN, ON, AT со временем",
        "intro": "Здесь удобно двигаться от большого периода к самой точной точке времени.",
        "headers": [
          "Предлог",
          "Когда",
          "Примеры"
        ],
        "rows": [
          [
            "IN",
            "годы, месяцы, времена года, части дня",
            "in 2004; in July; in winter; in the morning; in the evening"
          ],
          [
            "ON",
            "дни недели, даты, конкретный день + часть дня",
            "on Monday; on 9th May; on Monday morning"
          ],
          [
            "AT",
            "точное время и отдельные точки времени",
            "at 7.15; at noon; at midnight; at night; at the weekend"
          ]
        ]
      },
      {
        "type": "compare",
        "eyebrow": "Сравнение по масштабу",
        "title": "От периода к точке",
        "intro": "Представь календарь и часы: чем точнее точка, тем ближе мы к AT.",
        "left": {
          "title": "Большой период",
          "points": [
            "in 2026",
            "in October",
            "in winter",
            "in the afternoon"
          ],
          "examples": [
            "We moved here in 2024.",
            "I usually work in the evening."
          ]
        },
        "right": {
          "title": "День и точное время",
          "points": [
            "on Friday",
            "on 12 October",
            "on Friday evening",
            "at 6.30"
          ],
          "examples": [
            "The lesson is on Friday at 6.30.",
            "We arrived on Monday morning."
          ]
        },
        "note": "Одна фраза может содержать несколько уровней: on Wednesday at 9.30 in the evening."
      },
      {
        "type": "text",
        "eyebrow": "Особые случаи",
        "title": "Фразы, которые нужно запомнить отдельно",
        "paragraphs": [
          "Некоторые сочетания не следуют самой простой схеме «большой период → маленькая точка», поэтому их лучше выучить как готовые блоки."
        ],
        "bullets": [
          "at night, но in the morning / in the afternoon / in the evening;",
          "at the weekend — стандартный британский вариант, который используется в English File;",
          "at Christmas / at Easter = в период праздника; on Christmas Day = именно в день Рождества;",
          "on Monday morning / on Friday evening — если назван конкретный день, используем on."
        ]
      },
      {
        "type": "note",
        "eyebrow": "Без предлога",
        "title": "После last, next, this и every предлог обычно не нужен",
        "text": "Говорим last Monday, next week, this morning, every summer — не in last Monday и не on next week."
      },
      {
        "type": "examples",
        "eyebrow": "Типичные ошибки",
        "title": "Проверь себя перед практикой",
        "items": [
          "in Monday ✗  →  on Monday ✓",
          "in 7.15 ✗  →  at 7.15 ✓",
          "at the wall ✗  →  on the wall ✓",
          "on New York ✗  →  in New York ✓",
          "in the bus ✗  →  on the bus ✓, но in a car ✓"
        ]
      }
    ],
    "examples": []
  },
  {
    "id": "grammar-time-sequencers-connectors",
    "order": 8,
    "title": "Time sequencers and connectors",
    "level": "A2",
    "status": "available",
    "page": "grammar-topic.html?id=grammar-time-sequencers-connectors",
    "passed": false,
    "attempts": 0,
    "lockOnPass": true,
    "revealAnswersOnError": false,
    "linkedLessonId": "lesson-14",
    "glanceCards": [],
    "miniRules": [],
    "tables": [],
    "exampleGroups": [],
    "commonMistakes": [],
    "examples": [],
    "textbookSections": [
      {
        "type": "text",
        "eyebrow": "Смысл",
        "title": "Две разные задачи: порядок событий и связь между идеями",
        "paragraphs": [
          "Time sequencers помогают рассказчику показать, в каком порядке происходили события. Они отвечают на вопрос «что было сначала, что потом и когда?».",
          "Connectors связывают две идеи логически. Они показывают причину, результат или контраст. Поэтому although, because, but и so нельзя выбирать только по переводу: сначала нужно понять отношение между двумя частями предложения."
        ],
        "examples": [
          "The next day, I climbed the mountain. → следующее событие во времени.",
          "I was tired, so I went to bed. → вторая часть является результатом первой."
        ]
      },
      {
        "type": "table",
        "eyebrow": "Рассказ",
        "title": "Time sequencers: как двигать историю вперёд",
        "intro": "Эти выражения задают временную рамку или показывают следующий шаг рассказа. После выражения в начале предложения обычно ставится запятая.",
        "headers": [
          "Выражение",
          "Что показывает",
          "Пример"
        ],
        "rows": [
          [
            "One summer",
            "широкий момент / начало истории",
            "One summer, I decided to travel to Peru."
          ],
          [
            "The next day",
            "следующий день",
            "The next day, I climbed the mountain."
          ],
          [
            "Two minutes later",
            "точный промежуток до следующего события",
            "Two minutes later, he came over to speak to me."
          ],
          [
            "After that",
            "следующий этап после уже названного события",
            "After that, we decided to travel together."
          ],
          [
            "Suddenly",
            "внезапное, неожиданное событие",
            "Suddenly, I saw someone I knew."
          ],
          [
            "when",
            "связывает действие с моментом / другим событием",
            "I was tired when I reached the top."
          ]
        ]
      },
      {
        "type": "compare",
        "eyebrow": "Причина и результат",
        "title": "Because и so: одна ситуация, но разное направление связи",
        "intro": "Оба слова могут описывать одну и ту же ситуацию. Разница в том, какую часть мы называем причиной, а какую — результатом.",
        "left": {
          "title": "BECAUSE = потому что",
          "points": [
            "После because идёт причина.",
            "Можно поставить because-clause после главной части или перед ней."
          ],
          "examples": [
            "I went home because I was tired.",
            "Because I was tired, I went home."
          ]
        },
        "right": {
          "title": "SO = поэтому",
          "points": [
            "После so идёт результат / последствие.",
            "В типичной конструкции две законченные идеи соединяются запятой + so."
          ],
          "examples": [
            "I was tired, so I went home.",
            "The door was open, so I called the police."
          ]
        },
        "note": "Не соединяй because и so в одной и той же связи: Because I was tired, so I went home ✗."
      },
      {
        "type": "compare",
        "eyebrow": "Контраст",
        "title": "But и although: похожий смысл, разная грамматическая роль",
        "intro": "Оба выражают контраст: вторая идея неожиданна на фоне первой. Но структура предложения разная.",
        "left": {
          "title": "BUT = но",
          "points": [
            "Соединяет две самостоятельные идеи.",
            "Обычно перед but ставим запятую."
          ],
          "examples": [
            "The tickets were expensive, but I bought one.",
            "My flat is small, but it is perfect for me."
          ]
        },
        "right": {
          "title": "ALTHOUGH = хотя",
          "points": [
            "Вводит зависимую часть: «хотя ...».",
            "Если although-clause стоит первой, после неё ставим запятую."
          ],
          "examples": [
            "Although the tickets were expensive, I bought one.",
            "I bought one although the tickets were expensive."
          ]
        },
        "note": "Не используй although + but для одной и той же связи: Although it was expensive, but I bought it ✗."
      },
      {
        "type": "formula",
        "eyebrow": "Структура",
        "title": "Полезные модели предложения",
        "intro": "Запоминай не отдельное слово, а всю конструкцию вокруг него.",
        "rows": [
          {
            "label": "Reason",
            "form": "result + because + reason",
            "example": "I stayed at home because I was ill."
          },
          {
            "label": "Result",
            "form": "reason, so + result",
            "example": "I was ill, so I stayed at home."
          },
          {
            "label": "Contrast",
            "form": "idea 1, but + idea 2",
            "example": "It was hot, but we had a great holiday."
          },
          {
            "label": "Concession",
            "form": "Although + clause, main clause",
            "example": "Although I was tired, I carried on walking."
          },
          {
            "label": "Sequence",
            "form": "The next day / After that / Suddenly, + sentence",
            "example": "After that, we travelled together."
          },
          {
            "label": "When-clause",
            "form": "main clause + when + clause",
            "example": "I was tired when I reached the top."
          }
        ]
      },
      {
        "type": "text",
        "eyebrow": "Пунктуация",
        "title": "Где нужна запятая",
        "paragraphs": [
          "После начальных time sequencers обычно ставим запятую: The next day, ... / After that, ... / Suddenly, ...",
          "Перед but и so между двумя самостоятельными идеями обычно ставим запятую.",
          "Если although-clause или when-clause стоит в начале, после неё обычно ставим запятую. Если она стоит после главной части, запятая обычно не нужна."
        ],
        "examples": [
          "When I reached the top, I was tired.",
          "I was tired when I reached the top.",
          "Although my flat is small, it’s perfect for me."
        ]
      },
      {
        "type": "note",
        "eyebrow": "Типичные ошибки",
        "title": "Что особенно важно не путать",
        "text": "Because = причина, so = результат. But и although оба показывают контраст, но не используются вместе для одной связи. When связывает два действия или действие с моментом; After that и The next day просто двигают рассказ к следующему событию. Suddenly обозначает неожиданность, а Two minutes later — конкретный промежуток времени."
      }
    ],
    "exercises": [
      {
        "id": "sequencers-connectors-step-1",
        "title": "1. Определи связь между идеями.",
        "difficulty": "Легко",
        "instructions": "Выбери, что показывает выделенное слово или выражение.",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "I was tired, so I went to bed. — What does “so” introduce?",
            "options": [
              "a reason",
              "a result",
              "a contrast",
              "a time"
            ],
            "answer": 1
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "I went home because I felt ill. — What does “because” introduce?",
            "options": [
              "a reason",
              "a result",
              "a contrast",
              "a time"
            ],
            "answer": 0
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "Although it was raining, we went out. — What relationship does “although” show?",
            "options": [
              "reason",
              "result",
              "contrast",
              "sequence"
            ],
            "answer": 2
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "Two minutes later, the bus arrived. — What does the phrase show?",
            "options": [
              "a reason",
              "an exact later point",
              "a contrast",
              "a result"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "sequencers-connectors-step-2",
        "title": "2. Впиши подходящее слово или выражение.",
        "difficulty": "Средне",
        "instructions": "Впиши connector или time sequencer, который подходит по смыслу.",
        "items": [
          {
            "id": "1",
            "input": "gaps",
            "segments": [
              "We were hungry, ",
              " we made dinner."
            ],
            "answers": [
              [
                "so"
              ]
            ]
          },
          {
            "id": "2",
            "input": "gaps",
            "segments": [
              "I stayed at home ",
              " I was tired."
            ],
            "answers": [
              [
                "because"
              ]
            ]
          },
          {
            "id": "3",
            "input": "gaps",
            "segments": [
              "",
              " the hotel was basic, it was clean."
            ],
            "answers": [
              [
                "Although",
                "although"
              ]
            ]
          },
          {
            "id": "4",
            "input": "gaps",
            "segments": [
              "We visited the museum. ",
              " we walked back to the hotel."
            ],
            "answers": [
              [
                "After that",
                "after that"
              ]
            ]
          }
        ]
      },
      {
        "id": "sequencers-connectors-step-3",
        "title": "3. Выбери правильную конструкцию по контексту.",
        "difficulty": "Повышенная сложность",
        "instructions": "Выбери слово, которое правильно показывает отношение между двумя идеями.",
        "items": [
          {
            "id": "1",
            "input": "select-gap",
            "segments": [
              "I missed the bus, ",
              " I took a taxi."
            ],
            "options": [
              "because",
              "so"
            ],
            "answer": 1
          },
          {
            "id": "2",
            "input": "select-gap",
            "segments": [
              "I took a taxi ",
              " I missed the bus."
            ],
            "options": [
              "because",
              "so"
            ],
            "answer": 0
          },
          {
            "id": "3",
            "input": "select-gap",
            "segments": [
              "",
              " the tickets were expensive, we bought them."
            ],
            "options": [
              "Although",
              "But"
            ],
            "answer": 0
          },
          {
            "id": "4",
            "input": "select-gap",
            "segments": [
              "The tickets were expensive, ",
              " we bought them."
            ],
            "options": [
              "although",
              "but"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "sequencers-connectors-step-4",
        "title": "4. Построй предложение самостоятельно.",
        "difficulty": "Самое сложное",
        "instructions": "Используй все данные слова и подходящую структуру. Напиши полное предложение.",
        "items": [
          {
            "id": "1",
            "input": "text",
            "prompt": "although / it / rain / we / go for a walk",
            "acceptedAnswers": [
              "Although it was raining, we went for a walk.",
              "We went for a walk although it was raining."
            ]
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "I / be tired / so / I / go to bed",
            "acceptedAnswers": [
              "I was tired, so I went to bed."
            ]
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "I / arrive home. / After that / I / phone my friend",
            "acceptedAnswers": [
              "I arrived home. After that, I phoned my friend."
            ]
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "when / I / reach the top / I / see the view",
            "acceptedAnswers": [
              "When I reached the top, I saw the view.",
              "I saw the view when I reached the top."
            ]
          }
        ]
      }
    ]
  }
];
