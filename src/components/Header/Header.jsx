import React, { useState } from 'react'
import {Link } from 'react-router-dom';
import './style/Header.css'
import Menu from '../Menu/Menu'

const Header = () => {
	const [open, setopen] = useState(true)
	const MenuOpen = () => {
		setopen(false)
	}
	const MenuClose = () => {
		setopen(true)
	}
  return (
	<div>
	  <header className="Header">
		<nav className="Header_nav">
          <Link to="/#Inicio" onClick={() => document.querySelector('#Inicio').scrollIntoView({ behavior: 'smooth' })}><h1>{"<Yeison/>"}</h1></Link> 
		</nav>
		<nav className="Header_nav1">
		<i onClick={MenuOpen} className={ open ?'bx bx-menu' : "Clear"}></i>
		<i onClick={MenuClose} className={open ?"Clear" :'bx bx-x'}></i>
		</nav>
		   <nav className="Header_nav2">
			<Link to="/#Inicio" onClick={() => document.querySelector('#Inicio').scrollIntoView({ behavior: 'smooth' })}><li>Inicio</li></Link>
			<Link to="/#About" onClick={() => document.querySelector('#About').scrollIntoView({ behavior: 'smooth' })}><li>Acerca De</li></Link>
			<Link to="/#Skills" onClick={() => document.querySelector('#Skills').scrollIntoView({ behavior: 'smooth' })}><li>Habilidades</li></Link>
			<Link to="/#Education" onClick={() => document.querySelector('#Education').scrollIntoView({ behavior: 'smooth' })}><li>Educacion</li></Link>
			<Link to="/#Experience" onClick={() => document.querySelector('#Experience').scrollIntoView({ behavior: 'smooth' })}><li>Experiencia</li></Link>
			<Link to="/#Projects" onClick={() => document.querySelector('#Projects').scrollIntoView({ behavior: 'smooth' })}><li>Proyectos</li></Link>
			<Link to="/#Contact" onClick={() => document.querySelector('#Contact').scrollIntoView({ behavior: 'smooth' })}><li>Contactame</li></Link>
		   </nav>
	  </header>
	  <Menu 
	  open={open}
	  />
	</div>
  )
}

export default Header
