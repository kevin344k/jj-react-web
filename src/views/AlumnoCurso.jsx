import React, { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Check, ChevronLeft, ChevronRight, LogOut, PlayCircle, Trophy } from "lucide-react";
import ToggleTheme from "../components/ToggleTheme";
import jjface from "/imagenes/jjcara.webp";
import { clearSession, curso, getProgress, getSession, saveProgress, todasLasLecciones } from "./alumnos/cursoDemo";

export default function AlumnoCurso() {
  const navigate = useNavigate();
  const session = getSession();
  const [progress, setProgress] = useState(getProgress);

  useEffect(() => saveProgress(progress), [progress]);

  const total = todasLasLecciones.length;
  const index = Math.max(0, todasLasLecciones.findIndex((l) => l.id === progress.actual));
  const leccion = todasLasLecciones[index];
  const vistas = useMemo(() => new Set(progress.vistas), [progress.vistas]);
  const porcentaje = Math.round((vistas.size / total) * 100);
  const ultima = todasLasLecciones.find((l) => l.id === progress.ultima);
  const terminado = vistas.size === total;

  if (!session) return <Navigate to="/alumnos" replace />;

  const irA = (id) => setProgress((p) => ({ ...p, actual: id }));

  const marcarVista = () => {
    setProgress((p) => {
      const set = new Set(p.vistas);
      set.add(leccion.id);
      const next = todasLasLecciones[index + 1];
      return { vistas: [...set], ultima: leccion.id, actual: next ? next.id : leccion.id };
    });
  };

  const alternar = (id) =>
    setProgress((p) => {
      const set = new Set(p.vistas);
      if (set.has(id)) set.delete(id);
      else set.add(id);
      return { ...p, vistas: [...set], ultima: set.has(id) ? id : p.ultima };
    });

  const salir = () => {
    clearSession();
    navigate("/alumnos");
  };

  return (
    <div className="min-h-screen bg-ui-bg font-body text-ui-text">
      <header className="sticky top-0 z-30 border-b border-ui-border bg-ui-bg/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={jjface} alt="JJ Chagerben" className="h-10 w-10 rounded-full border border-btc/50 object-cover" />
            <span className="hidden font-display text-lg font-bold sm:block">JJChagerben</span>
            <span className="rounded-full bg-btc/15 px-2.5 py-0.5 text-xs font-bold text-btc">DEMO</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-ui-muted md:block">{session.email}</span>
            <button onClick={salir} className="flex items-center gap-2 rounded-lg border border-ui-border px-3 py-2 text-sm transition hover:border-btc hover:text-btc">
              <LogOut className="h-4 w-4" /> Salir
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 rounded-2xl border border-ui-border bg-ui-bg2 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-btc">Mi curso</p>
          <h1 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{curso.titulo}</h1>
          <div className="mt-5 flex items-center gap-4">
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-ui-border">
              <div className="h-full rounded-full bg-btc transition-all duration-500" style={{ width: `${porcentaje}%` }} />
            </div>
            <span className="text-sm font-semibold">{porcentaje}%</span>
          </div>
          <p className="mt-3 text-sm text-ui-muted">
            {vistas.size} de {total} lecciones completadas
            {ultima && (
              <>
                {" · "}Último video visto: <span className="font-semibold text-ui-text">{ultima.titulo}</span>
              </>
            )}
          </p>
        </div>

        {terminado && (
          <div className="mb-8 flex items-center gap-4 rounded-2xl border border-ui-success/40 bg-ui-success/10 p-5">
            <Trophy className="h-8 w-8 shrink-0 text-ui-success" />
            <div>
              <p className="font-display text-lg font-bold">¡Felicidades, completaste el curso!</p>
              <p className="text-sm text-ui-muted">Muy pronto podrás descargar tu certificado desde esta zona.</p>
            </div>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <section>
            <div className="aspect-video overflow-hidden rounded-2xl border border-ui-border bg-black">
              <iframe
                key={leccion.id}
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${leccion.youtube}`}
                title={leccion.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-5 text-xs uppercase tracking-wider text-ui-muted">
              {leccion.modulo} · Lección {index + 1} de {total}
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold">{leccion.titulo}</h2>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => irA(todasLasLecciones[index - 1].id)}
                disabled={index === 0}
                className="flex items-center gap-1 rounded-lg border border-ui-border px-4 py-2.5 text-sm transition enabled:hover:border-btc disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" /> Anterior
              </button>
              <button
                onClick={marcarVista}
                className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition ${
                  vistas.has(leccion.id) ? "border border-ui-success text-ui-success" : "bg-btc text-black hover:bg-btc-dark"
                }`}
              >
                <Check className="h-4 w-4" />
                {vistas.has(leccion.id) ? "Visto · continuar" : index === total - 1 ? "Marcar como visto" : "Marcar como visto y continuar"}
              </button>
              <button
                onClick={() => irA(todasLasLecciones[index + 1].id)}
                disabled={index === total - 1}
                className="flex items-center gap-1 rounded-lg border border-ui-border px-4 py-2.5 text-sm transition enabled:hover:border-btc disabled:opacity-40"
              >
                Siguiente <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </section>

          <aside className="space-y-4">
            {curso.modulos.map((modulo) => {
              const hechas = modulo.lecciones.filter((l) => vistas.has(l.id)).length;
              return (
                <div key={modulo.id} className="overflow-hidden rounded-2xl border border-ui-border bg-ui-bg2">
                  <div className="flex items-center justify-between border-b border-ui-border px-4 py-3">
                    <h3 className="font-display font-bold">{modulo.titulo}</h3>
                    <span className="text-xs text-ui-muted">
                      {hechas}/{modulo.lecciones.length}
                    </span>
                  </div>
                  <ul>
                    {modulo.lecciones.map((l) => {
                      const activa = l.id === leccion.id;
                      const vista = vistas.has(l.id);
                      return (
                        <li key={l.id} className={`flex items-center gap-3 px-4 py-3 ${activa ? "bg-btc/10" : ""}`}>
                          <button
                            onClick={() => alternar(l.id)}
                            aria-label={vista ? "Marcar como no vista" : "Marcar como vista"}
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition ${
                              vista ? "border-ui-success bg-ui-success text-white" : "border-ui-border hover:border-btc"
                            }`}
                          >
                            {vista && <Check className="h-3.5 w-3.5" />}
                          </button>
                          <button onClick={() => irA(l.id)} className="flex-1 text-left">
                            <p className={`text-sm ${activa ? "font-bold text-btc" : ""}`}>{l.titulo}</p>
                            <p className="text-xs text-ui-muted">{l.duracion}</p>
                          </button>
                          {activa && <PlayCircle className="h-5 w-5 shrink-0 text-btc" />}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
            <button
              onClick={() => setProgress({ vistas: [], actual: todasLasLecciones[0].id, ultima: null })}
              className="w-full text-center text-xs text-ui-muted underline transition hover:text-btc"
            >
              Reiniciar progreso (demo)
            </button>
          </aside>
        </div>
      </main>
      <ToggleTheme />
    </div>
  );
}
