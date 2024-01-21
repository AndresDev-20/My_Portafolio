import React, { useState } from "react";
import "./page.style/proyects.css";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import Header from "../components/Header";
const Proyectss = () => {
  const [Isloanding, setIsloanding] = useState(true);

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
            <div className="Proyectss_image">
            <img className="trabajo" src="./image/trabajo.jpg" alt="" />
            <p className="Proyect_text">
              "Estos son mis proyectos que he hecho en mi carrera, para ver
              alguno de ellos solo tienes que hacer clic en uno".
            </p>              
            </div>


            <section className="Proyets_proyects">

      

              <a
                href="https://thunderous-kitten-8deaca.netlify.app"
                className="Proyec_proyectO"
              >
                <video
                  className="Proyects_vid"
                  src="./image/e-comerce.mp4"
                  autoPlay
                  muted
                  preload
                  loop
                ></video>
                <nav className="Proyects_info">
                  <h1 className="Proyects_name">e-comerce</h1>
                  <p className="Proyects_text">
                    Aqui tenemos un e-comerce creado con javascript vanilla,
                    basado en una tienda online, podras hacer la compra de una
                    de sus prendas a distancia, agregandola a el carrito.
                  </p>
                </nav>
              </a>

              <a
                href="https://storied-stroopwafel-f2f6e0.netlify.app"
                className="Proyec_proyectO"
              >
                <video
                  className="Proyects_vid"
                  src="./image/fortuna.mp4"
                  autoPlay
                  muted
                  preload
                  loop
                ></video>
                <nav className="Proyects_info">
                  <h1 className="Proyects_name">Galleta de la fortuna</h1>
                  <p className="Proyects_text">
                    este proyecto como vemos es una aplicacion de hermosas
                    frases, cada vez que demos un click en una de ellas tenemos
                    una nueva frase para leer y esto viene de la galleta de la
                    fortuna
                  </p>
                </nav>
              </a>

              <a
                href="https://jazzy-baklava-d95ad7.netlify.app"
                className="Proyec_proyectO"
              >
                <video
                  className="Proyects_vid"
                  src="./image/guarderia.mp4"
                  autoPlay
                  muted
                  preload
                  loop
                ></video>
                <nav className="Proyects_info">
                  <h1 className="Proyects_name">Guarderia animal </h1>
                  <p className="Proyects_text">
                    Aqui te traigo una app de una guarderia animal en la cual
                    podras hacer una adopcion de uno de estos animalitos
                    domesticos
                  </p>
                </nav>
              </a>

              <a
                href="https://neon-zabaione-9d82a6.netlify.app"
                className="Proyec_proyectO"
              >
                <video
                  className="Proyects_vid"
                  src="./image/people.mp4"
                  autoPlay
                  muted
                  preload
                  loop
                ></video>
                <nav className="Proyects_info">
                  <h1 className="Proyects_name">Apipeoples</h1>
                  <p className="Proyects_text">
                    esta es una de mis primeras aplicaciones en la cual he
                    desplegado la informacion de una Api y la he diseñado con
                    react y css
                  </p>
                </nav>
              </a>
            </section>
          </section>
        </div>
      )}
      <br /><br /><br />

      <Footer />
    </>
  );
};

export default Proyectss;
