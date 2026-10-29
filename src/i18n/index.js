import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import english from './english/global.json';
import spanish from './spanish/global.json';

// Recuerda el idioma elegido por el visitante
const getSavedLanguage = () => {
  try {
    return localStorage.getItem("lang") || "es";
  } catch {
    return "es";
  }
};

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: getSavedLanguage(),
  fallbackLng: "es",
  resources: {
    en: {
      global: english
    },
    es: {
      global: spanish
    }
  }

})

export default i18n;
