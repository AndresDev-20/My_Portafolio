import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style/home.css";
import Start from "../../features/start/Start";
import About from "../../features/aboutme/About";
import Skill from "../../features/skills/Skill";
import Education from "../../features/education/Education";
import Experience from "../../features/experience/Experience";
import Project from "../../features/projects/Project";
import Contact from "../../features/contactme/Contact";
import Loader from "../../components/loader/Loader";

// El loader de bienvenida solo se muestra la primera vez que se abre la página
let hasLoadedOnce = false;

const Home = ({ t }) => {
  const [isLoading, setIsLoading] = useState(!hasLoadedOnce);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) return;

    // Simula un tiempo de carga (ej: 2 segundos)
    const timer = setTimeout(() => {
      hasLoadedOnce = true;
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Limpieza
  }, [isLoading]);

  // Cuando llegamos desde otra ruta con { state: { scrollTo } } bajamos a esa sección
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (isLoading || !target) return;

    const timer = setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      navigate(location.pathname, { replace: true, state: null });
    }, 60);

    return () => clearTimeout(timer);
  }, [isLoading, location.state]);

  return (
    <div className="Home">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Start t={t} />
          <About t={t} />
          <Skill t={t} />
          <Education t={t} />
          <Experience t={t} />
          <Project t={t} />
          <Contact t={t} />
        </>
      )}
    </div>
  );
};

export default Home;
