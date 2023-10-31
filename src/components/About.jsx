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
      <br /><br /><br /><br /><br /><br />
      
      <h1>Algo sobre mi...</h1>
      <p>
        Desarrollador de software apasionado con habilidades en resolución
        creativa de problemas y experiencia en proyectos colaborativos.
        Comprometido con el aprendizaje continuo y la adaptación rápida a nuevos
        entornos laborales. Listo para aportar mi pasión y conocimiento al
        equipo y enfrentar desafíos con determinación.
      </p>
      <br />
      <p>
        Experiencia en proyectos colaborativos, demostrando trabajo en equipo.
        Adaptable a nuevos entornos laborales y enfocado en el aprendizaje
        continuo. Habilidad para liderar equipos y solucionar problemas de
        manera rápida y efectiva.
      </p>
      <nav className="about__footer">
             <button className="About__button" onClick={handlePerfil}>
            Mis Certificados <i class='bx bxs-award'></i>
          </button>

     
        </nav>
    </div>
  );
};

export default About;
