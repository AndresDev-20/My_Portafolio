import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyPhoto from '../../assets/images/img/My_photo.jpg';
import CV from '../../assets/documents/Cv-AndresDev.pdf';
import "./style/start.css";

const Start = ({ t }) => {
  const [fraseIndex, setFraseIndex] = useState(0);
  const [letraIndex, setLetraIndex] = useState(0);
  const [mostrarFrase, setMostrarFrase] = useState(true);
  //estado para descarga del cv
   const [showAlert, setShowAlert] = useState(false); 

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


  // FUNCIÓN DE DESCARGA DEL CV
  const handleDownloadCV = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Oculta el alert luego de 3 seg

    const link = document.createElement('a');
    link.href = CV;
    link.download = 'CV_Yeison_Andres_Marroquin.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <section className="Start" data-aos="fade-right" id="Start">
       {showAlert && (
        <div className="Start_alert">
          ✈️ {t("welcome.downloading", "Descargando CV...")}
        </div>
      )}
      <article className="Start_container-one">
        <div className="Start_welcome">
          <h1>
            {" "}
            <span className="Start_name">{t("welcome.name")}</span>{" "}
            <span className="Start_firtsname">{t("welcome.surname")}</span>
          </h1>
          <h2>{frases[fraseIndex].substring(0, letraIndex)}...</h2>
          <p>{t("welcome.intro")}</p>
        </div>
        <div className="Start_buttons">
          <button
            onClick={() =>
              document
                .querySelector("#Contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="Start_btn1"
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
            className="Start_btn2"
          >
            {t("welcome.projects")}
          </button>
          <button className="Start_btn3" onClick={handleDownloadCV}>
            {t("welcome.cv")}
          </button>
        </div>
        <ul className="Start_urls">
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

      <article className="Start_container-two">
        <figure>
          <img src={MyPhoto} alt="My photo" />
        </figure>
      </article>
    </section>
  );
};

export default Start;