import React from "react";

// Carrusel continuo: duplica los items para un bucle sin saltos y se pausa al pasar el mouse.
export default function AutoCarousel({ items, renderItem, duration = 40, minItems = 8, gap = 20 }) {
  const repeats = Math.max(1, Math.ceil(minItems / items.length));
  const half = Array.from({ length: repeats }, () => items).flat();
  const loop = [...half, ...half];

  return (
    <div
      className="auto-carousel w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      style={{ "--carousel-duration": `${duration}s` }}
    >
      <div className="auto-carousel-track" style={{ gap, paddingRight: gap }}>
        {loop.map((item, i) => (
          <div key={i} className="shrink-0">
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  );
}
