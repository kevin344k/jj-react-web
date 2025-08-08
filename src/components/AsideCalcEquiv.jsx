import React, { useState, useEffect } from "react";

export default function AsideCalcEquiv({
  priceBTC,
  inputBTC,
  inputDollar,
  halvin_now,
  halvins
}) {
  const [equivalencias, setEquivalencias] = useState([]);

  useEffect(() => {
     // Si falta priceBTC o inputBTC está vacío, limpiar equivalencias y salir
  if (!priceBTC || inputBTC === "" || inputDollar === "") {
    setEquivalencias([]); // Limpia estado
    return;
  }


    const RI = halvin_now.recompensaBloqueNow;
    const CP = halvin_now.costoProducciónBTC;
    const NHBase = halvin_now.halvin_now_numero;

    const nuevasEquivalencias = halvins
      .slice(5, halvins.length - 13)
      .map((h) => {
        const PBTC = (RI * CP * Math.pow(2, h.numero - NHBase)) / h.Rewards;
        const inversion =
          PBTC * (inputBTC ? parseFloat(inputBTC.replace(/,/g, "")) : 0);
        return {
          year: h.Year,
          PBTC,
          inversion,
        };
      });

    setEquivalencias(nuevasEquivalencias);
  }, [priceBTC, inputBTC, halvins, halvin_now]);

  function short_amounts(input) {
    let num = Number(input);
    if (isNaN(num)) return "$0";

    const scales = [
      { value: 1_000_000_000_000_000_000, suffix: "Trillones" },
      { value: 1_000_000_000_000, suffix: "Billones" },
      { value: 1_000_000, suffix: "Millones" },
    ];

    for (const scale of scales) {
      if (num >= scale.value) {
        const val = num / scale.value;
        return `$${format_amount(val)} ${scale.suffix}`;
      }
    }

    return `$${format_amount(num)}`;

    function format_amount(amount) {
      return new Intl.NumberFormat("es-MX", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }).format(amount);
    }
  }

  return (
    <div id="aside-calc-jub" className="flex bg-white flex-col p-2 gap-1 w-full shadow-lg rounded-md">
         <p className="font-bold mb-2 text-center py-4 text-xl">Equivalencia en cada halvin</p>
          <div className="header-aside w-full flex items-center justify-between font-semibold border-b pb-2 mb-2 md:px-3">
            <p>Año</p>
            <p>PBTC</p>
            <p>Inversión</p>
          </div>
      {equivalencias.length === 0 ? (
        <p className="text-center">No hay equivalencias para mostrar</p>
      ) : (
        <div className=" w-full flex flex-col p-4">
         
        <div className="flex flex-col gap-2">
              {equivalencias.map(({ year, PBTC, inversion }) => (
            <div
              key={year}
              className="flex border border-fm-turquesa rounded-md  gap-4 justify-between md:px-3 p-1 border-b last:border-none"
            >
              <p>{year}</p>
              <p className="w-[100px] md:w-[200px]  text-right truncate">{short_amounts(PBTC)}</p>
              <p className="w-[100px] md:w-[200px] text-right truncate">{short_amounts(inversion)}</p>
            </div>
          ))}
        </div>
        </div>
      )}
    </div>
  );
}
