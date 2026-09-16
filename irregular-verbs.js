(() => {
  'use strict';

  const TOPIC_ID = 'irregular-verbs';
  const TEST_SIZE = 10;
  const verbs = Array.isArray(window.IRREGULAR_VERBS_DATA) ? window.IRREGULAR_VERBS_DATA : [];

  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const shuffled = (items) => {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const percent = (value, total) => total > 0 ? Math.round((value / total) * 100) : 0;
  const wordKey = (verb) => `irregular:${String(verb.infinitive || '').trim().toLowerCase()}`;

  function normalizeTyped(value) {
    return String(value ?? '')
      .normalize('NFKC')
      .toLowerCase()
      .replace(/[’‘`]/g, "'")
      .replace(/[.,;:!?()[\]{}]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function cleanDisplayedForm(value) {
    return String(value ?? '')
      .replace(/\s*\/[^/]+\/\s*$/u, '')
      .trim();
  }

  function matchesForm(verb, field, answer) {
    const typed = normalizeTyped(answer);
    if (!typed) return false;

    if (verb.infinitive === 'be' && field === 'past') {
      const tokens = typed.split(/[\s/,+&]+/).filter(Boolean);
      const set = new Set(tokens);
      return set.has('was') && set.has('were') && [...set].every((item) => item === 'was' || item === 'were');
    }

    const expected = normalizeTyped(cleanDisplayedForm(verb[field]));
    return typed === expected;
  }

  function ensureTopic(progress) {
    if (!progress.topics[TOPIC_ID]) progress.topics[TOPIC_ID] = { tests: [] };
    if (!Array.isArray(progress.topics[TOPIC_ID].tests)) progress.topics[TOPIC_ID].tests = [];
    return progress.topics[TOPIC_ID];
  }

  function stateFor(progress, verb) {
    return progress.words[wordKey(verb)] || null;
  }

  function setVerbStatus(progress, verb, status) {
    const now = new Date().toISOString();
    const key = wordKey(verb);
    const previous = progress.words[key] || {};
    progress.words[key] = {
      ...previous,
      status,
      topicId: TOPIC_ID,
      kind: 'irregular-verb',
      wordId: `irregular-${verb.infinitive}`,
      en: verb.infinitive,
      ru: verb.ru,
      learnedAt: status === 'known' ? (previous.learnedAt || now) : null,
      updatedAt: now
    };
  }

  function bestTest(topicProgress) {
    const tests = Array.isArray(topicProgress.tests) ? topicProgress.tests : [];
    if (!tests.length) return null;
    return tests.reduce((best, item) => {
      const itemPercent = Number(item.percent || 0);
      return !best || itemPercent > Number(best.percent || 0) ? item : best;
    }, null);
  }

  function renderPage() {
    const service = window.ProgressService;
    const body = document.getElementById('irregular-verbs-body');
    const input = document.getElementById('irregular-search');
    const count = document.getElementById('irregular-count');
    const empty = document.getElementById('irregular-empty');
    const tableWrap = document.querySelector('.irregular-table-wrap');
    const filters = document.getElementById('irregular-filters');
    const startButton = document.getElementById('start-irregular-test');
    const testRoot = document.getElementById('irregular-test-root');
    const testSection = document.getElementById('irregular-test-section');

    if (!service || !body || !input || !count || !empty || !tableWrap || !filters || !startButton || !testRoot || !testSection) return;

    const progress = service.loadVocabularyProgress();
    const topicProgress = ensureTopic(progress);
    let activeFilter = 'all';
    let testState = null;

    const save = () => service.saveVocabularyProgress(progress);

    const renderStats = () => {
      const learned = verbs.filter((verb) => stateFor(progress, verb)?.status === 'known').length;
      const difficult = verbs.filter((verb) => stateFor(progress, verb)?.status === 'difficult').length;
      const best = bestTest(topicProgress);
      const progressPercent = percent(learned, verbs.length);

      const learnedNode = document.getElementById('irregular-learned');
      const difficultNode = document.getElementById('irregular-difficult');
      const totalNode = document.getElementById('irregular-total');
      const percentNode = document.getElementById('irregular-percent');
      const bestNode = document.getElementById('irregular-best');
      const fillNode = document.getElementById('irregular-progress-fill');
      const labelNode = document.getElementById('irregular-progress-label');

      if (learnedNode) learnedNode.textContent = learned;
      if (difficultNode) difficultNode.textContent = difficult;
      if (totalNode) totalNode.textContent = verbs.length;
      if (percentNode) percentNode.textContent = `${progressPercent}%`;
      if (bestNode) bestNode.textContent = best ? `${best.score}/${best.total}` : '—';
      if (fillNode) fillNode.style.width = `${progressPercent}%`;
      if (labelNode) labelNode.textContent = `${learned} of ${verbs.length} learned`;
    };

    const renderTable = () => {
      const query = input.value.trim().toLocaleLowerCase('ru-RU');
      const filtered = verbs.filter((verb) => {
        const state = stateFor(progress, verb);
        const status = state?.status || 'new';
        const matchesFilter = activeFilter === 'all'
          || (activeFilter === 'learned' && status === 'known')
          || (activeFilter === 'difficult' && status === 'difficult')
          || (activeFilter === 'to-learn' && status !== 'known');
        if (!matchesFilter) return false;
        if (!query) return true;
        return [verb.infinitive, verb.past, verb.participle, verb.ru]
          .some((value) => String(value || '').toLocaleLowerCase('ru-RU').includes(query));
      });

      body.innerHTML = filtered.map((verb) => {
        const status = stateFor(progress, verb)?.status || 'new';
        const badge = status === 'known'
          ? '<span class="verb-status verb-status-known">Learned</span>'
          : status === 'difficult'
            ? '<span class="verb-status verb-status-difficult">Difficult</span>'
            : '<span class="verb-status verb-status-new">To learn</span>';
        return `<tr>
          <td><span class="verb-form">${escapeHtml(verb.infinitive)}</span></td>
          <td><span class="verb-form">${escapeHtml(verb.past)}</span></td>
          <td><span class="verb-form">${escapeHtml(verb.participle)}</span></td>
          <td>${escapeHtml(verb.ru)}</td>
          <td>${badge}</td>
        </tr>`;
      }).join('');

      count.textContent = `${filtered.length} of ${verbs.length}`;
      empty.hidden = filtered.length > 0;
      tableWrap.hidden = filtered.length === 0;
    };

    const refreshProgressUi = () => {
      renderStats();
      renderTable();
    };

    const selectTestWords = () => {
      const toLearn = shuffled(verbs.filter((verb) => stateFor(progress, verb)?.status !== 'known'));
      const learned = shuffled(verbs.filter((verb) => stateFor(progress, verb)?.status === 'known'));
      return [...toLearn, ...learned].slice(0, Math.min(TEST_SIZE, verbs.length));
    };

    const closeTest = () => {
      testState = null;
      testSection.hidden = true;
      testRoot.innerHTML = '';
      startButton.disabled = false;
      startButton.textContent = 'Start test';
    };

    const finishTest = () => {
      const result = {
        score: testState.firstTryCorrect,
        total: testState.words.length,
        percent: percent(testState.firstTryCorrect, testState.words.length),
        answers: testState.answers,
        completedAt: new Date().toISOString()
      };
      topicProgress.tests.push(result);
      save();
      refreshProgressUi();
      testRoot.innerHTML = `<article class="card irregular-test-card">
        <span class="eyebrow">Test complete</span>
        <h2>${result.score} of ${result.total} on the first try</h2>
        <p class="verb-note">Only verbs answered correctly on the first try are marked as learned. Difficult verbs stay in your personal review list.</p>
        <div class="button-row">
          <button class="btn btn-primary" id="restart-irregular-test" type="button">New 10-word test</button>
          <button class="btn btn-secondary" id="close-irregular-test" type="button">Back to table</button>
        </div>
      </article>`;
      document.getElementById('restart-irregular-test')?.addEventListener('click', startTest);
      document.getElementById('close-irregular-test')?.addEventListener('click', closeTest);
    };

    const drawQuestion = () => {
      if (!testState || testState.index >= testState.words.length) {
        finishTest();
        return;
      }

      const verb = testState.words[testState.index];
      testState.checked = false;
      const questionNumber = testState.index + 1;
      testRoot.innerHTML = `<article class="card irregular-test-card">
        <div class="flash-counter">Verb ${questionNumber} of ${testState.words.length}</div>
        <span class="eyebrow">Write both forms</span>
        <h2 class="flash-word">${escapeHtml(verb.infinitive)}</h2>
        <p class="verb-test-translation">${escapeHtml(verb.ru)}</p>
        <div class="verb-answer-grid">
          <label class="verb-answer-field">Past Simple
            <input id="irregular-past-answer" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="Past Simple form of ${escapeHtml(verb.infinitive)}">
          </label>
          <label class="verb-answer-field">Past Participle
            <input id="irregular-participle-answer" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="Past Participle form of ${escapeHtml(verb.infinitive)}">
          </label>
        </div>
        <div id="irregular-test-feedback" class="feedback" aria-live="polite"></div>
        <div class="button-row">
          <button class="btn btn-primary" id="check-irregular-answer" type="button">Check</button>
          <button class="btn btn-secondary" id="next-irregular-question" type="button" disabled>${questionNumber === testState.words.length ? 'Finish test' : 'Next verb'}</button>
        </div>
      </article>`;

      const pastInput = document.getElementById('irregular-past-answer');
      const participleInput = document.getElementById('irregular-participle-answer');
      const checkButton = document.getElementById('check-irregular-answer');
      const nextButton = document.getElementById('next-irregular-question');
      const feedback = document.getElementById('irregular-test-feedback');

      const check = () => {
        if (testState.checked) return;
        testState.checked = true;
        const pastCorrect = matchesForm(verb, 'past', pastInput.value);
        const participleCorrect = matchesForm(verb, 'participle', participleInput.value);
        const correct = pastCorrect && participleCorrect;

        testState.answers[wordKey(verb)] = {
          correct,
          past: pastInput.value.trim(),
          participle: participleInput.value.trim()
        };

        if (correct) {
          testState.firstTryCorrect += 1;
          setVerbStatus(progress, verb, 'known');
        } else {
          setVerbStatus(progress, verb, 'difficult');
        }
        save();
        refreshProgressUi();

        pastInput.classList.toggle('answer-correct', pastCorrect);
        pastInput.classList.toggle('answer-wrong', !pastCorrect);
        participleInput.classList.toggle('answer-correct', participleCorrect);
        participleInput.classList.toggle('answer-wrong', !participleCorrect);
        pastInput.disabled = true;
        participleInput.disabled = true;
        checkButton.disabled = true;
        nextButton.disabled = false;

        feedback.className = `feedback show ${correct ? 'good' : 'bad'}`;
        feedback.textContent = correct
          ? 'Both forms are correct. This verb is now learned.'
          : 'One or both forms need more practice. This verb has been added to Difficult.';
      };

      checkButton.addEventListener('click', check);
      [pastInput, participleInput].forEach((field) => field.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          check();
        }
      }));
      nextButton.addEventListener('click', () => {
        testState.index += 1;
        drawQuestion();
      });
      pastInput.focus();
    };

    function startTest() {
      const words = selectTestWords();
      if (!words.length) return;
      testState = {
        words,
        index: 0,
        firstTryCorrect: 0,
        answers: {},
        checked: false
      };
      testSection.hidden = false;
      startButton.disabled = true;
      startButton.textContent = 'Test in progress';
      drawQuestion();
      testSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    input.oninput = renderTable;
    filters.onclick = (event) => {
      const button = event.target.closest('[data-irregular-filter]');
      if (!button) return;
      activeFilter = button.dataset.irregularFilter;
      filters.querySelectorAll('[data-irregular-filter]').forEach((item) => item.classList.toggle('active', item === button));
      renderTable();
    };
    startButton.onclick = startTest;

    closeTest();
    refreshProgressUi();
  }

  window.renderIrregularVerbsPage = renderPage;
})();
