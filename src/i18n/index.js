import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import english from './english/global.json';
import spanish from './spanish/global.json';

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "es",
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
