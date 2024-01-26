import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [close, setclose] = useState(true)
    const [lun, setlun] = useState(false)
    const [lun1, setlun1] = useState(false)
    const handelclick = () => {
       setclose(false)
    }
  const handelclose = () => {
    setclose(true)
  }

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Manejar el cambio del modo oscuro
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    if(isDarkMode){
      setlun(true)
     }else{
      setlun(false)
     }
     if(isDarkMode){
      setlun1(true)
     }else{
      setlun1(false)
     }
  };


  return (
    <>
       <header className="Portafolio_header">
    <nav className="Portafolio_programmer">
        <h1 className="Portafolio_title"><a href='#'>{'<Yeison/>'}</a> </h1>  
    </nav>
    {
        lun
        ?<i i onClick={toggleDarkMode} class='C bx bx-sun'></i>
        :<i onClick={toggleDarkMode} className='D bx bx-moon'></i>
      } 
    <nav onClick={handelclick} className="Portafolio_click">
      
    <i className='bx bx-menu'></i>
    </nav>
   
    <section className={`container ${close && 'close'}`}>
      <section className= 'Portafolio_menu'>
      
        <i i onClick={toggleDarkMode} class='A bx bx-sun'></i>
        
      <a href="#"><span onClick={handelclose}  className="Portafolio_select">inicio</span></a> 
       <Link to="/#About"onClick={() => document.querySelector('#About').scrollIntoView({ behavior: 'smooth' })}><span onClick={handelclose}  className="Portafolio_select">Acerca de mi</span></Link> 
       <Link to="/#Knowledge"onClick={() => document.querySelector('#Knowledge').scrollIntoView({ behavior: 'smooth' })}> <span onClick={handelclose} className="Portafolio_select">Conocimientos</span></Link>
       <Link to="/#Proyects"onClick={() => document.querySelector('#Proyects').scrollIntoView({ behavior: 'smooth' })}> <span onClick={handelclose} className="Portafolio_select">Proyectos</span></Link>
       <Link to="/#Proyects"onClick={() => document.querySelector('#certificados').scrollIntoView({ behavior: 'smooth' })}> <span onClick={handelclose} className="Portafolio_select">Diplomados</span></Link>
       <Link to="/#contact"onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}> <span onClick={handelclose} className="Portafolio_select">Contactame</span></Link>
        <span onClick={handelclose} className="Portafolio_select return">Volver al inicio</span>
    

      </section>
    </section>
    <nav className="barr1">
        <a href="https://www.linkedin.com/in/yeison-andres-marroqu%C3%ADn-bernal-008138266/">
          {" "}
          <button className="Home__button0">
            LinkedIn<i className="bx bxl-linkedin-square"></i>{" "}
          </button>
        </a>

        <Link
          to="/#contact"
          onClick={() =>
            document
              .querySelector("#contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          {" "}
          <span>
            <button className="Home__button1">
              Email<i class="bx bx-envelope"></i>
            </button>
          </span>
        </Link>

        <a href="https://wa.me/573227222010?Hola%20quiero%20hablar%20de%20un%20empleo%20contigo">
          {" "}
          <button className="Home__button2">
            whatsapp<i class="bx bxl-whatsapp"></i>{" "}
          </button>
        </a>
        <a href="https://github.com/yeisonmarroquin887?tab=repositories">
          <button className="Home__button3">
            GitHub<i class="bx bxl-github"></i>{" "}
          </button>
        </a>
      </nav>
  </header>

    </>
 
  )
}

export default Header