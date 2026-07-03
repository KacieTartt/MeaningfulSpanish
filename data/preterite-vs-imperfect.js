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
  {
    id: "pvi-021",
    type: "multipleChoice",
    prompt:
      "Yo ___ (presentar) mi parte del proyecto en grupo cuando, sin ningún aviso, ___ (sonar) la alarma de incendios y todos tuvimos que salir del edificio.",
    choices: ["presentaba / sonó", "presenté / sonaba", "presentaba / sonaba"],
    correctIndex: 0,
    explanation:
      "The ongoing presentation is the background (presentaba = imperfect) that a single completed event interrupts (sonó = preterite).",
  },
  {
    id: "pvi-022",
    type: "multipleChoice",
    prompt:
      "Nosotros ___ (ver) una película tranquilamente en la sala común cuando el WiFi del dormitorio se cayó por completo.",
    choices: ["veíamos", "vimos", "hemos visto"],
    correctIndex: 0,
    explanation: "'Veíamos' is the ongoing background action that the single completed event (se cayó) interrupts — imperfect.",
  },
  {
    id: "pvi-023",
    type: "multipleChoice",
    prompt:
      "Antes de que empezara el semestre, yo ___ (ir) al gimnasio todos los días, pero la semana pasada solo ___ (ir) una vez.",
    choices: ["iba / fui", "fui / iba", "iba / iba"],
    correctIndex: 0,
    explanation:
      "'Todos los días' is a habitual-action trigger — imperfect (iba); 'la semana pasada... una vez' is a single, countable, completed occasion — preterite (fui).",
  },
  {
    id: "pvi-024",
    type: "multipleChoice",
    prompt:
      "Mi hermana ___ (trabajar) en su pasantía por seis semanas exactas el verano pasado, aunque antes ___ (pensar) que iba a durar todo el verano.",
    choices: ["trabajó / pensaba", "trabajaba / pensó", "trabajó / pensó"],
    correctIndex: 0,
    explanation:
      "A precise bounded duration ('seis semanas exactas') takes the preterite; her ongoing, indefinite belief beforehand is background — imperfect.",
  },
  {
    id: "pvi-025",
    type: "multipleChoice",
    prompt: "Yo ___ (conocer) a mi profesora de español el primer día de clase, cuando se presentó frente a todos.",
    choices: ["conocía", "conocí", "conozco"],
    correctIndex: 1,
    explanation: "'Conocer' in the preterite means 'met' — a single first encounter, cued by 'el primer día.'",
  },
  {
    id: "pvi-026",
    type: "multipleChoice",
    prompt: "Con solo cinco minutos restantes, por fin ___ (yo - poder) terminar el examen de cálculo.",
    choices: ["podía", "pude", "puedo"],
    correctIndex: 1,
    explanation:
      "'Poder' in the preterite means 'managed to' — a specific successful effort under pressure, not a general ability.",
  },
  {
    id: "pvi-027",
    type: "multipleChoice",
    prompt:
      "___ (yo - saber) que mi compañero de cuarto estaba reprobando cálculo solo porque vi sus notas en la mesa.",
    choices: ["Sabía", "Supe", "Sé"],
    correctIndex: 1,
    explanation:
      "'Saber' in the preterite means 'found out' — the moment the information landed, not an ongoing state of knowing.",
  },
  {
    id: "pvi-028",
    type: "multipleChoice",
    prompt: "Mi amiga ___ (querer) venir al concierto conmigo, pero le tocó trabajar y no pudo.",
    choices: ["quería", "quiso", "quisiera"],
    correctIndex: 0,
    explanation:
      "Imperfect 'quería' is an ongoing wish/desire (she wanted to, as a state) — contrast with preterite 'quiso,' which would mean she actively tried.",
  },
  {
    id: "pvi-029",
    type: "multipleChoice",
    prompt: "Le pedí prestado el carro a mi hermano para ir al aeropuerto y él ___ (no querer) dármelo.",
    choices: ["no quería", "no quiso", "no queria"],
    correctIndex: 1,
    explanation: "'No querer' in the preterite means 'refused' — one specific completed decision, not a general reluctance.",
  },
  {
    id: "pvi-030",
    type: "multipleChoice",
    prompt:
      "OJO — trigger words don't always win: mi abuelo siempre ___ (trabajar) en la misma fábrica, hasta que se jubiló a los sesenta y cinco años.",
    choices: ["trabajaba (imperfecto)", "trabajó (pretérito)"],
    correctIndex: 1,
    explanation:
      "'Siempre' usually signals imperfect, but 'hasta que se jubiló' bounds his whole career to a definite endpoint — a completed, bounded life fact takes preterite. Context beats the trigger word.",
  },
  {
    id: "pvi-031",
    type: "multipleChoice",
    prompt: "OJO — trigger words don't always win: una vez a la semana, mi compañero de cuarto ___ (limpiar) el apartamento — bueno, a su manera.",
    choices: ["limpiaba", "limpió", "ha limpiado"],
    correctIndex: 0,
    explanation:
      "'Una vez' alone often signals a single preterite event, but 'una vez a la semana' describes a recurring weekly habit — imperfect. Context beats the trigger word.",
  },
  {
    id: "pvi-032",
    type: "multipleChoice",
    prompt:
      "OJO — trigger words don't always win: todos los días de esa semana de exámenes finales, yo solo ___ (dormir) tres horas.",
    choices: ["dormía", "dormí", "he dormido"],
    correctIndex: 1,
    explanation:
      "'Todos los días' usually triggers imperfect for open-ended habits, but here it's bounded to one specific, completed week ('esa semana de exámenes') — preterite. Context beats the trigger word.",
  },
  {
    id: "pvi-033",
    type: "multipleChoice",
    prompt:
      "Estábamos en medio de la videollamada de Zoom para el proyecto cuando la profesora ___ (entrar) sin querer a la sala equivocada.",
    choices: ["entraba", "entró", "entraría"],
    correctIndex: 1,
    explanation:
      "'Estábamos' sets the background scene (imperfect); the professor's accidental entrance is the single event that breaks in — preterite.",
  },
  {
    id: "pvi-034",
    type: "multipleChoice",
    prompt:
      "En primer año, ___ (yo - comer) en el comedor todos los días, pero en marzo ___ (dejar) de ir por completo.",
    choices: ["comía / dejé", "comí / dejaba", "comía / dejaba"],
    correctIndex: 0,
    explanation:
      "The daily habit is background (comía = imperfect); 'dejé' marks the single completed moment the habit ended — preterite.",
  },
  {
    id: "pvi-035",
    type: "multipleChoice",
    prompt:
      "Nosotros ___ (manejar) por la carretera sin problemas cuando, de repente, ___ (empezar) a llover tan fuerte que casi no ___ (poder) ver la carretera.",
    choices: [
      "manejábamos / empezó / podíamos",
      "manejamos / empezaba / pudimos",
      "manejábamos / empezaba / podíamos",
    ],
    correctIndex: 0,
    explanation:
      "Two imperfects paint the ongoing background (manejábamos, podíamos); 'de repente' triggers the one preterite event that changes everything (empezó).",
  },
  {
    id: "pvi-036",
    type: "fillBlank",
    prompt: "Cada mes, mis padres me ___ (mandar) dinero para gastos, aunque nunca era suficiente.",
    answers: ["mandaban"],
    explanation: "'Cada mes' describes a recurring habitual action — imperfect.",
  },
  {
    id: "pvi-037",
    type: "fillBlank",
    prompt: "El mes pasado, mis padres me ___ (mandar) dinero extra porque perdí mi trabajo a tiempo parcial.",
    answers: ["mandaron"],
    explanation: "'El mes pasado' plus one specific occasion is a completed single event — preterite.",
  },
  {
    id: "pvi-038",
    type: "fillBlank",
    prompt: "Rara vez ___ (yo - llegar) a tiempo a mi clase de las ocho de la mañana.",
    answers: ["llegaba"],
    explanation: "'Rara vez' (rarely) describes a general pattern, even a negative one — imperfect.",
  },
  {
    id: "pvi-039",
    type: "fillBlank",
    prompt: "Esta mañana, por primera vez en el semestre, ___ (yo - llegar) a tiempo a mi clase de las ocho.",
    answers: ["llegué"],
    explanation: "'Esta mañana... por primera vez' pins the action to one specific completed moment — preterite.",
  },
  {
    id: "pvi-040",
    type: "fillBlank",
    prompt: "Usualmente, la cafetería del campus ___ (cerrar) a la medianoche entre semana.",
    answers: ["cerraba"],
    explanation: "'Usualmente' signals a general, repeated state — imperfect.",
  },
  {
    id: "pvi-041",
    type: "fillBlank",
    prompt: "Bruscamente, las luces del apartamento ___ (apagarse) durante la tormenta.",
    answers: ["se apagaron"],
    explanation: "'Bruscamente' (abruptly) marks a sudden, single completed event — preterite.",
  },
  {
    id: "pvi-042",
    type: "fillBlank",
    prompt: "En general, mis compañeros de clase ___ (participar) poco en las discusiones en línea.",
    answers: ["participaban"],
    explanation: "'En general' frames an ongoing, typical pattern — imperfect.",
  },
  {
    id: "pvi-043",
    type: "fillBlank",
    prompt: "Primero, el profesor ___ (repartir) los exámenes; luego, nos dio treinta minutos para terminar.",
    answers: ["repartió"],
    explanation: "'Primero' sequences one completed step in a series of plot events — preterite.",
  },
  {
    id: "pvi-044",
    type: "fillBlank",
    prompt: "De niña, yo ___ (detestar) dar presentaciones orales frente a la clase.",
    answers: ["detestaba"],
    explanation: "A childhood state/description ('de niña') is background — imperfect.",
  },
  {
    id: "pvi-045",
    type: "fillBlank",
    prompt: "Anoche, justo antes de dormir, se me ___ (ocurrir) la idea perfecta para mi trabajo final.",
    answers: ["ocurrió"],
    explanation: "A single flash-of-insight moment, pinned to 'anoche' — preterite.",
  },
  {
    id: "pvi-046",
    type: "matching",
    prompt: "Empareja cada palabra clave con el tiempo verbal que normalmente activa (Preterite = evento puntual; Imperfect = trasfondo/hábito).",
    pairs: [
      { left: "todas las mañanas", right: "Imperfect" },
      { left: "un día", right: "Preterite" },
      { left: "cada mes", right: "Imperfect" },
      { left: "de golpe", right: "Preterite" },
      { left: "en general", right: "Imperfect" },
    ],
    explanation:
      "'Todas las mañanas,' 'cada mes,' and 'en general' describe recurring or general patterns — imperfect; 'un día' and 'de golpe' mark a single, sudden completed moment — preterite.",
  },
  {
    id: "pvi-047",
    type: "matching",
    prompt: "Empareja cada palabra clave con el tiempo verbal que normalmente activa.",
    pairs: [
      { left: "una tarde", right: "Preterite" },
      { left: "usualmente", right: "Imperfect" },
      { left: "repentinamente", right: "Preterite" },
      { left: "antes", right: "Imperfect" },
      { left: "entonces", right: "Preterite" },
    ],
    explanation:
      "'Usualmente' and 'antes' describe an ongoing general pattern — imperfect; 'una tarde,' 'repentinamente,' and 'entonces' pin the action to one specific completed moment in a sequence — preterite.",
  },
  {
    id: "pvi-048",
    type: "matching",
    prompt: "Empareja cada palabra clave con el tiempo verbal que normalmente activa.",
    pairs: [
      { left: "cada día", right: "Imperfect" },
      { left: "súbitamente", right: "Preterite" },
      { left: "en el pasado", right: "Imperfect" },
      { left: "primero", right: "Preterite" },
      { left: "rara vez", right: "Imperfect" },
    ],
    explanation:
      "'Cada día,' 'en el pasado,' and 'rara vez' describe habitual or ongoing time frames — imperfect; 'súbitamente' and 'primero' mark a sudden or sequenced completed event — preterite.",
  },
  {
    id: "pvi-049",
    type: "matching",
    prompt: "Empareja cada palabra clave con el tiempo verbal que normalmente activa.",
    pairs: [
      { left: "una mañana", right: "Preterite" },
      { left: "generalmente", right: "Imperfect" },
      { left: "bruscamente", right: "Preterite" },
      { left: "cada mañana", right: "Imperfect" },
      { left: "de inmediato", right: "Preterite" },
    ],
    explanation:
      "'Generalmente' and 'cada mañana' describe repeated routines — imperfect; 'una mañana,' 'bruscamente,' and 'de inmediato' pin the action to one abrupt, completed moment — preterite.",
  },
  {
    id: "pvi-050",
    type: "matching",
    prompt: "Empareja cada palabra clave con el tiempo verbal que normalmente activa.",
    pairs: [
      { left: "raramente", right: "Imperfect" },
      { left: "luego", right: "Preterite" },
      { left: "en aquel entonces", right: "Imperfect" },
      { left: "de pronto", right: "Preterite" },
      { left: "normalmente", right: "Imperfect" },
    ],
    explanation:
      "'Raramente,' 'en aquel entonces,' and 'normalmente' describe general or ongoing states — imperfect; 'luego' and 'de pronto' mark the next completed step or sudden event in a sequence — preterite.",
  },
];
