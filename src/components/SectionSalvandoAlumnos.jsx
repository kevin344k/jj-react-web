import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import AutoCarousel from "./AutoCarousel";

const baseURL = import.meta.env.BASE_URL;

const images = [
  `${baseURL}imagenes/salvando_alumnos/salvado1.png`,
  `${baseURL}imagenes/salvando_alumnos/salvado2.png`,
];

export default function SectionSalvandoAlumnos() {
  const [modalImage, setModalImage] = useState(null);
  const modalOpen = Boolean(modalImage);
  const setModalOpen = (open) => {
    if (!open) setModalImage(null);
  };

  return (
    <section className="relative bg-ui-bg2 py-20 font-body text-ui-text">
      <SectionHeader eyebrow="Historias reales" title="Salvando a mis alumnos" />

      <AutoCarousel
        items={images}
        duration={35}
        minItems={6}
        renderItem={(img) => (
          <button
            type="button"
            onClick={() => setModalImage(img)}
            className="block h-[340px] cursor-zoom-in overflow-hidden rounded-2xl border border-ui-border bg-ui-bg p-1.5 transition duration-300 hover:-translate-y-1 hover:border-btc/60"
          >
            <img src={img} alt="Alumno ayudado" loading="lazy" className="h-full w-auto rounded-xl object-contain" />
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
