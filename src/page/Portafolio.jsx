import React, { useState } from "react";
import "./page.style/portafolio.css";
import About from "../components/About";
import Knowledge from "../components/Knowledge";
import Home from "../components/Home";
import Contactame from "../components/Contactame";
import Proyects from "../components/Proyects";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";





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
       <Header/>       
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
