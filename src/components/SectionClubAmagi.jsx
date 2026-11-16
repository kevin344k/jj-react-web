import React from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const whatsappLink =
  "https://wa.me/34614792593?text=Vengo%20del%20video%20de%20JJ%20Chagerben%20y%20quiero%20saber%20m%C3%A1s%20informaci%C3%B3n.";

export default function SectionClubAmagi() {
  return (
    <section className="relative isolate overflow-hidden bg-[#06101f] px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute -right-36 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full border border-[#d6aa66]/15 sm:h-[40rem] sm:w-[40rem]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-24 -z-10 h-[22rem] w-[22rem] rounded-full border border-[#d6aa66]/10 sm:h-[32rem] sm:w-[32rem]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_15%_50%,rgba(17,58,79,0.55),transparent_58%)]"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 sm:gap-10">
        <div className="w-full max-w-4xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#e2b875] sm:text-sm">
            Conexiones · ideas · oportunidades sin fronteras
          </p>
          <h2 className="mb-6 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Club <span className="text-[#e2b875]">AMA-GI</span>
          </h2>
          <div className="mx-auto mb-7 h-px w-20 bg-[#e2b875]" />
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-200 sm:text-xl">
            La mayor red de inversores y particulares que buscan oportunidades
            de negocio y/o re-localizarse en la República del Paraguay,
            conectando a un público internacional con profesionales,
            desarrolladoras y operadores en el país más libre del mundo.
          </p>
          <p className="mt-5 text-xl font-semibold text-[#e2b875] sm:text-2xl">
            ¡Reencuentra tu libertad en Paraguay!
          </p>
        </div>

        <picture className="block w-full overflow-hidden">
          <source
            media="(max-width: 639px)"
            srcSet="/imagenes/club-amagi-vertical.jpg"
          />
          <source
            media="(max-width: 1023px)"
            srcSet="/imagenes/club-amagi-horizontal.jpg"
          />
          <img
            src="/imagenes/club-amagi-pantalla-total.jpg"
            alt="Club AMA-GI: conecta con nuestro equipo y recibe más información por WhatsApp"
            className="mx-auto block h-auto w-full"
          />
        </picture>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-16 items-center justify-center gap-3 rounded-full border border-[#e2b875] bg-[#e2b875] px-7 py-4 font-semibold text-[#07111e] shadow-[0_12px_40px_rgba(226,184,117,0.18)] transition hover:-translate-y-1 hover:bg-[#f0ca8b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e2b875]"
        >
          <MessageCircle aria-hidden="true" className="h-5 w-5" />
          <span>Escríbenos por WhatsApp</span>
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </section>
  );
}
