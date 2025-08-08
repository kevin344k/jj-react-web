import React from "react";
import video from "../assets/Video/hero_video.mp4";
import FlipClock from "./FlipClock"; 
export default function Hero() {
  return (
    <div className="relative h-[60vh] flex flex-col items-center gap-12 justify-center">
      <div className=" text-center flex flex-col items-center gap-12 justify-center">
       <FlipClock></FlipClock>
        <p className="text-4xl font-bold p-3 text-white">
          BITCOIN ES SACARSE LA LOTERIA EN CAMARA LENTA
        </p>
        <a
          className=" bg-fm-turquesa text-neutral-900 px-8 py-3 font-bold rounded-full hover:bg-fm-turquesa"
          href="https://api.whatsapp.com/send?phone=593996737500&text=INFORMACION%20SOBRE%20LA%20MENTORIA%20PREMIUM"
        >
          Mentoria Premium
        </a>
      </div>
      <video
        className="absolute -z-1 inset-0 object-cover w-full h-full"
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
