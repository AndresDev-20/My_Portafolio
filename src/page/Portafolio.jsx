import React, { useState } from "react";
import "./page.style/portafolio.css";
import About from "../components/About";
import Knowledge from "../components/Knowledge";
import Home from "../components/Home";
import Contactame from "../components/Contactame";
import Proyects from "../components/Proyects";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";





const Portafolio = () => {
  const [close, setclose] = useState(true)
    const handelclick = () => {
       setclose(false)
    }
  const handelclose = () => {
    setclose(true)
  }

  return (
    <div id="home" className="Portafolio">
                 <header className="Portafolio_header">
        <nav className="Portafolio_programmer">
          <h1 className="Portafolio_"> Programming...</h1>
        </nav>
      
        <nav onClick={handelclick} className="Portafolio_click">
        <i class='bx bx-menu'></i>
        </nav>
        <section className={`container ${close && 'close'}`}>
          <section className= 'Portafolio_menu'>
          
          <a href="#"><span onClick={handelclose}  className="Portafolio_select">inicio</span></a> 
           <Link to="/#About"onClick={() => document.querySelector('#About').scrollIntoView({ behavior: 'smooth' })}><span onClick={handelclose}  className="Portafolio_select">Acerca de mi</span></Link> 
           <Link to="/#Knowledge"onClick={() => document.querySelector('#Knowledge').scrollIntoView({ behavior: 'smooth' })}> <span onClick={handelclose} className="Portafolio_select">Conocimientos</span></Link>
           <Link to="/#Proyects"onClick={() => document.querySelector('#Proyects').scrollIntoView({ behavior: 'smooth' })}> <span onClick={handelclose} className="Portafolio_select">Proyectos</span></Link>
           <Link to="/#contact"onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}> <span onClick={handelclose} className="Portafolio_select">Contactame</span></Link>
            <span onClick={handelclose} className="Portafolio_select return">Volver al inicio</span>
        
  
          </section>
        </section>
      </header>

       <Home/>
       <About/>
       <Knowledge/>
       <Proyects/>
       <Contactame/>
       <Footer/>
    </div>
  );
};

export default Portafolio;
