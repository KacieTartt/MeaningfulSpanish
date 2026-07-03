/* Meaningful Spanish — localStorage progress helpers (best score + completion per section) */

const Progress = {
  key(sectionId, field) {
    return `spanishGrammar.${sectionId}.${field}`;
  },

  getBestScore(sectionId) {
    const raw = localStorage.getItem(this.key(sectionId, "bestScore"));
    return raw === null ? null : Number(raw);
  },

  getCompleted(sectionId) {
    return localStorage.getItem(this.key(sectionId, "completed")) === "true";
  },

  recordQuizResult(sectionId, fraction) {
    const prev = this.getBestScore(sectionId);
    if (prev === null || fraction > prev) {
      localStorage.setItem(this.key(sectionId, "bestScore"), String(fraction));
    }
    localStorage.setItem(this.key(sectionId, "completed"), "true");
  },
};
