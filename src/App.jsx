import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

import Home from "./pages/home/Home.jsx";
import Certificate from "./pages/certificate/Certificate.jsx";
import DiplomaInstitute from "./pages/diploma/DiplomaInstitute.jsx";
import ViewProjets from "./pages/project/ViewProject.jsx";

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import AnimatedCursor from "./components/tools/animation/AnimatedCursor.jsx";
import ParticlesBackground from "./components/particles/ParticlesBackground.jsx"

function App() {
  const { t } = useTranslation("global");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // ✅ Inicializa AOS una sola vez
  useEffect(() => {
    AOS.init({
      duration: 300,      // duración de la animación (milisegundos)
      once: true,          // animación se ejecuta solo una vez
      easing: "ease-out",  // tipo de animación
    });

    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ✅ Refresca AOS al cambiar de ruta
  useEffect(() => {
    AOS.refreshHard(); // mejor que AOS.refresh() en apps SPA como React
  }, [location.pathname]);

  return (
    <div className="App">
      <AnimatedCursor />
      <ParticlesBackground />
      
      <header className={`App_header ${scrolled ? 'Header_scrolled' : ''}`}>
        <Header t={t}/>
      </header>
      <main className="App_main">
        <Routes>
          <Route path="/" element={<Home t={t}/>} />
          <Route path="/pro" element={<ViewProjets t={t}/>} />
          <Route path='/diplomados' element={<Certificate t={t}/>}/>
          <Route path='/education-diplomas/:instituto' element={<DiplomaInstitute t={t}/>}/>
        </Routes>
      </main>
      <footer className="App_footer">
        <Footer t={t}/>
      </footer>
    </div>
  );
}

export default App;
