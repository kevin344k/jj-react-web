import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import portada from "/libros/portadas/bitcoin_o_esclavitud.png";
import { buildWaMeLink } from "../utils/links";
import "./LibroBitcoinEsclavitud.css";

const contenido = [
  {
    titulo: "El origen del dinero",
    texto:
      "El libro comienza explorando la relación entre el ser humano, la pobreza y el dinero, para posteriormente analizar qué es el dinero y cuáles son sus propiedades.",
  },
  {
    titulo: "La historia de las monedas",
    texto:
      "Recorre distintos momentos de la historia monetaria: Roma, los templarios, el florín, el real portugués, el real español, la bolsa de Amberes, la libra francesa y la libra esterlina, mostrando la evolución de las monedas y los sistemas monetarios.",
  },
  {
    titulo: "Oro, inflación y dinero fiat",
    texto:
      "Analiza acontecimientos como la Primera Guerra Mundial, la inflación, la Reserva Federal, Bretton Woods, el final del patrón oro, la decisión de Nixon en 1971 y la expansión del dinero fiat, conectando estos hechos con la crítica del autor al sistema monetario actual.",
  },
  {
    titulo: "Bitcoin",
    texto:
      "Presenta qué es Bitcoin, su escasez, su descentralización, su funcionamiento basado en reglas matemáticas, una comparación con el oro y la idea de propiedad y soberanía sobre los propios fondos.",
  },
  {
    titulo: "Inversión y estrategia",
    texto:
      "El libro aborda la inversión en Bitcoin, la acumulación, la preparación, la disciplina, la lectura, la creación de ingresos y una comparación entre Bitcoin y bienes raíces, dentro de una estrategia a largo plazo. Este contenido refleja el análisis del autor y no constituye asesoría financiera personalizada.",
  },
  {
    titulo: "Seguridad y estafas",
    texto:
      "Uno de los bloques más prácticos: llaves privadas, custodia, wallets, exchanges, cómo reconocer estafas, promesas de rentabilidades imposibles y ejemplos de esquemas relacionados con criptomonedas. No basta con conocer Bitcoin: también hay que saber protegerlo y reconocer posibles fraudes.",
  },
];

const viaje = [
  "1. DINERO",
  "2. HISTORIA MONETARIA",
  "3. ORO",
  "4. INFLACIÓN",
  "5. SISTEMA FIAT",
  "6. BITCOIN",
  "7. INVERSIÓN",
  "8. SEGURIDAD",
  "9. ESTRATEGIA",
];

const preguntas = [
  "¿Qué hace que algo sea considerado dinero?",
  "¿Por qué algunas monedas perdieron su valor?",
  "¿Qué ocurrió con el patrón oro?",
  "¿Cómo llegamos al actual sistema de dinero fiat?",
  "¿Qué diferencia a Bitcoin de las monedas tradicionales?",
  "¿Qué significa realmente controlar tus propios Bitcoin?",
  "¿Cómo reconocer una promesa de rentabilidad que parece demasiado buena para ser cierta?",
];

const practica = [
  {
    titulo: "Rentabilidades imposibles",
    texto:
      'Promesas como "1% diario" pueden ser una señal de alerta que el libro invita a reconocer.',
  },
  {
    titulo: "Dinero rápido y fácil",
    texto:
      "El libro analiza diferentes episodios de especulación y estafas relacionados con criptomonedas.",
  },
  {
    titulo: "Custodia",
    texto:
      "Explica la importancia de comprender las llaves privadas y quién tiene realmente el control de tu bitcoin.",
  },
];

const caracteristicas = [
  "Formato digital",
  "Lectura desde computadora",
  "Lectura desde tablet",
  "Lectura desde teléfono",
  "Entrega digital",
];

export default function LibroBitcoinEsclavitud() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [mostrarSubir, setMostrarSubir] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const elementos = document.querySelectorAll(".libro-btc .fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elementos.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setMostrarSubir(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const irA = (e) => {
    const destino = e.currentTarget.getAttribute("href");
    const el = destino && document.querySelector(destino);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuAbierto(false);
  };

  return (
    <div className="libro-btc">
      <header className="site-header" id="header">
        <div className="container header-inner">
          <Link to="/" className="back-btn" aria-label="Volver al inicio">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Volver
          </Link>
          <span className="logo">JJCHAGERBEN</span>
          <nav className={`main-nav${menuAbierto ? " open" : ""}`} id="main-nav">
            <a href="#contenido" onClick={irA}>Contenido</a>
            <a href="#viaje" onClick={irA}>El viaje</a>
            <a href="#preguntas" onClick={irA}>Preguntas</a>
            <a href="#producto" onClick={irA}>Comprar</a>
          </nav>
          <button
            className="nav-toggle"
            id="nav-toggle"
            aria-label="Abrir menú"
            aria-expanded={menuAbierto}
            onClick={() => setMenuAbierto((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <p className="eyebrow">Libro </p>
              <h1>INVERTIR EN BITCOIN O ESCLAVITUD</h1>
              <p className="hero-subtitle">Hazte millonario con Bitcoin y aprende a invertir en él</p>
              <h2 className="hero-question">¿Entiendes realmente el dinero que utilizas todos los días?</h2>
              <p className="hero-text-secondary">
                Una mirada a la historia del dinero, la inflación, el sistema monetario y Bitcoin, desde la perspectiva correcta.
              </p>
              <a href="#contenido" onClick={irA} className="btn btn-primary" id="hero-cta">
                QUIERO CONOCER EL LIBRO
              </a>
            </div>
            <div className="hero-image h-full">
              <img
                src={portada}
                alt="Portada del libro Invertir en Bitcoin o Esclavitud, de JJCHAGERBEN"
                loading="lazy"
                className="h-full"
              />
            </div>
          </div>
        </section>

        <section className="content-blocks" id="contenido">
          <div className="container">
            <p className="section-eyebrow">Contenido del libro</p>
            <h2 className="section-title">¿Qué encontrarás en el libro?</h2>
            <p className="section-lead">
              Muchos intentan entender Bitcoin sin antes comprender el dinero. Por eso, este libro comienza explorando el origen del dinero, su evolución y el sistema financiero actual. Con esa base, entender Bitcoin, su propósito y su papel en la inversión y la seguridad será mucho más sencillo.
            </p>
            <div className="cards-grid">
              {contenido.map((c, i) => (
                <article className="card fade-in" key={c.titulo}>
                  <span className="card-number">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{c.titulo}</h3>
                  <p>{c.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="journey" id="viaje">
          <div className="container">
            <p className="section-eyebrow">Estructura del libro</p>
            <h2 className="section-title">El viaje que propongo en mi libro</h2>
            <ol className="timeline">
              {viaje.map((v) => (
                <li className="timeline-item fade-in visible" key={v}>
                  <span className="timeline-dot"></span>
                  <span className="timeline-label">{v}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="questions" id="preguntas">
          <div className="container">
            <p className="section-eyebrow">Antes de seguir leyendo</p>
            <h2 className="section-title">El viaje comienza con una pregunta</h2>
            <div className="questions-grid">
              {preguntas.map((p) => (
                <p className="question-item fade-in" key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="price-concept">
          <div className="container price-concept-inner">
            <h2 className="section-title">Bitcoin no es solo el precio</h2>
            <p className="price-concept-text">
              Bitcoin es mucho más que un precio en una pantalla. A lo largo de este libro descubrirás su origen, funcionamiento, escasez, custodia y la forma en que se relaciona con el sistema monetario actual.
            </p>
          </div>
        </section>

        <section className="practical" id="practica">
          <div className="container">
            <p className="section-eyebrow">Contenido aplicado</p>
            <h2 className="section-title">Una parte especialmente práctica: reconocer estafas</h2>
            <p className="section-lead">
              El libro dedica un capítulo específico a identificar señales de posibles fraudes relacionados con Bitcoin y otras criptomonedas.
            </p>
            <div className="practical-grid">
              {practica.map((p) => (
                <article className="practical-card fade-in" key={p.titulo}>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="audience">
          <div className="container audience-inner">
            <h2 className="section-title">¿Para quién es este libro?</h2>
            <p className="section-lead">
              Puede resultar interesante para personas que quieren comprender mejor el dinero, la inflación, la historia monetaria y Bitcoin antes de tomar sus propias decisiones.
            </p>
            <p className="audience-text">
              También puede interesar a lectores que disfrutan de economía, historia, inversiones, Bitcoin, finanzas personales, sistemas monetarios y libertad financiera.
            </p>
          </div>
        </section>

        <section className="product" id="producto">
          <div className="container">
            <h2 className="section-title">¿Qué recibes?</h2>
            <div className="product-card">
              <div className="product-image h-full py-4">
                <img
                  src={portada}
                  alt="Portada del libro digital Invertir en Bitcoin o Esclavitud"
                  loading="lazy"
                  className="h-full"
                />
              </div>
              <div className="product-info">
                <h3>INVERTIR EN BITCOIN O ESCLAVITUD</h3>
                <p className="product-type">Libro digital · JJCHAGERBEN</p>
                <ul className="product-features">
                  {caracteristicas.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <p className="product-price"></p>
                <div className="buy-buttons">
                  <a href={buildWaMeLink("mentoriaPrimary", "bookPurchase")} className="btn btn-primary" id="buy-link">
                    COMPRAR EN ECUADOR (WHATSAPP)
                  </a>
                  <a
                    href="https://www.amazon.com/dp/B0FKSPCYJP"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    COMPRAR EN AMAZON
                  </a>
                </div>
                <p className="product-disclaimer">
                  Este libro representa la perspectiva y el análisis del autor. La decisión de invertir corresponde siempre al lector.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner">
            <h2 className="section-title">Antes de invertir, entiende aquello en lo que estás invirtiendo</h2>
            <p className="final-cta-text">
              Conoce el recorrido que propone este libro desde la historia del dinero hasta Bitcoin, la inversión y la seguridad.
            </p>
            <a href="#producto" onClick={irA} className="btn btn-secondary">QUIERO LEER EL LIBRO</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; 2026 JJCHAGERBEN. Todos los derechos reservados.</p>
          <p className="footer-note">
            El contenido de este libro representa la perspectiva del autor y no constituye asesoría financiera.
          </p>
        </div>
      </footer>

      <button
        id="back-to-top"
        className={mostrarSubir ? "visible" : ""}
        aria-label="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        &uarr;
      </button>
    </div>
  );
}
