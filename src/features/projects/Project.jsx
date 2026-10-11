import { Link } from "react-router-dom";
import { Images } from "../../assets/images";
import "./style/project.css";

// Datos de cada proyecto (los textos siguen viniendo del JSON con t())
// type: "Backend" | "Frontend"  → se muestra como insignia sobre la imagen
// icon: icono de boxicons para la insignia
const PROJECTS = [
  {
    id: 6,
    image: Images.Univercity,
    type: "Backend",
    icon: "bx-server",
    code: "https://github.com/AndresDev-20/UniverCity__Backend.git",
  },
  {
    id: 1,
    image: Images.Dominos,
    type: "Backend",
    icon: "bx-server",
    code: "https://github.com/AndresDev-20/Dominos_Store-Backend.git",
  },
  {
    id: 2,
    image: Images.Pokedex,
    type: "Frontend",
    icon: "bx-laptop",
    app: "https://pokedex-andres-dev.netlify.app",
    code: "https://github.com/yeisonmarroquin887/Entregablecinco.git",
  },
  {
    id: 3,
    image: Images.Weather,
    type: "Frontend",
    icon: "bx-laptop",
    app: "https://zingy-gecko-5df221.netlify.app/",
    code: "https://github.com/yeisonmarroquin887/segundo-entregable.git",
  },
  {
    id: 4,
    image: Images.Cookies,
    type: "Frontend",
    icon: "bx-laptop",
    app: "https://storied-stroopwafel-f2f6e0.netlify.app/",
    code: "https://github.com/yeisonmarroquin887/proyecto.git",
  },
  {
    id: 5,
    image: Images.Riky,
    type: "Frontend",
    icon: "bx-laptop",
    app: "https://calm-kulfi-7e2e7e.netlify.app/",
    code: "https://github.com/yeisonmarroquin887/tercerEntregable.git",
  },
];

const Project = ({ t }) => {
  return (
    <section className="Projects" id="Projects">
      <br />
      <br />
      <br />
      <br />
      <h1 className="Projects_title">
        <span>
          <i className="bx bxs-folder folder"></i>
        </span>{" "}
        {t("projects.title")} <span className="pro">{t("projects.text")}</span>
      </h1>
      <div className="Projects_todos">
        {PROJECTS.map((project) => {
          const key = `projects.projects.Project${project.id}`;
          const name = t(`${key}.name`);

          return (
            <div className="Projects_Project" data-aos="fade-right" key={project.id}>
              <figure className="Project_image">
                <img src={project.image} alt={name} />
                <span
                  className={`Project_type Project_type--${project.type.toLowerCase()}`}
                >
                  <i className={`Project_typeIcon bx ${project.icon}`}></i>
                  {project.type}
                </span>
              </figure>

              <div className="Project_about">
                <h1>{name}</h1>
                <p className="Project_text">{t(`${key}.text`)}</p>
                <ul className="Project_usage">
                  <li>{t(`${key}.usage.0`)}</li>
                  <li>{t(`${key}.usage.1`)}</li>
                  <li>{t(`${key}.usage.2`)}</li>
                </ul>
                <div className="Project_open">
                  {project.app && (
                    <span>
                      <Link to={project.app}>
                        <i className="openGite bx bx-link"></i> App
                      </Link>
                    </span>
                  )}
                  <span>
                    <Link to={project.code}>
                      <i className="openGite bx bxl-github"></i> Code
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;