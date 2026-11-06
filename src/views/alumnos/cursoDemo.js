// Contenido de demostración: los videos son placeholders hasta tener el material premium real.
export const curso = {
  titulo: "Mentoría Premium: de cero a experto en Bitcoin",
  modulos: [
    {
      id: "m1",
      titulo: "Módulo 1 · Fundamentos",
      lecciones: [
        { id: "l1", titulo: "Bienvenida y cómo aprovechar la mentoría", duracion: "08:12", youtube: "dyJUMAxbqWY" },
        { id: "l2", titulo: "Historia del dinero y evolución monetaria", duracion: "24:40", youtube: "QiN322KJYeA" },
        { id: "l3", titulo: "Qué es Bitcoin y por qué importa", duracion: "31:05", youtube: "gkSFIn7hRHg" },
      ],
    },
    {
      id: "m2",
      titulo: "Módulo 2 · Wallets y seguridad",
      lecciones: [
        { id: "l4", titulo: "Crear tu primera wallet", duracion: "19:30", youtube: "xclWq89UuI0" },
        { id: "l5", titulo: "Llaves privadas y frase semilla", duracion: "27:18", youtube: "2cvBP0SfXlk" },
        { id: "l6", titulo: "Hardware wallets paso a paso", duracion: "22:47", youtube: "wSRsFLSkvAI" },
        { id: "l7", titulo: "Cómo reconocer estafas y fraudes", duracion: "18:03", youtube: "MlXMhkECQmE" },
      ],
    },
    {
      id: "m3",
      titulo: "Módulo 3 · Inversión y estrategia",
      lecciones: [
        { id: "l8", titulo: "Comprar Bitcoin de forma eficiente", duracion: "26:55", youtube: "dVjWMIguhdw" },
        { id: "l9", titulo: "Armado de tu portafolio", duracion: "33:21", youtube: "rEhzsgq9V7o" },
        { id: "l10", titulo: "Plan a largo plazo y cierre", duracion: "15:44", youtube: "yOpBE9oDpZI" },
      ],
    },
  ],
};

export const todasLasLecciones = curso.modulos.flatMap((m) =>
  m.lecciones.map((l) => ({ ...l, modulo: m.titulo })),
);

const SESSION_KEY = "jj_alumno_demo";
const PROGRESS_KEY = "jj_alumno_progreso";

export const getSession = () => {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
};
export const setSession = (email) => localStorage.setItem(SESSION_KEY, JSON.stringify({ email }));
export const clearSession = () => localStorage.removeItem(SESSION_KEY);

export const getProgress = () => {
  try {
    const p = JSON.parse(localStorage.getItem(PROGRESS_KEY));
    return { vistas: p?.vistas ?? [], actual: p?.actual ?? todasLasLecciones[0].id, ultima: p?.ultima ?? null };
  } catch {
    return { vistas: [], actual: todasLasLecciones[0].id, ultima: null };
  }
};
export const saveProgress = (p) => localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
