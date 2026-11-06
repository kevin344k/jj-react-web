import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goHero = () => {
    const hero = document.getElementById("hero");
    if (hero) hero.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={goHero}
      aria-label="Ir al inicio"
      title="Ir al inicio"
      className={`fixed bottom-[76px] right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-btc/50 bg-btc text-black shadow-xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:bg-btc-dark active:scale-95 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
}
