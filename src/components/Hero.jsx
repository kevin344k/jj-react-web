import React from "react";
import video from "../assets/Video/hero_video.mp4";
import FlipClock from "./FlipClock";
export default function Hero() {
  const mentorshipItems = [
    "No caer en estafas",
    "Guardar correctamente las llaves privadas",
    "Manejo de wallets frías",
    "Uso de hardware wallet y software wallet",
    "Crear wallets",
    "Comprar Bitcoin",
    "Comprar y transferir Bitcoin de la forma más económica",
    "Recuperación de saldos de wallets",
    "Manejo de wallets geográficas",
    "Revisar empresas y proyectos cripto",
    "La mejor forma de invertir",
    "Crear portafolio",
    "Airdrops (dinero gratis)",
    "Launchpool (dinero gratis)",
    "Crear intercambios",
    "Crear nodo (Theta Network)",
    "Protocolo Martha Julia",
    "Soporte 24/7",
    "Actualización constante de contenido",
    "Grupo de WhatsApp",
    "Canal de difusión exclusivo para alumnos",
    "Libros",
  ];
  return (
    <div className="relative h-fit flex flex-col items-center gap-4 justify-center py-12">
      <div className=" text-center flex flex-col items-center justify-center">
        <FlipClock></FlipClock>
        <p className="text-4xl font-bold p-3 py-5 text-white">
          BITCOIN ES SACARSE LA LOTERIA EN CAMARA LENTA
        </p>
        <a
          className=" bg-fm-turquesa text-neutral-900 px-12 py-4 text-lg md:text-xl font-bold rounded-full hover:bg-fm-turquesa"
          href="https://api.whatsapp.com/send?phone=593996737500&text=INFORMACION%20SOBRE%20LA%20MENTORIA%20PREMIUM"
        >
          Mentoria Premium
        </a>
        
      </div>
      <div>
       
        <ul className=" grid grid-cols-2 sm:grid-cols-2 px-1 sm:px-3 gap-2 list-none text-lg lg:max-w-[800px] lg:mx-auto">
          {mentorshipItems.map((item, i) => (
            <li key={i} className="flex items-center text-white text-border gap-2 font-bold text-xs sm:text-[14px] md:text-[16px] lg:text-xl">
              <span className="">🔥</span> {item}
            </li>
          ))}
        </ul>
      </div>
      <video
        className="absolute -z-1 inset-0 object-cover w-full h-full brightness-[0.8]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
