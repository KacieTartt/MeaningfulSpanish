/* Preterite vs. Imperfect — the hardest call in the class, so it gets the most volume.
   Judgment-call MC items (often combined-blank, since choosing BOTH tenses correctly in
   one sentence is the actual skill), trigger-word matching, and a few straight fill-ins. */

const preteriteVsImperfectData = [
  {
    id: "pvi-001",
    type: "multipleChoice",
    prompt:
      "Anoche, mientras yo ___ (estudiar) para el final, mi roommate ___ (empezar) un maratón de reality TV a todo volumen.",
    choices: ["estudiaba / empezó", "estudié / empezaba", "estudiaba / empezaba"],
    correctIndex: 0,
    explanation:
      "'Mientras' sets the background (estudiaba = imperfect, ongoing) that a single completed event interrupts (empezó = preterite).",
  },
  {
    id: "pvi-002",
    type: "multipleChoice",
    prompt: "Yo ___ (dormir) tranquilamente cuando, de repente, sonó la alarma de incendios del dormitorio.",
    choices: ["dormía", "dormí", "he dormido"],
    correctIndex: 0,
    explanation: "'Dormía' is the interrupted background state; 'de repente' introduces the preterite event that broke it.",
  },
  {
    id: "pvi-003",
    type: "multipleChoice",
    prompt: "Todos los domingos, mi abuela me ___ (llamar) para preguntar por qué no como suficiente.",
    choices: ["llamó", "llamaba", "llama"],
    correctIndex: 1,
    explanation: "'Todos los domingos' is a habitual-action trigger word — imperfect, not preterite.",
  },
  {
    id: "pvi-004",
    type: "multipleChoice",
    prompt: "El sábado pasado, mi abuela me ___ (llamar) once veces porque no contesté a tiempo.",
    choices: ["llamó", "llamaba", "llama"],
    correctIndex: 0,
    explanation: "'El sábado pasado' + a countable number of times (once) = a bounded, completed event — preterite.",
  },
  {
    id: "pvi-005",
    type: "fillBlank",
    prompt: "De niño/a, yo siempre ___ (comer) cereal para la cena porque 'cocinar' me daba miedo.",
    answers: ["comía"],
    explanation: "Habitual childhood action ('de niño/a, siempre') = imperfect.",
  },
  {
    id: "pvi-006",
    type: "fillBlank",
    prompt: "Ayer ___ (comer, yo) cereal para la cena porque se me olvidó ir al supermercado.",
    answers: ["comí"],
    explanation: "'Ayer' + one specific occasion = a single completed event — preterite.",
  },
  {
    id: "pvi-007",
    type: "multipleChoice",
    prompt: "Cuando por fin ___ (llegar) el Uber Eats, ya ___ (ser) las 3 de la mañana.",
    choices: ["llegó / eran", "llegaba / fue", "llegó / fue"],
    correctIndex: 0,
    explanation: "The arrival is the plot event (llegó, preterite); the time-of-day description is background (eran, imperfect).",
  },
  {
    id: "pvi-008",
    type: "multipleChoice",
    prompt: "Mi compañera de cuarto ___ (conocer) a su novio actual en una fiesta de la fraternidad el año pasado.",
    choices: ["conocía", "conoció", "conocerá"],
    correctIndex: 1,
    explanation: "'Conocer' in the preterite means 'to meet' (a single moment), not 'to know' — matches 'el año pasado.'",
  },
  {
    id: "pvi-009",
    type: "multipleChoice",
    prompt: "Yo ya ___ (conocer) a mi compañero de cuarto antes de la universidad — fuimos al mismo colegio.",
    choices: ["conocía", "conocí", "conozco"],
    correctIndex: 0,
    explanation: "'Conocer' in the imperfect keeps its normal meaning, 'to know/be acquainted with' — an ongoing state, not a single meeting.",
  },
  {
    id: "pvi-010",
    type: "multipleChoice",
    prompt: "Yo no ___ (querer) ir a la fiesta, pero mis amigos me convencieron y al final fui.",
    choices: ["quería", "quise", "no quise"],
    correctIndex: 0,
    explanation: "Imperfect 'quería' = an ongoing feeling/preference (I didn't want to, as a state) — contrast with 'no quise' which would mean 'refused.'",
  },
  {
    id: "pvi-011",
    type: "multipleChoice",
    prompt: "Le pedí prestados sus apuntes a mi amiga y ella ___ (no querer) dármelos.",
    choices: ["no quería", "no quiso", "no queria"],
    correctIndex: 1,
    explanation: "'No querer' in the preterite means 'refused' — a single, completed decision, not an ongoing mood.",
  },
  {
    id: "pvi-012",
    type: "multipleChoice",
    prompt: "Después de horas de estudiar, por fin ___ (yo - saber) por qué mi código nunca funcionaba.",
    choices: ["sabía", "supe", "sé"],
    correctIndex: 1,
    explanation: "'Saber' in the preterite means 'found out' — the moment of realization, not an ongoing state of knowing.",
  },
  {
    id: "pvi-013",
    type: "multipleChoice",
    prompt: "Nosotros no ___ (poder) entrar a la fiesta porque se nos olvidó la identificación.",
    choices: ["podíamos", "pudimos", "no pudimos"],
    correctIndex: 2,
    explanation: "'No poder' in the preterite = a specific failed attempt ('couldn't / didn't manage to') on one occasion.",
  },
  {
    id: "pvi-014",
    type: "matching",
    prompt: "Empareja cada palabra clave con el tiempo verbal que normalmente activa (Preterite = evento puntual; Imperfect = trasfondo/hábito).",
    pairs: [
      { left: "de repente", right: "Preterite" },
      { left: "todos los días", right: "Imperfect" },
      { left: "anoche", right: "Preterite" },
      { left: "mientras", right: "Imperfect" },
      { left: "una vez", right: "Preterite" },
    ],
    explanation:
      "Sudden/one-time markers (de repente, anoche, una vez) point to preterite; ongoing/habitual markers (todos los días, mientras) point to imperfect.",
  },
  {
    id: "pvi-015",
    type: "matching",
    prompt: "Empareja cada palabra clave con el tiempo verbal que normalmente activa.",
    pairs: [
      { left: "cada verano", right: "Imperfect" },
      { left: "inmediatamente", right: "Preterite" },
      { left: "en esos tiempos", right: "Imperfect" },
      { left: "finalmente", right: "Preterite" },
      { left: "a menudo", right: "Imperfect" },
    ],
    explanation:
      "'Cada verano,' 'en esos tiempos,' and 'a menudo' describe repeated/background time; 'inmediatamente' and 'finalmente' mark a specific completed moment.",
  },
  {
    id: "pvi-016",
    type: "multipleChoice",
    prompt:
      "OJO — trigger words don't always win: '___ fui la mejor estudiante de mi generación,' dice mi mamá cada vez que saco una B.",
    choices: ["Siempre (imperfecto: era)", "Siempre (pretérito: fui)"],
    correctIndex: 1,
    explanation:
      "'Siempre' usually signals imperfect, but here it frames a completed, bounded life claim ('through all of school, I was...') — preterite. Context beats the trigger word.",
  },
  {
    id: "pvi-017",
    type: "fillBlank",
    prompt: "Mi compañero de cuarto ___ (tener) veintiún años cuando por fin aprendió a usar la lavadora.",
    answers: ["tenía"],
    explanation: "Age is a background description at the time of the event — imperfect.",
  },
  {
    id: "pvi-018",
    type: "fillBlank",
    prompt: "El semestre pasado ___ (yo - trabajar) en la cafetería del campus por cuatro meses exactos.",
    answers: ["trabajé"],
    explanation: "A precise, bounded duration ('por cuatro meses exactos') with a clear beginning and end — preterite, even though it lasted a while.",
  },
  {
    id: "pvi-019",
    type: "multipleChoice",
    prompt: "¿Por qué ___ (tú - llegar) tarde a la reunión del grupo otra vez?",
    choices: ["llegabas", "llegaste", "llegas"],
    correctIndex: 1,
    explanation: "A specific instance of lateness being called out ('otra vez' notwithstanding, this is about one meeting) — preterite.",
  },
  {
    id: "pvi-020",
    type: "multipleChoice",
    prompt:
      "Era la semana de exámenes finales: la biblioteca ___ (estar) llena, todos ___ (tomar) café sin parar, y de repente alguien ___ (gritar) '¡ENCONTRÉ UN ENCHUFE LIBRE!'",
    choices: [
      "estaba / tomaban / gritó",
      "estuvo / tomaron / gritaba",
      "estaba / tomaban / gritaba",
    ],
    correctIndex: 0,
    explanation:
      "Classic narration shape: two imperfects paint the background scene (estaba, tomaban), then one preterite event breaks in (gritó) — foreground vs. background.",
  },
];
