import { Images } from "../../assets/images";
import Stats from "./Stats";
import "./style/about.css";
import "./style/aboutPro.css";

const SERVICE_ICONS = ["bx-server", "bx-data", "bx-window-alt", "bx-git-branch"];

const About = ({ t }) => {
  const details = [
    { icon: "bx-user", label: t("contact_info.nombre"), value: "Andres.dev" },
    { icon: "bx-briefcase-alt-2", label: t("contact_info.experiencia"), value: t("about.years") },
    { icon: "bx-map", label: t("contact_info.ubicacion"), value: "Ibague-Tolima, Colombia" },
    { icon: "bx-target-lock", label: t("about.focus_label"), value: t("about.focus") },
    { icon: "bx-book-reader", label: t("about.degree_label"), value: t("about.degree"), wide: true },
    {
      icon: "bx-envelope",
      label: t("contact_info.email"),
      value: "yeisonmarroquin887@gmail.com",
      href: "mailto:yeisonmarroquin887@gmail.com",
      wide: true,
    },
  ];

  const services = t("about.services", { returnObjects: true });

  return (
    <section className="About" id="About">
      <h1 className="About_title Section_title Reveal">
        {" "}
        <span>
          <i className="bx bxs-user"></i>
        </span>{" "}
        {t("about_me")} <span className="About_Me">{t("me")}</span>
      </h1>
      <div className="About_div">
        <div className="About_div1 Reveal Reveal--left">
          <figure className="About_img" data-tilt="8">
            <img src={Images.Setup} alt="" loading="lazy" />
            <span className="About_img-badge">
              <i className="bx bx-code-block"></i> Full Stack · Backend
            </span>
          </figure>
        </div>
        <div className="About_div2 Reveal Reveal--right">
          <h1>{t("Hi")}</h1>
          <p className="About_text one">
            <span>{t("about_me_text1")}</span>
            <span>{t("about_me_text1.1")}</span>
          </p>

          <p className="About_text two">
            <span>{t("about_me_text2")}</span>
            <span>{t("about_me_text2.1")}</span>
          </p>

          <ul className="About_details Reveal-stagger">
            {details.map((item) => (
              <li className={`About_detail ${item.wide ? "About_detail--wide" : ""}`} key={item.icon}>
                <span className="About_detail-icon">
                  <i className={`bx ${item.icon}`}></i>
                </span>
                <span className="About_detail-text">
                  <b className="About_item">{item.label}</b>
                  {item.href ? <a href={item.href}>{item.value}</a> : <span>{item.value}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Stats t={t} />

      <div className="About_services">
        <header className="About_services-head Reveal">
          <span className="About_kicker">{t("about.services_kicker")}</span>
          <h2>{t("about.services_title")}</h2>
        </header>
        <ul className="About_services-grid Reveal-stagger">
          {Array.isArray(services) &&
            services.map((service, index) => (
              <li className="About_service" key={service.title} data-spotlight>
                <span className="About_service-icon">
                  <i className={`bx ${SERVICE_ICONS[index]}`}></i>
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="About_service-num">0{index + 1}</span>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
