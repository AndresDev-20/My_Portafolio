import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import BackButton from "../../components/back/BackButton";
import "./style/diplomaInstitute.css";
import Sena from "../../components/diplomas/sena/Sena";
import Academlo from "../../components/diplomas/academlo/Academlo";
import Ademas from "../../components/diplomas/ademas/Ademas";

// Ruta: /education-diplomas/:instituto  (SENA | ACADEMLO | ADEMAS)
const INSTITUTES = {
  SENA: Sena,
  ACADEMLO: Academlo,
  ADEMAS: Ademas,
};

const DiplomaInstitute = ({t}) => {
  const { instituto } = useParams();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, [instituto])

  const Institute = INSTITUTES[instituto?.toUpperCase()];

  return (
    <section>
      {!loading && <Loader />}
      {Institute ? (
        <Institute t={t} />
      ) : (
        <div className="Diploma_empty">
          <BackButton t={t} section="Education" />
          <i className="bx bx-folder-open"></i>
          <h1>{t("ui.no_diplomas")}</h1>
        </div>
      )}
    </section>
  );
};

export default DiplomaInstitute;
