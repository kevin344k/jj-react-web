import React from 'react'
import { useState, useEffect } from "react";

import tour_marzo_1 from "/imagenes/tour_marzo_1.png";
import tour_marzo_2 from "/imagenes/tour_marzo_2.png";
import tour_marzo_3 from "/imagenes/tour_marzo_3.png";
export default function SectionCardsMentoria() {



  const images = [
    tour_marzo_1,
    tour_marzo_2,
    tour_marzo_3,
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, [images.length]);



  return (
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-10 px-2 ">
  {/* Card 1 */}
  <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-neutral-300 hover:scale-105 transition duration-300">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Mentoria Premium</h3>
    <p className="text-gray-600 mb-4">Ideal para comenzar y probar el servicio.</p>
   
    <p className="text-3xl font-bold text-gray-900 mb-6">$19<span className="text-sm text-gray-500">/mes</span></p>

    <ul className="text-gray-700 mb-6 space-y-2">

      <li>  <span className="">🔥</span>  No caer en estafas</li>
          <li>  <span className="">🔥</span>  Comprar Bitcoin</li>
      <li>  <span className="">🔥</span>  Crear portafolio</li>
      <li>  <span className="">🔥</span>  Soporte 24/7</li>
      <li>  <span className="">🔥</span>  Protocolo Martha Julia</li>
      <li>  <span className="">🔥</span>  Grupo de WhatsApp</li>
 <li>  <span className="">🔥</span>  Revisar empresas y proyectos cripto</li>
    
    </ul>

    <button className="mt-auto bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
      Elegir 
    </button>
  </div>

  {/* Card 2 */}
  <div className="bg-gradient-to-b bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-neutral-300 hover:scale-105 transition duration-300">
    <h3 className="text-xl font-semibold mb-2">Mentoria VIP:Presencial</h3>
    <p className="mb-4">La opción más popular entre nuestros clientes.</p>
    <p className="text-3xl font-bold mb-6">$49<span className="text-sm opacity-80">/mes</span></p>

    <ul className="mb-6 space-y-2">
      <li>⭐ Todas las del Básico</li>
      <li>⭐ Funcionalidad avanzada</li>
      <li>⭐ Prioridad de soporte</li>
    </ul>

    <button className="mt-auto bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
      Elegir 
    </button>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-neutral-300 hover:scale-105 transition duration-300">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Inconfiscable World Tour</h3>
           {/* 🔁 Slider de imágenes */}
   <div className="relative w-full h-60 mb-4 overflow-hidden">
  <div
    className="flex w-full h-full transition-transform duration-700"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`slide-${index}`}
        className="w-full h-full object-contain flex-shrink-0"
      />
    ))}
  </div>
</div>
    <p className="text-gray-600 mb-4">CryptoTour Inconfiscable es la gira educativa que está impulsando una nueva forma de entender y proteger el patrimonio en la era digital.</p>
    <p className="text-3xl font-bold text-gray-900 mb-6">$99<span className="text-sm text-gray-500">/mes</span></p>

    <ul className="text-gray-700 mb-6 space-y-2">
      <li>✔ Todo lo del Premium</li>
      <li>✔ Integraciones personalizadas</li>
      <li>✔ Soporte dedicado 24/7</li>
    </ul>

    <button className="mt-auto bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
      Elegir 
    </button>
  </div>
</div>

  )
}

