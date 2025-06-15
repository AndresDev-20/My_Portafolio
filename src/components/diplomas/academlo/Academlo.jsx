import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Images } from "../../../assets/images";
import LoaderDiplomas from "../../loaderr/LoaderDiplomas";
import "./style/academlo.css";
import "../diplomados.css";

const Academlo = ({ Academlos, setAcademlos, t }) => {
  const [selectedDiploma, setSelectedDiploma] = useState(null);
  const [Image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const VolverHome = () => {
    navigate('/', { state: { scrollTo: 'Education' } });
  };

  const OpenDiploma = (Value) => {
    setLoading(false);
    switch (Value) {
      case 1:
        setSelectedDiploma(Images.Academlo_fullstack);
        break;
      case 2:
        setSelectedDiploma(Images.Academlo_fundamentos);
        break;
      case 3:
        setSelectedDiploma(Images.Academlo_frontend);
        break;
      case 4:
        setSelectedDiploma(Images.Academlo_backend);
        break;
      default:
        break;
    }
    setImage(true);

    setTimeout(() => {
      setLoading(true);
    }, 550);
  };

  const CloseDiploma = () => {
    setImage(false);
    setSelectedDiploma(null);
  };

  return (
    <div className="Diplomados" id='Education'>
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
        <div className={Academlos ? "Clear_Diploma" : "Diploma"}>
          <div>
            <h1 className="Diplomados__title">{t("education.diploma")}</h1>
            <button onClick={() => OpenDiploma(1)}>{t("education.ver")}</button>
          </div>
        </div>
      </div>

      <br />
      <hr />
      <br />
      <div className="Diplomados__complementarios">
        <div className={Academlos ? "Clear_Diploma" : "Diploma1"}>
          <div>
            <h1 className="Diplomados__title">{t("education.levels.fundamento")}</h1>
            <button onClick={() => OpenDiploma(2)}>{t("education.ver")}</button>
          </div>
        </div>
        <div className={Academlos ? "Clear_Diploma" : "Diploma2"}>
          <div>
            <h1 className="Diplomados__title">{t("education.levels.frontend")}</h1>
            <button onClick={() => OpenDiploma(3)}>{t("education.ver")}</button>
          </div>
        </div>
        <div className={Academlos ? "Clear_Diploma" : "Diploma3"}>
          <div>
            <h1 className="Diplomados__title">{t("education.levels.backend")}</h1>
            <button onClick={() => OpenDiploma(4)}>{t("education.ver")}</button>
          </div>
        </div>
      </div>

      <div className={Image ? "Diploma_Image" : "Image_Clear"}>
        <div className="Diplomado__exit">
          <i onClick={CloseDiploma} className="bx bx-x"></i>
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

export default Academlo;