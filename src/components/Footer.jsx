import React from "react";
import { Link } from "react-router-dom";
import { buildWaMeLink, socialLinks, liveLinks } from "../utils/links";

const baseURL = import.meta.env.BASE_URL;

const sectionLinks = [
  { label: "Mi libro", href: "#sec-announce-book" },
  { label: "Servicios", href: "#mis-servicios" },
  { label: "Conferencias", href: "#section-conferencias" },
  { label: "Calculadora", href: "#sec-calculadora-jub" },
  { label: "Redes", href: "#section-mentoria" },
  { label: "Testimonios", href: "#sect-testimonial" },
  { label: "Acerca de mí", href: "#acerca-de" },
];

const pageLinks = [
  { label: "Soy alumno", to: "/alumnos" },
  { label: "Debates", to: "/debates" },
  { label: "Compras", to: "/compras" },
  { label: "Wallets & Mineros", to: "/wallets&mineros" },
  { label: "Libro: Invertir en Bitcoin o Esclavitud", to: "/libro/bitcoinoesclavitud" },
];

const tools = [
  { label: "mempool · Bitcoin Explorer", href: "https://mempool.space/es/" },
  { label: "Bitcoin Rich List", href: "https://bitinfocharts.com/top-100-richest-bitcoin-addresses.html" },
  { label: "Tabla · Block Subsidy", href: "https://pbs.twimg.com/media/FwLQcUMWIAQ4wYN?format=png&name=900x900" },
  { label: "Top Assets by Market Cap", href: "https://companiesmarketcap.com/assets-by-market-cap/" },
];

const socials = [
  ...socialLinks
    .filter((s) => ["Telegram", "Instagram", "Facebook", "X", "Canal de WhatsApp"].includes(s.label))
    .map((s) => ({ href: s.href, img: s.img, label: s.label })),
  ...liveLinks.map((s) => ({ href: s.href, img: s.img, label: s.alt })),
];

const colTitle = "mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-btc";
const linkCls = "text-sm text-ui-muted transition hover:text-btc";

export default function Footer() {
  return (
    <footer className="border-t border-ui-border bg-ui-bg2 font-body text-ui-text">
      <div className="mx-auto max-w-[1200px] px-5 pt-14">
        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-btc/30 bg-gradient-to-r from-btc/10 to-transparent p-6 sm:p-8 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">¿Eres nuevo en el mundo de las criptomonedas?</h3>
            <p className="mt-1 text-ui-muted">Escríbeme y empieza tu camino con Bitcoin con una guía clara.</p>
          </div>
          <a
            href={buildWaMeLink("mentoriaPrimary", "infoMentoriaPremium")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg bg-btc px-6 py-3 font-bold text-black shadow-lg shadow-btc/20 transition hover:-translate-y-0.5 hover:bg-btc-dark"
          >
            ¡Contáctame!
          </a>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={`${baseURL}imagenes/jjcara.webp`} alt="JJ Chagerben" className="h-11 w-11 rounded-full border border-btc/50 object-cover" />
              <span className="font-display text-xl font-bold">JJChagerben</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ui-muted">
              Educación financiera y mentoría en Bitcoin. Paciencia, prudencia y disciplina.
            </p>
            <p className="mt-3 font-display italic text-btc">«No tus llaves, no tus Bitcoin»</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ui-border bg-ui-bg transition hover:-translate-y-0.5 hover:border-btc"
                >
                  <img src={`${baseURL}${s.img}`} alt="" className="h-5 w-5 object-contain" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={colTitle}>Explora</h4>
            <ul className="space-y-2.5">
              {sectionLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkCls}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={colTitle}>Más páginas</h4>
            <ul className="space-y-2.5">
              {pageLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkCls}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={colTitle}>Herramientas Bitcoin</h4>
            <ul className="space-y-2.5">
              {tools.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkCls}>{l.label} ↗</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-ui-border py-6 text-xs text-ui-muted sm:flex-row">
          <p>© {new Date().getFullYear()} JJChagerben. Todos los derechos reservados.</p>
          <p className="text-center">
            Desarrollado por{" "}
            <a className="text-btc underline" href="https://labsproductivity.com" target="_blank" rel="noopener noreferrer">
              labsproductivity.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
