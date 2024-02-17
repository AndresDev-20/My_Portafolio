import React from 'react'
import './style/Menu.css'
import {Link } from 'react-router-dom';

const Menu = ({open}) => {


  return (
	<nav className={open ? "Clear" : "Menu"}>
	   <ul className={open ?' Clears' : "Menu1"}>
	   <Link to="/#Inicio" onClick={() => document.querySelector('#Inicio').scrollIntoView({ behavior: 'smooth' })}><li>Inicio</li></Link>
			<Link to="/#About" onClick={() => document.querySelector('#About').scrollIntoView({ behavior: 'smooth' })}><li>Acerca De</li></Link>
			<Link to="/#Skills" onClick={() => document.querySelector('#Skills').scrollIntoView({ behavior: 'smooth' })}><li>Habilidades</li></Link>
			<Link to="/#Education" onClick={() => document.querySelector('#Education').scrollIntoView({ behavior: 'smooth' })}><li>Educacion</li></Link>
			<Link to="/#Experience" onClick={() => document.querySelector('#Experience').scrollIntoView({ behavior: 'smooth' })}><li>Experiencia</li></Link>
			<Link to="/#Projects" onClick={() => document.querySelector('#Projects').scrollIntoView({ behavior: 'smooth' })}><li>Proyectos</li></Link>
			<Link to="/#Contact" onClick={() => document.querySelector('#Contact').scrollIntoView({ behavior: 'smooth' })}><li>Contactame</li></Link>
	   </ul>
	</nav>
  )
}

export default Menu
