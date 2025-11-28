import React, { useState, useEffect } from "react";
import jjface from "/imagenes/jjcara.webp";
import tour_marzo from "/imagenes/cripto-tour.jpg";
import crossClose from "/imagenes/cross-close.svg";

import arrow_down from "/imagenes/arrow-down.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shake, setShake] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  useEffect(() => {
    // Activa el shake cada 5 segundos
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 500); // duración del shake 0.5s
    }, 3000);

    // Activa inmediatamente al montar
    setShake(true);
    setTimeout(() => setShake(false), 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Bloquea scroll
    } else {
      document.body.style.overflow = "auto"; // Permite scroll
    }

    // Opcional: limpiar al desmontar
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsOpen(true)
  },[])

  return (
    <nav id="navBar" className=" bg-[#182025] ">
      <div className="flex px-2 items-center justify-between p-1 gap-3 md:px-4 xl:max-w-[1450px] lg:px-2 lg:mx-auto">
        {/* Logo */}
        <div className="logo  flex items-center  md:gap-3">
          <div className="flex items-center justify-center px-0 md:px-6 lg:px-2">
            {" "}
            <img
              className="jjface  md:flex w-12 rounded-full shadow-lg h-12 shrink-0"
              src={jjface}
              alt="JJ Face"
            />
            <p className="hidden sm:hidden md:flex md:ml-2 text-white lg:flex xl:flex xl:ml-4 xl:mr-12 text-lg font-semibold">
              JJChagerben
            </p>
          </div>
          <button
            className={`ml-4 flex gap-2 px-3 py-1 items-center  rounded-full bg-[#01FBF7] hover:bg-[#7E4DFE] transition ease-in-out duration-200 hover:text-white ${
              shake ? "shake" : ""
            }`}
            onClick={() => setIsOpen(true)}
          >
            <p className="text-neutral-800 font-bold hover:text-white">
              Inconfiscable World Tour
            </p>
          </button>
          <div className="flex gap-2 xl:gap-8 ">
            {/* <a
              onClick={() => setIsOpen(true)}
              className={` bg-fm-turquesa text-neutral-900 hover:cursor-pointer font-bold text-center  min-w-[100px] md:w-[200px] md:p-2 lg:w-[200px] py-1 shadow-lg active:scale-95 text-xs md:text-sm rounded-md  hover:bg-fm-turquesa transition xl:text-lg  xl:w-[250px] ${
                shake ? "shake" : ""
              }`}
            >
              Seminario: Mi primer ₿itcoin, Manta
            </a>
            <a
              href="https://wa.me/593998177135?text=Estoy%20interesado%20en%20el%20Seminario%20Mi%20primer%20Bitcoin%20Guayaquil"
              className={` bg-fm-turquesa text-neutral-900 font-bold text-center  min-w-[100px] w-[150px] md:w-[200px] md:p-2 lg:w-[200px]  py-1 shadow-lg active:scale-95 text-xs md:text-sm rounded-md  hover:bg-fm-turquesa transition xl:text-lg  xl:w-[250px] ${
                shake ? "shake" : ""
              }`}
            >
              Seminario: Mi primer ₿itcoin, Guayaquil
            </a>
                 <a
             href="https://wa.me/593998177135?text=Estoy%20interesado%20en%20el%20Seminario%20Empresarial%20de%20Mi%20primer%20Bitcoin%20para%20mis%20empleados"
              className={` bg-fm-turquesa text-neutral-900 font-bold text-center px-0.5 min-w-[100px] w-[150px] md:w-[200px] md:p-2 lg:w-[200px]  py-1 shadow-lg active:scale-95 text-xs md:text-sm rounded-md  hover:bg-fm-turquesa transition xl:text-lg  xl:w-[250px] ${
                shake ? "shake" : ""
              }`}
            >
              Seminario Empresarial: Mi primer ₿itcoin
            </a>
*/}
          </div>
        </div>

        {/* Sidebar */}
        <div
          className={`sidebar fixed top-0 right-0 w-64 h-full h-scroll z-20 pb-12 bg-gray-900 overflow-scroll  text-white transform transition-transform ${
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
            <li className="p-2 hover:bg-gray-700 cursor-pointer">
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <a
                onClick={() => setIsMenuOpen(false)}
                className="boton-nav hover:underline"
                href="#sec-announce-book"
              >
                Mi libro
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsMenuOpen(false)}
                className="boton-nav hover:underline"
                href="#section-mentoria"
              >
                Redes
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsMenuOpen(false)}
                className="boton-nav hover:underline"
                href="#sec-calculadora-jub"
              >
                Calculadora
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsMenuOpen(false)}
                className="boton-nav hover:underline"
                href="#sect-testimonial"
              >
                Testimonios
              </a>
            </li>
            <li onClick={() => setSubmenuOpen(!submenuOpen)}>
              <a className="boton-nav hover:underline flex justify-center items-center gap-1 cursor-pointer">
                Mas
                <img
                  src={arrow_down}
                  alt="flecha"
                  className={`size-6 transition-transform duration-300 ${
                    submenuOpen ? "" : "rotate-180"
                  }`}
                />
              </a>
            </li>

            {/* Opciones desplegables */}
            {submenuOpen && (
              <ul className="border border-[#3ef2d0] py-4 rounded-md">
                <li className="p-2 hover:bg-gray-700 cursor-pointer">
                  <Link to="/debates">Debates</Link>
                </li>
                <li className="p-2 hover:bg-gray-700 cursor-pointer">
                  <Link to="/compras">Compras</Link>
                </li>
              </ul>
            )}
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

        {/* Botón de menú desktop*/}
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menú"
          className="flex flex-col shrink-0 justify-between w-6 h-5 cursor-pointer lg:hidden xl:hidden"
        >
          <span className="block h-0.5 bg-neutral-300 rounded"></span>
          <span className="block h-0.5 bg-neutral-300 rounded"></span>
          <span className="block h-0.5 bg-neutral-300 rounded"></span>
        </button>
        <ul className="hidden lg:flex xl:flex items-center justify-center px-4 gap-8 text-center">
          <li className="relative group cursor-pointer">
            <Link
              className="boton-nav text-neutral-400 group-hover:text-[#3ef2d0] transition-colors"
              to="/"
            >
              Inicio
            </Link>
            {/* Barra animada */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3ef2d0] transition-all group-hover:w-full"></span>
          </li>
          {["Mi libro", "Qué enseño?", "Calculadora", "Testimonios"].map(
            (text, i) => (
              <li key={i} className="relative group cursor-pointer">
                <a
                  href={`#${
                    [
                      "sec-announce-book",
                      "section-mentoria",
                      "sec-calculadora-jub",
                      "sect-testimonial",
                    ][i]
                  }`}
                  className="boton-nav text-neutral-400 group-hover:text-[#3ef2d0] transition-colors"
                >
                  {text}
                </a>
                {/* Barra animada */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3ef2d0] transition-all group-hover:w-full"></span>
              </li>
            )
          )}
          <li
            className="relative group cursor-pointer"
            onClick={() => setSubmenuOpen(!submenuOpen)}
          >
            <a className="boton-nav flex gap-2 text-neutral-400 group-hover:text-[#3ef2d0] transition-colors">
              Mas
              <img
                src={arrow_down}
                alt="flecha"
                className={`size-6 transition-transform duration-300 ${
                  submenuOpen ? "" : "rotate-180"
                }`}
              />
              {/* Barra animada */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3ef2d0] transition-all group-hover:w-full"></span>
            </a>
            {/* Opciones desplegables */}
            {submenuOpen && (
              <ul className="absolute z-50 -right-8 top-15 p-3 border  text-neutral-400 bg-[#182025] py-4 rounded-md">
                <li className="p-2 hover:bg-gray-700 cursor-pointer">
                  <Link to="/debates">Debates</Link>
                </li>
                <li className="p-2 hover:bg-gray-700 cursor-pointer">
                  <Link to="/compras">Compras</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="hidden">
            <a
              className="boton-mentoria bg-fm-turquesa text-black px-3 py-2 rounded hover:bg-fm-turquesa"
              href="https://api.whatsapp.com/send?phone=593996737500&text=INFORMACION%20SOBRE%20LA%20MENTORIA%20PREMIUM"
            >
              Mentoria Premium
            </a>
          </li>
        </ul>
      </div>
      {/* Overlay + Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in "
          onClick={() => setIsOpen(false)}
        >
          {/* Contenedor del modal */}
          <div
            className="relative bg-white rounded-2xl shadow-lg p-3  w-[80%] md:w-96 animate-fadeIn "
            onClick={(e) => e.stopPropagation()}
          >
            
            
              <img src={tour_marzo} alt="Crypto Tour" className="w-full mb-4 rounded-xl" />
            

            <div className="flex flex-col items-center">
           
              <div className="flex gap-2 items-center  py-5">
                <a
                  className="flex  items-center gap-3 rounded-md shadow-lg px-3 py-2 w-full bg-fm-turquesa"
                  href="https://fusionplusdigital.com/eventos/"
                >
                  Comprar Entradas 
                </a>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 p-1 hover:bg-red-100 rounded-full transition"
              aria-label="Cerrar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="red"
                fill="none"
                className="w-8 h-8 hover:stroke-neutral-600"
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
    </nav>
  );
}
