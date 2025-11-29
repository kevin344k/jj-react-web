import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import wallet_jade from "/imagenes/jade-wallet.webp";
import tour_marzo from "/imagenes/cripto-tour.jpg";

export default function SectionCardsMentoria() {
  const [expandedCard1, setExpandedCard1] = useState(false);
  const [expandedCard2, setExpandedCard2] = useState(false);

  const itemsCard1 = [
    "Crear wallets - de 0 a experto",
    "Manejo de sub-billeteras",
    "Manejo de wallet de Bitcoin y altcoins",
    "Guardar correctamente las llaves privadas",
    "Uso profesional de hardware wallets y software wallets",
    "Recuperación de accesos y saldos de wallets (según gravedad del caso)",
    "Manejo de wallets geográficas",
    "Evitar estafas, fraudes y esquemas maliciosos",
    "Comprar y transferir Bitcoin de la forma más económica y eficiente",
    "Creación de portafolio personalizado (incluye análisis de altcoins)",
    "Revisión profesional de proyectos y empresas cripto",
    "Participación en airdrops y launchpools",
    "Crear intercambios personales(Exchange básico y seguro)",
    "Aplicación del Protocolo Martha Julia",
  ];

  const itemsCard2 = [
    "Sesión presencial ÚNICA de 180 minutos",
    "Virtudes fundamentales del individuo libre",
    "Historia del dinero y evolución monetaria",
    "Qué es bitcoin",
    "Bitcoin vs Oro",
    "Bitcoin vs Bienes Raíces",
    "Cómo evitar y reconocer estafas",
    "Pools de liquidez",
    "Rastreo de wallets de ballenas",
    "Explicación de Capa 2 y llaves privadas",
    "Cómo invertir en Bitcoin de la forma más segura",
    "Como comprar Bitcoin paso a paso",
    "Crear wallets - de 0 a experto",
    "Manejo de sub-billeteras",
    "Manejo de wallet de Bitcoin y altcoins",
    "Guardar correctamente las llaves privadas",
    "Comprar tus primeros Bitcoin en vivo",
    "Manejo de billeteras frías",
    "Recuperación de errores de proceso",
    "Creación de portafolio personalizado",
  ];

  const remoteExtras = [
    "Acceso a contenido digital especializado",
    "Actualización constante del contenido",
    "Soporte 24/7 PRIORITARIO (chat y presencial bajo costo)",
    "Grupo VIP",
    "1 Zoom de emergencia por mes",
  ];

  const renderItems = (items, expanded) =>
    expanded ? items : items.slice(0, 9);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-6 max-w-6xl  mx-auto py-10  items-start md:px-3">
      {/* CARD 1 */}
      <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-neutral-300 hover:scale-105 transition duration-300 min-h-[650px]">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          MENTORIA PREMIUM
        </h3>
        <p className="text-gray-600 mb-4">
          Ideal para comenzar y dominar todo el ecosistema cripto desde cero.
        </p>

        <ul className="text-gray-700 mb-4 space-y-2">
          {renderItems(itemsCard1, expandedCard1).map((item, index) => (
            <li key={index} className="flex gap-x-1">
              <span>🔥</span> {item}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setExpandedCard1(!expandedCard1)}
          className="flex items-center gap-2 self-end text-gray-600 hover:text-gray-800 transition font-medium mb-4"
        >
          {expandedCard1 ? "Ver menos" : "Ver más beneficios"}
          <ChevronDown
            className={`transition-transform duration-500 ${
              expandedCard1 ? "rotate-180" : ""
            }`}
          />
        </button>

        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=593998177135&text=INFORMACION%20SOBRE%20LA%20MENTORIA%20PREMIUM"
          className="mt-auto bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition text-center"
        >
          Elegir
        </a>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-neutral-300 hover:scale-105 transition duration-300 min-h-[650px]">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          MENTORIA VIP (PRESENCIAL)
        </h3>
        <p className="text-gray-600 mb-4">
          La experiencia más completa, personalizada e intensiva
        </p>

        <ul className="mb-4 space-y-2 text-gray-700">
          {renderItems(itemsCard2, expandedCard2).map((item, index) => (
            <li key={index} className="flex gap-x-1">
              <span>⭐</span> {item}
            </li>
          ))}

          {expandedCard2 && (
            <div className="flex flex-col my-4">
              <ul className="list-disc gap-y-1 px-6 my-3">
                <li className="font-semibold list-none flex gap-1">
                  <span>🔹</span> REMOTO (Incluido en la VIP)
                </li>
                {remoteExtras.map((extra, i) => (
                  <li key={i}>{extra}</li>
                ))}
              </ul>
            </div>
          )}
        </ul>

        <button
          onClick={() => setExpandedCard2(!expandedCard2)}
          className="flex items-center gap-2 self-end text-gray-600 hover:text-gray-800 transition font-medium mb-4 mt-auto"
        >
          {expandedCard2 ? "Ver menos" : "Ver más beneficios"}
          <ChevronDown
            className={`transition-transform duration-500 ${
              expandedCard2 ? "rotate-180" : ""
            }`}
          />
        </button>

        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=593998177135&text=Hola,%20estoy%20interesado%20en%20la%20Mentoria%20VIP%20%22Mi%20primer%20Bitcoin%22:%20Presencial"
          className=" bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition text-center"
        >
          Elegir
        </a>
      </div>

      {/* CARD 3 - sin comportamiento de expandir */}
      <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-neutral-300 hover:scale-105 transition duration-300 min-h-[650px]">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Inconfiscable World Tour
        </h3>
        <img
          src={tour_marzo}
          alt="Crypto Tour"
          className="w-full mb-4 rounded-xl"
        />
        <p className="text-gray-600 mb-4">
          CryptoTour 2026 Inconfiscable es la gira educativa que está impulsando
          una nueva forma de entender y proteger el patrimonio en la era
          digital.
        </p>
        <a
          href="https://fusionplusdigital.com/eventos/"
          className="mt-auto bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition text-center"
        >
          Adquiere tus entradas
        </a>
      </div>

      {/* CARD 4- sin comportamiento de expandir */}
      <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-neutral-300 hover:scale-105 transition duration-300 min-h-[650px]">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          WALLET FRÍA
        </h3>
        <img
          src={wallet_jade}
          alt="Crypto Tour"
          className="w-full mb-4 rounded-xl"
        />
        <p className="text-gray-600 mb-4">
          Mantén tus criptomonedas seguras con las wallets frías Jade y Jade
          Plus. Ofrecen protección avanzada, acceso inmediato y total control
          sin conexión. Ideal para inversores inteligentes. ¡Compra hoy y
          resguarda tu futuro financiero!
        </p>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=593939838756&text=Hola,%20estoy%20interesado%20en%20adquirir%20una%20wallet%20fria"
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition text-center"
        >
          {" "}
          Adquirir
        </a>
      </div>
    </div>
  );
}
