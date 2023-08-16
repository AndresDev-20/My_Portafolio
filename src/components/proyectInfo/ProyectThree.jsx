import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/productOne.css";

const ProyectThree = () => {
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
          <h1 className="h2">Visualizacion en Coputadora</h1>
          <video
            className="productOne_compu"
            src="./image/riky.mp4"
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
            src="./image/.mp4"
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
          ¡Bienvenido a la emocionante saga de Rick and Morty! Un proyecto
          excepcional que te sumergirá en el apasionante universo de estos
          extravagantes personajes. Desarrollado utilizando tecnologías como
          React, React Router-Dom y Redux, esta plataforma te ofrece una
          experiencia única y envolvente. Explora los innumerables mundos,
          interactúa con los singulares personajes y sumérgete en las hilarantes
          y a veces desconcertantes aventuras de Rick y Morty en esta
          emocionante experiencia virtual.
        </p>

        <ul className="productOne_ul">
          <li>
            {" "}
            <b>Tipo de proyecto:</b> Practica.
          </li>
          <li>
            <b>Nombre:</b> Rick and Morty.
          </li>
          <li>
            <b>Tecnologias:</b> react / redux.
          </li>
          <li>
            <b>Librerias:</b> axios / react-router-dom / react-redux{" "}
          </li>
          <li>
            <b>Consumo de API:</b> Si
          </li>
          <a className="enlace" href="https://calm-kulfi-7e2e7e.netlify.app">
            Visita el sitio aquí
          </a>
        </ul>
      </div>
    </div>
  );
};

export default ProyectThree;
