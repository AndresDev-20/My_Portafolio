import React, { useEffect, useState } from "react"; // agrega useEffect

import { useParams } from "react-router-dom";
import Loader from "../../components/loaderr/Loader";
import "./style/diplomaInstitute.css"; // Asegúrate de tener el CSS para estilos
import Sena from "../../components/diplomas/sena/Sena";
import Academlo from "../../components/diplomas/academlo/Academlo";
import Ademas from "../../components/diplomas/ademas/Ademas";

const DiplomaInstitute = ({t}) => {
  const { instituto } = useParams();
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

export default DiplomaInstitute;