import { Link } from "react-router-dom";
import { Images } from "../../assets/images";
import "./style/project.css";


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
        {/* <div className='Projects_Project' data-aos="fade-right">
		<h1>Klickylisto e-comerce </h1>
			<figure>
				<img src="../../../images/Klickylisto.png" alt="" />
			</figure>
			<div>
				<span><Link to="https://keen-fudge-5ae06d.netlify.app/">App</Link></span>
				<span><Link to="https://github.com/yeisonmarroquin887/My_e-Comerce.git">Code</Link></span>
				<span><Link to="https://github.com/yeisonmarroquin887/My_e-Comerce-Api.git">Back-end</Link></span>
			</div>
		</div> */}

        <div className="Projects_Project" data-aos="fade-right">
          <figure className="Project_image">
            <img src={Images.Ecomerce_CLA} alt="" />
          </figure>
          <div className="Project_about">
            <h1>{t("projects.projects.Project1.name")}</h1>
            <p className="Project_text">
              {t("projects.projects.Project1.text")}
            </p>
            <ul className="Project_usage">
              <li>{t("projects.projects.Project1.usage.0")}</li>
              <li>{t("projects.projects.Project1.usage.1")}</li>
              <li>{t("projects.projects.Project1.usage.2")}</li>
            </ul>
            <div className="Project_open">
              <span>
                {" "}
                <Link to="https://zippy-pavlova-3da0ad.netlify.app/">
                  <i className='openGite bx bx-link' ></i> App
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link to="https://github.com/yeisonmarroquin887/Computers-Store.git">
                   <i className='openGite bx bxl-github' ></i> Code
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>




        <div className="Projects_Project" data-aos="fade-right">
         
          <figure className="Project_image">
            <img src={Images.Pokedex} alt="" />
          </figure>
           <div className="Project_about">
           <h1>{t("projects.projects.Project2.name")}</h1>
            <p className="Project_text">
              {t("projects.projects.Project2.text")}
            </p>
            <ul className="Project_usage">
              <li>{t("projects.projects.Project2.usage.0")}</li>
              <li>{t("projects.projects.Project2.usage.1")}</li>
              <li>{t("projects.projects.Project2.usage.2")}</li>
            </ul>
            <div className="Project_open">
              <span>
                {" "}
                <Link to="https://pokedex-andres-dev.netlify.app">
                  <i className='openGite bx bx-link' ></i> App
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link to="https://github.com/yeisonmarroquin887/Entregablecinco.git">
                   <i className='openGite bx bxl-github' ></i> Code
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="Projects_Project" data-aos="fade-right">
         
          <figure className="Project_image">
            <img src={Images.Weather} alt="" />
          </figure>
           <div className="Project_about">
            <h1>{t("projects.projects.Project3.name")}</h1>
            <p className="Project_text">
              {t("projects.projects.Project3.text")}
            </p>
            <ul className="Project_usage">
              <li>{t("projects.projects.Project3.usage.0")}</li>
              <li>{t("projects.projects.Project3.usage.1")}</li>
              <li>{t("projects.projects.Project3.usage.2")}</li>
            </ul>
            <div className="Project_open">
              <span>
                {" "}
                <Link to="https://zingy-gecko-5df221.netlify.app/">
                  <i className='openGite bx bx-link' ></i> App
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link to="https://github.com/yeisonmarroquin887/segundo-entregable.git">
                   <i className='openGite bx bxl-github' ></i> Code
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="Projects_Project" data-aos="fade-right">
          <figure className="Project_image">
            <img src={Images.Cookies} alt="" />
          </figure>
          <div className="Project_about">
           <h1>{t("projects.projects.Project4.name")}</h1>
            <p className="Project_text">
              {t("projects.projects.Project4.text")}
            </p>
            <ul className="Project_usage">
              <li>{t("projects.projects.Project4.usage.0")}</li>
              <li>{t("projects.projects.Project4.usage.1")}</li>
              <li>{t("projects.projects.Project4.usage.2")}</li>
            </ul>
            <div className="Project_open">
              <span>
                {" "}
                <Link to="https://storied-stroopwafel-f2f6e0.netlify.app/">
                  <i className='openGite bx bx-link' ></i> App
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link to="https://github.com/yeisonmarroquin887/proyecto.git">
                   <i className='openGite bx bxl-github' ></i> Code
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="Projects_Project" data-aos="fade-right">
          <figure className="Project_image">
            <img src={Images.Riky} alt="" />
          </figure>
           <div className="Project_about">
            <h1>{t("projects.projects.Project5.name")}</h1>
            <p className="Project_text">
              {t("projects.projects.Project5.text")}
            </p>
            <ul className="Project_usage">
              <li>{t("projects.projects.Project5.usage.0")}</li>
              <li>{t("projects.projects.Project5.usage.1")}</li>
              <li>{t("projects.projects.Project5.usage.2")}</li>
            </ul>
            <div className="Project_open">
              <span>
                {" "}
                <Link to="https://calm-kulfi-7e2e7e.netlify.app/">
                  <i className='openGite bx bx-link' ></i> App
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link to="https://github.com/yeisonmarroquin887/tercerEntregable.git">
                   <i className='openGite bx bxl-github' ></i> Code
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>

         <div className="Projects_Project" data-aos="fade-right">
          <figure className="Project_image">
            <img src={Images.Animation} alt="" />
          </figure>
           <div className="Project_about">
            <h1>{t("projects.projects.Project6.name")}</h1>
            <p className="Project_text">
              {t("projects.projects.Project6.text")}
            </p>
            <ul className="Project_usage">
              <li>{t("projects.projects.Project6.usage.0")}</li>
              <li>{t("projects.projects.Project6.usage.1")}</li>
              <li>{t("projects.projects.Project6.usage.2")}</li>
            </ul>
            <div className="Project_open">
              <span>
                {" "}
                <Link to="https://kaleidoscopic-sunshine-db62c9.netlify.app/">
                  <i className='openGite bx bx-link' ></i> App
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link to="https://github.com/AndresDev-20/Animation_Practica_SistemaSolar.git">
                   <i className='openGite bx bxl-github' ></i> Code
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Project;