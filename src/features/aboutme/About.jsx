import { Images } from "../../assets/images";
import "./style/about.css";

const About = ({ t }) => {
  return (
    <section className="About" id="About" data-aos="fade-right">
      <h1 className="About_title" >
        {" "}
        <span>
          <i className="bx bxs-user"></i>
        </span>{" "}
        {t("about_me")} <span className="About_Me">{t("me")}</span>
      </h1>
      <div className="About_div">
        <div className="About_div1">
          <figure className="About_img">
            <img src={Images.Setup} alt="" />
          </figure>
        </div>
        <div className="About_div2">
          <p className="About_text one">
            <span>{t("about_me_text1")}</span>
            <span>{t("about_me_text1.1")}</span>
          </p>

          <p className="About_text two">
            <span>{t("about_me_text2")}</span>
            <span>{t("about_me_text2.1")}</span>
          </p>
          <ul className="About_datos">
            <div>
              <li>
                <b className="About_item"> {t("contact_info.nombre")} </b>{" "}
                Andres.dev
              </li>
              <li>
                <b className="About_item"> {t("contact_info.email")} </b>
                yeisonmarroquin887@gmail.com
              </li>
            </div>
            <div>
              <li>
                <b className="About_item"> {t("contact_info.experiencia")} </b>
                1+ año
              </li>
              <li>
                <b className="About_item"> {t("contact_info.ubicacion")} </b>
                Ibague-Tolima, Colombia
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
