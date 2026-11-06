import React, { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import wallet_jade from "/imagenes/jade-wallet.webp";
import { buildWaMeLink } from "../utils/links";

const premiumItems = [
  "Crear wallets - de 0 a experto",
  "Manejo de sub-billeteras",
  "Manejo de wallet de Bitcoin y altcoins",
  "Guardar correctamente las llaves privadas",
  "Uso profesional de hardware wallets y software wallets",
  "Recuperación de accesos y saldos de wallets (según gravedad del caso)",
  "Manejo de wallets geográficas",
  "Evitar estafas, fraudes y esquemas maliciosos",
  "Comprar y transferir Bitcoin de la forma más económica y eficiente",
  "Creación de portafolio personalizado (incluye análisis de altcoins)",
  "Revisión profesional de proyectos y empresas cripto",
  "Participación en airdrops y launchpools",
  "Crear intercambios personales (Exchange básico y seguro)",
  "Aplicación del Protocolo Martha Julia",
];

const vipItems = [
  "Sesión presencial ÚNICA de 180 minutos",
  "Virtudes fundamentales del individuo libre",
  "Historia del dinero y evolución monetaria",
  "Qué es bitcoin",
  "Bitcoin vs Oro",
  "Bitcoin vs Bienes Raíces",
  "Cómo evitar y reconocer estafas",
  "Pools de liquidez",
  "Rastreo de wallets de ballenas",
  "Explicación de Capa 2 y llaves privadas",
  "Cómo invertir en Bitcoin de la forma más segura",
  "Cómo comprar Bitcoin paso a paso",
  "Crear wallets - de 0 a experto",
  "Manejo de sub-billeteras",
  "Manejo de wallet de Bitcoin y altcoins",
  "Guardar correctamente las llaves privadas",
  "Comprar tus primeros Bitcoin en vivo",
  "Manejo de billeteras frías",
  "Recuperación de errores de proceso",
  "Creación de portafolio personalizado",
  "REMOTO incluido: acceso a contenido digital especializado",
  "REMOTO incluido: actualización constante del contenido",
  "REMOTO incluido: soporte 24/7 prioritario (chat y presencial bajo costo)",
  "REMOTO incluido: grupo VIP",
  "REMOTO incluido: 1 Zoom de emergencia por mes",
];

const walletItems = [
  "Hardware wallets para guardar tus llaves",
  "Mineros Bitaxe para minar en casa",
  "Asesoría para elegir el equipo adecuado",
];

const VISIBLE = 6;

function PlanCard({ title, tagline, items, cta, href, featured, badge, children }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? items : items.slice(0, VISIBLE);

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${
        featured
          ? "border-btc bg-ui-bg2 shadow-2xl shadow-btc/15 lg:scale-105"
          : "border-ui-border bg-ui-bg2/70 hover:border-btc/50"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-btc px-4 py-1 text-xs font-bold uppercase tracking-wide text-black">
          {badge}
        </span>
      )}
      <h3 className="font-display text-2xl font-bold text-ui-text">{title}</h3>
      <p className="mt-2 text-sm text-ui-muted">{tagline}</p>
      <div className="my-5 h-px bg-ui-border" />
      {children}
      {items && (
        <>
          <ul className="space-y-3 text-sm text-ui-text/90">
            {shown.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-ui-success" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {items.length > VISIBLE && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 flex items-center gap-1 self-start text-sm font-semibold text-btc hover:text-btc-dark transition"
            >
              {expanded ? "Ver menos" : `Ver los ${items.length} beneficios`}
              <ChevronDown className={`h-4 w-4 transition-transform duration-500 ${expanded ? "rotate-180" : ""}`} />
            </button>
          )}
        </>
      )}
      <a
        target="_blank"
        rel="noreferrer"
        href={href}
        className={`mt-auto block rounded-lg py-3 text-center font-bold transition ${
          featured
            ? "bg-btc text-black hover:bg-btc-dark"
            : "border border-btc text-btc hover:bg-btc/10"
        }`}
        style={{ marginTop: "2rem" }}
      >
        {cta}
      </a>
    </div>
  );
}

export default function SectionCardsMentoria() {
  return (
    <section id="mis-servicios" className="bg-ui-bg py-20 font-body text-ui-text">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-btc">Planes</p>
          <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Mis servicios</h2>
          <p className="mx-auto mt-4 max-w-xl text-ui-muted">
            Elige el nivel de acompañamiento que necesitas para dominar Bitcoin y proteger tu patrimonio.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
          <PlanCard
            title="Mentoría Premium"
            tagline="Ideal para comenzar y dominar todo el ecosistema cripto desde cero."
            items={premiumItems}
            cta="Consultar precio"
            href={buildWaMeLink("mentoriaPrimary", "infoMentoriaPremium")}
          />
          <PlanCard
            featured
            badge="Más completa"
            title="Mentoría VIP Presencial"
            tagline="La experiencia más completa, personalizada e intensiva."
            items={vipItems}
            cta="Reservar mi cupo"
            href={buildWaMeLink("mentoriaPrimary", "mentoriaVIPPresencial")}
          />
          <PlanCard
            title="Wallets y Mineros"
            tagline="Equipos para custodiar y minar tu propio Bitcoin."
            items={walletItems}
            cta="Ver catálogo"
            href="/wallets&mineros"
          >
            <img src={wallet_jade} alt="Jade wallet" className="mx-auto mb-5 h-28 object-contain" />
          </PlanCard>
        </div>
      </div>
    </section>
  );
}
