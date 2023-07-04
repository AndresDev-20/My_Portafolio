import React, { useState } from "react";
import "./page.style/proyects.css";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Loading2 from "../components/Loading2";
const Proyectss = ({ handelclose }) => {
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
            <h1 className="Proyects_tittle">Proyectos</h1>
            <img className="trabajo" src="./image/trabajo.jpg" alt="" />
            <p className="Proyect_text">
              "Estos son mis proyectos que he hecho en mi carrera, para ver
              alguno de ellos solo tienes que hacer clic en uno".
            </p>

            <section className="Proyets_proyects">
              <a
                href="https://zesty-belekoy-18b378.netlify.app"
                className="Proyec_proyectO"
              >
                <video
                  className="Proyects_vid"
                  src="./image/e-comerce_react.mp4"
                  autoPlay
                  muted
                  preload
                  loop
                ></video>
                <nav className="Proyects_info">
                  <h1 className="Proyects_name">E-comerce_react</h1>
                  <p className="Proyects_text">
                    Como vez aquí tenemos un e-comerce el cual fue realizado con
                    react, consumimos una api la cual tiene los productos y los
                    desplegamos a todos, pero para hacer la compra deberas
                    realizar un loguin
                  </p>
                </nav>
              </a>

              <a
                href="https://capable-zabaione-ea68ab.netlify.app"
                className="Proyec_proyectO"
              >
                <video
                  className="Proyects_vid"
                  src="./image/Pokedex.mp4"
                  autoPlay
                  muted
                  preload
                  loop
                ></video>
                <nav className="Proyects_info">
                  <h1 className="Proyects_name">La pokeapi</h1>
                  <p className="Proyects_text">
                    Como vez aquí tenemos la pokeApy un excelente proyecto que
                    hara entretenerte con todos los pokemones que te mostrarán
                  </p>
                </nav>
              </a>

              <a
                href="https://calm-kulfi-7e2e7e.netlify.app"
                className="Proyec_proyectO"
              >
                <video
                  className="Proyects_vid"
                  src="./image/riky.mp4"
                  autoPlay
                  muted
                  preload
                  loop
                ></video>
                <nav className="Proyects_info">
                  <h1 className="Proyects_name">Riky and Morti</h1>
                  <p className="Proyects_text">
                    Al igual que en el proyecto anterior aquí en este podemos
                    ver los famosos personajes de la saga de Riky y Morti, que
                    es una Entretenida saga, aquí podrás encontrar a todos sus
                    personajes.
                  </p>
                </nav>
              </a>

              <a
                href="https://majestic-dodol-6ac862.netlify.app"
                className="Proyec_proyectO"
              >
                <video
                  className="Proyects_vid"
                  src="./image/Crud.mp4"
                  autoPlay
                  muted
                  preload
                  loop
                ></video>
                <nav className="Proyects_info">
                  <h1 className="Proyects_name">Crud</h1>
                  <p className="Proyects_text">
                    Este proyecto es una base de datos en la que se puede hacer
                    un registro de una persona y también editarlo o eliminarlo,
                    es una gran aplicación pruébala te gustará
                  </p>
                </nav>
              </a>

              <a
                href="https://zingy-gecko-5df221.netlify.app"
                className="Proyec_proyectO"
              >
                <video
                  className="Proyects_vid"
                  src="./image/weather.mp4"
                  autoPlay
                  muted
                  preload
                  loop
                ></video>
                <nav className="Proyects_info">
                  <h1 className="Proyects_name">Weather App</h1>
                  <p className="Proyects_text">
                    Aquí tengo esta aplicación, que nos dice el clima que
                    tenemos en el lugar donde estamos y también podemos buscar
                    el clima de otros Lugares facilmente
                  </p>
                </nav>
              </a>

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

      <Footer />
    </>
  );
};

export default Proyectss;
