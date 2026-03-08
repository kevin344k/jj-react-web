import React, { useState } from "react";
import video from "../assets/Video/hero_video.mp4";
import img_cajero from "/imagenes/cajeros.jpeg";
import FlipClock from "./FlipClock";
import Marquee from "./Marquee";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center pt-20 pb-6 xl:pb-2 xl:py-10">
      <div className=" text-center w-full  flex flex-col items-center justify-center xl:max-w-[1250px] xl:py-6">
               <FlipClock></FlipClock>
        <p className="text-4xl font-bold p-3 pb-5 text-white lg:text-6xl lg:pb-25">
          <span className=" font-extrabold bg-gradient-to-r from-[#FF8F00] to-[#FFE500] bg-clip-text text-transparent">₿ITCOIN</span>  ES SACARSE LA LOTERIA EN CAMARA LENTA
        </p>
       <div className=" flex flex-col w-full items-center justify-center">
         <div className="flex flex-col lg:flex-row gap-2 sm:gap-8 items-center justify-center lg:w-[60%] w-[80%] ">
          <a
            className="p-2 font-bold font-geist py-4 rounded-xl shadow flex justify-center  hover:bg-fm-turquesa_strong bg-fm-turquesa y-100  w-full transition hover:border hover:border-neutral-600 "
            href="https://api.whatsapp.com/send?phone=593998177135&text=Hola,%20estoy%20interesado%20en%20la%20Mentoria%20VIP%20%22Mi%20primer%20Bitcoin%22:%20Presencial"
          >
            Mentoria VIP: Presencial
          </a>
          <a
            className="p-2 py-4 font-semibold font-geist rounded-xl shadow flex justify-center hover:font-semibold bg-neutral-900 text-white border border-neutral-600 hover:bg-neutral-800  hover:border-fm-turquesa w-full transition"
            href="https://api.whatsapp.com/send?phone=593998177135&text=INFORMACION%20SOBRE%20LA%20MENTORIA%20PREMIUM"
          >
            Mentoria Premium
          </a>

          <a
className="p-2 py-4 rounded-xl shadow font-semibold font-geist flex justify-center hover:font-semibold bg-neutral-900 text-white border border-neutral-600 hover:bg-neutral-800  hover:border-fm-turquesa w-full transition"
            href="#sec-announce-book"
          >
            Mi libro
          </a>
        </div>
        <div className="flex  pt-12 divide-x divide-neutral-400 ">
            <div className="px-4 md:px-8 text-left"><span className="text-2xl text-white font-bold">
             500 <span className="text-fm-turquesa">+</span> </span>
             <p className="text-neutral-300  text-xs md:text-[16px] ">Alumnos</p></div>
            <div className="px-4 md:px-8 text-left"><span className="font-bold text-2xl text-white">
             7 <span className="text-fm-turquesa">+</span> </span>
             <p className="text-neutral-300  text-xs md:text-[16px] ">Años de experiencia</p></div>
               <div className=" px-4  md:px-8 text-left"><span className="font-bold text-2xl  text-[#ff8f00]">
            BTC </span>
             <p className="text-neutral-300  text-xs md:text-[16px] ">Autor best-seller</p></div>
            
        </div>
       </div>
        {/* <div className="flex flex-col  gap-2 sm:gap-8 items-center justify-center">
          <a
            className=" bg-fm-turquesa text-neutral-900 px-12 py-4 text-lg md:text-xl font-bold rounded-full hover:bg-fm-turquesa xl:text-3xl"
            href="https://api.whatsapp.com/send?phone=593998177135&text=INFORMACION%20SOBRE%20LA%20MENTORIA%20PREMIUM"
          >
            Mentoria Premium
          </a>
          <a
            className="border border-fm-turquesa bg-[#182025] text-white w-[253px] py-2 px-2 mt-2   text-md  font-bold rounded-full md:mt-0  xl:w-fit xl:mt-0 xl:py-4 xl:px-5 xl:text-2xl"
            href="https://api.whatsapp.com/send?phone=593998177135&text=Hola,%20estoy%20interesado%20en%20la%20Mentoria%20VIP%20%22Mi%20primer%20Bitcoin%22:%20Presencial"
          >
            Mentoria VIP: Presencial
          </a>
      { /*  <button
            className="border  bg-[#F7931A] text-white w-[253px] py-2 px-2 mt-2   text-md  font-bold rounded-full md:mt-0  xl:w-fit xl:mt-0 xl:py-4 xl:px-5 xl:text-2xl"
            onClick={() => setIsOpen(true)}
          >
            Cajeros Bitcoin
          </button>}
        </div>*/}
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
