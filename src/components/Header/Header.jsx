import React, { useState } from 'react'
import {Link } from 'react-router-dom';
import './style/Header.css'
import Menu from '../Menu/Menu'
import { useTranslation } from 'react-i18next';

const Header = () => {
	//este hook nos funciona para usar las traduciones en cualquier lado t es el texto traduciodp y el i18n es para genrar botornes para hacer cambios
    const [t, i18n] = useTranslation("global")
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
          <Link to="/#Inicio" onClick={() => document.querySelector('#Inicio').scrollIntoView({ behavior: 'smooth' })}><h1 className='Header_nav-h1'> {""} <img src="../../../images/Logo.png" alt="" /> <span>{"Yeison"}</span></h1> </Link> 
		</nav>
		<nav className="Header_nav1">
		<i onClick={MenuOpen} className={ open ?'bx bx-menu' : "Clear"}></i>
		<i onClick={MenuClose} className={open ?"Clear" :'bx bx-x'}></i>
		</nav>
		   <nav className="Header_nav2">
			<Link to="/#Inicio" onClick={() => document.querySelector('#Inicio').scrollIntoView({ behavior: 'smooth' })}><li>{t("Header.home")}</li></Link>
			<Link to="/#About" onClick={() => document.querySelector('#About').scrollIntoView({ behavior: 'smooth' })}><li>{t("Header.about")}</li></Link>
			<Link to="/#Skills" onClick={() => document.querySelector('#Skills').scrollIntoView({ behavior: 'smooth' })}><li> {t("Header.skills")} </li></Link>
			<Link to="/#Education" onClick={() => document.querySelector('#Education').scrollIntoView({ behavior: 'smooth' })}><li>{t("Header.education")}</li></Link>
			<Link to="/#Experience" onClick={() => document.querySelector('#Experience').scrollIntoView({ behavior: 'smooth' })}><li>{t("Header.experience")}</li></Link>
			<Link to="/#Projects" onClick={() => document.querySelector('#Projects').scrollIntoView({ behavior: 'smooth' })}><li>{t("Header.projects")}</li></Link>
			<Link to="/#Contact" onClick={() => document.querySelector('#Contact').scrollIntoView({ behavior: 'smooth' })}><li>{t("Header.contact")}</li></Link>
		   </nav>
	  </header>
	  <Menu 
	  open={open}
	  setopen={setopen}
	  t={t}
	  />
	</div>
  )
}

export default Header
