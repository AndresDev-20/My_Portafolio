import React, { useEffect, useState } from "react";
import "./style/Ademas.css";
import { useNavigate } from "react-router-dom";
import LoaderDiplomas from "../../Loader/LoaderDiplomas";

const Ademas = ({ Academlos, setAcademlos, t }) => {
  const [selectedDiploma, setSelectedDiploma] = useState(null);
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
        setSelectedDiploma("../../../../images/Ademass-Html.png");
        break;
      case 2:
        setSelectedDiploma("../../../../images/Ademass-Css3.png");
        break;
      case 3:
        setSelectedDiploma("../../../../images/Ademass-JavaScript.png");
        break;
      case 4:
        setSelectedDiploma("../../../../images/TypeScript-Ademas.jpg");
        break;
      case 5:
        setSelectedDiploma("../../../../images/Python-Ademas.jpg");
        break;
      default:
        break;
    }
    setImage(true);

    setTimeout(() => {
      setLoading(true);
    }, 1700);
  };

  const CloseDimploma = () => {
    setImage(false);
    setDiploma();
  };

  return (
    <div className="Diplomados">
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
        <div className={Academlos ? "Clear_Diploma" : "DiplomasAdemass"}>
          <div>
            <h1>{t("education.diploma")}</h1>
            <p>{t("education.not_available")}</p>
          </div>
        </div>
      </div>

      <br />
      <hr />
      <br />
      <div className="Diplomados__complementarios">
        <div className={Academlos ? "Clear_Diploma" : "DiplomaAdemas1"}>
          <div>
            <h1>Html5</h1>
            <button onClick={() => OpenDiploma(1)}>{t("education.ver")}</button>
          </div>
        </div>
        <div className={Academlos ? "Clear_Diploma" : "DiplomaAdemas2"}>
          <div>
            <h1>Css3</h1>
            <button onClick={() => OpenDiploma(2)}>{t("education.ver")}</button>
          </div>
        </div>
        <div className={Academlos ? "Clear_Diploma" : "DiplomaAdemas3"}>
          <div>
            <h1>JavaScript</h1>
            <button onClick={() => OpenDiploma(3)}>{t("education.ver")}</button>
          </div>
        </div>
        <div className={Academlos ? "Clear_Diploma" : "DiplomaAdemas4"}>
          <div>
            <h1>TypeScript</h1>
            <button onClick={() => OpenDiploma(4)}>{t("education.ver")}</button>
          </div>
        </div>
        <div className={Academlos ? "Clear_Diploma" : "DiplomaAdemas5"}>
          <div>
            <h1>Python</h1>
            <button onClick={() => OpenDiploma(5)}>{t("education.ver")}</button>
          </div>
        </div>
      </div>

      <div className={Image ? "Diploma_Image" : "Image_Clear"}>
        <div className="Diplomado__exit">
          <i onClick={CloseDimploma} className="bx bx-x"></i>
        </div>
        {!loading ? (
            <LoaderDiplomas />
        ) : (
          <img src={selectedDiploma} alt="Diploma" />
        )}
      </div>
    </div>
  );
};

export default Ademas;
