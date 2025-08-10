import React, { useEffect, useState } from "react";
import bitcoin from "/imagenes/bitcoin.png";
import dollar from "/imagenes/dollar.png";
import info from "/imagenes/info.png";
import icon_arrow from "/imagenes/icon-arrow.svg";
import halvins from "../assets/data/halvins.json";
import NumberFlow from "@number-flow/react";
import AsideCalcEquiv from "./AsideCalcEquiv";
export default function Section_calcualdora() {
  const APIPriceBTC_1 =
    "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";
  const APIPriceBTC_2 =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
  const [animate, setAnimate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputDollar, setInputDollar] = useState("");
  const [inputBTC, setInputBTC] = useState("");
  const [priceBTC, setPriceBTC] = useState(null);
  const [halvingEncontrado, setHalvingEncontrado] = useState(null);
  const [result, setResult] = useState("");
  const halvin_now = {
    costoProducciónBTC: 60965,
    recompensaBloqueNow: 3.125,
    halvin_now_numero: 5,
    anio_halvin_actual: 2024,
  };

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

  const validarNumeroDecimal = (val) => {
    return val === "" || /^\d*\.?\d*$/.test(val);
  };

  const handleChangeDollar = (e) => {
    let val = e.target.value;

    // Quitamos comas para validar y parsear
    const valSinComas = val.replace(/,/g, "");

    if (!validarNumeroDecimal(valSinComas)) {
      // Si no es válido, no actualizamos el estado
      return;
    }

    // Si está vacío, limpiamos ambos inputs
    if (valSinComas === "") {
      setInputDollar("");
      setInputBTC("");
      setHalvingEncontrado(null);
      setResult("");
      return;
    }

    // Formateamos con separadores
    const partes = valSinComas.split(".");
    let enteroFormateado = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Reconstruimos el valor con posible decimal incompleto
    let valorFormateado =
      partes.length > 1 ? enteroFormateado + "." + partes[1] : enteroFormateado;

    setInputDollar(valorFormateado);

    // Actualizamos BTC solo si priceBTC está definido
    if (priceBTC) {
      const num = parseFloat(valSinComas);
      if (!isNaN(num)) {
        console.log(num);

        setInputBTC((num / priceBTC).toFixed(8));
        findHalvin(num);
      } else {
        setInputBTC("");
      }
    }
  };

  const handleChangeBTC = (e) => {
    let val = e.target.value;

    // Quitar comas para validar y parsear
    const valSinComas = val.replace(/,/g, "");

    if (!validarNumeroDecimal(valSinComas)) {
      return; // no actualiza si no es válido
    }

    if (valSinComas === "") {
      setInputBTC("");
      setInputDollar("");
      setHalvingEncontrado(null);
      setResult("");
      return;
    }

    // Formatear parte entera con comas, dejar decimal igual
    const partes = valSinComas.split(".");
    let enteroFormateado = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    let valorFormateado =
      partes.length > 1 ? enteroFormateado + "." + partes[1] : enteroFormateado;

    setInputBTC(valorFormateado);

    if (priceBTC) {
      const num = parseFloat(valSinComas);
      if (!isNaN(num)) {
        // Formatear dólares con separadores y 2 decimales

        findHalvin(num * priceBTC);
        setInputDollar(
          num * priceBTC
            ? (num * priceBTC).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : ""
        );
      } else {
        setInputDollar("");
      }
    }
  };

  // Fetch precio BTC (intenta dos APIs)
  useEffect(() => {
    async function fetchFuncAsync(url1, url2 = null) {
      try {
        const response = await fetch(url1);
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const data = await response.json();
        // En la primera API, el precio está en data.price
        return data.price ?? (data.bitcoin ? data.bitcoin.usd : null);
      } catch (error) {
        console.warn("Error con la primera API:", error.message);
        if (url2) {
          try {
            const response2 = await fetch(url2);
            if (!response2.ok)
              throw new Error(`Error HTTP: ${response2.status}`);
            const data2 = await response2.json();
            // En la segunda API, el precio está en data.bitcoin.usd
            return data2.bitcoin?.usd ?? null;
          } catch (error2) {
            console.error("Error en segunda API:", error2.message);
          }
        }
        return null;
      }
    }

    fetchFuncAsync(APIPriceBTC_1, APIPriceBTC_2).then((precio) => {
      if (precio !== null) {
        setPriceBTC(Number(precio));
      } else {
        console.error("No se pudo obtener el precio de BTC de ninguna API");
      }
    });
  }, []);

  const findHalvin = (num) => {
    if (priceBTC && num !== "" && !isNaN(num)) {
      const resultEquivBTC = num / priceBTC;
      const halving = halvins.find((h) => h.Rewards <= resultEquivBTC);
      setHalvingEncontrado(halving || null);
    } else {
      setHalvingEncontrado(null);
      setResult("");
    }
  };
  console.log(result);

  useEffect(() => {
    if (halvingEncontrado !== null) {
      const RI = halvin_now.recompensaBloqueNow;
      const CP = halvin_now.costoProducciónBTC;
      const NHBase = halvin_now.halvin_now_numero;
      const PBTC =
        (RI * CP * Math.pow(2, halvingEncontrado.numero - NHBase)) /
        halvingEncontrado.Rewards;
      const valorLimpio = parseFloat(inputDollar.replace(/,/g, ""));
      const inversion =
        PBTC * ((isNaN(valorLimpio) ? 0 : valorLimpio) / priceBTC);

      console.log(inputDollar, inputBTC);

      setResult(inversion);
    } else{
      setResult("")
    }
  }, [inputDollar, inputBTC]);

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
            *Estos valores son especulativos sobre un modelo estático y pueden
            cambiar si las condiciones de mercado varían.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col  xl:flex-row gap-6 items-start md:w-[600px] xl:w-[1200px]">
          {/* Card calculadora */}
          <div className="bg-white shadow-md  p-4 relative items-center rounded-md animate-fade-in xl:w-[600px] xl:shrink-0">
            <div className="flex justify-between items-center px-2">
              <div className="flex items-center gap-4">
                <img src={bitcoin} alt="btc" className="w-7" />
                <span className="text-md font-normal" id="span-price-btc">
                  {priceBTC === null ? (
                    // Loader mientras no hay precio
                    <div className="flex justify-center items-center h-40">
                      <div
                        className="loader"
                        style={{
                          border: "6px solid #e0f7f5",
                          borderTop: "6px solid #3ef2d0",
                          borderRadius: "50%",
                          width: "20px",
                          height: "20px",
                          animation: "spin 1s linear infinite",
                        }}
                      />
                      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
                    </div>
                  ) : (
                    // Mostrar el precio una vez cargado
                    "$" +
                    priceBTC.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  )}
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="m-4 bg-transparent border-0 rounded-full"
              >
                <img src={info} alt="info-ico" className="w-6" />
              </button>
            </div>

            {/* Grupo precio y fórmula */}
            <div className="flex flex-col-reverse justify-center items-center gap-8 text-center pb-12 md:pb-8 mt-8 animate-fade-in ">
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
            <div className="flex flex-col justify-center items-center pb-12 border-b border-gray-400 animate-fade-in md:flex-row md:gap-6">
              <div className="flex gap-8 items-center md:gap-4">
                <img src={dollar} alt="dollar" className="w-7 mx-auto" />
                <input
                  id="inversion-inicial"
                  type="text"
                  min="0"
                  placeholder="Inversión inicial"
                  className="p-2 outline-[#22dfc1] text-center border rounded-md"
                  value={inputDollar}
                  onChange={handleChangeDollar}
                />
              </div>
              <img
                src={icon_arrow}
                className="text-5xl my-4 pl-12 animate-bounce md:rotate-270 md:px-0 md:py-5"
                alt="arrow"
              />
              <div className="flex gap-8 items-center md:gap-4">
                <img src={bitcoin} alt="btc" className="w-7 mx-auto" />
                <input
                  type="text"
                  id="input-result-equiv-btc"
                  placeholder="Equivalencia en btc"
                  className="p-2 outline-none text-center border rounded-md"
                  value={inputBTC}
                  onChange={handleChangeBTC}
                />
              </div>
            </div>

            {/* Resultados Halvings */}
            <div className="py-12 flex flex-col gap-8 text-center border-b border-gray-400 animate-fade-in md:flex-row">
              <div className="rounded-2xl border p-4 w-full">
                <p className="font-bold pb-2">Halvin actual</p>
                <span
                  id="span-halvin-now-nro"
                  className="flex justify-center pb-2 text-gray-500"
                >
                  {halvin_now.halvin_now_numero}
                </span>
                <p className="font-bold pb-2">Año de halvin</p>
                <span
                  id="span-halvin-now-anio"
                  className="flex justify-center pb-2 text-gray-500"
                >
                  {halvin_now.anio_halvin_actual}
                </span>
                <p className="font-bold pb-2">Rec. x bloque</p>
                <span
                  id="span-halvin-now-reward"
                  className="flex justify-center pb-2 text-gray-500"
                >
                  {halvin_now.recompensaBloqueNow}
                </span>
              </div>

              <div className="rounded-2xl border border-[#22dfc1] bg-[#effefa] shadow-md p-4 w-full">
                <p className="font-bold pb-2">Halvin jubilación</p>
                <span
                  id="span-halvin-jub-nro"
                  className="flex justify-center pb-2 text-gray-500"
                >
                  {halvingEncontrado ? (
                    <NumberFlow value={halvingEncontrado.numero} />
                  ) : (
                    "-"
                  )}
                </span>
                <p className="font-bold pb-2">Año</p>
                <span
                  id="span-halvin-jub-anio"
                  className="flex justify-center pb-2 text-gray-500"
                >
                  {halvingEncontrado ? halvingEncontrado.Year : "-"}
                </span>
                <p className="font-bold pb-2">Rec. x bloque</p>
                <span
                  id="span-halvin-jub-reward"
                  className="flex justify-center pb-2 text-gray-500"
                >
                  {halvingEncontrado
                    ? halvingEncontrado.Rewards.toFixed(9)
                    : "-"}
                </span>
              </div>
            </div>

            {/* Resultado fórmula */}
            <div className="p-8 text-center animate-fade-in">
              <p>La inversión inicial equivale a:</p>
              <span
                id="result_calc-formula"
                className="bg-[#22dfc1] block rounded-lg p-4 my-4 md:max-w-[250px] md:mx-auto text-xl border-b-4 border-[#299b86] shadow-md min-w-[10rem] text-neutral-600"
              >
                {result !== "" ? <>${<NumberFlow value={result} />}</> : ""}
              </span>
              <p>
                para el año{" "}
                <span id="result-calc-anio">{halvingEncontrado?.Year}</span>
              </p>
            </div>
          </div>

          {/* Aside con equivalencias */}
          <AsideCalcEquiv
            priceBTC={priceBTC}
            inputBTC={inputBTC}
            inputDollar={inputDollar}
            halvin_now={halvin_now}
            halvins={halvins}
          />
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
