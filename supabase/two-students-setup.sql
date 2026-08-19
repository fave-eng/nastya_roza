-- Anastasia + Rozalina: additive setup inside the EXISTING shared Supabase project.
-- This script does not delete data, policies, recipients or functions of other sites.

create extension if not exists pgcrypto;

-- The progress tables are shared across sites and separated by student_id.
-- Add only columns required by the pair site's current progress/report protocol.
alter table public.homework_progress add column if not exists student_name text;
alter table public.homework_progress add column if not exists lesson_title text;
alter table public.homework_progress add column if not exists answers jsonb not null default '{}'::jsonb;
alter table public.homework_progress add column if not exists score_correct integer;
alter table public.homework_progress add column if not exists score_total integer;
alter table public.homework_progress add column if not exists score_percent integer;
alter table public.homework_progress add column if not exists checked_at timestamptz;
alter table public.homework_progress add column if not exists submitted_at timestamptz;
alter table public.homework_progress add column if not exists locked_at timestamptz;
alter table public.homework_progress add column if not exists report_status text not null default 'not_sent';
alter table public.homework_progress add column if not exists report_sent_at timestamptz;
alter table public.homework_progress add column if not exists report_error text;
alter table public.homework_progress add column if not exists updated_at timestamptz not null default now();

-- Pair-only server tables. They intentionally have their own names so Telegram
-- setup for this pair cannot interfere with another site's routing/logs.
create table if not exists public.pair_telegram_recipients (
  student_id text primary key,
  chat_id bigint not null,
  message_thread_id bigint,
  enabled boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.pair_homework_reports (
  id uuid primary key default gen_random_uuid(),
  student_id text not null,
  lesson_id text not null,
  submission_key text not null,
  status text not null default 'pending' check (status in ('pending','sent','failed')),
  score_correct integer,
  score_total integer,
  score_percent integer,
  payload jsonb not null default '{}'::jsonb,
  telegram_message_id bigint,
  error_message text,
  sent_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (student_id, lesson_id, submission_key)
);

create table if not exists public.pair_material_publications (
  id uuid primary key default gen_random_uuid(),
  student_id text not null,
  material_type text not null,
  material_id text not null,
  notification_version integer not null default 1 check (notification_version > 0),
  status text not null default 'pending' check (status in ('pending','sent','failed','skipped')),
  payload jsonb not null default '{}'::jsonb,
  telegram_message_id bigint,
  error_message text,
  sent_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (student_id, material_type, material_id, notification_version)
);

-- Pair-specific browser access. Existing policies stay untouched.
alter table public.homework_progress enable row level security;
alter table public.vocabulary_progress enable row level security;
alter table public.vocabulary_topic_progress enable row level security;
alter table public.grammar_progress enable row level security;

do $$
begin
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='homework_progress' and policyname='pair_anastasia_rozalina_homework') then
    execute $p$create policy pair_anastasia_rozalina_homework on public.homework_progress
      for all to anon, authenticated using (student_id in ('anastasia','rozalina'))
      with check (student_id in ('anastasia','rozalina'))$p$;
  end if;

  if not exists (select 1 from pg_policies where schemaname='public' and tablename='vocabulary_progress' and policyname='pair_anastasia_rozalina_vocabulary') then
    execute $p$create policy pair_anastasia_rozalina_vocabulary on public.vocabulary_progress
      for all to anon, authenticated using (student_id in ('anastasia','rozalina'))
      with check (student_id in ('anastasia','rozalina'))$p$;
  end if;

  if not exists (select 1 from pg_policies where schemaname='public' and tablename='vocabulary_topic_progress' and policyname='pair_anastasia_rozalina_vocabulary_topics') then
    execute $p$create policy pair_anastasia_rozalina_vocabulary_topics on public.vocabulary_topic_progress
      for all to anon, authenticated using (student_id in ('anastasia','rozalina'))
      with check (student_id in ('anastasia','rozalina'))$p$;
  end if;

  if not exists (select 1 from pg_policies where schemaname='public' and tablename='grammar_progress' and policyname='pair_anastasia_rozalina_grammar') then
    execute $p$create policy pair_anastasia_rozalina_grammar on public.grammar_progress
      for all to anon, authenticated using (student_id in ('anastasia','rozalina'))
      with check (student_id in ('anastasia','rozalina'))$p$;
  end if;
end $$;

grant select, insert, update, delete on public.homework_progress to anon, authenticated;
grant select, insert, update, delete on public.vocabulary_progress to anon, authenticated;
grant select, insert, update, delete on public.vocabulary_topic_progress to anon, authenticated;
grant select, insert, update, delete on public.grammar_progress to anon, authenticated;

-- Pair Telegram/report tables are server-only.
alter table public.pair_telegram_recipients enable row level security;
alter table public.pair_homework_reports enable row level security;
alter table public.pair_material_publications enable row level security;
revoke all on public.pair_telegram_recipients from anon, authenticated;
revoke all on public.pair_homework_reports from anon, authenticated;
revoke all on public.pair_material_publications from anon, authenticated;
grant all on public.pair_telegram_recipients to service_role;
grant all on public.pair_homework_reports to service_role;
grant all on public.pair_material_publications to service_role;

-- Both students use the same Telegram group and forum topic:
-- https://t.me/c/4474379239/2
insert into public.pair_telegram_recipients (student_id, chat_id, message_thread_id, enabled)
values
  ('anastasia', -1004474379239, 2, true),
  ('rozalina',  -1004474379239, 2, true)
on conflict (student_id) do update
set chat_id = excluded.chat_id,
    message_thread_id = excluded.message_thread_id,
    enabled = excluded.enabled,
    updated_at = now();
