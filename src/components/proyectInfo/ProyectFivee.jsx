import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProyectFivee = () => {
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
            src="./image/weather.mp4"
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
          <br />
          ¡Explora el clima a tu alrededor! Mi último proyecto en React Native
          te permite medir el clima de cualquier ubicación que elijas. Descubre
          la velocidad del viento, la humedad y otros detalles climáticos
          importantes de manera sencilla e intuitiva. Mantente informado sobre
          las condiciones climáticas con esta aplicación práctica y funcional.
        </p>

        <ul className="productOne_ul">
          <li>
            {" "}
            <b>Tipo de proyecto:</b> Practica.
          </li>
          <li>
            <b>Nombre:</b> WeatherApp.
          </li>
          <li>
            <b>Tecnologias:</b> react
          </li>
          <li></li>
          <li>
            <b>Consumo de API:</b> No
          </li>
          <a className="enlace" href="https://zingy-gecko-5df221.netlify.app">
            Visita el sitio aquí
          </a>
        </ul>
      </div>
    </div>
  );
};

export default ProyectFivee;
