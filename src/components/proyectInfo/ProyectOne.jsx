import React, { useState } from "react";
import "./style/productOne.css";
import { Link } from "react-router-dom";

const ProyectOne = () => {

    const [close, setclose] = useState(true)
    const handelclos = () => {
        setclose(false)
    }
    const handelCompu = () => {
        setclose(true)
    }
  const handelclose = () => {
    setclose(true)
  }

  return (
    <div className="productOne">
      <div className="productOne_part1">
        <div className={close ? 'productOne_v1' : 'productOne_v1-close'}>
        <h1 className="h2">Visualizacion en Coputadora</h1>
              <video className="productOne_compu"
         
          src="./image/e-comereceSSS.mp4"
          autoPlay
          muted
          preload
          loop
        ></video> 
        <br />
          <button className="productOne_btn" onClick={handelclos}>Movil</button>
        </div>
      
     
          <div className={close ? 'productOne_v2-close':'productOne_v2'}>
          <h3 className="h3">Visualizacion para Movil</h3>
                <video 
          className="productOne_movil"
          src="./image/e-comerceMovil.mp4"
          autoPlay
          muted
          preload
          loop
        ></video>
        <br />
          <button className="productOne_btn" onClick={handelCompu}>Laptop</button>
          </div>
          
      </div>
      
      <div className="productOn">
 
        <Link to="/#Proyects"onClick={() => document.querySelector('#Proyects').scrollIntoView({ behavior: 'smooth' })}> <span onClick={handelclose}>

          <i className='exit bx bx-log-out'><span className="vol">volver</span></i>
         
          </span></Link>
   

      <p  className="productOne_v">
        <span className="productOne_descripcion"> <b>Descripción</b> </span>
        <br />
        <br />
          Tecnología punta y desarrollo Full-Stack en acción: ¡Descubra nuestro
          impresionante E-commerce React con Back-End personalizado! Como
          creador de este proyecto, he utilizado mis habilidades para llevar a
          cabo una solución integral y eficiente, garantizando una experiencia
          de usuario excepcional y una funcionalidad óptima. ¡Permítame
          mostrarle cómo este proyecto destaca por su innovación y
          profesionalismo!
        </p>

        <ul className="productOne_ul">
            <li> <b>Tipo de proyecto:</b> Practica</li>
            <li><b>Nombre:</b>  Ecommerce</li>
            <li><b>Tecnologias:</b>  react / redux / node.js / postgreSQL</li>
            <li><b>Librerias:</b> axios / react-router-dom / react-hook-form / react-redux </li>
            <li><b>Consumo de API:</b> Si</li>
            <a className="enlace" href="https://keen-fudge-5ae06d.netlify.app">Visita el sitio aquí</a>
        </ul>
        
      
        





       
      </div>
    </div>
  );
};

export default ProyectOne;
