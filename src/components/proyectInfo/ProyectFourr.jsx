import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProyectFourr = () => {
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
            src="./image/Crud.mp4"
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
            src="./image/Base_movil.mp4"
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
          ¡Bienvenido a esta base de datos única! Aquí, interactué con un
          backend para gestionar información utilizando React y react-form.
          Ingresa datos, edita registros si es necesario y si cometes un error,
          ¡simplemente elimina la entrada! Simplificando la gestión de datos de
          manera eficiente.
        </p>

        <ul className="productOne_ul">
          <li>
            {" "}
            <b>Tipo de proyecto:</b> Practica.
          </li>
          <li>
            <b>Nombre:</b> Crud.
          </li>
          <li>
            <b>Tecnologias:</b> react / react-from.
          </li>
          <li>
            <b>Librerias:</b> axios 
          </li>
          <li>
            <b>Consumo de API:</b> Si
          </li>
          <a className="enlace" href="https://majestic-dodol-6ac862.netlify.app">
            Visita el sitio aquí
          </a>
        </ul>
      </div>
    </div>
  );
};

export default ProyectFourr;
