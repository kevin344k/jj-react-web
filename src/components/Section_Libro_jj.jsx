import React from "react";
import wasapIcon from "/imagenes/icon-color/whatsap.svg";
import amazonIcon from "/imagenes/amazon.svg";
import libroImg from "/libros/portadas/libro_jj.jpeg";
import newProductImg from "/imagenes/new.png";

export default function Section_Libro_jj() {
  return (
    <section id="sec-announce-book" className="py-15 bg-fm-turquesa_very_strong">
      {/* Título */}
      <div className="text-center mb-8">
        <p className="text-3xl font-bold">Adquiere mi libro</p>
        <span className="block text-xl text-neutral-100">y deja de ser un esclavo!</span>
        <div className="w-24 h-1 bg-white mx-auto mt-3"></div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4  mx-auto">
                {/* Imagen del libro */}
        <div className="relative shrink-0">
          <img src={libroImg} alt="Libro JJ" className="w-64 rounded-lg shadow-lg" />
          <img
            className="absolute top-0 right-0 w-20 transform translate-x-8 -translate-y-8"
            src={newProductImg}
            alt="Nuevo producto"
          />
        </div>
        {/* Botones */}
        <div className="flex flex-col items-center w-full p-8 md:max-w-[350px]">

          <div className="flex flex-col w-full gap-4">
            {/* Botón WhatsApp */}
            <a
              href="https://wa.me/593996737500?text=Hola%2C%20quiero%20comprar%20tu%20libro%20%22Invierte%20en%20Bitcoin%20o%20esclavitud%22."
              className="flex items-center justify-center gap-2 bg-white text-fm-turquesa_very_strong font-bold px-5 py-4 rounded-lg shadow transition w-full"
            >
              <span>Comprar en Ecuador</span>
              <img src={wasapIcon} alt="WhatsApp" className="w-7" />
            </a>

            {/* Botón Amazon */}
            <a
              className="bg-gray-100 p-2 py-4 rounded-lg shadow flex justify-center  hover:bg-gray-200 w-full transition"
              href="https://www.amazon.com/dp/B0FKSPCYJP"
            >
              <img className="w-30 " src={amazonIcon} alt="Amazon" />
            </a>
          </div>
        </div>


      </div>
    </section>
  );
}
