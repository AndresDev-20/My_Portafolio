import React, { useState, useEffect } from "react";
import { Images } from "../../assets/images";
import CV from '../../assets/documents/Cv-AndresDev.pdf';
import HeroCircuit from "./HeroCircuit";
import "./style/start.css";
import "./style/heroVisual.css";

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
    e.preventDefault();
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
    <section className="Start" id="Start">
      {showAlert && (
        <div className="Start_alert">
          ✈️ {t("welcome.downloading", "Descargando CV...")}
        </div>
      )}

      <article className="Start_container-one">
        <div className="Start_welcome">
          <p className="Start_badge">
            <span className="Start_badge-dot" aria-hidden="true"></span>
            {t("contact.availability")}
          </p>
          <h1>
            <span className="Start_name" aria-label={t("welcome.name")}>
              {t("welcome.name").split(" ").map((word, w, words) => {
                // índice global de la letra para escalonar la animación
                const offset = words.slice(0, w).join("").length;
                return (
                  <span className="Start_word" key={w} aria-hidden="true">
                    {word.split("").map((char, index) => (
                      <span className="Start_letter" style={{ "--i": offset + index }} key={index}>
                        {char}
                      </span>
                    ))}
                    {w < words.length - 1 && " "}
                  </span>
                );
              })}
            </span>{" "}
            <span className="Start_firtsname">{t("welcome.surname")}</span>
          </h1>
          <h2>
            {text}
            <span className="typing-cursor"></span>
          </h2>
          <p>{t("welcome.intro")}</p>
          <ul className="Start_stack" aria-label="Stack">
            {["Node.js", "TypeScript", "Express", "SQL", "Docker"].map((tech, index) => (
              <li key={tech} style={{ "--i": index }}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="Start_buttons">
          <button
            onClick={() => document.querySelector("#Contact")?.scrollIntoView({ behavior: "smooth" })}
            className="Start_btn1"
            data-magnetic
            data-ripple
          >
            <i className="bx bx-send"></i> {t("welcome.contact")}
          </button>
          <button
            onClick={() => document.querySelector("#Projects")?.scrollIntoView({ behavior: "smooth" })}
            className="Start_btn2"
            data-magnetic
            data-ripple
          >
            <i className="bx bx-folder-open"></i> {t("welcome.projects")}
          </button>
          <button className="Start_btn3" onClick={handleDownloadCV} data-magnetic data-ripple>
            <i className="bx bx-download"></i> {t("welcome.cv")}
          </button>
        </div>

        <ul className="Start_urls">
          <a href="https://www.linkedin.com/in/yeison-andres-marroqu%C3%ADn-bernal-008138266/" target="_blank" rel="noopener noreferrer" className="lik" data-magnetic aria-label="LinkedIn" title="LinkedIn">
            <li><i className="bx bxl-linkedin-square"></i></li>
          </a>
          <a href="https://github.com/AndresDev-20" target="_blank" rel="noopener noreferrer" className="lik" data-magnetic aria-label="GitHub" title="GitHub">
            <li><i className="bx bxl-github"></i></li>
          </a>
          <a href="https://wa.me/573227222010" onClick={handleWhatsapp} className="lik" data-magnetic aria-label="WhatsApp" title="WhatsApp">
            <li><i className="bx bxl-whatsapp-square"></i></li>
          </a>
        </ul>
      </article>

      <article className="Start_container-two">
        <figure className="Start_photo" data-tilt="10">
          <HeroCircuit />
          <span className="Start_disc" aria-hidden="true"></span>
          <img
            className="Start_cutout Start_cutout--round"
            src={Images.MyPhoto}
            alt={`${t("welcome.name")} ${t("welcome.surname")}`}
          />
          <span className="Start_chip Start_chip--one" aria-hidden="true">
            <i className="bx bxl-nodejs"></i>
          </span>
          <span className="Start_chip Start_chip--two" aria-hidden="true">
            <i className="bx bxl-typescript"></i>
          </span>
          <span className="Start_chip Start_chip--three" aria-hidden="true">
            <i className="bx bx-data"></i>
          </span>
        </figure>
      </article>
    </section>
  );
};

export default Start;
