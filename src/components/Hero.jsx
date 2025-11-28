import React, { useState } from "react";
import video from "../assets/Video/hero_video.mp4";
import img_cajero from "/imagenes/cajeros.jpeg";
import FlipClock from "./FlipClock";
import SectionCardsMentoria from "./SectionCardsMentoria";
export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-fit flex flex-col items-center gap-4 justify-center py-12 xl:py-10">
      <div className=" text-center flex flex-col items-center justify-center xl:max-w-[1250px] xl:py-6">
{ /*       <FlipClock></FlipClock>*/}
        <p className="text-4xl font-bold p-3 pb-5 text-white lg:text-6xl lg:pb-12">
          BITCOIN ES SACARSE LA LOTERIA EN CAMARA LENTA
        </p>
       {/* <div className="flex flex-col  gap-2 sm:gap-8 items-center justify-center">
          <a
            className=" bg-fm-turquesa text-neutral-900 px-12 py-4 text-lg md:text-xl font-bold rounded-full hover:bg-fm-turquesa xl:text-3xl"
            href="https://api.whatsapp.com/send?phone=593996737500&text=INFORMACION%20SOBRE%20LA%20MENTORIA%20PREMIUM"
          >
            Mentoria Premium
          </a>
          <a
            className="border border-fm-turquesa bg-[#182025] text-white w-[253px] py-2 px-2 mt-2   text-md  font-bold rounded-full md:mt-0  xl:w-fit xl:mt-0 xl:py-4 xl:px-5 xl:text-2xl"
            href="https://api.whatsapp.com/send?phone=593996737500&text=Hola,%20estoy%20interesado%20en%20la%20Mentoria%20VIP%20%22Mi%20primer%20Bitcoin%22:%20Presencial"
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
       <SectionCardsMentoria/>
    </div>
  );
}
