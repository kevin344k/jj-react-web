import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

import tour_marzo_1 from "/imagenes/tour_marzo_1.png";
import tour_marzo_2 from "/imagenes/tour_marzo_2.png";
import tour_marzo_3 from "/imagenes/tour_marzo_3.png";

export default function SectionCardsMentoria() {
  const images = [tour_marzo_1, tour_marzo_2, tour_marzo_3];
  const [current, setCurrent] = useState(0);

  // Estados independientes para cada card
  const [expandedCard1, setExpandedCard1] = useState(false);
  const [expandedCard2, setExpandedCard2] = useState(false);
  const [expandedCard3, setExpandedCard3] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Elementos de cada card
  const itemsCard1 = [
    "Crear wallets - de 0 a experto",
    "Manejo de sub-billeteras",
    "Manejo de wallet de Bitcoin y altcoins",
    "Resguardar correctamente las llaves privadas",
    "Uso profesional de hardware wallets y software wallets",
    "Recuperación de accesos y saldos de wallets (según gravedad del caso)",
    "Manejo de wallets geográficas",
    "Evitar estafas, fraudes y esquemas maliciosos",
    "Comprar y transferir Bitcoin de la forma más económica y eficiente",
    "Creación de portafolio personalizado (incluye DCA y análisis de altcoins)",
    "Revisión profesional de proyectos y empresas cripto",
    "Participación en airdrops y launchpools",
    "Crear intercambios personales(Exchange básico y seguro)",
    "Aplicación del Protocolo Martha Julia",
    "Organización y automatización del ecosistema cripto personal",
    "Acceso a contenido digital especializado",
    "Actualización constante del contenido",
    "Soporte Técnico",
    "Canal de difusión exclusivo",
    "Grupo de WhatsApp",
  ];

  const itemsCard2 = ["⭐ Sesión presencial ÚNICA de 180 minutos", "⭐ Virtudes fundamentales del individuo libre", "⭐ Historia del dinero y evolución monetaria","⭐ Qué es bitcoin","⭐ Bitcoin vs Oro","⭐ Bitcoin vs Bienes Raíces","⭐ Cómo evitar y reconocer estafas","⭐ Pools de liquidez","⭐Rastreo de wallets de ballenas","⭐ Explicación de Capa 2 y llaves privadas"];

  const itemsCard3 = ["✔ Todo lo del Premium", "✔ Integraciones personalizadas", "✔ Soporte dedicado 24/7"];

  const renderItems = (items, expanded) => expanded ? items : items.slice(0, 9);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-10 px-2">
      
      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-neutral-300 hover:scale-105 transition duration-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">MENTORIA NORMAL</h3>
        <p className="text-gray-600 mb-4">Ideal para comenzar y dominar todo el ecosistema cripto desde cero.</p>
        <p className="text-md font-bold text-gray-500  mb-6">
          Duración:<span className="text-3xl text-gray-900">1 año</span>
        </p>

        <ul className="text-gray-700 mb-4 space-y-2">
          {renderItems(itemsCard1, expandedCard1).map((item, index) => (
            <li key={index}><span>🔥</span> {item}</li>
          ))}
        </ul>

        {itemsCard1.length > 9 && (
          <button
            onClick={() => setExpandedCard1(!expandedCard1)}
            className="flex items-center gap-2 self-end text-gray-600 hover:text-gray-800 transition font-medium mb-4"
          >
            {expandedCard1 ? "Ver menos" : "Ver más"}
            <ChevronDown
              className={`transition-transform duration-500 ${expandedCard1 ? "rotate-180" : "rotate-0"}`}
            />
          </button>
        )}

        <button className="mt-auto bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
          Elegir
        </button>
      </div>

      {/* Card 2 */}
      <div className="bg-gradient-to-b bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-neutral-300 hover:scale-105 transition duration-300">
        <h3 className="text-xl font-semibold mb-2">MENTORIA VIP:(PRESENCIAL)</h3>
        <p className="mb-4">La experiencia más completa, personalizada e intensiva</p>
            <p className="text-md font-bold text-gray-500  mb-6">
          Duración:<span className="text-3xl text-gray-900">1 año</span>
        </p>


        <ul className="mb-4 space-y-2">
          {renderItems(itemsCard2, expandedCard2).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {itemsCard2.length > 9 && (
          <button
            onClick={() => setExpandedCard2(!expandedCard2)}
            className="flex items-center gap-2 self-start text-gray-600 hover:text-gray-800 transition font-medium mb-4"
          >
            {expandedCard2 ? "Ver menos" : "Ver más"}
            <ChevronDown
              className={`transition-transform duration-500 ${expandedCard2 ? "rotate-180" : "rotate-0"}`}
            />
          </button>
        )}

        <button className="mt-auto bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
          Elegir
        </button>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-neutral-300 hover:scale-105 transition duration-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Inconfiscable World Tour</h3>

        {/* Slider de imágenes */}
        <div className="relative w-full h-60 mb-4 overflow-hidden">
          <div
            className="flex w-full h-full transition-transform duration-700"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img, index) => (
              <img key={index} src={img} alt={`slide-${index}`} className="w-full h-full object-contain flex-shrink-0" />
            ))}
          </div>
        </div>

        <p className="text-gray-600 mb-4">
          CryptoTour Inconfiscable es la gira educativa que está impulsando una
          nueva forma de entender y proteger el patrimonio en la era digital.
        </p>
        <p className="text-3xl font-bold text-gray-900 mb-6">
          $99<span className="text-sm text-gray-500">/mes</span>
        </p>

        <ul className="text-gray-700 mb-4 space-y-2">
          {renderItems(itemsCard3, expandedCard3).map((item, index) => (
            <li key={index}><span>✔</span> {item}</li>
          ))}
        </ul>

        {itemsCard3.length > 9 && (
          <button
            onClick={() => setExpandedCard3(!expandedCard3)}
            className="flex items-center gap-2 self-start text-gray-600 hover:text-gray-800 transition font-medium mb-4"
          >
            {expandedCard3 ? "Ver menos" : "Ver más"}
            <ChevronDown
              className={`transition-transform duration-500 ${expandedCard3 ? "rotate-180" : "rotate-0"}`}
            />
          </button>
        )}

        <button className="mt-auto bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
          Elegir
        </button>
      </div>
    </div>
  );
}
