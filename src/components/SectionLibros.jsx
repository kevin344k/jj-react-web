import React, { useRef } from "react";

const books = [
  {
    title: "Invierte en Bitcoin o esclavitud",
    img: "/libros/portadas/libro_jj.jpeg",
    whatsappLink: "https://wa.me/593996737500?text=Hola%2C%20quiero%20comprar%20tu%20libro%20%22Invierte%20en%20Bitcoin%20o%20esclavitud%22.",
    amazonLink: "https://www.amazon.com/dp/9942516654/ref=tmm_pap_swatch_0"
  },
  {
    title: "El Hombre Más Rico de Babilonia",
    img: "/libros/portadas/el_hombre_mas_rico_de_babilonia.jpg",
    pdf: "/libros/pdf/el_hombre_mas_rico_de_babilonia.pdf"
  },
  {
    title: "La virtud del egoísmo",
    img: "/libros/portadas/virtud_egoismo.jpg",
    pdf: "/libros/pdf/virtud_egoismo.pdf",
    downloadName: "virtud_del_egoismo_Aynn_Rand.pdf"
  },
  {
    title: "La mentalidad anticapitalista",
    img: "/libros/portadas/la_mentalidad_anticapitalista.jpg",
    pdf: "/libros/pdf/la_mentalidad_anticapitalista_ludwig_von_mises.pdf"
  },
  {
    title: "Camino de servidumbre",
    img: "/libros/portadas/camino_servidumbre.jpg",
    pdf: "/libros/pdf/camino_servidumbre.pdf"
  },
  {
    title: "Lo que se ve y no se ve",
    img: "/libros/portadas/lo_que_se_ve_y_no.webp",
    pdf: "/libros/pdf/lo_que_se_ve_y_no.pdf"
  },
  {
    title: "Los enemigos del comercio",
    img: "/libros/portadas/los_enemigos_del_comercio.jpg",
    pdf: "/libros/pdf/los_enemigos_del_comercio.pdf"
  },
  {
    title: "Poder y mercado",
    img: "/libros/portadas/poder_y_mercado.jpg",
    pdf: "/libros/pdf/poder_y_mercado.pdf"
  }
];

const SectionLibros = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (current) {
      const scrollAmount = 300;
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="sect-books" className="py-12 px-4">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-center">Libros</h2>
        <div className="w-16 h-1 bg-fm-turquesa mx-auto mt-2 rounded-full" />
      </div>

      <div className="relative">
    

        {/* Book Cards */}
        <div ref={sliderRef} className="flex overflow-x-auto gap-4 px-10 py-4 scroll-smooth hide-scrollbar">
          {books.map((book, idx) => (
            <div key={idx} className="relative group w-60 flex-shrink-0 shadow-md rounded-xl">
              <img
                src={book.img}
                alt={book.title}
                loading="lazy"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center gap-3 rounded-xl">
                {book.whatsappLink && (
                  <a
                    href={book.whatsappLink}
                    className="bg-white text-black px-4 py-2 flex items-center gap-2 rounded-md shadow"
                  >
                    Comprar
                    <img src="/imagenes/wasap-fill-green.svg" alt="whatsapp" className="w-5 h-5" />
                  </a>
                )}
                {book.amazonLink && (
                  <a
                    href={book.amazonLink}
                    className="bg-white p-2 rounded-md"
                  >
                    <img src="/imagenes/amazon.svg" alt="amazon" className="w-24" />
                  </a>
                )}
                {book.pdf && (
                  <>
                    <a
                      href={book.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-4 py-2 flex items-center gap-2 rounded-md"
                    >
                      <img src="/imagenes/eye-ico.svg" alt="leer" className="w-5" />
                      Leer
                    </a>
                    <a
                      href={book.pdf}
                      download={book.downloadName || ""}
                      className="bg-white text-black px-4 py-2 flex items-center gap-2 rounded-md"
                    >
                      <img src="/imagenes/arrow-download.svg" alt="descargar" className="w-4" />
                      Descargar
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

 
      </div>
    </section>
  );
};

export default SectionLibros;
