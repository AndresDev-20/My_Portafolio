import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "./style/translate.css";

// Selector de idioma tipo "segmented control": ES | EN con una píldora que se desliza
const Translate = () => {
  const { i18n } = useTranslation("global");
  const isEnglish = i18n.language === "en";

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const setLanguage = (lang) => {
    if (lang === i18n.language) return;
    i18n.changeLanguage(lang);
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // sin almacenamiento: el idioma solo dura esta visita
    }
  };

  return (
    <div
      className={`Lang_switch ${isEnglish ? "is-en" : ""}`}
      role="group"
      aria-label={isEnglish ? "Language" : "Idioma"}
    >
      <i className="bx bx-globe Lang_globe" aria-hidden="true"></i>
      <span className="Lang_pill" aria-hidden="true"></span>
      <button
        type="button"
        className={!isEnglish ? "is-active" : ""}
        aria-pressed={!isEnglish}
        onClick={() => setLanguage("es")}
        title="Español"
      >
        ES
      </button>
      <button
        type="button"
        className={isEnglish ? "is-active" : ""}
        aria-pressed={isEnglish}
        onClick={() => setLanguage("en")}
        title="English"
      >
        EN
      </button>
    </div>
  );
};

export default Translate;
