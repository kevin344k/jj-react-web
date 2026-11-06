import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jjface from "/imagenes/jjcara.webp";
import Toggle_dark_mode from "./ToggleTheme";
import BtcTicker from "./BtcTicker";
import { buildWaMeLink } from "../utils/links";
import { ChevronDown, Menu, X } from "lucide-react";

const sections = [
  { label: "Mi libro", href: "#sec-announce-book" },
  { label: "Servicios", href: "#mis-servicios" },
  { label: "Conferencias", href: "#section-conferencias" },
  { label: "Calculadora", href: "#sec-calculadora-jub" },
  { label: "Redes", href: "#section-mentoria" },
  { label: "Testimonios", href: "#sect-testimonial" },
];

const moreLinks = [
  { label: "Soy alumno", to: "/alumnos" },
  { label: "Debates", to: "/debates" },
  { label: "Compras", to: "/compras" },
  { label: "Wallets & Mineros", to: "/wallets&mineros" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const linkClass =
    "relative text-sm text-ui-muted transition-colors hover:text-btc after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-btc after:transition-all hover:after:w-full";

  return (
    <>
    <nav
      id="navBar"
      className="sticky top-0 z-30 border-b border-ui-border bg-ui-bg/85 font-body text-ui-text backdrop-blur-md"
    >
      <div className="mx-auto flex items-center justify-between gap-3 px-3 py-2 md:px-6 xl:max-w-[1350px]">
        <div className="flex items-center gap-3 md:gap-5">
          <Link to="/" className="flex items-center gap-3">
            <img
              className="h-11 w-11 shrink-0 rounded-full border border-btc/50 object-cover"
              src={jjface}
              alt="JJ Chagerben"
            />
            <span className="hidden font-display text-lg font-bold md:block">JJChagerben</span>
          </Link>
          <BtcTicker />
        </div>

        <ul className="hidden items-center gap-6 lg:flex">
          {sections.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={linkClass}>
                {label}
              </a>
            </li>
          ))}
          <li className="relative">
            <button
              type="button"
              onClick={() => setSubmenuOpen(!submenuOpen)}
              className="flex items-center gap-1 text-sm text-ui-muted transition-colors hover:text-btc"
            >
              Más
              <ChevronDown className={`h-4 w-4 transition-transform ${submenuOpen ? "rotate-180" : ""}`} />
            </button>
            {submenuOpen && (
              <ul className="absolute right-0 top-9 z-50 w-48 rounded-xl border border-ui-border bg-ui-bg2 p-2 shadow-xl">
                {moreLinks.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      onClick={() => setSubmenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-ui-muted hover:bg-btc/10 hover:text-btc"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <a
              href={buildWaMeLink("mentoriaPrimary", "infoMentoriaPremium")}
              className="rounded-lg bg-btc px-4 py-2 text-sm font-bold text-black transition hover:bg-btc-dark"
            >
              Mentoría Premium
            </a>
          </li>
        </ul>

        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menú"
          className="rounded-lg border border-ui-border p-2 text-ui-text lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setIsMenuOpen(false)} />
      )}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 transform overflow-y-auto border-l border-ui-border bg-ui-bg2 p-6 transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          aria-label="Cerrar menú"
          className="mb-6 ml-auto block rounded-lg border border-ui-border p-2"
        >
          <X className="h-5 w-5" />
        </button>
        <ul className="flex flex-col gap-1">
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-btc/10 hover:text-btc">
              Inicio
            </Link>
          </li>
          {sections.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={() => setIsMenuOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-btc/10 hover:text-btc">
                {label}
              </a>
            </li>
          ))}
          {moreLinks.map(({ label, to }) => (
            <li key={to}>
              <Link to={to} onClick={() => setIsMenuOpen(false)} className="block rounded-lg px-3 py-3 text-ui-muted hover:bg-btc/10 hover:text-btc">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={buildWaMeLink("mentoriaPrimary", "infoMentoriaPremium")}
          className="mt-8 block rounded-lg bg-btc py-3 text-center font-bold text-black"
        >
          Mentoría Premium
        </a>
      </aside>

      <Toggle_dark_mode />
    </>
  );
}
