import React, { useEffect, useMemo, useState } from "react";
import moon from "/imagenes/icon-moon.svg";
import sun from "/imagenes/icon-sun.svg";

export default function ToggleDarkMode() {
  // Guarda el tema en estado. null hasta que inicialicemos.
  const [theme, setTheme] = useState(null);

  // Icono derivado del tema (memoizado)
  const icon = useMemo(() => (theme === "dark" ? sun : moon), [theme]);

  // 1) Inicializar tema UNA sola vez
  useEffect(() => {
    // Seguridad por si se hace SSR (window podría no existir)
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
      return;
    }
    // El rediseño es oscuro por defecto
    setTheme("dark");
  }, []);

  // 2) Efecto para aplicar el tema al <html> y persistirlo
  useEffect(() => {
    if (!theme) return; // aún no inicializa
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3) (Opcional) Reaccionar a cambios del sistema si el usuario no ha elegido manualmente
  //    Si quieres priorizar SIEMPRE lo que el usuario seleccionó, elimina este efecto.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      // Solo ajusta si el usuario no ha hecho una selección manual.
      // Si quieres que el cambio del sistema gane siempre, elimina el if.
      const stored = localStorage.getItem("theme");
      if (!stored) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mql.addEventListener?.("change", handleChange);
    // fallback para Safari antiguo
    if (!mql.addEventListener && mql.addListener) {
      mql.addListener(handleChange);
    }

    return () => {
      mql.removeEventListener?.("change", handleChange);
      if (!mql.removeEventListener && mql.removeListener) {
        mql.removeListener(handleChange);
      }
    };
  }, []);

  const switchTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  if (!theme) return null;

  return (
    <button
      type="button"
      onClick={switchTheme}
      aria-label={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-ui-border bg-ui-bg2 shadow-xl shadow-black/30 transition hover:scale-110 hover:border-btc active:scale-95"
    >
      <img src={icon} className="size-6" alt="" />
    </button>
  );
}
