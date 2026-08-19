ДИАГНОСТИКА — АНАСТАСИЯ + РОЗАЛИНА
===================================

В архиве только файлы, которые нужно добавить/заменить для страницы диагностики.

1. В корень сайта добавить/заменить:
   diagnostics.html
   diagnostics.js

2. В Supabase Edge Function notify-anastasia-rozalina заменить код на:
   supabase/functions/notify-anastasia-rozalina/index.ts
   и нажать Deploy.

Важно: имя функции не меняется — notify-anastasia-rozalina.
Другие Edge Functions и сайты других учеников не трогаются.

3. Открыть опубликованную страницу:
   .../diagnostics.html

На странице сверху можно выбрать:
   Анастасия
   Розалина

Проверки выполняются отдельно по student_id:
   anastasia
   rozalina

Что проверяется:
- config.js и профиль выбранной ученицы;
- загрузка Supabase JS;
- чтение homework_progress через браузер/RLS;
- отдельная Edge Function notify-anastasia-rozalina;
- чтение Supabase через service role;
- pair_telegram_recipients;
- Telegram Bot API и доступ к группе;
- message_thread_id = 2;
- состояние записей ДЗ;
- зависшие/ошибочные Telegram-отчёты;
- полный тест временной записи homework_progress;
- отдельная отправка тестового сообщения в Telegram.

Тест записи создаёт строку с lesson_id вида __diagnostic_probe__... и удаляет её после проверки.
Реальные домашние работы не меняются.

Тест Telegram отправляет служебное сообщение в:
группа: -1004474379239
тема: 2
и указывает, для какой ученицы выполнялась диагностика.
