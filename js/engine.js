/* Meaningful Spanish — shared quiz engine.
   Renders 4 activity types (fillBlank, multipleChoice, matching, reorder) from a
   unified item schema, and drives both "practice" (drill) and "quiz" (scored) modes.
   Depends on feedback.js (showFeedback, getGradeReaction) and progress.js (Progress). */

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function initTabs(root) {
  const btns = root.querySelectorAll(".tab-btn");
  const panels = root.querySelectorAll(".panel");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.target).classList.add("active");
    });
  });
}

/* ---------------- Activity renderers ----------------
   Each renderer(item, container, onAnswered) draws its UI inside `container`
   and calls onAnswered(isCorrect, userAnswerText) exactly once when the
   student has answered. */

function renderFillBlank(item, container, onAnswered) {
  container.innerHTML = `
    <p class="q-prompt">${item.prompt}</p>
    <input type="text" class="q-input" autocomplete="off" spellcheck="false" placeholder="Escribe tu respuesta..." />
    <div class="action-row"><button class="btn check-btn">Check</button></div>
    <div class="feedback"></div>
  `;
  const input = container.querySelector(".q-input");
  const checkBtn = container.querySelector(".check-btn");
  const feedbackEl = container.querySelector(".feedback");
  input.focus();

  function normalize(s) {
    return s.trim().toLowerCase();
  }

  function check() {
    if (input.disabled) return;
    const userVal = input.value;
    const isCorrect = item.answers.some((a) => normalize(a) === normalize(userVal));
    input.disabled = true;
    checkBtn.disabled = true;
    const extra = isCorrect ? "" : ` Correct answer: <strong>${escapeHtml(item.answers[0])}</strong>.`;
    showFeedback(feedbackEl, isCorrect, item.explanation + extra, container);
    onAnswered(isCorrect, userVal);
  }

  checkBtn.addEventListener("click", check);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") check();
  });
}

function renderMultipleChoice(item, container, onAnswered) {
  container.innerHTML = `
    <p class="q-prompt">${item.prompt}</p>
    <div class="choice-list"></div>
    <div class="feedback"></div>
  `;
  const list = container.querySelector(".choice-list");
  const feedbackEl = container.querySelector(".feedback");
  let answered = false;

  item.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice;
    btn.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      const isCorrect = i === item.correctIndex;
      Array.from(list.children).forEach((b, j) => {
        b.disabled = true;
        if (j === item.correctIndex) b.classList.add("correct");
        else if (j === i) b.classList.add("incorrect");
      });
      showFeedback(feedbackEl, isCorrect, item.explanation, container);
      onAnswered(isCorrect, choice);
    });
    list.appendChild(btn);
  });
}

function renderMatching(item, container, onAnswered) {
  const leftItems = shuffle(item.pairs.map((p, i) => ({ text: p.left, idx: i })));
  const rightItems = shuffle(item.pairs.map((p, i) => ({ text: p.right, idx: i })));

  container.innerHTML = `
    <p class="q-prompt">${item.prompt}</p>
    <div class="match-grid">
      <div class="match-col left-col"></div>
      <div class="match-col right-col"></div>
    </div>
    <div class="feedback"></div>
  `;
  const leftCol = container.querySelector(".left-col");
  const rightCol = container.querySelector(".right-col");
  const feedbackEl = container.querySelector(".feedback");

  let selectedLeft = null;
  let matchedCount = 0;
  let mistakes = 0;
  const total = item.pairs.length;

  function makeChip(obj, col, side) {
    const chip = document.createElement("button");
    chip.className = "match-chip";
    chip.textContent = obj.text;
    chip.addEventListener("click", () => {
      if (chip.classList.contains("matched")) return;
      if (side === "left") {
        Array.from(leftCol.children).forEach((c) => c.classList.remove("selected"));
        chip.classList.add("selected");
        selectedLeft = { chip, idx: obj.idx };
      } else {
        if (!selectedLeft) return;
        if (selectedLeft.idx === obj.idx) {
          selectedLeft.chip.classList.add("matched");
          chip.classList.add("matched");
          selectedLeft.chip.disabled = true;
          chip.disabled = true;
          matchedCount++;
          selectedLeft = null;
          if (matchedCount === total) {
            const isCorrect = mistakes === 0;
            showFeedback(feedbackEl, isCorrect, item.explanation, container);
            onAnswered(isCorrect, `matched all pairs (${mistakes} mistake${mistakes === 1 ? "" : "s"})`);
          }
        } else {
          mistakes++;
          chip.classList.add("wrong-flash");
          selectedLeft.chip.classList.add("wrong-flash");
          container.classList.remove("shake");
          void container.offsetWidth;
          container.classList.add("shake");
          const badLeft = selectedLeft.chip;
          selectedLeft = null;
          setTimeout(() => {
            chip.classList.remove("wrong-flash");
            badLeft.classList.remove("wrong-flash", "selected");
          }, 450);
        }
      }
    });
    col.appendChild(chip);
  }

  leftItems.forEach((o) => makeChip(o, leftCol, "left"));
  rightItems.forEach((o) => makeChip(o, rightCol, "right"));
}

function renderReorder(item, container, onAnswered) {
  const pool = item.tokens.map((t, i) => ({ text: t, id: i, placed: false }));
  const slotOrder = [];
  let answered = false;

  container.innerHTML = `
    <p class="q-prompt">${item.prompt}</p>
    <div class="reorder-slot"></div>
    <div class="reorder-pool"></div>
    <div class="action-row">
      <button class="btn check-btn">Check</button>
      <button class="btn secondary reset-btn">Reset</button>
    </div>
    <div class="feedback"></div>
  `;
  const slotEl = container.querySelector(".reorder-slot");
  const poolEl = container.querySelector(".reorder-pool");
  const checkBtn = container.querySelector(".check-btn");
  const resetBtn = container.querySelector(".reset-btn");
  const feedbackEl = container.querySelector(".feedback");

  function makeChip(tok, inSlot) {
    const chip = document.createElement("button");
    chip.className = "token-chip" + (inSlot ? " placed" : "");
    chip.textContent = tok.text;
    chip.disabled = answered;
    chip.addEventListener("click", () => {
      if (answered) return;
      if (tok.placed) {
        tok.placed = false;
        const idx = slotOrder.indexOf(tok.id);
        if (idx > -1) slotOrder.splice(idx, 1);
      } else {
        tok.placed = true;
        slotOrder.push(tok.id);
      }
      render();
    });
    return chip;
  }

  function render() {
    poolEl.innerHTML = "";
    slotEl.innerHTML = "";
    pool.filter((t) => !t.placed).forEach((t) => poolEl.appendChild(makeChip(t, false)));
    slotOrder.forEach((id) => slotEl.appendChild(makeChip(pool.find((t) => t.id === id), true)));
  }
  render();

  checkBtn.addEventListener("click", () => {
    if (answered) return;
    const built = slotOrder.map((id) => pool.find((t) => t.id === id).text).join(" ");
    const isCorrect = item.acceptedAnswers.some((ans) => ans.join(" ") === built);
    answered = true;
    render();
    checkBtn.disabled = true;
    const extra = isCorrect ? "" : ` One correct order: <strong>${escapeHtml(item.acceptedAnswers[0].join(" "))}</strong>.`;
    showFeedback(feedbackEl, isCorrect, item.explanation + extra, container);
    onAnswered(isCorrect, built);
  });

  resetBtn.addEventListener("click", () => {
    if (answered) return;
    pool.forEach((t) => (t.placed = false));
    slotOrder.length = 0;
    render();
  });
}

const RENDERERS = {
  fillBlank: renderFillBlank,
  multipleChoice: renderMultipleChoice,
  matching: renderMatching,
  reorder: renderReorder,
};

function correctAnswerText(item) {
  if (item.type === "fillBlank") return item.answers[0];
  if (item.type === "multipleChoice") return item.choices[item.correctIndex];
  if (item.type === "reorder") return item.acceptedAnswers[0].join(" ");
  if (item.type === "matching") return item.pairs.map((p) => `${p.left} → ${p.right}`).join(", ");
  return "";
}

/* ---------------- Driver: steps through an item array, tracks score,
   and renders a results screen (quiz mode) or a "nice work" screen (practice mode). */

const QuizEngine = {
  mount(config) {
    const { items, rootEl, mode, sectionId, recordProgress = true, noShuffle = false } = config;
    let index = 0;
    let score = 0;
    const missed = [];
    const workingItems = noShuffle ? items : shuffle(items);

    rootEl.innerHTML = "";
    const scoreBar = document.createElement("div");
    const qCard = document.createElement("div");
    qCard.className = "q-card";
    if (mode === "quiz") {
      scoreBar.className = "score-bar";
      rootEl.appendChild(scoreBar);
    }
    rootEl.appendChild(qCard);

    function updateScoreBar() {
      if (mode !== "quiz") return;
      const pct = Math.round((index / workingItems.length) * 100);
      scoreBar.innerHTML = `
        <span>Q${Math.min(index + 1, workingItems.length)}/${workingItems.length}</span>
        <div class="track"><div class="fill" style="width:${pct}%"></div></div>
        <span>Score: ${score}</span>
      `;
    }

    function renderItem() {
      updateScoreBar();
      const item = workingItems[index];
      qCard.innerHTML = `<div class="q-progress">${mode === "quiz" ? "Self-check quiz" : "Practice"} — item ${index + 1} of ${workingItems.length}</div><div class="item-slot"></div>`;
      const slot = qCard.querySelector(".item-slot");

      const onAnswered = (isCorrect, userAnswer) => {
        if (isCorrect) score++;
        else missed.push({ item, userAnswer });
        const nextBtn = document.createElement("button");
        nextBtn.className = "btn";
        nextBtn.style.marginTop = "14px";
        nextBtn.textContent = index + 1 < workingItems.length ? "Next →" : "See results";
        slot.appendChild(nextBtn);
        nextBtn.addEventListener("click", () => {
          index++;
          if (index < workingItems.length) renderItem();
          else finish();
        });
        nextBtn.focus();
      };

      RENDERERS[item.type](item, slot, onAnswered);
    }

    function finish() {
      const fraction = workingItems.length ? score / workingItems.length : 0;
      if (recordProgress && sectionId && mode === "quiz") {
        Progress.recordQuizResult(sectionId, fraction);
      }
      if (mode === "quiz") renderResults(fraction);
      else renderPracticeComplete();
    }

    function renderPracticeComplete() {
      qCard.innerHTML = `
        <div class="results-card">
          <div class="grade">🎉</div>
          <p class="grade-msg">Drill complete — ${score}/${workingItems.length} correct. Nice work.</p>
          <div class="action-row" style="justify-content:center">
            <button class="btn restart-btn">Do it again</button>
          </div>
        </div>
      `;
      qCard.querySelector(".restart-btn").addEventListener("click", () => QuizEngine.mount(config));
    }

    function renderResults(fraction) {
      const reaction = getGradeReaction(fraction);
      let missedHtml = "";
      if (missed.length) {
        missedHtml =
          `<div class="missed-list"><h3>Missed items</h3>` +
          missed
            .map(
              (m) => `
            <div class="missed-item">
              <div>${m.item.prompt}</div>
              <div class="yours">Your answer: ${escapeHtml(String(m.userAnswer))}</div>
              <div class="correct-ans">Correct: ${escapeHtml(correctAnswerText(m.item))}</div>
              <div>${m.item.explanation}</div>
            </div>`
            )
            .join("") +
          `</div>`;
      }
      qCard.innerHTML = `
        <div class="results-card">
          <div class="grade">${reaction.grade}</div>
          <p class="grade-msg">${score}/${workingItems.length} — ${reaction.msg}</p>
          <div class="action-row" style="justify-content:center">
            ${missed.length ? '<button class="btn retry-missed-btn">Retry missed only</button>' : ""}
            <button class="btn secondary retry-all-btn">Retake full quiz</button>
          </div>
          ${missedHtml}
        </div>
      `;
      if (missed.length) {
        qCard.querySelector(".retry-missed-btn").addEventListener("click", () => {
          QuizEngine.mount({
            ...config,
            items: missed.map((m) => m.item),
            recordProgress: false,
            noShuffle: true,
          });
        });
      }
      qCard.querySelector(".retry-all-btn").addEventListener("click", () => QuizEngine.mount(config));
    }

    renderItem();
  },
};
