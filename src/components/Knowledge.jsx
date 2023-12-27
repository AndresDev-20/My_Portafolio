import React from "react";
import "./style/Knowledge.css";
import Skills from "./Skills";
const Knowledge = () => {
  return (
    <section id="Knowledge">
      <br /><br /><br />
      <h1>Tecnologias</h1>
      <p>
        Estas son las tecnologías con las que trabajo actualmente. Aunque la
        lista puede no ser extensa, mi enfoque constante en el aprendizaje me
        impulsa a adquirir nuevas habilidades de manera continua.
      </p>
      <section className="Knowledge">
          <nav className="Knowledge_languaje">
            <i className="html bx bxl-html5"></i>
            <h1 className="Knowledge_name">Html</h1>
          </nav>
          <nav className="Knowledge_languaje1">
            <i className="bx Css bxl-css3"></i>
            <h1 className="Knowledge_name">Css</h1>
          </nav>
          <nav className="Knowledge_languaje2">
            <i className="bx js bxl-javascript"></i>
            <h1 className="Knowledge_name">JavaScript</h1>
          </nav>
          <nav className="Knowledge_languaje3">
            <i className="bx react bxl-react"></i>
            <h1 className="Knowledge_name">React</h1>
          </nav>
          <nav className="Knowledge_languaje4">
            <i id="githubb" className="bx git bxl-github"></i>
            <h1 className="Knowledge_name">GitHub</h1>
          </nav>
          <nav className="Knowledge_languaje5">
            <i className="bx redux bxl-redux"></i>
            <h1 className="Knowledge_name">Redux</h1>
          </nav>
          <nav className="Knowledge_languaje6">
            <i className="bx post bxl-postgresql"></i>
            <h1 className="Knowledge_name">SQL</h1>
          </nav>
          <nav className="Knowledge_languaje7">
            <i className="bx node bxl-nodejs"></i>
            <h1 className="Knowledge_name">Node.Js</h1>
          </nav>
          <nav className="Knowledge_languaje8">
            <i className="bx bxl-python python-icon"></i>
            <h1 className="Knowledge_name">Python</h1>
          </nav>

          <nav className="Knowledge_languaje9">
            <i class="bx type bxl-typescript"></i>
            <h1 className="Knowledge_name">TypeScript</h1>
          </nav>
      </section>
      <h1><i onClick={() => document.querySelector('#Proyects').scrollIntoView({ behavior: 'smooth' })} className='bx bx-chevrons-down bx_K'></i></h1>
    </section>
  );
};

export default Knowledge;
