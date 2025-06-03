import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style/Inicio.css";

const Inicio = ({ t }) => {
  const [fraseIndex, setFraseIndex] = useState(0);
  const [letraIndex, setLetraIndex] = useState(0);
  const [mostrarFrase, setMostrarFrase] = useState(true);
  const frases = t("phrases", { returnObjects: true });
  const navigate = useNavigate();
  const cv = () => {
    navigate("cv");
  };
  useEffect(() => {
    const cambiarFrase = () => {
      setLetraIndex(0);

      setTimeout(() => {
        setMostrarFrase(false);

        setTimeout(() => {
          setFraseIndex((prevIndex) => (prevIndex + 1) % frases.length);
          setMostrarFrase(true);
        }, 1000);
      }, 50);
    };

    const intervalMostrar = setInterval(() => {
      if (mostrarFrase && letraIndex <= frases[fraseIndex].length) {
        setLetraIndex((prevLetra) => prevLetra + 1);
      }
    }, 100);
    const intervalBorrar = setInterval(() => {
      if (!mostrarFrase && letraIndex >= 0) {
        setLetraIndex((prevLetra) => prevLetra - 1);
      }
    }, 100);
    const intervalId = setInterval(cambiarFrase, 3000);

    return () => {
      clearInterval(intervalMostrar);
      clearInterval(intervalBorrar);
      clearInterval(intervalId);
    };
  }, [fraseIndex, letraIndex, mostrarFrase, frases]);

  const handelWhass = (e) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Hola Yeison, quisiera hablar contigo sobre un empleo de desarrollador.`
    );
    window.open(`https://wa.me/573227222010?text=${message}`, "_blank");
  };

  return (
    <section className="Inicio" data-aos="fade-right" id="home">
      <article className="Inicio_container-one">
        <div className="Inicio_welcome">
          <h1>
            {" "}
            <span className="Inicio_name">{t("welcome.name")}</span>{" "}
            <span className="Inicio_firtsname">{t("welcome.surname")}</span>
          </h1>
          <h2>{frases[fraseIndex].substring(0, letraIndex)}...</h2>
          <p>{t("welcome.intro")}</p>
        </div>
        <div className="Inicio_buttons">
          <button
            onClick={() =>
              document
                .querySelector("#Contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="Inicio_btn1"
          >
            {" "}
            {t("welcome.contact")}
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#Projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="Inicio_btn2"
          >
            {t("welcome.projects")}
          </button>
          <button className="Inicio_btn3" onClick={cv}>
            {t("welcome.cv")}
          </button>
        </div>
        <ul className="Inicio_urls">
          <Link
            to="https://www.linkedin.com/in/yeison-andres-marroqu%C3%ADn-bernal-008138266/"
            className="lik"
          >
            <li>
              <i className="bx bxl-linkedin-square"></i>
            </li>
          </Link>
          <Link to="https://github.com/AndresDev-20" className="lik">
            {" "}
            <li>
              <i className="bx bxl-github"></i>
            </li>
          </Link>
          <Link onClick={handelWhass} className="lik">
            <li>
              <i className="bx bxl-whatsapp-square"></i>
            </li>
          </Link>
        </ul>
      </article>

      <article className="Inicio_container-two">
        <figure>
          <img src="../../../images/My_photo.jpg" alt="" />
        </figure>
      </article>
    </section>
  );
};

export default Inicio;
