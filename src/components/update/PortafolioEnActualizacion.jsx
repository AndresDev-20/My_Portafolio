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
    <div className="container">
      <div className="card">
        <div className="icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h3l3 8 4-16 3 8h4" />
          </svg>
        </div>

        <h1>Mi portafolio está en actualización</h1>
        <p>
          Estoy trabajando en mejoras y nuevos proyectos. Pronto volverá con un diseño
          más fresco y contenido actualizado. Gracias por tu paciencia ✨
        </p>

        <div className="buttons">
          <button onClick={handleNotify} id="notify-btn">
            {notified ? "Te avisaré cuando vuelva" : "Notificarme"}
          </button>
          <a href="https://portafolio-andres-dev.netlify.app/#/pro" id="go-to-home">Ver proyectos anteriores</a>
        </div>

        <div className="progress">
          <div className="progress-bar" style={{ width: '40%' }}></div>
          <div className="progress-text">
            <span>Actualizando contenido</span>
            <span>40%</span>
          </div>
        </div>

        {showToast && (
          <div className="toast">
            Te avisaremos cuando el portafolio esté disponible ✅
          </div>
        )}

        <p className="footer">Construido con JavaScript + React — Interfaz simple y elegante</p>
        <p className="footer_name">Ingeniero Andres.dev</p>
      </div>
    </div>
  );
}
