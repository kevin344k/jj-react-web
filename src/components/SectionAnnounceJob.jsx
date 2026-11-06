import { buildWhatsAppApiLink } from "../utils/links";

export default function SectionAnnounce() {
  return (
    <section className="bg-ui-bg py-20 font-body text-ui-text">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-3xl border border-btc/30 bg-gradient-to-br from-btc/15 to-transparent px-6 py-12 text-center">
          <h2 className="mb-6 font-display text-3xl font-bold sm:text-4xl">
            ¿Sabes editar? Trabaja conmigo
          </h2>
          <a
            href={buildWhatsAppApiLink("joinJob", "joinJob")}
            className="inline-block rounded-lg bg-btc px-8 py-3 font-bold text-black transition hover:bg-btc-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unirme
          </a>
        </div>
      </div>
    </section>
  );
}
