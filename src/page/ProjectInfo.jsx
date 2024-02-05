import React, { useState } from 'react'
import {Link, useParams } from 'react-router-dom';
import project from "../Utils/Trabajos"
import Header from '../components/Header';
import Footer from '../components/Footer';
import './page.style/productOne.css'

const ProjectInfo = () => {
  const {id} = useParams()
const [Project, setProject] = useState(project[id])
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
    <div>
      
      <Header/>
      <div className="productOne">
      <div className="productOne_part1">
        <div className={close ? 'productOne_v1' : 'productOne_v1-close'}>
        <h1 className="h2">Visualizacion en Computadora</h1>
              <video className="video"
         
          src={Project.VideoPc}
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
          src={Project.videoMovil}
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
 
        <Link to="/proyects"onClick={() => document.querySelector('').scrollIntoView({ behavior: 'smooth' })}> <span onClick={handelclose}>

          <i className='exit bx bx-log-out'><span className="vol">volver</span></i>
         
          </span></Link>
   

      <p  className="productOne_v">
        <span className="productOne_descripcion"> <b>Descripción</b> </span>
        <br />
        <br />
             {Project.descriptionTwo}
        </p>

        <ul className="productOne_ul">
            <li> <b>Tipo de proyecto:</b> {Project.tipo}.</li>
            <li><b>Nombre:</b>  {Project.name}.</li>
            <li><b>Tecnologias:</b> {Project.tecnologias?.map(t => ( <li className='lit'>{t}</li> ))}</li>
            <a className="enlace" href={Project.enlace}>Visita el sitio aquí</a>
        </ul>      
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default ProjectInfo
