import React, { useState, useRef, useEffect } from "react";

const images = [
  "/imagenes/testimonios/img1.jpeg",
  "/imagenes/testimonios/img2.jpeg",
  "/imagenes/testimonios/img3.jpeg",
  "/imagenes/testimonios/img4.jpeg",
  "/imagenes/testimonios/img5.jpeg",
  "/imagenes/testimonios/img6.jpeg",
  "/imagenes/testimonios/img7.jpeg",
  "/imagenes/testimonios/img8.jpeg",
  "/imagenes/testimonios/img9.jpeg",
  "/imagenes/testimonios/img10.jpeg",
  "/imagenes/testimonios/img11.jpeg",
  "/imagenes/testimonios/img12.jpeg"
];





export default function TestimonialSlider() {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = 262; // 250px width + 12px margin-right (ajusta si cambias gap)
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(index);
    };

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const progressPercent = ((currentIndex + 1) / images.length) * 100;

  return (
    <section id="sect-testimonial" className="py-12 bg-gray-50 relative">
      <div className="text-center mb-8">
        <p className="text-3xl font-bold">Testimonios</p>
        <div className="w-24 h-1 bg-[#22dfc1] mx-auto mt-3"></div>
      </div>

      <div
        className="overflow-x-auto snap-x snap-mandatory scrollbar-hide  px-6 pb-6 pr-12"
        ref={scrollContainerRef}
      >
        <div className="flex gap-12 ">
          {images.map((img, index) => (
            <div
              key={index}
              className="snap-center w-[250px] h-[400px] hover:scale-105 flex-shrink-0 flex justify-center p-2 shadow-md rounded-xl bg-white transition-transform"
            >
              <img
                src={img}
                loading="lazy"
                alt={`testimonio-${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
          {/**div vacio para el espaciado */}
          <div className=" p-2 ">

          </div>
        </div>
      </div>

      {/* Barra simulada */}
      <div className="relative mt-2 h-1 bg-gray-300 rounded-full mx-6 overflow-x-hidden">
        <div
          className="h-1 bg-[#40E0D0] rounded-full transition-all duration-200"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </section>
  );
}
