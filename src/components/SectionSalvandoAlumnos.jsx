import React, { useState } from "react";

const baseURL = import.meta.env.BASE_URL;

const images = [
  `${baseURL}imagenes/salvando_alumnos/salvado1.png`,
  `${baseURL}imagenes/salvando_alumnos/salvado2.png`,
];

export default function SectionSalvandoAlumnos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const openModal = (img) => {
    setModalImage(img);
    setModalOpen(true);
  };

  return (
    <section className="py-12 bg-white dark:bg-fm-Very-Dark-Blue relative xl:py-30">
      <div className="text-center mb-8">
        <p className="text-3xl font-bold text-neutral-900 dark:text-white">
          Salvando a mis alumnos
        </p>
        <div className="w-24 h-1 bg-[#22dfc1] mx-auto mt-3"></div>
      </div>

      {/* Desktop: todas las imágenes en grid */}
      <div className="hidden lg:flex justify-center gap-6 px-6 max-w-5xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer hover:scale-105 transition-transform"
            onClick={() => openModal(img)}
          >
            <img
              src={img}
              loading="lazy"
              alt={`salvando-alumno-${index + 1}`}
              className="w-full h-auto max-h-[500px] object-contain rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Mobile/Tablet: carrusel */}
      <div className="relative max-w-3xl mx-auto px-6 lg:hidden">
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 -translate-y-1/2 z-10 w-10 h-16 bg-gradient-to-r from-[#22dfc1] to-transparent text-white text-3xl flex justify-center items-center active:scale-95 cursor-pointer rounded-r-md"
          aria-label="Anterior"
        >
          &#8249;
        </button>

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 -translate-y-1/2 z-10 w-10 h-16 bg-gradient-to-l from-[#22dfc1] to-transparent text-white text-3xl flex justify-center items-center active:scale-95 cursor-pointer rounded-l-md"
          aria-label="Siguiente"
        >
          &#8250;
        </button>

        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex justify-center cursor-pointer"
                onClick={() => openModal(img)}
              >
                <img
                  src={img}
                  loading="lazy"
                  alt={`salvando-alumno-${index + 1}`}
                  className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores solo mobile/tablet */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                currentIndex === index
                  ? "bg-[#22dfc1] scale-110"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && modalImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 p-1 bg-black/50 hover:bg-red-500 rounded-full transition cursor-pointer"
              aria-label="Cerrar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                fill="none"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M6 18L18 6"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
