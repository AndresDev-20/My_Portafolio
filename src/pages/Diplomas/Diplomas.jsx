import React, { useEffect } from "react"; // agrega useEffect
import Academlo from "../../components/Diplomados/Academlo/Academlo";
import Sena from "../../components/Diplomados/Sena/Sena";
import Ademas from "../../components/Diplomados/Ademas/Ademas";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Diplomas = () => {
  const { instituto } = useParams();
  const { t } = useTranslation("global");

  useEffect(() => {
    // Esto fuerza el scroll al inicio cuando carga el componente
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <section>
      {
        instituto === "SENA" ? (
          <Sena t={t} />
        ) : instituto === "ACADEMLO" ? (
          <Academlo t={t} />
        ) : instituto === "ADEMAS" ? (
          <Ademas t={t} />
        ) : (
          <h1>Aún no hay diplomados</h1>
        )
      }
    </section>
  );
};

export default Diplomas;
