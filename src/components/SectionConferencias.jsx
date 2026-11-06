import conferenciasData from "../assets/data/conferencias.json";
import jjtraje from "/imagenes/jjtraje.jpg";
import SectionHeader from "./SectionHeader";
import { buildWaMeLink } from "../utils/links";
export default function SectionConferencias() {

  const conferencias = conferenciasData.registros;

  return (
    <section id="section-conferencias" className="bg-ui-bg py-20 font-body text-ui-text">
      <SectionHeader eyebrow="Escenarios" title="Conferencias" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">

      {conferencias.map((conf) => (
  <div
    key={conf.id}
    className="flex flex-col rounded-2xl border border-ui-border bg-ui-bg2 p-5 transition duration-300 hover:-translate-y-1 hover:border-btc/50"
  >

    {conf.thumbnail_url && (
      <img
        src={conf.thumbnail_url}
        alt={conf.titulo}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
    )}

    <span className="mb-3 inline-block w-fit rounded-full bg-btc/15 px-3 py-1 text-xs font-bold text-btc">
      {conf.tipo}
    </span>

    <h3 className="font-display text-xl font-bold text-ui-text mb-2">
      {conf.titulo}
    </h3>

    <p className="text-sm text-ui-muted mb-2">
      {conf.evento}
    </p>

    <p className="text-ui-muted text-sm mb-4 line-clamp-4">
      {conf.descripcion}
    </p>

    <div className="flex flex-wrap gap-2 mb-4">
      {conf.temas_principales?.slice(0,4).map((tema)=>(
        <span
          key={tema}
          className="border border-ui-border px-2 py-1 rounded-full text-xs text-ui-muted"
        >
          {tema}
        </span>
      ))}
    </div>

    <div className="text-sm space-y-1 mb-5 text-ui-muted">

      {conf.fecha && (
        <p>
          <strong>Fecha:</strong> {conf.fecha}
        </p>
      )}

      {conf.plataforma && (
        <p>
          <strong>Plataforma:</strong> {conf.plataforma}
        </p>
      )}

      {conf.duracion && (
        <p>
          <strong>Duración:</strong> {conf.duracion}
        </p>
      )}

    </div>


    {conf.video_url && (
      <a
        href={conf.video_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto rounded-lg bg-btc py-2.5 px-4 text-center font-bold text-black transition hover:bg-btc-dark"
      >
        Ver contenido
      </a>
    )}

  </div>
))}


{/* CARD FIJA DE JJ CHAGERBEN */}
<div
  className="
    relative
    bg-ui-bg2
    rounded-2xl
    overflow-hidden
    border border-ui-border
  "
>
  <img
    src={jjtraje}
    alt="Jesus Chagerben"
    className="
      w-full
      h-full
      min-h-[420px]
      object-cover
    "
  />

  {/* Overlay */}
  <div
    className="
      absolute
      inset-x-0
      bottom-0
      p-6
      bg-gradient-to-t
      from-black/90
      via-black/60
      to-transparent
      text-white
    "
  >
    <h3 className="font-display text-2xl font-bold">
      Jesus Chagerben
    </h3>

    <p className="mt-1 text-sm text-neutral-200">
      Master en Blockchain y Fintech
    </p>

        <a
          href={buildWaMeLink("mentoriaPrimary", "infoMentoriaPremium")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-btc text-black font-bold mt-3 px-4 py-2 rounded-full hover:bg-btc-dark transition"
        >
          ¡Contáctame!
        </a>
  </div>
</div>

      </div>

    </section>
  );
}