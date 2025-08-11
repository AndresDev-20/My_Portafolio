import "./style/home.css";
import Start from "../../features/start/Start";
import About from "../../features/aboutme/About";
import Skill from "../../features/skills/Skill";
import Education from "../../features/education/Education";
import Experience from "../../features/experience/Experience";
import Project from "../../features/projects/Project";
import Contact from "../../features/contactme/Contact";
import PortafolioEnActualizacion from "../../components/update/PortafolioEnActualizacion";

const Home = ({ t }) => {
  return (
    <div className="Home">
        {false ? (
          <div className="Home">
            <Start t={t} />
            <About t={t} />
            <Skill t={t} />
            <Education t={t} />
            <Experience t={t} />
            <Project t={t} />
            <Contact t={t} />
          </div>
        ) : (
          <PortafolioEnActualizacion />
        )}
    </div>
  );
};

export default Home;
