import React, { useState } from "react";
import video from "../assets/Video/hero_video.mp4";
import img_cajero from "/imagenes/cajeros.jpeg";
import FlipClock from "./FlipClock";
import Marquee from "./Marquee";

const MENTORIA_TELEGRAM_URL = "https://t.me/JJChagerbenOficial";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center pt-20 pb-6 xl:pb-2 xl:py-10">
 
      <div className=" text-center w-full  flex flex-col items-center justify-center xl:max-w-[1250px] xl:py-6">
        <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold px-4 pb-4 lg:pb-5">
          Ayudo a las personas a salir de la pobreza
        </p>
        <FlipClock></FlipClock>
        <p className="text-2xl sm:text-3xl font-bold p-3 pb-2 my-3 text-white lg:text-4xl lg:pb-4 lg:my-4">
          <span className=" font-extrabold bg-gradient-to-r from-[#FF8F00] to-[#FFE500] bg-clip-text text-transparent">₿ITCOIN</span>  ES SACARSE LA LOTERIA EN CAMARA LENTA
        </p>
       <div className=" flex flex-col w-full items-center justify-center">
         <div className="flex flex-col lg:flex-row gap-2 sm:gap-8 items-center justify-center md:grid md:grid-cols-2 md:w-full md:px-6  lg:flex lg:w-[80%]  w-[80%] ">
          <a
            className="p-2 font-bold font-geist py-4 rounded-xl shadow flex justify-center hover:bg-fm-turquesa_strong bg-fm-turquesa w-full transition"
            href={MENTORIA_TELEGRAM_URL}
          >
            Mentoria Premium
          </a>
          <a
            className="p-2 font-bold font-geist py-4 rounded-xl shadow flex justify-center hover:bg-fm-turquesa_strong bg-fm-turquesa w-full transition"
            href={MENTORIA_TELEGRAM_URL}
          >
            Mentoria VIP Presencial
          </a>
          <a
            className="p-2 font-bold font-geist py-4 rounded-xl shadow flex justify-center hover:bg-fm-turquesa_strong bg-fm-turquesa w-full transition"
            href="#sec-announce-book"
          >
            Mi libro
          </a>
          <a
            className="p-2 font-bold font-geist py-4 rounded-xl shadow flex justify-center hover:bg-fm-turquesa_strong bg-fm-turquesa w-full transition"
            href="/wallets&mineros"
          >
            Wallet & Mineros
          </a>
        </div>
        <div className="flex  pt-12 divide-x divide-neutral-400 ">
            <div className="px-4 md:px-8 text-left"><span className="text-2xl text-white font-bold">
             10k <span className="text-fm-turquesa">+</span> </span>
             <p className="text-neutral-300  text-xs md:text-[16px] ">Alumnos</p></div>
            <div className="px-4 md:px-8 text-left"><span className="font-bold text-2xl text-white">
             12 <span className="text-fm-turquesa">+</span> </span>
             <p className="text-neutral-300  text-xs md:text-[16px] ">Años de experiencia</p></div>
               <div className=" px-4  md:px-8 text-left"><span className="font-bold text-2xl  text-[#ff8f00]">
            BTC </span>
             <p className="text-neutral-300  text-xs md:text-[16px] ">Autor best-seller</p></div>
            
        </div>
       </div>
      </div>

    <Marquee
          className="mt-18"
  
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


      <video
        className="absolute -z-1 inset-0 object-cover w-full h-full brightness-[0.5]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>
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
    </div>
  );
}
