import { useLayoutEffect, useRef, useState } from "react";
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

const FILTERS = ["all", "Backend", "Frontend"];

const Project = ({ t }) => {
  const [filter, setFilter] = useState("all");
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const tabsRef = useRef(null);

  // Mueve la "píldora" de color debajo del filtro activo
  useLayoutEffect(() => {
    const place = () => {
      const active = tabsRef.current?.querySelector(".Projects_filter--active");
      if (active) setPill({ left: active.offsetLeft, width: active.offsetWidth });
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [filter, t]);

  const visible =
    filter === "all" ? PROJECTS : PROJECTS.filter((project) => project.type === filter);

  const countOf = (type) =>
    type === "all" ? PROJECTS.length : PROJECTS.filter((project) => project.type === type).length;

  return (
    <section className="Projects" id="Projects">
      <br />
      <br />
      <br />
      <br />
      <h1 className="Projects_title Section_title Reveal">
        <span>
          <i className="bx bxs-folder folder"></i>
        </span>{" "}
        {t("projects.title")} <span className="pro">{t("projects.text")}</span>
      </h1>

      <div className="Projects_filters Reveal" role="tablist" ref={tabsRef}>
        <span
          className="Projects_filter-pill"
          style={{ transform: `translateX(${pill.left}px)`, width: pill.width }}
          aria-hidden="true"
        ></span>
        {FILTERS.map((type) => (
          <button
            key={type}
            type="button"
            role="tab"
            aria-selected={filter === type}
            className={`Projects_filter ${filter === type ? "Projects_filter--active" : ""}`}
            onClick={() => setFilter(type)}
            data-ripple
          >
            {type === "all" ? t("ui.all") : type}
            <span className="Projects_filter-count">{countOf(type)}</span>
          </button>
        ))}
      </div>

      <div className="Projects_todos" key={filter}>
        {visible.map((project, index) => {
          const key = `projects.projects.Project${project.id}`;
          const name = t(`${key}.name`);

          return (
            <div
              className="Projects_Project"
              data-spotlight
              data-tilt="6"
              key={project.id}
              style={{ "--i": index }}
            >
              <figure className="Project_image">
                <img src={project.image} alt={name} loading="lazy" />
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
                      <a href={project.app} target="_blank" rel="noopener noreferrer">
                        <i className="openGite bx bx-link"></i> App
                      </a>
                    </span>
                  )}
                  <span>
                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                      <i className="openGite bx bxl-github"></i> Code
                    </a>
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
