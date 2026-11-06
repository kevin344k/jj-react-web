import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import AutoCarousel from "./AutoCarousel";

const baseURL = import.meta.env.BASE_URL;

const images = [
  `${baseURL}imagenes/testimonios/img1.jpeg`,
  `${baseURL}imagenes/testimonios/img2.jpeg`,
  `${baseURL}imagenes/testimonios/img3.jpeg`,
  `${baseURL}imagenes/testimonios/img4.jpeg`,
  `${baseURL}imagenes/testimonios/img5.jpeg`,
  `${baseURL}imagenes/testimonios/img6.jpeg`,
  `${baseURL}imagenes/testimonios/img7.jpeg`,
  `${baseURL}imagenes/testimonios/img8.jpeg`,
  `${baseURL}imagenes/testimonios/img9.jpeg`,
  `${baseURL}imagenes/testimonios/img10.jpeg`,
  `${baseURL}imagenes/testimonios/img11.jpeg`,
  `${baseURL}imagenes/testimonios/img12.jpeg`,
];


export default function TestimonialSlider() {
  const [modalImage, setModalImage] = useState(null);
  const modalOpen = Boolean(modalImage);
  const setModalOpen = (open) => {
    if (!open) setModalImage(null);
  };

  return (
    <section id="sect-testimonial" className="relative bg-ui-bg py-20 font-body text-ui-text">
      <SectionHeader eyebrow="Resultados" title="Ganancias de mis alumnos" />

      <AutoCarousel
        items={images}
        duration={50}
        renderItem={(img) => (
          <button
            type="button"
            onClick={() => setModalImage(img)}
            className="block h-[380px] w-[240px] cursor-zoom-in overflow-hidden rounded-2xl border border-ui-border bg-ui-bg2 p-1.5 transition duration-300 hover:-translate-y-1 hover:border-btc/60"
          >
            <img src={img} alt="Resultado de alumno" loading="lazy" className="h-full w-full rounded-xl object-cover" />
          </button>
        )}
      />

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
