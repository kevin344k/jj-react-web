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
    // Si no hay preferencia guardada, usa el esquema del sistema
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
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

  // Mientras inicializa, evita parpadeo opcionalmente
  if (!theme) {
    return (
      <div className="w-20   rounded-full p-1 flex md:w-[50px] lg:w-[50px]  pointer-events-none">
        <button type="button" className="bg-neutral-50 rounded-full p-1">
          <img src={moon} className="size-5" alt="" />
        </button>
      </div>
    );
  }

  return (
    <div
      onClick={switchTheme}
      className={`w-30 rounded-full p-1 flex inset-shadow-md hover:cursor-pointer transition-all delay-200 md:w-[50px] lg:w-[80px] border border-neutral-700 
        ${theme === "dark" ? "justify-end bg-gray-500" : "justify-start bg-gray-500"}
      `}
    >
      <button
        type="button"
        className="bg-neutral-50 rounded-full p-1 shadow-md shadow-neutral-400 hover:cursor-pointer"
        aria-label={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
      >
        <img src={icon} className="size-5" alt="" />
      </button>
    </div>
  );
}