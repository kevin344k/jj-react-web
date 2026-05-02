import React, { useState, useRef, useEffect } from "react";

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
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (img) => {
    setModalImage(img);
    setModalOpen(true);
  };

  const cardWidth = 262; // 250px width + 12px margin-right

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(index);
    };

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Clamp index entre 0 y última posición
    const maxIndex = images.length - 1;
    const newIndex = Math.min(Math.max(index, 0), maxIndex);

    container.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => scrollToIndex(currentIndex - 1);
  const handleNext = () => scrollToIndex(currentIndex + 1);

  const progressPercent = ((currentIndex + 1) / images.length) * 100;

  return (
    <section id="sect-testimonial" className="py-12 bg-gray-50 dark:bg-fm-Very-Dark-Blue relative xl:py-30">
      <div className="text-center mb-8">
        <p className="text-3xl font-bold text-neutral-900 dark:text-white">Ganancias de mis alumnos</p>
        <div className="w-24 h-1 bg-[#22dfc1] mx-auto mt-3"></div>
      </div>

      {/* Botones absolute solo en desktop (lg y arriba) */}
      <button
        onClick={handlePrev}
        className="hidden lg:flex absolute  top-1/2 left-4 -translate-y-1/2 z-10 w-15 h-20 bg-gradient-to-r from-[#22dfc1] to-transparentns  text-white text-5xl  shadow hover:bg-[#1bb8a9] justify-center items-center active:scale-95 cursor-pointer"
        aria-label="Anterior"
      >
        &#8249;
      </button>

      <button
        onClick={handleNext}
        className="hidden lg:flex absolute top-1/2 right-4 -translate-y-1/2 z-10 w-15 h-20 bg-gradient-to-l from-[#22dfc1] to-transparentns text-5xl text-white shadow hover:bg-[#1bb8a9] justify-center items-center cursor-pointer"
        aria-label="Siguiente"
      >
        &#8250;
      </button>

      <div
        className="overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 pb-6 pr-12"
        ref={scrollContainerRef}
      >
        <div className="flex gap-12">
          {images.map((img, index) => (
            <div
              key={index}
              className="snap-center w-[250px] h-[400px] hover:scale-105 flex-shrink-0 flex justify-center p-2 shadow-md rounded-xl bg-white dark:bg-fm-Dark-Desaturated-Blue transition-transform cursor-pointer"
              onClick={() => openModal(img)}
            >
              <img
                src={img}
                loading="lazy"
                alt={`testimonio-${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
          {/* Espacio extra */}
          <div className="p-2"></div>
        </div>
      </div>

      {/* Barra simulada */}
      <div className="relative mt-2 h-1 bg-gray-300 rounded-full mx-6 overflow-x-hidden lg:hidden xl:hidden">
        <div
          className="h-1 bg-[#40E0D0] rounded-full transition-all duration-200"
          style={{ width: `${progressPercent}%` }}
        />
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
