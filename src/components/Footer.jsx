import React from "react";
import { buildWaMeLink } from "../utils/links";

export default function Footer() {
  return (
    <footer className="border-t border-ui-border bg-ui-bg2 pb-6 text-center font-body text-ui-text">
<div className="py-15 px-4 lg:flex lg:items-center lg:justify-center  lg:gap-8 xl:max-w-[1200px] xl:mx-auto">
        <ul className="flex flex-col items-center justify-center md:flex-col md:justify-center gap-4 mb-6 text-sm lg:items-start">
        <li>
          <a
            href="https://mempool.space/es/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-btc transition text-ui-muted"
          >
            mempool - Bitcoin Explorer
            <img
              src="https://mempool.space/resources/favicons/favicon-32x32.png"
              alt="Mempool favicon"
              className="w-4 h-4"
            />
          </a>
        </li>
        <li>
          <a
            href="https://bitinfocharts.com/top-100-richest-bitcoin-addresses.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-btc  text-ui-muted transition"
          >
            Bitcoin Rich List
          </a>
        </li>
        <li>
          <a
            href="https://pbs.twimg.com/media/FwLQcUMWIAQ4wYN?format=png&name=900x900"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-btc transition text-ui-muted"
          >
            Tabla - Block Subsidy
          </a>
        </li>
        <li>
          <a
            href="https://companiesmarketcap.com/assets-by-market-cap/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-btc transition text-ui-muted"
          >
            Top Assets by Market Cap
          </a>
        </li>
      </ul>

      <div className="rounded-2xl border border-ui-border bg-ui-bg py-5 text-center md:flex md:justify-center md:gap-4 md:items-center lg:px-12">
        <p className="mb-2 text-ui-muted ">
          ¿Eres nuevo en el mundo de las criptomonedas?
        </p>
        <a
          href={buildWaMeLink("mentoriaPrimary", "infoMentoriaPremium")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-btc text-black font-bold px-5 py-2 rounded-lg hover:bg-btc-dark transition"
        >
          ¡Contáctame!
        </a>
      </div>
</div>
      <p className="text-xs text-ui-muted">Sitio web desarrollado por <a className="text-btc underline" href="https://labsproductivity.com" target="_blank" rel="noopener noreferrer">labsproductivity.com</a></p>
    </footer>
  );
}
