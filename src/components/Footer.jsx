import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#182025] pb-4 text-center border-t ">
<div className="py-15 px-4 lg:flex lg:items-center lg:justify-center  lg:gap-8 xl:max-w-[1200px] xl:mx-auto">
        <ul className="flex flex-col items-center justify-center md:flex-col md:justify-center gap-4 mb-6 text-sm lg:items-start">
        <li>
          <a
            href="https://mempool.space/es/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-fm-turquesa transition text-neutral-300"
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
            className="hover:text-fm-turquesa  text-neutral-300 transition"
          >
            Bitcoin Rich List
          </a>
        </li>
        <li>
          <a
            href="https://pbs.twimg.com/media/FwLQcUMWIAQ4wYN?format=png&name=900x900"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fm-turquesa transition text-neutral-300"
          >
            Tabla - Block Subsidy
          </a>
        </li>
        <li>
          <a
            href="https://companiesmarketcap.com/assets-by-market-cap/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fm-turquesa transition text-neutral-300"
          >
            Top Assets by Market Cap
          </a>
        </li>
      </ul>

      <div className="text-center bg-[#111619] py-4 shadow-inner rounded-md md:flex md:justify-center md:gap-4 md:items-center lg:px-12">
        <p className="mb-2 text-neutral-400 ">
          ¿Eres nuevo en el mundo de las criptomonedas?
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=593996737500&text=INFORMACION%20SOBRE%20LA%20MENTORIA%20PREMIUM"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-fm-turquesa text-neutral-900 font-bold  px-4 py-2 rounded-full hover:bg-green-600 transition"
        >
          ¡Contáctame!
        </a>
      </div>
</div>
      <p className="text-xs text-neutral-400">Sitio web desarrollado por <a className="text-yellow-500 underline" href="https://kevin344k.github.io/portfolio_kevin_webdeveloper/">kevin344k</a></p>
    </footer>
  );
}
