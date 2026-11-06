import React from 'react'
import icon_wasap from "/imagenes/whatsapp.svg"
import icon_amazon from "/imagenes/amazon.svg"
import icon_dowload from "/imagenes/arrow-download.svg"
import icon_eye from "/imagenes/eye-ico.svg"

export default function CardBook({book,idx}) {


  return (
      <div   key={idx} 
  
      className="div-libro relative bg-ui-bg2 border border-ui-border w-56 h-80 flex-shrink-0 p-2 overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-btc/60 ">
              <img
                src={book.img}
                alt={book.title}
                loading="lazy"
                className="w-full group h-full object-contain "
              />
              <div className={`overlay z-10 absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-neutral-900 to-transparent flex flex-col justify-center items-center gap-3 opacity-0  rounded-xl `}>
                {book.whatsappLink && (
                  <a
                    href={book.whatsappLink}
                    className="bg-btc text-black font-bold px-4 py-2 flex items-center gap-2 rounded-md shadow"
                  >
                    Comprar
                    <img src={icon_wasap} alt="whatsapp" className="w-5 h-5" />
                  </a>
                )}
                {book.amazonLink && (
                  <a
                    href={book.amazonLink}
                    className="bg-ui-bg2 py-2 px-4 rounded-md"
                  >
                    <img src={icon_amazon} alt="amazon" className="w-24" />
                  </a>
                )}
                {book.pdf && (
                  <>
                    <a
                      href={book.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-btc text-black font-semibold w-[50%]  py-2 flex items-center justify-center gap-2 rounded-md"
                    >
               
                      Leer
                             <img src={icon_eye} alt="leer" className="w-5" />
                    </a>
                    <a
                      href={book.pdf}
                      download={book.downloadName || ""}
                      className="bg-btc text-black font-semibold w-[50%] py-2 flex items-center justify-center gap-2 rounded-md"
                    >
                       Descargar
                      <img src={icon_dowload} alt="descargar" className="w-4" />
                     
                    </a>
                  </>
                )}
              </div>
            </div>
  )
}
