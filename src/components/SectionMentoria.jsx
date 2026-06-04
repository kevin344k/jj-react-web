import React from "react";
import { socialLinks as rawSocialLinks, liveLinks as rawLiveLinks } from "../utils/links";

const baseURL = import.meta.env.BASE_URL;

const socialLinks = rawSocialLinks.map(({ href, img, label }) => ({
  href,
  img: `${baseURL}${img}`,
  label,
}));

const liveLinks = rawLiveLinks.map(({ href, img, alt }) => ({
  href,
  img: `${baseURL}${img}`,
  alt,
}));


export default function SectionMentoria() {
  return (
    <section id="section-mentoria" className="relative z-10 py-12 ">
      {/* Fondo */}
      <div className="absolute inset-0 -z-1 brightness-[0.3] bg-[url('/imagenes/btg-bg-section.jpg')] bg-cover bg-center w-full"></div>

      <div className="div-mentoria max-w-5xl mx-auto px-4 py-10 pb-0">
        <div className="text-center mb-8">
        <p className="text-3xl font-bold text-fm-turquesa">Redes Sociales</p>
        <div className="w-24 h-1 bg-white mx-auto mt-3"></div>
      </div>


      </div>

      <div className="div-mis-redes max-w-5xl mx-auto px-4 py-10 ">
    

        {/* Dividir socialLinks en dos columnas manteniendo el orden */}
        {(() => {
          const mid = Math.ceil(socialLinks.length / 2);
          const col1 = socialLinks.slice(0, mid);
          const col2 = socialLinks.slice(mid);
          return (
            <div className="flex flex-col md:flex-row justify-center gap-6 lg:max-w-[800px] mx-auto">
              <ul className="flex-1 flex flex-col gap-6 items-center">
                {col1.map(({ href, img, label }, i) => (
                  <li key={i} className="text-center w-[250px] md:w-[300px]">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex text-center justify-center items-center gap-2 bg-white dark:bg-fm-Dark-Desaturated-Blue px-3 py-3 rounded hover:bg-fm-turquesa_strong active:bg-fm-turquesa_strong active:text-neutral-900 active:scale-95 trasition-all ease-in-out duration-100 hover:scale-105"
                    >
                      <img src={img} alt={label} className="w-6 h-6 object-contain" />
                      <span className="font-medium text-neutral-800 dark:text-white">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex-1 flex flex-col gap-6 items-center">
                {col2.map(({ href, img, label }, i) => (
                  <li key={i + mid} className="text-center w-[250px] md:w-[300px]">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex text-center justify-center items-center gap-2 bg-white dark:bg-fm-Dark-Desaturated-Blue px-3 py-3 rounded hover:bg-fm-turquesa_strong active:bg-fm-turquesa_strong active:text-neutral-900 active:scale-95 trasition-all ease-in-out duration-100 hover:scale-105"
                    >
                      <img src={img} alt={label} className="w-6 h-6 object-contain" />
                      <span className="font-medium text-neutral-800 dark:text-white">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })()}

        <div className="redes-live mt-10 text-center">
          <p className="mb-4 font-semibold text-white">
            Lunes a Viernes | 20:00 | UTC -05:00
          </p>

          <ul className="redes-live-icons flex justify-center gap-8 ">
            {liveLinks.map(({ href, img, alt }, i) => (
              <li key={i} className="">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <img src={img} alt={alt} className="w-12 h-12 bg-white p-2 rounded-md  hover:bg-fm-turquesa_strong active:bg-fm-turquesa_strong active:text-neutral-900 active:scale-95 trasition-all ease-in-out duration-100 " />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
