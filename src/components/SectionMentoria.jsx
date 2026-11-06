import React from "react";
import SectionHeader from "./SectionHeader";
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
    <section id="section-mentoria" className="bg-ui-bg2 py-20 font-body text-ui-text">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeader eyebrow="Comunidad" title="Redes Sociales" subtitle="Sígueme y aprende Bitcoin todos los días." />

        <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {socialLinks.map(({ href, img, label }) => {
            const disabled = label === "WhatsApp";
            return (
              <li key={label}>
                <a
                  href={disabled ? undefined : href}
                  target={disabled ? undefined : "_blank"}
                  rel={disabled ? undefined : "noopener noreferrer"}
                  aria-disabled={disabled}
                  onClick={disabled ? (e) => e.preventDefault() : undefined}
                  className={`flex items-center gap-3 rounded-xl border border-ui-border bg-ui-bg px-5 py-3.5 transition ${
                    disabled ? "cursor-not-allowed opacity-50" : "hover:-translate-y-0.5 hover:border-btc/60"
                  }`}
                >
                  <img src={img} alt={label} className="h-6 w-6 object-contain" />
                  <span className="font-semibold">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 text-center">
          <p className="mb-4 font-semibold text-ui-muted">En vivo · Lunes a Viernes | 20:00 | UTC -05:00</p>
          <ul className="flex justify-center gap-4">
            {liveLinks.map(({ href, img, alt }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={img}
                    alt={alt}
                    className="h-12 w-12 rounded-xl border border-ui-border bg-white p-2.5 transition hover:-translate-y-0.5 hover:border-btc"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
