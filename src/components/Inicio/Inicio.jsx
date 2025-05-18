import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import "./style/Inicio.css";
import ImageRude from '../ImageRude/ImageRude';

const Inicio = ({t}) => {

  const [fraseIndex, setFraseIndex] = useState(0);
  const [letraIndex, setLetraIndex] = useState(0);
  const [mostrarFrase, setMostrarFrase] = useState(true);
  const frases = t('phrases', { returnObjects: true })
  useEffect(() => {
    const cambiarFrase = () => {
      setLetraIndex(0);

      setTimeout(() => {
        setMostrarFrase(false);

        setTimeout(() => {
          setFraseIndex((prevIndex) => (prevIndex + 1) % frases.length);
          setMostrarFrase(true);
        }, 1000); 
      }, 50); 
    };

    const intervalMostrar = setInterval(() => {
      if (mostrarFrase && letraIndex <= frases[fraseIndex].length) {
        setLetraIndex((prevLetra) => prevLetra + 1);
      }
    }, 100);
    const intervalBorrar = setInterval(() => {
      if (!mostrarFrase && letraIndex >= 0) {
        setLetraIndex((prevLetra) => prevLetra - 1);
      }
    }, 100); 
    const intervalId = setInterval(cambiarFrase, 3000);

    return () => {
      clearInterval(intervalMostrar);
      clearInterval(intervalBorrar);
      clearInterval(intervalId);
    };
  }, [fraseIndex, letraIndex, mostrarFrase, frases]);

  const handelWhass = (e) => {
    e.stopPropagation()
    const message = encodeURIComponent(`Hola Yeison, quisiera hablar contigo sobre un empleo de desarrollador.`);
    window.open(`https://wa.me/573227222010?text=${message}`, "_blank");
  }

  return (
    <section  className="Inicio" data-aos="fade-right" id='home'>
      <div className="Inicio_div1">
        <h1 className="Inicio_name"> <span className='Inicio__hello'>{t("welcome.hello")}</span>  <br /><span className='Inicio__firstname'> {t("welcome.text")} {t("welcome.surname")}</span></h1>
        <h2 className="Inicio_Profesion">
          <span id="frase" className="desaparecerYaparecer">
           👨‍💻 {frases[fraseIndex].substring(0, letraIndex)}...
          </span>
          <span className='Profesion_introduccion'>
            {t("welcome.intro")}
          </span>
        </h2>
     <Link to="/#About" onClick={() => document.querySelector('#About').scrollIntoView({ behavior: 'smooth' })}>
     <button className='Inicio_sobremi'> {t("about_me")} {t("me")}  <i className='bx bx-chevron-down'></i></button>
     </Link>
     
        <div className="Inicio_redes">
          <Link to="https://www.linkedin.com/in/yeison-andres-marroqu%C3%ADn-bernal-008138266/" className='lik'><li><i className='bx bxl-linkedin-square'></i></li></Link>
          <Link to="https://github.com/AndresDev-20" className='lik'> <li ><i className='bx bxl-github' ></i></li></Link>
          <Link onClick={handelWhass} className='lik'><li><i className='bx bxl-whatsapp-square'></i></li></Link>
          <Link to="https://www.instagram.com/marroquinbernalyeisonandres?igsh=MTY0eGRudTlpbW16Zg==" className='lik'><li><i className='bx bxl-instagram' ></i></li></Link>
          <Link to="/#Contact" onClick={() => document.querySelector('#Contact').scrollIntoView({ behavior: 'smooth' })} className='lik'><li><i className='bx bx-envelope' ></i></li></Link>
        </div>
      </div>

     <div className='Inicio_Image-Luje1 suno'>
        <ImageRude/>
      </div>

      <div className="Inicio_div2">
        <figure>
          <img src="../../../images/My_photo.jpg" alt="" />
        </figure>
      </div>
    </section>
  );
};

export default Inicio;
