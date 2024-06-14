import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import { HashRouter } from 'react-router-dom'
import i18next from 'i18next'
import globla_es from './translate/Espanish/global.json'
import globla_en from './translate/English/global.json'
//Inicializar traducciones
i18next.init({
  interpolation: {escapeValue: false},
  //vamos a decirle que empesara con el idioma español
  lng: "es",
  //pasar los ficheros
  resources: {
    en: {
      global: globla_en
    },
    es: {
      global: globla_es
    }
  }

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <I18nextProvider i18n={i18next}>
        <App />        
      </I18nextProvider>
    </HashRouter>
  </React.StrictMode>,
)
