import React from "react";

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-btc">{eyebrow}</p>}
      <h2 className="mt-2 font-display text-4xl font-bold text-ui-text sm:text-5xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-xl text-ui-muted">{subtitle}</p>}
    </div>
  );
}
