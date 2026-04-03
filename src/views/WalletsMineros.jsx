import React from "react";
import video from "../assets/Video/hero_video.mp4";
import "../App.css";

const cards = [

  {
    title: "Blockstream Jade Plus Hardware Wallet",
    description: "La nueva Jade Plus es la billetera fría más avanzada de Blockstream, con pantalla a color y soporte para Bitcoin y Liquid. Seguridad máxima para tus ahorros.",
    image: "https://store.blockstream.com/cdn/shop/files/2_2.jpg?v=1771356905&width=800",
    waLink: "https://api.whatsapp.com/send?phone=593939838756&text=Hola,%20quiero%20comprar%20la%20Blockstream%20Jade%20Plus%20Hardware%20Wallet"
  },
  {
    title: "Blockstream Jade Hardware Wallet",
    description: "La clásica Jade, billetera fría segura y económica, ideal para principiantes y usuarios avanzados. Compatible con Bitcoin y Liquid.",
    image: "https://store.blockstream.com/cdn/shop/files/Jade_Bitcoin_Hardware_Wallet_-_Green_-_Front.png?v=1767373365&width=800",
    waLink: "https://api.whatsapp.com/send?phone=593939838756&text=Hola,%20quiero%20comprar%20la%20Blockstream%20Jade%20Hardware%20Wallet"
  },
  {
    title: "Bitcoins Miner Bitaxes Gamma 601",
    description: "Uno de los mineros potentes y eficientes del mercado. Perfecto para minería de Bitcoin.",
    image: "https://m.media-amazon.com/images/I/61wNXnDuSyL._AC_SX466_PIbundle-99,TopRight,0,0_SH20_.jpg",
    waLink: "https://api.whatsapp.com/send?phone=593939838756&text=Hola,%20quiero%20comprar%20el%20Bitaxes%20Gamma%20601%20para%20minar%20Bitcoin"
  }
];

export default function WalletsMineros({ onBack }) {
  return (
    <div className="wallets-mineros-container ">

              <video
                className="absolute -z-1 inset-0 object-cover w-full h-full brightness-[0.5]"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={video} type="video/mp4" />
              </video>
         <nav id="navBar" className=" bg-[#182025] py-3  px-12 flex items-start justify-start  w-full">
                   <button
        onClick={onBack}
        className="flex items-center gap-3 shadow-md text-neutral-900 border border-neutral-600 hover:border-fm-turquesa hover:shadow-xl hover:brightness-110 rounded-xl py-1 px-3 text-lg font-bold transition bg-white dark:bg-fm-Very-dark-Blue dark:text-neutral-200"
      >
        <svg width="20px" height="20px" viewBox="-19.04 0 75.803 75.803" xmlns="http://www.w3.org/2000/svg">
  <g id="Group_64" data-name="Group 64" transform="translate(-624.082 -383.588)">
    <path id="Path_56" data-name="Path 56" d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z" fill="#00000"/>
  </g>
</svg> Volver 
      </button>
            
            </nav>
     <div className="flex flex-col mt-12">
            <h1 className="text-3xl font-bold my-8 text-center  text-neutral-200 dark:text-fm-turquesa">Mineros y Wallets</h1>
      <div className="flex flex-wrap gap-9 justify-center ">

     
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col border border-neutral-300 hover:scale-105 transition duration-300 dark:bg-fm-Very-dark-Blue dark:border-neutral-600 w-[340px] min-h-[480px] mb-8"
          >
            <div className="flex justify-center items-center mb-6">
              <img
                src={card.image}
                alt={card.title}
                className="w-[130px] h-[130px] object-cover rounded-xl shadow-sm border border-neutral-200 bg-white"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 dark:text-neutral-300 min-h-[56px] text-center">{card.title}</h2>
            <p className="text-gray-600 mb-4 dark:text-neutral-400 min-h-[72px] text-center">{card.description}</p>
            <div className="flex-grow" />
            <a
              href={card.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-fm-turquesa text-black py-2 px-4 rounded-lg hover:bg-fm-turquesa_strong hover:font-semibold transition text-center mt-4 text-lg font-semibold w-full"
            >
              Pedir
            </a>
          </div>
        ))}
      </div>

     </div>
    </div>
  );
}
