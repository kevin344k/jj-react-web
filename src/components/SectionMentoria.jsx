import React from "react";


const baseURL = import.meta.env.BASE_URL;

const socialLinks = [
  {
    href: "https://link.ugly.cash/referral/balder",
    img: `${baseURL}imagenes/icon-color/uglycash.webp`,
    label: "UGLYCASH",
  },
  {
    href: "https://tradingdifferent.com/?ref=YELgWNnX",
    img: `${baseURL}imagenes/icon-color/download.png`,
    label: "Trading Different",
  },
  {
    href: "https://api.whatsapp.com/send?phone=593996737500&text=INFORMACION%20SOBRE%20LA%20MENTORIA%20PREMIUM",
    img: `${baseURL}imagenes/icon-color/whatsap.svg`,
    label: "WhatsApp",
  },
  {
    href: "https://www.whatsapp.com/channel/0029Vah3B5n60eBiIBrX8J1Z",
    img: `${baseURL}imagenes/icon-color/whatsap.svg`,
    label: "Canal de WhatsApp",
  },
  {
    href: "https://t.me/jjchagerben357",
    img: `${baseURL}imagenes/icon-color/telegram.svg`,
    label: "Telegram",
  },
  {
    href: "https://www.instagram.com/jjchagerben33/",
    img: `${baseURL}imagenes/icon-color/instagram.svg`,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/people/JJChagerben/61557765639522/?mibextid=ZbWKwL",
    img: `${baseURL}imagenes/icon-color/facebook.svg`,
    label: "Facebook",
  },
  {
    href: "https://x.com/JJChagerben357",
    img: `${baseURL}imagenes/icon-color/twitter_X.svg`,
    label: "X",
  },
  {
    href: "https://www.bitmex.com/app/register/A7p8Lt",
    img: `${baseURL}imagenes/icon-color/bitmex.svg`,
    label: "Bitmex",
  },
];

const liveLinks = [
  {
    href: "https://www.twitch.tv/jjchagerben",
    img: `${baseURL}imagenes/icon-color/twitch.svg`,
    alt: "Twitch",
  },
  {
    href: "https://www.youtube.com/@jjchagerben",
    img: `${baseURL}imagenes/icon-color/youtube.svg`,
    alt: "YouTube",
  },
];


export default function SectionMentoria() {
  return (
    <section id="section-mentoria" className="relative z-10 py-12">
      {/* Fondo */}
      <div className="absolute inset-0 -z-1 brightness-[0.3] bg-[url('/imagenes/btg-bg-section.jpg')] bg-cover bg-center w-full"></div>

      <div className="div-mentoria max-w-5xl mx-auto px-4 py-10 pb-0">
        <div className="text-center mb-8">
        <p className="text-3xl font-bold text-fm-turquesa">Redes Sociales</p>
        <div className="w-24 h-1 bg-white mx-auto mt-3"></div>
      </div>


      </div>

      <div className="div-mis-redes max-w-5xl mx-auto px-4 py-10">
    

        <ul className=" grid grid-cols-1 justify-center md:grid-cols-2 md:items-center  w-full m-auto md: gap-6 lg:max-w-[800px]">
          {socialLinks.map(({ href, img, label }, i) => (
            <li key={i} className="text-center w-[250px] mx-auto md:mx-auto">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex  text-center justify-center items-center gap-2 bg-white border border-neutral-200 px-3 py-3  rounded hover:bg-fm-turquesa_strong active:bg-fm-turquesa_strong active:text-neutral-900 active:scale-95 trasition-all ease-in-out duration-100 "
              >
                <img src={img} alt={label} className="w-6 h-6 object-contain" />
                <span className="font-medium">{label}</span>
              </a>
            </li>
          ))}
        </ul>

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
