import React, { useEffect, useState } from "react";
import './style/theme.css'

// Lee el tema guardado sin romper si el navegador bloquea localStorage
const getSavedTheme = () => {
  try {
    return localStorage.getItem("theme") || "";
  } catch {
    return "";
  }
};

// Interruptor de tema: la perilla se desliza y cambia de luna (oscuro) a sol (claro).
// Nota: en este proyecto data-theme="dark" activa los colores claros.
const Theme = ({particles}) => {
  const [Theme, setTheme] = useState(getSavedTheme);
  const isLight = Theme === "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", Theme);
    particles(Theme !== "dark");
    try {
      localStorage.setItem("theme", Theme);
    } catch {
      // sin almacenamiento: el tema solo dura esta visita
    }
  }, [Theme]);

  const toggle = () => {
    setTheme(isLight ? "light" : "dark");
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      className={`Theme_switch ${isLight ? "is-light" : ""}`}
      onClick={toggle}
      aria-label={isLight ? "Modo oscuro" : "Modo claro"}
      title={isLight ? "Modo oscuro" : "Modo claro"}
    >
      <i className="bx bxs-moon Theme_track-icon Theme_track-icon--moon" aria-hidden="true"></i>
      <i className="bx bxs-sun Theme_track-icon Theme_track-icon--sun" aria-hidden="true"></i>
      <span className="Theme_knob">
        <i key={isLight ? "sun" : "moon"} className={`bx ${isLight ? "bxs-sun" : "bxs-moon"}`}></i>
      </span>
    </button>
  );
};

export default Theme;
