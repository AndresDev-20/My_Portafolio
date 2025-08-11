import React, { useState } from "react";
import "./PortafolioEnActualizacion.css";

export default function PortafolioEnActualizacion() {
  const [notified, setNotified] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleNotify = () => {
    setNotified(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="pea-container">
      <div className="pea-card">
        <div className="pea-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h3l3 8 4-16 3 8h4" />
          </svg>
        </div>

        <h1 className="pea-title">Mi portafolio está en actualización</h1>
        <p className="pea-description">
          Estoy trabajando en mejoras y nuevos proyectos. Pronto volverá con un diseño
          más fresco y contenido actualizado. Gracias por tu paciencia ✨
        </p>

        <div className="pea-buttons">
          <button
            className="pea-btn-notify"
            onClick={handleNotify}
            id="notify-btn"
          >
            {notified ? "Te avisaré cuando vuelva" : "Notificarme"}
          </button>

          <a
            className="pea-btn-link"
            href="https://portafolio-andres-dev.netlify.app/#/pro"
            id="go-to-home"
          >
            Ver proyectos anteriores
          </a>
        </div>

        <div className="pea-progress">
          <div className="pea-progress-bar" style={{ width: "40%" }}></div>
          <div className="pea-progress-text">
            <span>Actualizando contenido</span>
            <span>40%</span>
          </div>
        </div>

        {showToast && (
          <div className="pea-toast">
            Te avisaremos cuando el portafolio esté disponible ✅
          </div>
        )}

        <p className="pea-footer">
          Construido con JavaScript + React — Interfaz simple y elegante
        </p>
        <p className="pea-footer-name">Ingeniero Andres.dev</p>
      </div>
    </div>
  );
}
