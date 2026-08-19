-- Anastasia & Rozalina English Space
-- Run in Supabase Dashboard -> SQL Editor once before using cloud progress.
-- This script creates/updates the progress tables for two profiles and lets both
-- student IDs use the same teacher Telegram chat.

create extension if not exists pgcrypto;

create table if not exists public.homework_progress (
  student_id text not null,
  student_name text,
  lesson_id text not null,
  lesson_title text,
  status text not null default 'checked',
  answers jsonb not null default '{}'::jsonb,
  score_correct integer,
  score_total integer,
  score_percent integer,
  checked_at timestamptz,
  submitted_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (student_id, lesson_id)
);

create table if not exists public.vocabulary_progress (
  student_id text not null,
  word_key text not null,
  word_id text,
  en text,
  ru text,
  source_topic_id text,
  status text not null,
  learned_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (student_id, word_key)
);

create table if not exists public.vocabulary_topic_progress (
  student_id text not null,
  topic_id text not null,
  tests jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (student_id, topic_id)
);

create table if not exists public.grammar_progress (
  student_id text not null,
  topic_id text not null,
  passed boolean not null default false,
  attempts integer not null default 0,
  best_score integer not null default 0,
  updated_at timestamptz not null default now(),
  primary key (student_id, topic_id)
);

create table if not exists public.homework_reports (
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

create table if not exists public.telegram_recipients (
  id uuid primary key default gen_random_uuid(),
  student_id text not null unique,
  chat_id bigint not null,
  enabled boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.material_publications (
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

-- The original one-student project had chat_id UNIQUE. A pair course needs the
-- same teacher chat to be reusable for both student IDs.
do $$
declare c record;
begin
  for c in
    select conname
    from pg_constraint
    where conrelid = 'public.telegram_recipients'::regclass
      and contype = 'u'
      and pg_get_constraintdef(oid) ilike '%(chat_id)%'
  loop
    execute format('alter table public.telegram_recipients drop constraint %I', c.conname);
  end loop;
end $$;

create or replace function public.set_pair_course_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

do $$
declare t text;
begin
  foreach t in array array[
    'homework_progress','vocabulary_progress','vocabulary_topic_progress',
    'grammar_progress','homework_reports','telegram_recipients','material_publications'
  ] loop
    execute format('drop trigger if exists pair_course_updated_at on public.%I', t);
    execute format('create trigger pair_course_updated_at before update on public.%I for each row execute function public.set_pair_course_updated_at()', t);
  end loop;
end $$;

-- Replace any old browser policies with policies for the two selectable profiles.
do $$
declare p record;
begin
  for p in
    select schemaname, tablename, policyname
    from pg_policies
    where schemaname = 'public'
      and tablename in ('homework_progress','vocabulary_progress','vocabulary_topic_progress','grammar_progress')
  loop
    execute format('drop policy %I on %I.%I', p.policyname, p.schemaname, p.tablename);
  end loop;
end $$;

alter table public.homework_progress enable row level security;
alter table public.vocabulary_progress enable row level security;
alter table public.vocabulary_topic_progress enable row level security;
alter table public.grammar_progress enable row level security;

create policy pair_homework_access on public.homework_progress
for all to anon, authenticated
using (student_id in ('anastasia','rozalina'))
with check (student_id in ('anastasia','rozalina'));

create policy pair_vocabulary_access on public.vocabulary_progress
for all to anon, authenticated
using (student_id in ('anastasia','rozalina'))
with check (student_id in ('anastasia','rozalina'));

create policy pair_vocabulary_topics_access on public.vocabulary_topic_progress
for all to anon, authenticated
using (student_id in ('anastasia','rozalina'))
with check (student_id in ('anastasia','rozalina'));

create policy pair_grammar_access on public.grammar_progress
for all to anon, authenticated
using (student_id in ('anastasia','rozalina'))
with check (student_id in ('anastasia','rozalina'));

grant select, insert, update, delete on public.homework_progress to anon, authenticated;
grant select, insert, update, delete on public.vocabulary_progress to anon, authenticated;
grant select, insert, update, delete on public.vocabulary_topic_progress to anon, authenticated;
grant select, insert, update, delete on public.grammar_progress to anon, authenticated;

-- Server-only Telegram/report tables.
alter table public.homework_reports enable row level security;
alter table public.telegram_recipients enable row level security;
alter table public.material_publications enable row level security;
revoke all on public.homework_reports from anon, authenticated;
revoke all on public.telegram_recipients from anon, authenticated;
revoke all on public.material_publications from anon, authenticated;
grant all on public.homework_reports to service_role;
grant all on public.telegram_recipients to service_role;
grant all on public.material_publications to service_role;

-- Telegram group for both profiles: https://t.me/c/4474379239/2
-- Group chat_id: -1004474379239. Topic/thread ID 2 is configured in the Edge Function.
insert into public.telegram_recipients (student_id, chat_id, enabled)
values
  ('anastasia', -1004474379239, true),
  ('rozalina', -1004474379239, true)
on conflict (student_id) do update
set chat_id = excluded.chat_id,
    enabled = excluded.enabled,
    updated_at = now();
