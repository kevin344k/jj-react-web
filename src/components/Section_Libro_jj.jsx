import React from "react";
import { Link } from "react-router-dom";
import wasapIcon from "/imagenes/icon-color/whatsap.svg";
import amazonIcon from "/imagenes/amazon.svg";
import libroImg from "/libros/portadas/libro_jj.jpeg";
import newProductImg from "/imagenes/new.png";
import { buildWaMeLink } from "../utils/links";

export default function Section_Libro_jj() {
  return (
    <section id="sec-announce-book" className="relative overflow-hidden bg-ui-bg2 py-20 font-body text-ui-text">
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-btc/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="relative mx-auto shrink-0">
          <div className="absolute inset-4 rounded-full bg-btc/25 blur-3xl" aria-hidden="true" />
          <img src={libroImg} alt="Libro JJ" className="relative w-64 rounded-lg border border-ui-border shadow-2xl shadow-black/50 md:w-72" />
          <img
            className="absolute right-0 top-0 w-20 translate-x-8 -translate-y-8"
            src={newProductImg}
            alt="Nuevo producto"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-btc">Libro</p>
          <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Adquiere mi libro</h2>
          <p className="mt-3 text-lg text-ui-muted">…y deja de ser un esclavo.</p>

          <div className="mt-8 flex max-w-sm flex-col gap-3">
            <a
              href={buildWaMeLink("mentoriaPrimary", "bookPurchase")}
              className="flex items-center justify-center gap-2 rounded-lg bg-btc px-5 py-3.5 font-bold text-black shadow-lg shadow-btc/20 transition hover:-translate-y-0.5 hover:bg-btc-dark"
            >
              <span>Comprar en Ecuador</span>
              <img src={wasapIcon} alt="WhatsApp" className="w-6" />
            </a>
            <a
              className="flex justify-center rounded-lg border border-ui-border bg-white py-3 transition hover:-translate-y-0.5 hover:border-btc/60"
              href="https://www.amazon.com/dp/B0FKSPCYJP"
            >
              <img className="w-24" src={amazonIcon} alt="Amazon" />
            </a>
            <Link
              to="/libro/bitcoinoesclavitud"
              className="rounded-lg border border-btc px-5 py-3.5 text-center font-bold text-btc transition hover:bg-btc/10"
            >
              Contenido del libro
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
