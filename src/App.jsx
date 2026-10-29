import { useEffect, useRef, useState } from "react";
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
import MotionEffects from "./components/tools/motion/MotionEffects.jsx";

function App() {
  const { t } = useTranslation("global");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState(true);
  const location = useLocation();
  const [routeChanges, setRouteChanges] = useState(0);
  const prevPath = useRef(location.pathname);

  // ✅ Inicializa AOS una sola vez
  useEffect(() => {
    AOS.init({
      duration: 300,      // duración de la animación (milisegundos)
      once: true,          // animación se ejecuta solo una vez
      easing: "ease-out",  // tipo de animación
    });

    const handleScroll = () => {
      const offset = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(offset > 50);
      setProgress(max > 0 ? Math.min(offset / max, 1) : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ✅ Refresca AOS al cambiar de ruta y vuelve arriba en las páginas internas
  useEffect(() => {
    AOS.refreshHard(); // mejor que AOS.refresh() en apps SPA como React
    // Solo el inicio usa scrollTo (para bajar a una sección); las demás páginas abren arriba
    if (location.pathname !== "/" || !location.state?.scrollTo) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    // La cortina solo aparece cuando de verdad cambia la ruta (no en la primera carga)
    if (prevPath.current !== location.pathname) {
      prevPath.current = location.pathname;
      setRouteChanges((n) => n + 1);
    }
  }, [location.pathname]);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="App">
      <AnimatedCursor />
      <MotionEffects />
      {routeChanges > 0 && <div className="Route_curtain" key={routeChanges} aria-hidden="true"></div>}
      <div className="particles">
        {particles && <ParticlesBackground />}
      </div>
      <header className={`App_header ${scrolled ? 'Header_scrolled' : ''}`}>
        <Header t={t} particles={setParticles} />
        <span
          className="Scroll_progress"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        ></span>
      </header>
      <main className="App_main Page_enter" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home t={t}/>} />
          <Route path="/pro" element={<ViewProjets t={t}/>} />
          <Route path='/diplomados' element={<Certificate t={t}/>}/>
          <Route path='/education-diplomas/:instituto' element={<DiplomaInstitute t={t}/>}/>
        </Routes>
      </main>
      <button
        type="button"
        className={`Scroll_top ${scrolled ? "Scroll_top--show" : ""}`}
        onClick={goTop}
        aria-label={t("ui.top")}
        title={t("ui.top")}
      >
        <i className="bx bx-up-arrow-alt"></i>
      </button>
      <footer className="App_footer">
        <Footer t={t}/>
      </footer>
    </div>
  );
}

export default App;
