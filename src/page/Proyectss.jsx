import React, { useState } from "react";
import "./page.style/proyects.css";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Proyects from "../Utils/Trabajos"
import Projects from "../components/Proyects/Projects";
const Proyectss = () => {
  const [Isloanding, setIsloanding] = useState(true);
  const [Info, setInfo] = useState(Proyects)

  setTimeout(() => {
    setIsloanding(false);
  }, 2000);

  return (
    <>
      {Isloanding ? (
        <Loading Isloanding={Isloanding} />
      ) : (
        <div>
          <Header />
          <section className="Proyects">
            <figure className="Proyectss_image">
              <img src="../../public/image/trabajo.jpg" alt="" />
              <p>"Estos son mis proyectos que he hecho en mi carrera, para ver alguno de ellos solo tienes que hacer clic en uno".</p>
            </figure>
          <div className="Projects">
            {
              Info?.map(proyect => (
             <Projects 
             key={proyect?.id}
             Projects={proyect}
             />
              ))
            }
          </div>
          </section>
          <br />
          <br />
          <br />
          <br />
          <Footer/>
        </div>
      )}
    </>
  );
};

export default Proyectss;
