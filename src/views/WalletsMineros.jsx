import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import { buildWhatsAppApiLink } from "../utils/links";

const cards = [


  {
    title: " Jade Core ",
    subtitle:"Hardware Wallet",
    description: "Jade Core busca que los nuevos usuarios de Bitcoin puedan guardar y controlar sus propios fondos de forma sencilla, sin depender de plataformas de intercambio ni bancos, siguiendo la visión original de Satoshi Nakamoto de un sistema financiero sin intermediarios.",
    image: "https://store.blockstream.com/cdn/shop/files/2.jpg?v=1771020835&width=600",
    waLink: buildWhatsAppApiLink("walletSales", "walletJadeCore"),
    price:"155",
    simbol:"USD"

  },
  {
    title: " Jade Plus ",
    subtitle:"Hardware Wallet",
    description: "La nueva Jade Plus es la billetera fría más avanzada de Blockstream, con pantalla a color y soporte para Bitcoin y Liquid. Seguridad máxima para tus ahorros.",
    image: "https://store.blockstream.com/cdn/shop/files/2_2.jpg?v=1771356905&width=800",
    waLink: buildWhatsAppApiLink("walletSales", "walletJadePlus"),
    price:"220",
    simbol:"USD"
  },


  
  {
    title: " Jade Classic",
     subtitle:"Hardware Wallet",
    description: "La clásica Jade, billetera fría segura y económica, ideal para principiantes y usuarios avanzados. Compatible con Bitcoin y Liquid.",
    image: "https://store.blockstream.com/cdn/shop/files/Jade_Bitcoin_Hardware_Wallet_-_Green_-_Front.png?v=1767373365&width=800",
    waLink: buildWhatsAppApiLink("walletSales", "walletJade"),
    price:"120",
    simbol:"USD"
  },
  {
    title: "Bitcoins Miner Bitaxes Gamma 601",
     subtitle:"Minero",
    description: "Uno de los mineros potentes y eficientes del mercado. Perfecto para minería de Bitcoin.",
    image: "https://m.media-amazon.com/images/I/61wNXnDuSyL._AC_SX466_PIbundle-99,TopRight,0,0_SH20_.jpg",
    waLink: buildWhatsAppApiLink("walletSales", "walletGamma601")
  },
    {
    title: "LILYGO T-Display-S3 ESP32-S3 TTGO Development Board",
     subtitle:"Generador de Entropía",
    description: "Crea tu propia wallet!,Genera tu propia frase semilla ",
    image: "https://m.media-amazon.com/images/I/51NRszXfwgL._AC_SL1000_.jpg",
    waLink: buildWhatsAppApiLink("walletSales", "esp32EntropiGenerator"),
     price:"75",
    simbol:"USD"
  },
   {
    title: "KIT Placa metálica",
     subtitle:"Almacenamiento de frases semilla",
    description: "Compatible con formato de 12 y 24 palabras + passphrase",
    image: "/imagenes/placa_de_metal.jpg",
    waLink: buildWhatsAppApiLink("walletSales", "placa_de_metal"),
     price:"37",
    simbol:"USD"
  },
  {
    title: "Juego Dados de casino grado AAA",
     subtitle:"",
    description: "",
    image: "https://m.media-amazon.com/images/I/71Ke8DtYAdL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    waLink: buildWhatsAppApiLink("walletSales", "juego_dados"),
     price:"28",
    simbol:"USD"
  }
];

export default function WalletsMineros() {
  return (
    <div className="min-h-screen bg-ui-bg font-body text-ui-text">
      <Navbar />
      <main className="relative mx-auto max-w-7xl px-4 py-16">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-ui-muted transition hover:text-btc">
          <ArrowLeft className="h-4 w-4" /> Volver al inicio
        </Link>
        <SectionHeader
          eyebrow="Catálogo"
          title="Mineros y Wallets"
          subtitle="Equipos originales para custodiar y minar tu propio Bitcoin."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-ui-border bg-ui-bg2 p-6 transition duration-300 hover:-translate-y-1 hover:border-btc/50"
            >
              <div className="mb-5 flex h-48 items-center justify-center rounded-xl bg-white p-4">
                <img src={card.image} alt={card.title} loading="lazy" className="max-h-full object-contain transition duration-300 group-hover:scale-105" />
              </div>
              {card.subtitle && (
                <span className="mb-2 w-fit rounded-full bg-btc/15 px-3 py-1 text-xs font-bold text-btc">{card.subtitle}</span>
              )}
              <h2 className="font-display text-xl font-bold leading-snug">{card.title.trim()}</h2>
              {card.description && <p className="mt-3 text-sm text-ui-muted">{card.description}</p>}
              <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                <p className="font-display text-3xl font-bold">
                  {card.price ? (
                    <>
                      ${card.price} <span className="text-sm font-normal text-ui-muted">{card.simbol}</span>
                    </>
                  ) : (
                    <span className="text-base font-normal text-ui-muted">Consultar precio</span>
                  )}
                </p>
                <a
                  href={card.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-btc px-5 py-2.5 font-bold text-black transition hover:bg-btc-dark"
                >
                  Pedir
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
