import React from "react";
import "./style/Skills.css";

const Skills = ({ t }) => {
  return (
    <section className="Skills" id="Skills">
      <br />
      <br />
      <br />
      <h1 className="Skills_title">
        <i className='bx bx-laptop laptop'></i>
        {" "}
        {t("skills.title")} <span className="Habiliti">{t("skills.text")}</span>{" "}
      </h1>
      <article className="Skills_skills">
        <div className="Skills_skill">
          <h1 className="Skills_icon">
            <i className="bx bx-bracket"></i>
          </h1>
          <h1 className="Skill_profetion-title">{t("skills.setion1")}</h1>
          <div className="Skills_container">
            <div>
              <i className="bx bxl-javascript"></i>
              <h1>JavaScript</h1>
            </div>

            <div>
              <i className="bx bxl-typescript"></i>
              <h1>TypeScript</h1>
            </div>

            <div>
              <i className="bx bxl-nodejs"></i>
              <h1>Node.js</h1>
            </div>

            <div>
              <img src="../../../images/Express.png" alt="" />
              <h1>Express.js</h1>
            </div>

            <div>
              <img src="../../../images/Imagen3.png" alt="" />
              <h1>Python</h1>
            </div>

            <div>
              <img src="../../../images/FastAPI.png" alt="" />
              <h1>FastAPI</h1>
            </div>

            <div>
              <img src="../../../images/Django.png" alt="" />
              <h1>Django</h1>
            </div>

            <div>
              <i className="bx bxl-mongodb"></i>
              <h1>MongoDB</h1>
            </div>

            <div>
              <img src="../../../images/java.png" alt="" />
              <h1>Java</h1>
            </div>

            <div>
              <img src="../../../images/Sprint.png" alt="" />
              <h1>Sprint</h1>
            </div>

            <div>
              <img src="../../../images/Sequelize.png" alt="" />
              <h1>Sequelize</h1>
            </div>

            <div>
              <i className="bx bxl-postgresql"></i>
              <h1>Postgre</h1>
            </div>

            <div>
              <img src="../../../images/mysql.png" alt="" />
              <h1>MySQL</h1>
            </div>

            <div>
              <img src="../../../images/SQLite.png" alt="" />
              <h1>SQLITE</h1>
            </div>

            <div>
              <img src="../../../images/SQLl.png" alt="" />
              <h1>SQL</h1>
            </div>
          </div>
        </div>

        <div className="Skills_skill">
          <h1 className="Skills_icon">
            <i className="bx bx-code-alt"></i>
          </h1>
          <h1 className="Skill_profetion-title">{t("skills.setion2")}</h1>
          <div className="Skills_container">
            <div>
              <i className="bx bxl-html5"></i>
              <h1>Html</h1>
            </div>

            <div>
              <i className="bx bxl-css3"></i>
              <h1>Css</h1>
            </div>

            <div>
              <i className="bx bxl-react"></i>
              <h1>React</h1>
            </div>

            <div>
              <i className="bx bxl-redux"></i>
              <h1>Redux</h1>
            </div>

            <div>
              <i className="bx bxl-bootstrap"></i>
              <h1>Bootstrap</h1>
            </div>

            <div>
              <img src="../../../images/Tailwin.png" alt="" />
              <h1>Tailwind</h1>
            </div>
          </div>
        </div>

        <div className="Skills_skill">
          <h1 className="Skills_icon">
            <i className="bx bx-desktop"></i>
          </h1>
          <h1 className="Skill_profetion-title">{t("skills.setion3")}</h1>
          <div className="Skills_container">
            <div>
              <i className="bx bxl-github"></i>
              <h1>GitHub</h1>
            </div>

            <div>
              <i className="bx bxl-git"></i>
              <h1>Git</h1>
            </div>

            <div>
              <img src="../../../images/npm.png" alt="" />
              <h1>Npm</h1>
            </div>

            <div>
              <img src="../../../images/Figma.png" alt="" />
              <h1>Figma</h1>
            </div>

            <div>
              <img src="../../../images/Postman.png" alt="" />
              <h1>Postman</h1>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Skills;
