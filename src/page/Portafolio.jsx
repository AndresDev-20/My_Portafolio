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
import Skills from "../components/Skills";
import './page.style/portafolio.css'





const Portafolio = () => {


  return (
    <div id="home" >
       <Header/>       
                  <div className="Portafolio">
                  <Home/>
       <About/>
       <Knowledge/>
       <Proyects/>
       <Contactame/>
                  </div>
       <Footer/>
    </div>
  );
};

export default Portafolio;
