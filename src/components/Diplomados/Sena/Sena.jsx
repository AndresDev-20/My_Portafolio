import React, { useState } from "react";
import "./style/Sena.css";
import "../Diplomados.css";
import { useNavigate } from "react-router-dom";
import LoaderDiplomas from "../../Loader/LoaderDiplomas";

const Sena = ({ Academlos, setAcademlos, t }) => {
  const [selectedDiploma, setSelectedDiploma] = useState(null);
  const [Scroll, setScroll] = useState(false);
  const [Image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const VolverHome = () => {
    navigate("/", { state: { scrollTo: "Education" } });
  };

  const OpenDiploma = (Value) => {
    setLoading(false);
    switch (Value) {
      case 1:
        setSelectedDiploma("../../../../images/Certificado-Tecnologo.jpg");
		setScroll(true);
        break;
      case 2:
        setSelectedDiploma("../../../../images/Leven1.png");
        setScroll(false);
        break;
      case 3:
        setSelectedDiploma("../../../../images/Leven2.png");
		setScroll(false);
        break;
      case 4:
        setSelectedDiploma("../../../../images/Leven3.png");
		setScroll(false);
        break;
      case 5:
        setSelectedDiploma("../../../../images/Leven4.png");
		setScroll(false);
        break;
      case 6:
        setSelectedDiploma("../../../../images/Leven5.png");
		setScroll(false);
        break;
      case 7: 
        setSelectedDiploma("../../../../images/Leven6.png");
		setScroll(false);
        break;
      default:
        break;
    }
    setImage(true);

    setTimeout(() => {
      setLoading(true);
    }, 1700);
  };

  const CloseDiploma = () => {
    setImage(false);
    setSelectedDiploma(null);
  };

  return (
    <div className="Diplomados" id="Diplos">
      <div className="Diplomados_exit">
        <h1 onClick={VolverHome}>Volver</h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="Diplomados__carrer-diploma">
        <div className={Academlos ? "Clear_Diploma" : "DiplomaSena"}>
          <div>
            <h1 className="Diplomados__title">{t("education.diploma")}a</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <button className="Viw" onClick={() => OpenDiploma(1)}>
              {t("education.ver")}
            </button>
          </div>
        </div>
      </div>

      <br />
      <hr />
      <br />
      <div className="Diplomados__complementarios">
        <div className={Academlos ? "Clear_Diploma" : "DiplomaSena1"}>
          <div>
            <h1 className="Diplomados__title">
              {" "}
              {t("education.levels.english1")}{" "}
            </h1>
            <button onClick={() => OpenDiploma(2)}>{t("education.ver")}</button>
          </div>
        </div>
        <div className={Academlos ? "Clear_Diploma" : "DiplomaSena2"}>
          <div>
            <h1 className="Diplomados__title">
              {" "}
              {t("education.levels.english2")}{" "}
            </h1>
            <button onClick={() => OpenDiploma(3)}>{t("education.ver")}</button>
          </div>
        </div>
        <div className={Academlos ? "Clear_Diploma" : "DiplomaSena3"}>
          <div>
            <h1 className="Diplomados__title">
              {" "}
              {t("education.levels.english3")}{" "}
            </h1>
            <button onClick={() => OpenDiploma(4)}>{t("education.ver")}</button>
          </div>
        </div>
        <div className={Academlos ? "Clear_Diploma" : "DiplomaSena4"}>
          <div>
            <h1 className="Diplomados__title">
              {t("education.levels.english4")}
            </h1>
            <button onClick={() => OpenDiploma(5)}>{t("education.ver")}</button>
          </div>
        </div>

        <div className={Academlos ? "Clear_Diploma" : "DiplomaSena5"}>
          <div>
            <h1 className="Diplomados__title">
              {t("education.levels.english5")}
            </h1>
            <button onClick={() => OpenDiploma(6)}>{t("education.ver")}</button>
          </div>
        </div>

        <div className={Academlos ? "Clear_Diploma" : "DiplomaSena6"}>
          <div>
            <h1 className="Diplomados__title">
              {t("education.levels.english6")}
            </h1>
            <button onClick={() => OpenDiploma(7)}>{t("education.ver")}</button>
          </div>
        </div>
      </div>
      <br />

      <div className={Image ? "Diploma_Image" : "Image_Clear"} style={Scroll ? { overflowY: 'scroll', paddingTop: "2em" } : { overflowY: "hidden" }}>
        <div className="Diplomado__exit">
          <i onClick={CloseDiploma} className="bx bx-x"></i>
        </div>
          {loading ? <img src={selectedDiploma} alt="Diploma" />  : <LoaderDiplomas/>}
        </div>
      
    </div>
  );
};

export default Sena;
