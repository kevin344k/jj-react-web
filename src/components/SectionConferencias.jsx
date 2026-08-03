import conferenciasData from "../assets/data/conferencias.json";
import jjtraje from "/public/imagenes/jjtraje.jpg";
export default function SectionConferencias() {

  const conferencias = conferenciasData.registros;

  return (
    <div className="bg-white dark:bg-fm-Dark-Desaturated-Blue py-12">

      <div className="text-center mb-8">
        <p className="text-3xl font-bold text-neutral-900 dark:text-white">
          Conferencias
        </p>

        <div className="w-24 h-1 bg-fm-turquesa mx-auto mt-3"></div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-10 px-2 md:px-3">

      {conferencias.map((conf) => (
  <div
    key={conf.id}
    className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-neutral-300 hover:scale-105 transition duration-300 dark:bg-fm-Very-dark-Blue dark:border-neutral-600"
  >

    {conf.thumbnail_url && (
      <img
        src={conf.thumbnail_url}
        alt={conf.titulo}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
    )}

    <span className="inline-block bg-fm-turquesa text-black text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
      {conf.tipo}
    </span>

    <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-neutral-300">
      {conf.titulo}
    </h3>

    <p className="text-sm text-gray-500 mb-2">
      {conf.evento}
    </p>

    <p className="text-gray-600 text-sm mb-4 dark:text-neutral-400 line-clamp-4">
      {conf.descripcion}
    </p>

    <div className="flex flex-wrap gap-2 mb-4">
      {conf.temas_principales?.slice(0,4).map((tema)=>(
        <span
          key={tema}
          className="bg-gray-200 dark:bg-neutral-700 px-2 py-1 rounded-full text-xs"
        >
          {tema}
        </span>
      ))}
    </div>

    <div className="text-sm space-y-1 mb-5 dark:text-neutral-400">

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
        className="mt-auto bg-fm-turquesa text-black font-bold py-2 px-4 rounded-xl text-center"
      >
        Ver contenido
      </a>
    )}

  </div>
))}


{/* CARD FIJA DE JJ CHAGERBEN */}
<div
  className="
    bg-white 
    rounded-2xl 
    shadow-xl 
    overflow-hidden
    border border-neutral-300
    dark:bg-fm-Very-dark-Blue 
    dark:border-neutral-600
  "
>
  <img
    src={jjtraje}
    alt="JJ Chagerben"
    className="
      w-full 
      h-full 
      min-h-[420px]
      object-cover
    "
  />
</div>

      </div>

    </div>
  );
}