export default function SectionAnnounce() {
  return (
    <section className="py-12 bg-fm-turquesa_very_strong">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-white text-3xl font-bold mb-6">
          ¿Sabes editar, quieres trabajar conmigo?
        </h2>

        <a
          href="https://api.whatsapp.com/send?phone=593961612048"
          className="inline-block bg-fm-turquesa text-neutral-900  font-bold px-6 py-3 rounded-md hover:bg-red-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unirme
        </a>
      </div>
    </section>
  );
}
