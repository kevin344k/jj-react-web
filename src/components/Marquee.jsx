import React from "react";

const LockIcon = ({ className = "" }) => (

<svg
  className={className}
  width="18"
  height="18"
  viewBox="0 0 24 24"
  fill="none"
  aria-hidden="true"
>

  <circle cx="12" cy="12" r="10" fill="#F7931A" />


  <path
    fill="#FFFFFF"
    d="M13.968 12.885c.87-.205 1.448-.733 1.533-1.592.116-1.138-.7-1.75-1.854-1.982l.38-1.523-1.03-.257-.37 1.49-.828-.207.372-1.496-1.032-.257-.38 1.522-.66-.164-1.421-.354-.274 1.095 1.002.25c.56.139.679.508.662.803l-.427 1.73c.038.01.088.024.15.043l-.152-.038-.598 2.418c-.068.17-.24.43-.628.336l-1.005-.251-.512 1.138 1.34.335.706.177-.384 1.55 1.031.257.381-1.525.827.207-.38 1.522 1.031.257.384-1.548c1.757.332 3.078.198 3.626-1.26.333-.873-.017-1.593-.74-1.993Zm-3.063-2.28c.496.124 2.034.383 2.28.48.245.096.635.357.576.812-.068.519-.7.653-1.264.688-.563.035-1.789-.14-2.141-.225l.549-1.755Zm-.973 3.938c.568.145 2.276.449 2.857.389.582-.06.962-.302 1.04-.83.074-.508-.305-.81-.731-.963-.426-.152-1.843-.43-2.408-.548l-.758 1.952Z"
  />
</svg>

);

const DEFAULT_PHRASES = [
  "No tus llaves privadas, no tus bitcoins",
  "Verifica, no confíes",
  "Autocustodia responsable",
  "Nadie le gana al HOLDER",
  "Si no es tu llave, no es tu cripto",
];

export default function Marquee({
  className = "",
  phrases = DEFAULT_PHRASES,
  duration = 28,            // segundos
  spacing = "gap-8",        // Tailwind: gap entre ítems
  pauseOnHover = true,
  fadeEdges = true,
  gradientText = false,     // por si quieres texto con degradado
}) {
  const items = [...phrases, ...phrases,...phrases,...phrases]; // duplicamos para bucle perfecto

  return (
    <div
      className={[
        "group relative w-full overflow-hidden",
        fadeEdges
          ? "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          : "",
        className,
      ].join(" ")}
      role="region"
      aria-label="Marquee de frases"
    >
      <div
        className={[
          "flex w-[200%] min-w-max",
          spacing,
          // usamos la animación definida en CSS global con clase arbitraria
          "animate-[marquee_linear_infinite]",
          "motion-reduce:animate-none",
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : "",
        ].join(" ")}
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((text, idx) => (
          <div
            key={`${idx}-${text}`}
            className="flex items-center whitespace-nowrap text-sm sm:text-base text-gray-200 dark:text-gray-200"
          >
            <span
           className="pr-2"
              aria-hidden="true"
              title="Seguridad"
            >
              <LockIcon className="" />
            </span>

            {/* Texto normal o con degradado */}
            {gradientText ? (
              <span className="font-semibold bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                {text}
              </span>
            ) : (
              <span className="font-medium text-neutral-400">{text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}