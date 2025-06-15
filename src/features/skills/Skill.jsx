import { Images } from "../../assets/images";
import "./style/skill.css";

const Skill = ({ t }) => {
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
        <div className="Skills_skill" data-aos="fade-right">
          <h1 className="Skills_icon">
            <i className="bx bx-clipboard"></i>
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
              <img src={Images.Express} alt="" />
              <h1>Express.js</h1>
            </div>

            <div>
              <img src={Images.Python} alt="" />
              <h1>Python</h1>
            </div>

            <div>
              <img src={Images.FastAPI} alt="" />
              <h1>FastAPI</h1>
            </div>

            <div>
              <img src={Images.Django} alt="" />
              <h1>Django</h1>
            </div>

            <div>
              <i className="bx bxl-mongodb"></i>
              <h1>MongoDB</h1>
            </div>

            <div>
              <img src={Images.Java} alt="" />
              <h1>Java</h1>
            </div>

            <div>
              <img src={Images.Sprint} alt="" />
              <h1>Sprint</h1>
            </div>

            
          </div>
        </div>

        <div className="Skills_skill" data-aos="fade-right">
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
              <img src={Images.Tailwin} alt="" />
              <h1>Tailwind</h1>
            </div>
          </div>
        </div>

        <div className="Skills_skill" data-aos="fade-right">
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
              <img src={Images.Npm} alt="" />
              <h1>Npm</h1>
            </div>

            <div>
              <img src={Images.Figma} alt="" />
              <h1>Figma</h1>
            </div>

            <div>
              <img src={Images.Postman} alt="" />
              <h1>Postman</h1>
            </div>
            <div>
              <img src={Images.Mysql} alt="" />
              <h1>MySQL</h1>
            </div>

            <div>
              <img src={Images.SQLite} alt="" />
              <h1>SQLITE</h1>
            </div>

            <div>
              <img src={Images.SQLl} alt="" />
              <h1>SQL</h1>
            </div>
            

            <div>
              <i className="bx bxl-postgresql"></i>
              <h1>PostgreSQL</h1>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Skill;