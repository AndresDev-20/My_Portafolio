import React, { useState } from "react";
import "./style/productOne.css";
import { Link } from "react-router-dom";

const ProyectTwo = () => {
  const [close, setclose] = useState(true);
  const handelclos = () => {
    setclose(false);
  };
  const handelCompu = () => {
    setclose(true);
  };
  const handelclose = () => {
    setclose(true);
  };
  return (
    <div className="productOne">
      <div className="productOne_part1">
        <div className={close ? "productOne_v1" : "productOne_v1-close"}>
          <h1 className="h2">Visualizacion en Computadora</h1>
          <video
            className="productOne_compu"
            src="./image/Pokedex.mp4"
            autoPlay
            muted
            preload
            loop
          ></video>
          <br />
          <button className="productOne_btn" onClick={handelclos}>
            Movil
          </button>
        </div>

        <div className={close ? "productOne_v2-close" : "productOne_v2"}>
          <h3 className="h3">Visualizacion para Movil</h3>
          <video
            className="productOne_movil"
            src="./image/Pokedex_movil.mp4"
            autoPlay
            muted
            preload
            loop
          ></video>
          <br />
          <button className="productOne_btn" onClick={handelCompu}>
            Laptop
          </button>
        </div>
      </div>

      <div className="productOn">
        <Link
          to="/#Proyects"
          onClick={() =>
            document
              .querySelector("#Proyects")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          {" "}
          <span onClick={handelclose}>
            <i className="exit bx bx-log-out">
              <span className="vol">volver</span>
            </i>
          </span>
        </Link>

        <p className="productOne_v">
          <span className="productOne_descripcion">
            {" "}
            <b>Descripción</b>{" "}
          </span>
          <br />
          <br />
          ¡Bienvenido a PokeApy! Un proyecto excepcional que te sumergirá en el
          apasionante universo de los pokémones. Desarrollado con React, React
          Router-Dom y Redux, esta plataforma te ofrece una experiencia de
          entretenimiento única y envolvente. Descubre, interactúa y aprende
          sobre todos los pokémones en esta emocionante aventura virtual. 
        </p>

        <ul className="productOne_ul">
          <li>
            {" "}
            <b>Tipo de proyecto:</b> Practica.
          </li>
          <li>
            <b>Nombre:</b> Pokedex.
          </li>
          <li>
            <b>Tecnologias:</b> react / redux.
          </li>
          <li>
            <b>Librerias:</b> axios / react-router-dom / 
            react-redux{" "}
          </li>
          <li>
            <b>Consumo de API:</b> Si
          </li>
          <a className="enlace" href="https://capable-zabaione-ea68ab.netlify.app">
            Visita el sitio aquí
          </a>
        </ul>
      </div>
    </div>
  );
};

export default ProyectTwo;
