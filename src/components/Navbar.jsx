import React, { useState, useEffect } from "react";
import jjface from "/imagenes/jjcara.webp";
import crossClose from "/imagenes/cross-close.svg";
import wasap from "/imagenes/icon-color/whatsap.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shake, setShake] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <nav id="navBar" className=" bg-[#182025] ">
      <div className="flex items-center justify-between p-2 gap-3 md:px-4 xl:max-w-[1250px] lg:mx-auto">
        {/* Logo */}
        <div className="logo flex items-center gap-3">
          <div className="flex items-center justify-center md:px-6">
            {" "}
            <img
              className="jjface w-12 rounded-full shadow-lg h-12 shrink-0"
              src={jjface}
              alt="JJ Face"
            />
            <p className="hidden sm:hidden md:flex md:ml-2 text-white lg:flex xl:flex xl:ml-4 xl:mr-12 text-lg font-semibold">
              JJChagerben
            </p>
          </div>
          <div className="flex gap-3">
            <a
              onClick={() => setIsOpen(true)}
              className={` bg-fm-turquesa text-neutral-900 hover:cursor-pointer font-bold text-center  min-w-[100px] md:w-full md:p-2 lg:w-[200px] py-1 shadow-lg active:scale-95 text-sm rounded-md  hover:bg-fm-turquesa transition ${
                shake ? "shake" : ""
              }`}
            >
              Seminario: Mi primer ₿itcoin, Manta
            </a>
            <a
              href="https://wa.me/593998177135?text=Hola,%20estoy%20interesado%20en%20el%20seminario%20Guayaquil"
              className={` bg-fm-turquesa text-neutral-900 font-bold text-center  min-w-[100px] md:w-full md:p-2 lg:w-[200px]  py-1 shadow-lg active:scale-95 text-sm rounded-md  hover:bg-fm-turquesa transition ${
                shake ? "shake" : ""
              }`}
            >
              Seminario: Mi primer ₿itcoin, Guayaquil
            </a>
          </div>
        </div>

        {/* Sidebar */}
        <div
          className={`sidebar fixed top-0 right-0 w-64 h-full z-20 bg-gray-900 text-white transform transition-transform ${
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
          className="flex flex-col shrink-0 justify-between w-6 h-5 cursor-pointer lg:hidden xl:hidden"
        >
          <span className="block h-0.5 bg-neutral-300 rounded"></span>
          <span className="block h-0.5 bg-neutral-300 rounded"></span>
          <span className="block h-0.5 bg-neutral-300 rounded"></span>
        </button>
        <ul className="hidden lg:flex xl:flex items-center justify-center px-4 gap-8 text-center">
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
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          {/* Contenedor del modal */}
          <div
            className="bg-white rounded-2xl shadow-lg p-6 w-96 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
               <p className="text-neutral-600 pb-4">
              {" "}
              Seminario "Mi primer ₿itcoin", Manta 13 de Septiembre
            </p>
            <h2 className="text-xl font-bold mb-4">Horarios Disponibles</h2>
         

            <div>
                   <div className="pt-5 border-b border-t border-neutral-400 pb-5 flex gap-2">
              10:00 AM <span className="text-red-500">Agotado</span>{" "}
            </div>
              <div className="flex gap-2 items-center border-b border-neutral-400 pb-5">
                <p>02:00 PM </p>
                <span className="text-green-500">Disponible</span>
                <a
                  className="flex justify-center items-center gap-3 w-fit rounded-md shadow-lg px-3 py-2 bg-fm-turquesa"
                   href="https://wa.me/593998177135?text=Hola,%20estoy%20interesado%20en%20el%20seminario%Manta%02:00%PM"
                >
                  Reservar <img className="w-5 h-5" src={wasap} alt="" />
                </a>
              </div>
            </div>
       

            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 w-full"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
