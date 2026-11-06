import React, { useState } from "react";
import jjtraje from "/imagenes/jjtraje.jpg";
import btc from "/imagenes/bitcoin.svg";
import FlipClock from "./FlipClock";
import Marquee from "./Marquee";
import { buildWaMeLink } from "../utils/links";
import usdt from "/imagenes/usdt.svg";

export default function Hero() {
  const [showSellUsdtAd, setShowSellUsdtAd] = useState(true);
  const [isSellUsdtOpen, setIsSellUsdtOpen] = useState(false);

  return (
    <div id="hero" className="relative overflow-hidden bg-ui-bg font-body text-ui-text min-h-[80vh] flex flex-col items-center justify-center pt-16 pb-6 xl:pt-20">
      {/* Fondo: gradiente + bitcoin translúcido en movimiento suave */}
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(247,147,26,0.16),transparent_55%),linear-gradient(180deg,var(--color-ui-bg),var(--color-ui-bg2))]" />
        <img
          src={btc}
          alt=""
          className="btc-float absolute -right-24 -top-10 w-[420px] md:w-[560px] opacity-[0.07]"
        />
        <img
          src={btc}
          alt=""
          className="btc-float-slow absolute -left-20 bottom-10 w-[240px] md:w-[320px] opacity-[0.05]"
        />
      </div>

      <div className="relative z-10 w-full xl:max-w-[1250px] px-5 md:px-8 grid lg:grid-cols-2 gap-10 items-center py-8">
        {showSellUsdtAd && (
          <div className="usdt-chip absolute right-3 top-0 z-20">
            <button
              type="button"
              onClick={() => setShowSellUsdtAd(false)}
              className="absolute -top-2 -right-2 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-ui-border bg-ui-bg2 text-xs font-bold text-ui-muted transition hover:border-btc hover:text-btc"
              aria-label="Cerrar anuncio"
            >
              ✕
            </button>
            <button
              type="button"
              onClick={() => setIsSellUsdtOpen(true)}
              aria-label="Vender USDT"
              className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-btc/40 bg-ui-bg2/90 py-2 pl-2.5 pr-4 shadow-lg shadow-black/40 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-btc hover:shadow-btc/20"
            >
              <span className="usdt-shine" aria-hidden="true" />
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#26A17B]/15 ring-1 ring-[#26A17B]/40">
                <img src={usdt} alt="" className="h-6 w-6" />
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 animate-pulse rounded-full bg-ui-success ring-2 ring-ui-bg2" />
              </span>
              <span className="text-left">
                <span className="block text-[10px] font-semibold uppercase leading-none tracking-[0.15em] text-btc">Venta de</span>
                <span className="mt-1 block font-display text-lg font-bold leading-none">USDT</span>
              </span>
              <span className="text-btc transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </button>
          </div>
        )}

        <div className="hero-rise text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-ui-border bg-ui-bg2 px-4 py-1.5 text-sm text-ui-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-ui-success" />
            Master en Blockchain y Fintech · +10k alumnos
          </span>
          <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight">
            Ayudo a las personas a salir de la pobreza
          </h1>
          <p className="font-display text-xl sm:text-2xl mt-5 text-ui-muted">
            <span className="text-btc font-bold">₿itcoin</span> es sacarse la lotería en cámara lenta
          </p>

          <div className="my-6">
            <FlipClock />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
            <a
              className="rounded-lg bg-btc hover:bg-btc-dark text-black font-bold py-3.5 px-5 text-center shadow-lg shadow-btc/20 transition hover:-translate-y-0.5"
              href={buildWaMeLink("mentoriaPrimary", "infoMentoriaPremium")}
            >
              Mentoría Premium
            </a>
            <a
              className="rounded-lg border border-btc text-btc hover:bg-btc/10 font-bold py-3.5 px-5 text-center transition hover:-translate-y-0.5"
              href={buildWaMeLink("mentoriaPrimary", "mentoriaVIPPresencial")}
            >
              Mentoría VIP Presencial
            </a>
            <a
              className="rounded-lg border border-ui-border bg-ui-bg2 hover:border-btc/60 font-semibold py-3.5 px-5 text-center transition"
              href="#sec-announce-book"
            >
              Mi libro
            </a>
            <a
              className="rounded-lg border border-ui-border bg-ui-bg2 hover:border-btc/60 font-semibold py-3.5 px-5 text-center transition"
              href="/wallets&mineros"
            >
              Wallet &amp; Mineros
            </a>
          </div>

          <div className="flex mt-10 divide-x divide-ui-border">
            <div className="pr-6 text-left">
              <span className="font-display text-3xl font-bold">10k<span className="text-btc">+</span></span>
              <p className="text-ui-muted text-sm">Alumnos</p>
            </div>
            <div className="px-6 text-left">
              <span className="font-display text-3xl font-bold">12<span className="text-btc">+</span></span>
              <p className="text-ui-muted text-sm">Años de experiencia</p>
            </div>
            <div className="pl-6 text-left">
              <span className="font-display text-3xl font-bold text-btc">BTC</span>
              <p className="text-ui-muted text-sm">Autor best-seller</p>
            </div>
          </div>
        </div>

        <div className="hero-rise order-1 lg:order-2 relative flex justify-center lg:justify-end" style={{ animationDelay: "0.15s" }}>
          <div className="absolute inset-0 m-auto h-3/4 w-3/4 rounded-full bg-btc/25 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] border border-btc/30 translate-x-3 translate-y-3" aria-hidden="true" />
            <div
              className="flip-card relative w-[min(92vw,420px)] sm:w-[480px] lg:w-[400px] aspect-[4/5] sm:aspect-[4/4.6] lg:aspect-[4/5] outline-none"
              tabIndex={0}
              role="button"
              aria-label="Girar tarjeta para leer mi historia"
              onClick={(e) => e.currentTarget.classList.toggle("is-flipped")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  e.currentTarget.classList.toggle("is-flipped");
                }
              }}
            >
              <div className="flip-inner">
                <div className="flip-face">
                  <img
                    src={jjtraje}
                    alt="JJ Chagerben"
                    className="h-full w-full object-cover object-top rounded-[1.75rem] border border-ui-border shadow-2xl shadow-black/70"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 rounded-b-[1.75rem] bg-gradient-to-t from-black/70 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-ui-border bg-ui-bg2/90 backdrop-blur px-4 py-3">
                    <div>
                      <p className="font-display font-bold leading-tight">JJ Chagerben</p>
                      <p className="text-ui-muted text-xs">Mentor &amp; Escritor</p>
                    </div>
                    <span className="text-btc text-2xl font-bold">₿</span>
                  </div>
                  <span className="flip-hint absolute right-3 top-3 rounded-full border border-btc/40 bg-black/50 px-3 py-1 text-[11px] font-semibold text-btc backdrop-blur">
                    Acerca de mí ↻
                  </span>
                </div>

                <div className="flip-face flip-back rounded-[1.75rem] border border-btc/40 bg-gradient-to-br from-ui-bg2 to-ui-bg p-5 sm:p-7 shadow-2xl shadow-black/70 flex flex-col justify-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-btc">Acerca de mí</p>
                  <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold">JJCHAGERBEN</h3>
                  <p className="mt-1 text-xs sm:text-[13px] font-semibold text-ui-text">
                    Ingeniero, maestrante en Blockchain y FinTech, escritor, inversionista y conferencista internacional
                  </p>
                  <div className="mt-3 h-px w-12 bg-btc" />
                  <div className="flip-text mt-3 space-y-2.5 text-[13px] sm:text-sm leading-relaxed text-ui-muted">
                    <p>
                      Ingeniero en Petróleos ecuatoriano, graduado de la <mark>ESPOL</mark> y maestrante en Blockchain y FinTech. Pasó de vender caramelos a lograr su <mark>independencia financiera con Bitcoin</mark>.
                    </p>
                    <p>
                      Autor de <mark>«Invertir en Bitcoin o Esclavitud»</mark>, conductor de «Crypto Adicto» y comunidad de <mark>más de 1 millón</mark> de seguidores.
                    </p>
                    <p>
                      Mejor Educador en Latinoamérica 2026. Su lema: <mark>paciencia, prudencia y disciplina</mark>.
                    </p>
                  </div>
                  <a
                    href="#acerca-de"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-4 inline-flex w-fit items-center gap-1 rounded-lg bg-btc px-4 py-2 text-sm font-bold text-black transition hover:bg-btc-dark"
                  >
                    Leer más →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marquee
        className="mt-10 relative z-10"
        phrases={[
          "NO TUS LLAVES PRIVADAS, NO TUS BITCOINS",
          "VERIFICA, NO CONFÍES",
          "NOT YOUR KEYS, NOT YOUR BITCOINS",
          "NADIE LE GANA AL HOLDER",
          "NO HAGAS TRADING",
          "FIX THE MONEY, FIX THE WORLD",
        ]}
        duration={60}
      />

      {/* Modal Vender USDT */}
      {isSellUsdtOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsSellUsdtOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Venta de USDT"
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-btc/30 bg-gradient-to-b from-ui-bg2 to-ui-bg p-7 text-center shadow-2xl shadow-black/70 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#26A17B]/25 blur-3xl" aria-hidden="true" />
            <button
              onClick={() => setIsSellUsdtOpen(false)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-ui-border text-ui-muted transition hover:border-btc hover:text-btc"
              aria-label="Cerrar"
            >
              ✕
            </button>

            <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#26A17B]/15 ring-1 ring-[#26A17B]/40">
              <img src={usdt} alt="USDT" className="h-12 w-12" />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-btc">Ecuador 🇪🇨</p>
            <h3 className="mt-1 font-display text-3xl font-bold">Venta de USDT</h3>
            <p className="mt-3 text-ui-muted">
              Compra USDT con seguridad, rapidez y atención personalizada.
            </p>

            <ul className="mt-5 grid grid-cols-3 gap-2 text-xs">
              {["Seguro", "Rápido", "Atención directa"].map((t) => (
                <li key={t} className="rounded-xl border border-ui-border bg-ui-bg px-2 py-2.5 font-semibold">
                  <span className="mr-1 text-ui-success">✓</span>
                  {t}
                </li>
              ))}
            </ul>

            <a
              className="mt-6 block w-full rounded-xl bg-btc py-3.5 font-bold text-black shadow-lg shadow-btc/20 transition hover:-translate-y-0.5 hover:bg-btc-dark"
              href={buildWaMeLink("sellusdt", "infosellUSDT")}
              target="_blank"
              rel="noreferrer"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
