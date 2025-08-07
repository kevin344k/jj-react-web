import React, { useEffect, useState } from "react";
import bitcoin from "/imagenes/bitcoin.png";
import dollar from "/imagenes/dollar.png";
import info from "/imagenes/info.png";
import icon_arrow from "/imagenes/icon-arrow.svg";

export default function Section_calcualdora() {
  const [animate, setAnimate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  // Bloquear scroll al abrir modal
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      setIsModalOpen(false);
    }
  };

  return (
<>
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
            <button
              onClick={() => setIsModalOpen(true)}
              className="m-4 bg-transparent border-0 rounded-full"
            >
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
                className="p-2 outline-[#22dfc1] text-center border rounded-md"
              />
            </div>
            <img
              src={icon_arrow}
              className="text-5xl my-4 pl-12 animate-bounce"
              alt="arrow"
            />
            <div className="flex gap-8 items-center">
              <img src={bitcoin} alt="btc" className="w-7 mx-auto" />
              <input
                type="text"
                id="input-result-equiv-btc"
                readOnly
                placeholder="Equivalencia en btc"
                className="p-2 outline-none text-center border rounded-md"
              />
            </div>
          </div>

          {/* Resultados Halvings */}
          <div className="py-12 flex flex-col gap-8 text-center border-b border-gray-400 animate-fade-in">
            <div className="rounded-2xl border p-4 w-full">
              <p className="font-bold pb-2">Halvin actual</p>
              <span
                id="span-halvin-now-nro"
                className="flex justify-center pb-2 text-gray-500"
              ></span>
              <p className="font-bold pb-2">Año</p>
              <span
                id="span-halvin-now-anio"
                className="flex justify-center pb-2 text-gray-500"
              ></span>
              <p className="font-bold pb-2">Rec. x bloque</p>
              <span
                id="span-halvin-now-reward"
                className="flex justify-center pb-2 text-gray-500"
              ></span>
            </div>

            <div className="rounded-2xl border border-[#22dfc1] bg-[#effefa] shadow-md p-4 w-full">
              <p className="font-bold pb-2">Halvin jubilación</p>
              <span
                id="span-halvin-jub-nro"
                className="flex justify-center pb-2 text-gray-500"
              ></span>
              <p className="font-bold pb-2">Año</p>
              <span
                id="span-halvin-jub-anio"
                className="flex justify-center pb-2 text-gray-500"
              ></span>
              <p className="font-bold pb-2">Rec. x bloque</p>
              <span
                id="span-halvin-jub-reward"
                className="flex justify-center pb-2 text-gray-500"
              ></span>
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
          <div id="aside-calc-jub" className="flex flex-col p-2 gap-1"></div>
        </div>
      </div>

      {/* MODAL */}
  
    </section>
        {isModalOpen && (
        <div
          id="modal-backdrop"
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50  flex items-center justify-center bg-black/50"
        >
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-[380px] animate-fade-in">
            {/* Header */}
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-xl font-bold">Nomenclatura</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-2xl font-bold hover:text-red-500"
              >
                &times;
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div>
                  <var className="text-xl">PBTC</var> =
                </div>
                <div>
                  <div>
                    <var>(RI</var> * <var>CP)</var>
                    <var>*2</var>
                    <var>
                      <sup>NH</sup>
                    </var>
                  </div>
                  <div className="border-t border-black text-center">
                    <var>RF</var>
                  </div>
                </div>
              </div>
              <p>
                <var>RI =</var> Recompensa Inicial
              </p>
              <p>
                <var>RF =</var> Recompensa Final
              </p>
              <p>
                <var>NH =</var> Número de Halvins
              </p>
              <p>
                <var>CP =</var> Costo de Producción
              </p>
              <p>
                <var>PBTC =</var> Precio de Bitcoin
              </p>
            </div>

            {/* Footer */}
            <div className="border-t p-4 text-center">
              <h3 className="font-semibold text-lg">
                No importa cuando leas esto, Bitcoin siempre será barato
              </h3>
              <p>
                <var>-</var> JJ CHAGERBEN <var>-</var>
              </p>
            </div>
          </div>
        </div>
      )}
</>
  );
}
