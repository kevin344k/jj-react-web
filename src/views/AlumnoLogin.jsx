import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, Mail } from "lucide-react";
import ToggleTheme from "../components/ToggleTheme";
import { getSession, setSession } from "./alumnos/cursoDemo";

export default function AlumnoLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (getSession()) return <Navigate to="/alumnos/curso" replace />;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Ingresa un correo válido.");
    if (password.length < 4) return setError("La contraseña debe tener al menos 4 caracteres.");
    setSession(email.trim());
    navigate("/alumnos/curso");
  };

  const field =
    "w-full rounded-lg border border-ui-border bg-ui-bg py-3 pl-11 pr-4 text-ui-text outline-none transition focus:border-btc focus:ring-1 focus:ring-btc";

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ui-bg px-4 font-body text-ui-text">
      <div className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-btc/15 blur-3xl" aria-hidden="true" />
      <div className="relative w-full max-w-md">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-ui-muted transition hover:text-btc">
          <ArrowLeft className="h-4 w-4" /> Volver al inicio
        </Link>
        <div className="rounded-2xl border border-ui-border bg-ui-bg2 p-8 shadow-2xl shadow-black/30">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-btc">Zona de alumnos</p>
          <h1 className="mt-2 font-display text-3xl font-bold">Soy alumno</h1>
          <p className="mt-2 text-sm text-ui-muted">Accede al contenido exclusivo de la Mentoría Premium.</p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4" noValidate>
            <label className="relative block">
              <span className="sr-only">Correo</span>
              <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ui-muted" />
              <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} className={field} autoComplete="email" />
            </label>
            <label className="relative block">
              <span className="sr-only">Contraseña</span>
              <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ui-muted" />
              <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className={field} autoComplete="current-password" />
            </label>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button type="submit" className="w-full rounded-lg bg-btc py-3 font-bold text-black transition hover:bg-btc-dark">
              Ingresar
            </button>
          </form>

          <p className="mt-6 rounded-lg border border-dashed border-ui-border p-3 text-center text-xs text-ui-muted">
            Versión demo: ingresa cualquier correo y una contraseña de 4+ caracteres.
          </p>
        </div>
      </div>
      <ToggleTheme />
    </div>
  );
}
