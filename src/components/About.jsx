import React from "react";
import "./style/About.css";
import { Link, useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();

  const handlePerfil = () => {
    navigate("perfil/#inicio");
  };

  const handelCv = () => {
    navigate("curriculum");
  };
  return (
    <div id="About" className="About">
      <br />
      <br />
      <br />
      <br />

      <h1 className="titl">Experiencia Laboral...</h1>
      <h2 className="titl">Desarrollo de E-commerce para Klickylisto</h2>
      <h2 className="titl">Descripción del Proyecto:</h2>
      <p>
        Lideré el desarrollo completo de un sistema de comercio electrónico para
        Klickylisto, construyendo tanto el backend como el frontend desde cero.
      </p>
      <br />
      <h2 className="titl">Tecnologías Utilizadas:</h2>
      <ul>
        <li className="About_li">
          <b>Backend: </b>Node.js, Express.js, PostgreSQL.
        </li>
        <li className="About_li">
          <b>Frontend:</b> React, Vite, Redux.
        </li>
      </ul>
      <br />
      <h2 className="titl">Destacados:</h2>
      <ul>
        <li className="About_li">
          <b>Backend Eficiente:</b> Implementé un backend robusto con Node.js y
          Express.js, respaldado por PostgreSQL para un almacenamiento seguro.
        </li>
        <li className="About_li">
          <b>Frontend Moderno:</b> Desarrollé una interfaz de usuario dinámica y
          de alto rendimiento con React, Vite y Redux para gestionar estados
          globales.
        </li>
        <li className="About_li">
          <b>Gestión de Rutas y Seguridad:</b> Utilicé bibliotecas
          especializadas para una navegación intuitiva y segura, con interfaces
          de inicio de sesión avanzadas.
        </li>
      </ul>
      <br />
      <h2 className="titl">Resultados</h2>
      <p>
        El proyecto optimizó los procesos internos de Klickylisto, mejorando su
        presencia en línea y la satisfacción del cliente. Actualmente, el
        sistema está en funcionamiento, utilizando render para la API, Git para
        el repositorio y Netlify para el despliegue, demostrando su viabilidad y
        rendimiento en tiempo real.
      </p>
      <br />
      <br />
      <hr />
      <br />
      <p> Soy un desarrollador de software apasionado con habilidades en resolución creativa de problemas y experiencia en proyectos colaborativos. Comprometido con el aprendizaje continuo y la adaptación rápida a nuevos entornos laborales. Listo para aportar mi pasión y conocimiento al equipo y enfrentar desafíos con determinación. </p> <br /> <p> Experiencia en proyectos colaborativos, demostrando trabajo en equipo. Adaptable a nuevos entornos laborales y enfocado en el aprendizaje continuo. Habilidad para liderar equipos y solucionar problemas de manera rápida y efectiva. </p>
      <nav className="about__footer">
        <br />
        <br />
        <br />
        <br />
      </nav>
      <h3>
        <i
          onClick={() =>
            document
              .querySelector("#Knowledge")
              .scrollIntoView({ behavior: "smooth" })
          }
          class="bx bx-chevrons-down bx_A"
        ></i>
      </h3>
    </div>
  );
};

export default About;
