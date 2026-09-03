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
    "id": "grammar-present-continuous",
    "order": 2,
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
          { "word": "What", "translation": "что?", "role": "Вопросительное слово", "kind": "question" },
          { "word": "is", "translation": "не переводим", "role": "Форма be", "kind": "helper" },
          { "word": "she", "translation": "она", "role": "Кто?", "kind": "subject" },
          { "word": "wearing?", "translation": "на ней надето?", "role": "Глагол + -ing", "kind": "action" }
        ]
      },
      "withoutQuestionWord": {
        "label": "Если вопросительного слова нет",
        "parts": [
          { "word": "Is", "translation": "не переводим", "role": "Форма be", "kind": "helper" },
          { "word": "he", "translation": "он", "role": "Кто?", "kind": "subject" },
          { "word": "sleeping?", "translation": "спит?", "role": "Глагол + -ing", "kind": "action" }
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
        "headers": ["Кто?", "Полная форма", "Сокращение"],
        "rows": [
          ["I", "am", "I’m"],
          ["he / she / it", "is", "he’s / she’s / it’s"],
          ["you / we / they", "are", "you’re / we’re / they’re"]
        ]
      },
      {
        "title": "Утверждение, отрицание и вопрос",
        "headers": ["Форма", "Схема", "Пример"],
        "rows": [
          ["Утверждение", "subject + be + verb-ing", "She is wearing a dress."],
          ["Отрицание", "subject + be + not + verb-ing", "She isn’t wearing a dress."],
          ["Вопрос", "be + subject + verb-ing?", "Is she wearing a dress?"]
        ]
      },
      {
        "title": "Короткие ответы",
        "headers": ["Вопрос", "Да", "Нет"],
        "rows": [
          ["Am I …?", "Yes, you are.", "No, you aren’t."],
          ["Is he / she / it …?", "Yes, he / she / it is.", "No, he / she / it isn’t."],
          ["Are you / we / they …?", "Yes, you / we / they are.", "No, you / we / they aren’t."]
        ]
      },
      {
        "title": "Написание формы -ing",
        "headers": ["Тип глагола", "Что делаем", "Пример"],
        "rows": [
          ["обычно", "+ ing", "wear → wearing"],
          ["немая -e", "убираем e", "ride → riding"],
          ["короткая гласная + согласная", "удваиваем согласную", "sit → sitting"],
          ["-ie", "ie → y", "lie → lying"]
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
          { "id": "1", "input": "single", "prompt": "I ___ looking at the photo.", "options": ["am", "is"], "answer": 0 },
          { "id": "2", "input": "single", "prompt": "She ___ wearing a tracksuit.", "options": ["is", "are"], "answer": 0 },
          { "id": "3", "input": "single", "prompt": "They ___ playing football.", "options": ["is", "are"], "answer": 1 },
          { "id": "4", "input": "single", "prompt": "He is ___ a bike.", "options": ["riding", "rideing"], "answer": 0 }
        ]
      },
      {
        "id": "present-continuous-step-2",
        "title": "2. Поставь глагол в Present Continuous.",
        "difficulty": "Средне",
        "instructions": "Впиши полную правильную форму глагола в Present Continuous.",
        "items": [
          { "id": "1", "input": "gaps", "segments": ["The woman ", " a bag. (carry)"], "answers": [["is carrying", "'s carrying"]] },
          { "id": "2", "input": "gaps", "segments": ["We ", " shorts today. (wear)"], "answers": [["are wearing", "'re wearing"]] },
          { "id": "3", "input": "gaps", "segments": ["He ", ". (not smile)"], "answers": [["isn't smiling", "is not smiling"]] },
          { "id": "4", "input": "gaps", "segments": ["I ", " my homework. (do)"], "answers": [["am doing", "'m doing"]] }
        ]
      },
      {
        "id": "present-continuous-step-3",
        "title": "3. Выбери форму по контексту.",
        "difficulty": "Повышенная сложность",
        "instructions": "Выбери Present Simple или Present Continuous по смыслу предложения.",
        "items": [
          { "id": "1", "input": "circle-or-tick", "segments": ["Look! They ", " football."], "options": ["play", "are playing"], "answer": "1" },
          { "id": "2", "input": "circle-or-tick", "segments": ["He usually ", " a bike to work."], "options": ["rides", "is riding"], "answer": "0" },
          { "id": "3", "input": "circle-or-tick", "segments": ["She ", " a dress today."], "options": ["wears", "is wearing"], "answer": "1" },
          { "id": "4", "input": "circle-or-tick", "segments": ["I ", " this painting."], "options": ["like", "am liking"], "answer": "0" }
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
            "wordBank": ["the woman", "wear", "a dress and a cardigan"],
            "placeholder": "Напиши полное предложение",
            "acceptedAnswers": ["The woman is wearing a dress and a cardigan.", "The woman’s wearing a dress and a cardigan."]
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "Составь отрицание.",
            "wordBank": ["he", "not sleep"],
            "placeholder": "Напиши полное предложение",
            "acceptedAnswers": ["He isn’t sleeping.", "He is not sleeping."]
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "Составь вопрос.",
            "wordBank": ["what", "she", "do"],
            "placeholder": "Напиши полный вопрос",
            "answer": "What is she doing?"
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "Составь вопрос.",
            "wordBank": ["they", "play football"],
            "placeholder": "Напиши полный вопрос",
            "answer": "Are they playing football?"
          }
        ]
      }
    ],
    "linkedLessonId": "lesson-3"
  }
];
