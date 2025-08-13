import { useState, useEffect } from "react";
import "./style/home.css";
import Start from "../../features/start/Start";
import About from "../../features/aboutme/About";
import Skill from "../../features/skills/Skill";
import Education from "../../features/education/Education";
import Experience from "../../features/experience/Experience";
import Project from "../../features/projects/Project";
import Contact from "../../features/contactme/Contact";
import Loader from "../../components/loader/Loader";

const Home = ({ t }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga (ej: 2 segundos)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Limpieza
  }, []);

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
