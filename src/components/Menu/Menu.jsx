import React from 'react'
import './style/Menu.css'
import {Link } from 'react-router-dom';

const Menu = ({open, t}) => {


  return (
	<nav className={open ? "Clear" : "Menu"}>
	   <ul className={open ?' Clears' : "Menu1"}>
	   <Link to="/#Inicio" onClick={() => document.querySelector('#Inicio').scrollIntoView({ behavior: 'smooth' })}><li>{t("Header.home")}</li></Link>
			<Link to="/#About" onClick={() => document.querySelector('#About').scrollIntoView({ behavior: 'smooth' })}><li>{t("Header.about")}</li></Link>
			<Link to="/#Skills" onClick={() => document.querySelector('#Skills').scrollIntoView({ behavior: 'smooth' })}><li> {t("Header.skills")} </li></Link>
			<Link to="/#Education" onClick={() => document.querySelector('#Education').scrollIntoView({ behavior: 'smooth' })}><li>{t("Header.education")}</li></Link>
			<Link to="/#Experience" onClick={() => document.querySelector('#Experience').scrollIntoView({ behavior: 'smooth' })}><li>{t("Header.experience")}</li></Link>
			<Link to="/#Projects" onClick={() => document.querySelector('#Projects').scrollIntoView({ behavior: 'smooth' })}><li>{t("Header.projects")}</li></Link>
			<Link to="/#Contact" onClick={() => document.querySelector('#Contact').scrollIntoView({ behavior: 'smooth' })}><li>{t("Header.contact")}</li></Link>
	   </ul>
	</nav>
  )
}

export default Menu
