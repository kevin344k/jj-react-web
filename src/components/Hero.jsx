import React, { useState } from "react";
import jjtraje from "/imagenes/jjtraje.jpg";
import btc from "/imagenes/bitcoin.svg";
import img_cajero from "/imagenes/cajeros.jpeg";
import FlipClock from "./FlipClock";
import Marquee from "./Marquee";
import { buildWaMeLink } from "../utils/links";
import usdt from "/imagenes/usdt.svg";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSellUsdtAd, setShowSellUsdtAd] = useState(true);
  const [isSellUsdtOpen, setIsSellUsdtOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-ui-bg font-body text-ui-text min-h-[80vh] flex flex-col items-center justify-center pt-16 pb-6 xl:pt-20">
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
          <div className="absolute right-3 top-0 z-20 hover:scale-105 cursor-pointer transition-transform duration-200">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowSellUsdtAd(false);
              }}
              className="absolute -top-2 -right-2 z-20 w-6 h-6 flex items-center justify-center rounded-full bg-ui-border text-ui-text text-xs font-bold hover:bg-btc hover:text-black transition"
              aria-label="Cerrar anuncio"
            >
              ✕
            </button>
            <div
              onClick={() => setIsSellUsdtOpen(true)}
              className="border border-ui-border bg-ui-bg2/90 backdrop-blur rounded-full flex gap-2 items-center px-4 py-1.5 divide-x divide-ui-border"
              aria-label="Vender USDT"
            >
              <img src={usdt} alt="Vender USDT" className="w-9 h-9 pr-2" />
              <div className="text-left pl-2">
                <p className="text-ui-muted text-[11px] leading-none">VENTA DE</p>
                <span className="text-lg font-bold">USDT</span>
              </div>
            </div>
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
            <img
              src={jjtraje}
              alt="JJ Chagerben"
              className="relative w-64 sm:w-80 lg:w-[400px] aspect-[4/5] object-cover object-top rounded-[1.75rem] border border-ui-border shadow-2xl shadow-black/70"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 rounded-b-[1.75rem] bg-gradient-to-t from-black/70 to-transparent" aria-hidden="true" />
            <div className="absolute -bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-ui-border bg-ui-bg2/90 backdrop-blur px-4 py-3">
              <div>
                <p className="font-display font-bold leading-tight">JJ Chagerben</p>
                <p className="text-ui-muted text-xs">Mentor &amp; Escritor</p>
              </div>
              <span className="text-btc text-2xl font-bold">₿</span>
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

      {/* Overlay + Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          {/* Contenedor del modal */}
          <div
            className="relative bg-white rounded-2xl shadow-lg  w-[95%] md:w-96 animate-fadeIn  "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón X */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-3xl text-white hover:text-gray-800"
            >
              ✕
            </button>
            <img src={img_cajero} alt="" />

            <p className="absolute z-20 bottom-0 left-1/2 -translate-x-1/2 mb-15 px-4 py-3 w-full text-xl text-center font-luckiest text-white">
              COMPRA BITCOIN EN TU CAJERO MAS CERCANO
            </p>

            <a
              className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 mb-5 px-4 py-3  bg-neutral-900 text-white font-bold shadow-lg rounded-lg hover:text-[#F7931A] w-fit"
              href="https://linktr.ee/bitcoinecuador"
            >
              Ver ubicaciones
            </a>
          </div>
        </div>
      )}

      {/* Overlay + Modal Vender USDT */}
      {isSellUsdtOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in"
          onClick={() => setIsSellUsdtOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-lg w-[95%] md:w-96 p-6 animate-fadeIn text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsSellUsdtOpen(false)}
              className="absolute top-2 right-2 text-3xl text-neutral-800 hover:text-red-600"
              aria-label="Cerrar"
            >
              ✕
            </button>

            <img src={usdt} alt="USDT" className="w-24 mx-auto mb-4" />

            <p className="text-xl font-bold text-neutral-900 mb-3">
             VENTA DE USDT
            </p>

            <p className="text-neutral-700 mb-6">
             💵 ¿Necesitas USDT? Compra con seguridad, rapidez y la mejor atención en Ecuador. 🇪🇨
            </p>

            <a
              className="inline-block px-4 py-3 bg-neutral-900 text-white font-bold shadow-lg rounded-lg hover:text-[#F7931A] w-fit"
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
