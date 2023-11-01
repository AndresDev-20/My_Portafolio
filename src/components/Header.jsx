import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [close, setclose] = useState(true)
    const handelclick = () => {
       setclose(false)
    }
  const handelclose = () => {
    setclose(true)
  }
  return (
    <header className="Portafolio_header">
    <nav className="Portafolio_programmer">
  <h1 className="Portafolio_title"><a href='#'>{'<Yeison/>'}</a> </h1> 
    </nav>
  
    <nav onClick={handelclick} className="Portafolio_click">
    <i className='bx bx-menu'></i>
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
  )
}

export default Header