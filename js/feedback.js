/* Meaningful Spanish — FeedbackBank + shake/confetti effects */

const FeedbackBank = {
  correct: [
    "¡Órale! Nailed it.",
    "Correcto. Your Spanish professor is shedding a single proud tear.",
    "Yes! That's the one. Put it on your resume.",
    "Perfecto. You just out-conjugated MindTap.",
    "That's right — go treat yourself to a Takis break.",
    "¡Exacto! You're built different (grammatically speaking).",
    "Correct. The group project could never.",
    "Boom. Even your 2 a.m. brain got that one.",
    "Sí señor/señora. That's textbook — the good kind.",
    "Nailed it. Somewhere, a Spanish 101 syllabus is smiling.",
    "Correcto. You didn't even need the extra credit for that one.",
    "¡Bien hecho! That answer had main character energy.",
  ],
  incorrect: [
    "You have failed this family. (Just kidding. Try again.)",
    "Nope — but an A for confidence.",
    "Not quite. The verb tense police have been notified.",
    "That's a swing and a miss. Dust off and retry.",
    "Close, but no Takis for you yet.",
    "Incorrecto. Even your roommate's cat conjugates better.",
    "Not it — but at least you committed to the bit.",
    "Wrong answer, right vibes. Try again.",
    "Nope. That one belongs in the group chat, not the quiz.",
    "Not quite — this is your villain origin story, not your final answer.",
    "Missed it. Breathe. Hydrate. Retry.",
    "Incorrecto — but the semester isn't over yet.",
  ],
};

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Show the feedback banner inside a container, with optional shake/confetti.
 * @param {HTMLElement} feedbackEl - element with class "feedback"
 * @param {boolean} isCorrect
 * @param {string} explanation
 * @param {HTMLElement} [shakeTarget] - element to apply the shake animation to
 */
function showFeedback(feedbackEl, isCorrect, explanation, shakeTarget) {
  feedbackEl.classList.remove("correct", "incorrect", "show");
  feedbackEl.classList.add("show", isCorrect ? "correct" : "incorrect");
  const msg = isCorrect ? pickRandom(FeedbackBank.correct) : pickRandom(FeedbackBank.incorrect);
  feedbackEl.innerHTML = `${msg}<span class="explain">${explanation}</span>`;

  if (isCorrect) {
    burstConfetti();
  } else if (shakeTarget) {
    shakeTarget.classList.remove("shake");
    // force reflow so the animation can retrigger on consecutive wrong answers
    void shakeTarget.offsetWidth;
    shakeTarget.classList.add("shake");
  }
}

function burstConfetti() {
  const colors = ["#ff5d5d", "#3d5af1", "#ffb703", "#1f9d55", "#d63f3f"];
  let overlay = document.querySelector(".confetti-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "confetti-overlay";
    document.body.appendChild(overlay);
  }
  const pieceCount = 18;
  for (let i = 0; i < pieceCount; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    const duration = 1.1 + Math.random() * 0.9;
    piece.style.animationDuration = duration + "s";
    piece.style.animationDelay = Math.random() * 0.15 + "s";
    overlay.appendChild(piece);
  }
  setTimeout(() => {
    overlay.innerHTML = "";
  }, 2200);
}

const GradeReactions = [
  { min: 0.9, grade: "A+", msg: "Straight vibes, no notes. You could teach this section." },
  { min: 0.75, grade: "A-", msg: "Very solid. MindTap wishes it could see numbers like these." },
  { min: 0.6, grade: "B", msg: "Good showing. A little more review and this is locked in." },
  { min: 0.4, grade: "C+", msg: "Progress, not perfection. Hit retry on the missed ones." },
  { min: 0, grade: "Bless your heart", msg: "Rough round — but that's what retry is for. No shade, no stress." },
];

function getGradeReaction(fraction) {
  return GradeReactions.find((g) => fraction >= g.min);
}
