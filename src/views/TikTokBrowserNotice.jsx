import React from "react";

export default function TikTokBrowserNotice() {
  return (
    <div className="h-screen bg-[#0B0E11] px-4 py-3 flex flex-col ">
   
 
        <div className="relative flex justify-end items-end ">
          <div className="absolute z-10 top-3 rounded-2xl border border-yellow-200/70 bg-gradient-to-br from-amber-200 to-amber-400 shadow-md shadow-yellow-700/20 p-3 shadow-[0_22px_50px_rgba(251,191,36,0.35)]">
            <p className="text-lg font-black leading-snug text-white font-medium">
              Toca <span className="text-white">⋯</span> para abrir en tu
              navegador
            </p>
          </div>
          <div className="absolute z-2 right-7 top-1 h-4 w-4 rotate-45 bg-gradient-to-bl from-amber-400 to-amber-300 shadow-yellow-700/20" />
        </div>
        <div className="absolute top-25 right-10 rotate-220 text-neutral-400 w-15">
            <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality"    fill="currentColor" viewBox="0 0 415 512.572"><path fill-rule="nonzero" d="M308.051 272.977c29.655 36.014 70.851 93.178 101.838 124.165 4.628 7.711 6.07 16.394 4.501 24.453-1.608 8.3-6.324 15.885-13.944 21.102l-2.6 1.589-134.967 68.286-11.747-23.296c12.434-6.292 93.431-46.069 123.485-61.863-113.327-8.43-202.581-50.997-265.629-119.244C39.366 232.813 2.091 126.414 0 .411L26.047 0c1.984 119.466 36.915 219.904 102.141 290.502 59.271 64.156 143.951 103.929 252.058 111.185L287.925 289.53l20.126-16.553z"/></svg>
        </div>


     <div className="flex h-full  items-center justify-center border border-amber-500/20">
          <span className="text-7xl">🤭</span>
        </div>



   
     
    </div>
  );
}
