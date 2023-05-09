import React, { useState } from "react";
import "./page.style/portafolio.css";
import About from "../components/About";
import Knowledge from "../components/Knowledge";
import Home from "../components/Home";
import Contactame from "../components/Contactame";
import Proyects from "../components/Proyects";




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
          <h1 className="Portafolio_">Programmer</h1>
        </nav>
      
        <nav onClick={handelclick} className="Portafolio_click">
        <img className="img_menu" src="./image/menu.jpg" alt="" />
        </nav>
        <section className={`container ${close && 'close'}`}>
          <section className="Portafolio_menu">
           <a href="#"><span onClick={handelclose} className="Portafolio_select">Home</span></a>
           <a href="#"><span  className="Portafolio_select">About me</span></a> 
            <span className="Portafolio_select">Knowledge</span>
            <span className="Portafolio_select">Proyects</span>
            <span className="Portafolio_select">Contact me</span>
            <span onClick={handelclose} className="Portafolio_select return">return</span>
          </section>
        </section>
      </header>

       <Home/>
       <About/>
       <Knowledge/>
       <Proyects/>
       <Contactame/>

      <footer className="footer">
        
      </footer>
    </div>
  );
};

export default Portafolio;
