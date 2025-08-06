import React, { useEffect, useState } from "react";
import bitcoin from "../assets/imagenes/bitcoin.png";
import dollar from "../assets/imagenes/dollar.png";
import info from "../assets/imagenes/info.png";
import icon_arrow from "../assets/imagenes/icon-arrow.svg";
export default function Section_calcualdora() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // pequeño delay para el efecto
  }, []);

  return (
    <section
      id="sec-calculadora-jub"
      className={`min-w-[320px] flex flex-col justify-center items-center border-t-8 py-15 px-1 bg-neutral-100 border-[#22dfc1] ${
        animate ? "animate-fade-in" : "opacity-0"
      }`}
    >
               <div className="text-center mb-8">
        <p className="text-3xl font-bold">Calculadora de Jubilación</p>
    
        <div className="w-24 h-1 bg-fm-turquesa mx-auto mt-3"></div>
      </div>
      {/* Anuncio */}
      <div className="bg-[#effefa] border border-[#22dfc1] rounded-2xl text-center p-4 leading-6 max-w-[425px] shadow-md my-8">
  
        <p>
          Estos valores son especulativos de forma estática sobre un modelo
          estático, pueden cambiar si cambian las condiciones de mercado.
        </p>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col xl:flex-row gap-6 items-center">
        {/* Card calculadora */}
        <div className="bg-white shadow-md w-[310px] p-4 relative items-center rounded-md animate-fade-in">
       
          <div className="flex justify-between items-center px-2"> 
            <div className="flex items-center gap-4">
              <img src={bitcoin} alt="btc" className="w-7" />
              <span className="text-xl font-bold" id="span-price-btc"></span>
            </div>
               <button className="m-4 bg-transparent border-0 roundede-full ">
            <img src={info} alt="info-ico" className="w-6" />
          </button>
               
          </div>

          {/* Grupo precio y fórmula */}
          <div className="flex flex-col-reverse justify-center items-center gap-8 text-center pb-12 mt-8 animate-fade-in">
         
            <div className="flex justify-center gap-1 items-center text-center">
              <div>
                <var>PBTC</var> =
              </div>
              <div>
                <div>
                  <var>(RI</var> * <var>CP)</var>
                  <var>*2</var>
                  <var>
                    <sup>NH</sup>
                  </var>
                </div>
                <div className="border-t border-black">
                  <var>RF</var>
                </div>
              </div>
            </div>
          </div>

          {/* Input inversión */}
          <div className="flex flex-col justify-center items-center pb-12 border-b border-gray-400 animate-fade-in">
            <div className="flex gap-8 items-center">
              <img src={dollar} alt="dollar" className="w-7 mx-auto" />
              <input
                id="inversion-inicial"
                type="number"
                min="0"
                placeholder="Inversión inicial"
                className="p-4 outline-[#22dfc1] w-80 text-center border rounded-md"
              />
            </div>
            <img src={icon_arrow} className="text-5xl my-2"/>
            <div className="flex gap-8 items-center">
              <img src={bitcoin}  alt="btc" className="w-7 mx-auto" />
              <input
                type="text"
                id="input-result-equiv-btc"
                readOnly
                placeholder="Equivalencia en btc"
                className="p-4 outline-none w-80 text-center border rounded-md"
              />
            </div>
          </div>

          {/* Resultados Halvings */}
          <div className="py-12 flex flex-col gap-8 text-center border-b border-gray-400 animate-fade-in">
            <div className="rounded-2xl border p-4 w-full">
              <p className="font-bold pb-2">Halvin actual</p>
              <span id="span-halvin-now-nro" className="flex justify-center pb-2 text-gray-500"></span>
              <p className="font-bold pb-2">Año</p>
              <span id="span-halvin-now-anio" className="flex justify-center pb-2 text-gray-500"></span>
              <p className="font-bold pb-2">Rec. x bloque</p>
              <span id="span-halvin-now-reward" className="flex justify-center pb-2 text-gray-500"></span>
            </div>

            <div className="rounded-2xl border border-[#22dfc1] bg-[#effefa] shadow-md p-4 w-full">
              <p className="font-bold pb-2">Halvin jubilación</p>
              <span id="span-halvin-jub-nro" className="flex justify-center pb-2 text-gray-500"></span>
              <p className="font-bold pb-2">Año</p>
              <span id="span-halvin-jub-anio" className="flex justify-center pb-2 text-gray-500"></span>
              <p className="font-bold pb-2">Rec. x bloque</p>
              <span id="span-halvin-jub-reward" className="flex justify-center pb-2 text-gray-500"></span>
            </div>
          </div>

          {/* Resultado fórmula */}
          <div className="p-8 text-center animate-fade-in">
            <p>La inversión inicial equivale a:</p>
            <span
              id="result_calc-formula"
              className="bg-[#22dfc1] block rounded-2xl p-8 my-8 text-4xl border-b-4 border-[#299b86] shadow-md min-w-[10rem]"
            ></span>
            <p>
              para el año <span id="result-calc-anio"></span>
            </p>
          </div>
        </div>

        {/* Aside con equivalencias */}
        <div className="mt-6 p-4 mb-6 text-center bg-white w-[310px] h-fit shadow-md rounded-md animate-fade-in">
          <h3 className="text-lg font-bold">Equivalencia en cada halvin</h3>
          <div className="flex flex-row p-4 justify-between font-bold">
            <p>Año</p>
            <p>PBTC</p>
            <p>Inversión</p>
          </div>
          <div id="aside-calc-jub" className="flex flex-col p-2 gap-1">
            {/* Resultados dinámicos */}
          </div>
        </div>
      </div>
    </section>
  );
}
