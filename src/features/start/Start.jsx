import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Images } from "../../assets/images";
import CV from '../../assets/documents/Cv-AndresDev.pdf';
import "./style/start.css";

const Start = ({ t }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [showAlert, setShowAlert] = useState(false);
  const [pause, setPause] = useState(false);

  const frases = t("phrases", { returnObjects: true });

  useEffect(() => {
  const current = loopNum % frases.length;
  const fullText = frases[current];

  if (pause) return;

  const handleType = () => {
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // Si ya escribió toda la frase
    if (!isDeleting && updatedText === fullText) {
      setPause(true);
      setTimeout(() => {
        setPause(false);
        setIsDeleting(true);
      }, 3000); // <--- aquí defines cuánto tiempo se queda la frase escrita (2 segundos)
    }

    // Si ya borró toda la frase
    else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
    }

    setTypingSpeed(isDeleting ? 90 : 140);
  };

  const timer = setTimeout(handleType, typingSpeed);
  return () => clearTimeout(timer);
}, [text, isDeleting, pause]);

  const handleWhatsapp = (e) => {
    e.stopPropagation();
    const message = encodeURIComponent("Hola Yeison, quisiera hablar contigo sobre un empleo de desarrollador.");
    window.open(`https://wa.me/573227222010?text=${message}`, "_blank");
  };

  const handleDownloadCV = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);

    const link = document.createElement('a');
    link.href = CV;
    link.download = 'CV_Yeison_Andres_Marroquin.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.open(CV, "_blank");
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
            <span className="Start_name">{t("welcome.name")}</span>{" "}
            <span className="Start_firtsname">{t("welcome.surname")}</span>
          </h1>
          <h2>
            {text}
            <span className="typing-cursor"></span>
          </h2>
          <p>{t("welcome.intro")}</p>
        </div>

        <div className="Start_buttons">
          <button
            onClick={() => document.querySelector("#Contact")?.scrollIntoView({ behavior: "smooth" })}
            className="Start_btn1"
          >
            {t("welcome.contact")}
          </button>
          <button
            onClick={() => document.querySelector("#Projects")?.scrollIntoView({ behavior: "smooth" })}
            className="Start_btn2"
          >
            {t("welcome.projects")}
          </button>
          <button className="Start_btn3" onClick={handleDownloadCV}>
            {t("welcome.cv")}
          </button>
        </div>

        <ul className="Start_urls">
          <Link to="https://www.linkedin.com/in/yeison-andres-marroqu%C3%ADn-bernal-008138266/" className="lik">
            <li><i className="bx bxl-linkedin-square"></i></li>
          </Link>
          <Link to="https://github.com/AndresDev-20" className="lik">
            <li><i className="bx bxl-github"></i></li>
          </Link>
          <Link onClick={handleWhatsapp} className="lik">
            <li><i className="bx bxl-whatsapp-square"></i></li>
          </Link>
        </ul>
      </article>

      <article className="Start_container-two">
        <figure>
          <img src={Images.MyPhoto} alt="My photo" />
        </figure>
      </article>
    </section>
  );
};

export default Start;
