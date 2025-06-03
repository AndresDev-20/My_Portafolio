import React, { useEffect, useState } from "react"; // agrega useEffect
import Academlo from "../../components/Diplomados/Academlo/Academlo";
import Sena from "../../components/Diplomados/Sena/Sena";
import Ademas from "../../components/Diplomados/Ademas/Ademas";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../components/Loader/Loader";
import "./style/Diplomas.css"; // Asegúrate de tener el CSS para estilos

const Diplomas = () => {
  const { instituto } = useParams();
  const { t } = useTranslation("global");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Esto fuerza el scroll al inicio cuando carga el componente
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, [])

  return (
    <section>
      {
        !loading && (
          <div>
           <Loader/>
          </div>
        )
      }
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
