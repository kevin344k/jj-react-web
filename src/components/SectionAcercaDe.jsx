import React from "react";
import SectionHeader from "./SectionHeader";
import jjtraje from "/imagenes/jjtraje.jpg";

const blocks = [
  {
    title: "Formación y trayectoria",
    paragraphs: [
      "Jonathan J. Chagerben, conocido internacionalmente como JJCHAGERBEN, es un ingeniero en Petróleos, escritor, inversionista y educador ecuatoriano especializado en Bitcoin, historia del dinero, educación financiera y tecnologías descentralizadas.",
      "Graduado de la Escuela Superior Politécnica del Litoral (ESPOL), actualmente cursa el Máster Oficial en Tecnología Blockchain y FinTech en AICAD Business School, en colaboración con la Università degli Studi Guglielmo Marconi de Italia, fortaleciendo su formación académica en tecnologías blockchain, innovación financiera y transformación de los sistemas económicos digitales.",
      "Su trayectoria profesional incluye experiencia en la industria petrolera ecuatoriana, donde trabajó en Petroamazonas y Petroecuador entre 2014 y 2021, desempeñando funciones como operador y supervisor.",
      "Su historia de superación comenzó desde temprana edad, trabajando como vendedor de caramelos y posteriormente como guardia de seguridad. Gracias a su esfuerzo y disciplina logró convertirse en ingeniero y, años después, alcanzar la independencia financiera mediante sus inversiones en Bitcoin.",
      "Tras ocho años de estudio, inversión y acumulación disciplinada, consiguió retirarse de la industria petrolera para dedicarse a la educación financiera y la divulgación de Bitcoin.",
    ],
  },
  {
    title: "Escritor y educador financiero",
    paragraphs: [
      "Es autor del libro «Invertir en Bitcoin o Esclavitud», una obra dedicada a explicar la evolución histórica del dinero, los sistemas monetarios, la inflación, los bancos centrales y el surgimiento de Bitcoin como alternativa monetaria descentralizada.",
      "A través de sus redes sociales reúne una comunidad de más de un millón de seguidores, promoviendo la educación financiera, la seguridad digital, la autocustodia y la prevención de estafas.",
      "También es conductor del programa televisivo «Crypto Adicto», dedicado al análisis de Bitcoin, las criptomonedas, las tecnologías financieras y la economía internacional.",
    ],
  },
  {
    title: "Reconocimientos y conferencias internacionales",
    paragraphs: [
      "Ha participado como conferencista en instituciones académicas y eventos nacionales e internacionales, entre ellos la Escuela Superior Politécnica del Litoral, la Universidad de Guayaquil, la Universidad Agraria del Ecuador, la Universidad Estatal de Milagro y EUDE Business School en España.",
      "En 2026 fue reconocido como «Mejor Educador en Latinoamérica» en el Crypto Latin Fest, por su contribución a la educación y divulgación de Bitcoin.",
      "Su trabajo se enfoca en democratizar el acceso al conocimiento financiero y promover la libertad individual, la propiedad privada y la independencia económica.",
    ],
  },
];

const principles = ["Paciencia", "Prudencia", "Disciplina"];

export default function SectionAcercaDe() {
  return (
    <section id="acerca-de" className="relative bg-ui-bg py-20 font-body text-ui-text">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Acerca de mí"
          title="JJCHAGERBEN"
          subtitle="Ingeniero, maestrante en Blockchain y FinTech, escritor, inversionista y conferencista internacional"
        />

        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-14">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-ui-border bg-ui-bg2">
              <img src={jjtraje} alt="Jonathan J. Chagerben" className="aspect-[4/5] w-full object-cover object-top" loading="lazy" />
              <div className="p-5">
                <p className="font-display text-lg font-bold">Jonathan J. Chagerben</p>
                <p className="text-sm text-ui-muted">Ecuador · Bitcoin · Educación financiera</p>
              </div>
            </div>
          </aside>

          <div className="space-y-10">
            {blocks.map((b) => (
              <article key={b.title}>
                <h3 className="font-display text-2xl font-bold">{b.title}</h3>
                <div className="mt-2 h-px w-12 bg-btc" />
                <div className="mt-4 space-y-4 leading-relaxed text-ui-muted">
                  {b.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </article>
            ))}

            <article className="rounded-2xl border border-btc/30 bg-ui-bg2 p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold">Filosofía personal</h3>
              <div className="mt-2 h-px w-12 bg-btc" />
              <p className="mt-4 leading-relaxed text-ui-muted">
                Su trayectoria demuestra que la educación, el esfuerzo y la inversión disciplinada pueden transformar radicalmente las oportunidades económicas de una persona. Su filosofía se resume en tres principios fundamentales:
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {principles.map((p) => (
                  <span key={p} className="rounded-full border border-btc/40 bg-btc/10 px-4 py-1.5 font-display font-bold text-btc">
                    {p}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm text-ui-muted">Y en uno de sus mensajes más reconocidos:</p>
              <blockquote className="mt-2 border-l-2 border-btc pl-4 font-display text-xl italic sm:text-2xl">
                «No tus llaves privadas, no tus Bitcoin».
              </blockquote>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
