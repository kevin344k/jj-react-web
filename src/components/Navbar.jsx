import React, { useState } from "react";
import jjface from "/imagenes/jjcara.webp";
import crossClose from "/imagenes/cross-close.svg";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav id="navBar" className="flex items-center justify-between p-2 gap-3 bg-white ">
      {/* Logo */}
      <div className="logo flex items-center gap-2">
        <img className="jjface w-12 rounded-full shadow-lg h-12" src={jjface} alt="JJ Face" />
        <p className="hidden sm:hidden lg:flex xl:flex xl:ml-12 text-lg font-semibold">
          JJChagerben
        </p>
        <a
          href="https://wa.me/593982631730?text=*Hola%20👋,*%0A_necesito%20más%20información_%20sobre%20el%20seminario%20*“Mi%20Primer%20Bitcoin”*%20en%20*Manta*%20"
          className="but-seminario bg-fm-turquesa text-neutral-900 font-bold text-center px-4 py-1 shadow-lg active:scale-95 text-sm rounded-md  hover:bg-fm-turquesa transition"
        >
          Seminario: Mi primer ₿itcoin, Manta
        </a>
      </div>

      {/* Sidebar */}
      <div
        className={`sidebar fixed top-0 right-0 w-64 h-full  bg-gray-900 text-white transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <img
          className="close-btn py-10 w-8 cursor-pointer mx-auto"
          src={crossClose}
          alt="Cerrar menú"
          onClick={() => setIsMenuOpen(false)}
        />

        <ul className="menu-options flex flex-col mt-8 px-4 gap-8 text-center">
          <li>
            <a className="boton-nav hover:underline" href="#sec-announce-book">
              Mi libro
            </a>
          </li>
          <li>
            <a className="boton-nav hover:underline" href="#section-mentoria">
              Qué enseño?
            </a>
          </li>
          <li>
            <a className="boton-nav hover:underline" href="#sec-calculadora-jub">
              Calculadora
            </a>
          </li>
          <li>
            <a className="boton-nav hover:underline" href="#sect-testimonial">
              Testimonios
            </a>
          </li>
          <li className="mt-12 ">
            <a
              className="boton-mentoria bg-fm-turquesa text-black px-3 py-2 rounded hover:bg-fm-turquesa"
              href="https://api.whatsapp.com/send?phone=593996737500&text=INFORMACION%20SOBRE%20LA%20MENTORIA%20PREMIUM"
            >
              Mentoria Premium
            </a>
          </li>
        </ul>
      </div>

      {/* Botón de menú */}
      <button
      onClick={() => setIsMenuOpen(true)}
      aria-label="Abrir menú"
      className="flex flex-col shrink-0 justify-between w-6 h-5 cursor-pointer"
    >
      <span className="block h-0.5 bg-gray-800 rounded"></span>
      <span className="block h-0.5 bg-gray-800 rounded"></span>
      <span className="block h-0.5 bg-gray-800 rounded"></span>
    </button>
     
    </nav>
  );
}
