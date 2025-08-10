import React, { useState, useRef, useEffect } from "react";
import CardBook from "./CardBook";

const baseURL = import.meta.env.BASE_URL;

const books = [
  {
    title: "Invierte en Bitcoin o esclavitud",
    img: `${baseURL}libros/portadas/libro_jj.jpeg`,
    whatsappLink: "https://wa.me/593996737500?text=Hola%2C%20quiero%20comprar%20tu%20libro%20%22Invierte%20en%20Bitcoin%20o%20esclavitud%22.",
    amazonLink: "https://www.amazon.com/dp/9942516654/ref=tmm_pap_swatch_0"
  },
  {
    title: "El Hombre Más Rico de Babilonia",
    img: `${baseURL}libros/portadas/el_hombre_mas_rico_de_babilonia.jpg`,
    pdf: `${baseURL}libros/pdf/el_hombre_mas_rico_de_babilonia.pdf`
  },
  {
    title: "La virtud del egoísmo",
    img: `${baseURL}libros/portadas/virtud_egoismo.jpg`,
    pdf: `${baseURL}libros/pdf/virtud_egoismo.pdf`,
    downloadName: "virtud_del_egoismo_Aynn_Rand.pdf"
  },
  {
    title: "La mentalidad anticapitalista",
    img: `${baseURL}libros/portadas/la_mentalidad_anticapitalista.jpg`,
    pdf: `${baseURL}libros/pdf/la_mentalidad_anticapitalista_ludwig_von_mises.pdf`
  },
  {
    title: "Camino de servidumbre",
    img: `${baseURL}libros/portadas/camino_servidumbre.jpg`,
    pdf: `${baseURL}libros/pdf/camino_servidumbre.pdf`
  },
  {
    title: "Lo que se ve y no se ve",
    img: `${baseURL}libros/portadas/lo_que_se_ve_y_no.webp`,
    pdf: `${baseURL}libros/pdf/lo_que_se_ve_y_no.pdf`
  },
  {
    title: "Los enemigos del comercio",
    img: `${baseURL}libros/portadas/los_enemigos_del_comercio.jpg`,
    pdf: `${baseURL}libros/pdf/los_enemigos_del_comercio.pdf`
  },
  {
    title: "Poder y mercado",
    img: `${baseURL}libros/portadas/poder_y_mercado.jpg`,
    pdf: `${baseURL}libros/pdf/poder_y_mercado.pdf`
  }
];

const CARD_WIDTH = 230;

const SectionLibros = () => {
  const sliderRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const progress = maxScrollLeft > 0 ? (scrollLeft / maxScrollLeft) * 100 : 0;
      setScrollProgress(progress);

      const index = Math.round(scrollLeft / CARD_WIDTH);
      setCurrentIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index) => {
    const container = sliderRef.current;
    if (!container) return;

    const maxIndex = books.length - 1;
    const newIndex = Math.min(Math.max(index, 0), maxIndex);

    container.scrollTo({
      left: newIndex * CARD_WIDTH,
      behavior: "smooth",
    });

    setCurrentIndex(newIndex);
  };

  const handlePrev = () => scrollToIndex(currentIndex - 1);
  const handleNext = () => scrollToIndex(currentIndex + 1);

  return (
    <section id="sect-books" className="py-12 relative xl:py-30">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-center">Libros</h2>
        <div className="w-16 h-1 bg-fm-turquesa mx-auto mt-2 rounded-full" />
      </div>

      {/* Botones desktop */}
      <button
        onClick={handlePrev}
        aria-label="Anterior"
        className="hidden lg:flex absolute top-1/2 left-4 -translate-y-1/2 z-10 w-15 h-20 bg-gradient-to-r from-[#22dfc1] to-transparent text-white text-5xl shadow hover:bg-[#1bb8a9] justify-center items-center active:scale-95 cursor-pointer"
      >
        &#8249;
      </button>

      <button
        onClick={handleNext}
        aria-label="Siguiente"
        className="hidden lg:flex absolute top-1/2 right-4 -translate-y-1/2 z-10 w-15 h-20 bg-gradient-to-l from-[#22dfc1] to-transparent text-5xl text-white shadow hover:bg-[#1bb8a9] justify-center items-center cursor-pointer"
      >
        &#8250;
      </button>

      <div
        ref={sliderRef}
        className="flex w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 px-5 py-4 scroll-smooth hide-scrollbar"
      >
        {books.map((book, idx) => (
          <CardBook book={book} key={idx} />
        ))}
      </div>

      {/* Barra progreso en móvil */}
      <div className="relative mt-2 h-1 bg-gray-300 rounded-full mx-6 overflow-x-hidden lg:hidden xl:hidden">
        <div
          className="h-1 bg-[#40E0D0] rounded-full transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </section>
  );
};

export default SectionLibros;
