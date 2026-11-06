import React from "react";
import SectionHeader from "./SectionHeader";
import CardBook from "./CardBook";
import AutoCarousel from "./AutoCarousel";
import { buildWaMeLink } from "../utils/links";

const baseURL = import.meta.env.BASE_URL;

const books = [
  {
    title: "Invierte en Bitcoin o esclavitud",
    img: `${baseURL}libros/portadas/libro_jj.jpeg`,
    whatsappLink: buildWaMeLink("mentoriaPrimary", "bookPurchase"),
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

export default function SectionLibros() {
  return (
    <section id="sect-books" className="relative bg-ui-bg py-20 font-body text-ui-text">
      <SectionHeader eyebrow="Biblioteca" title="Libros" subtitle="Lecturas esenciales sobre libertad, dinero y economía." />
      <AutoCarousel items={books} duration={45} renderItem={(book) => <CardBook book={book} />} />
    </section>
  );
}
