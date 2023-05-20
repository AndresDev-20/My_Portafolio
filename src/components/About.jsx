import React from "react";
import "./style/About.css";
const About = () => {
  return (
    <div>
      <section className="About" id="About">
        <nav className="About_history">
          <h1 className="About_tittle">
            Hola, aquí te dejo un poco de mi historia como programador...
          </h1>
          <section className="About_historyy">
            <p className="About_his">
              Soy desarrollador front-end me especializo en HTML, CSS,
              JAVASCRIPT, REACT Y REDUX. Inicie mi carrera con una gran
              motivacion, tengo 18 años de edad y siempre me ha gustado el tema de
              programar y aprender todo acerca de esta profesion.
            </p>
            <br />

            <br />
            <p className="About_his"></p>
          </section>
        </nav>
      </section>
    </div>
  );
};

export default About;
