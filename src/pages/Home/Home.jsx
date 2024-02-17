import React from 'react'
import Inicio from '../../components/Inicio/Inicio'
import About from '../../components/About/About'
import './style/Home.css'
import Skills from '../../components/Skills/Skills'
import Education from '../../components/Education/Education'
import Experience from '../../components/Experience/Experience'
import Projects from '../../components/Proyect/Projects'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <article className='Home'>
		<Inicio/>
    <About/>
    <Skills/>
    <Education/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
	</article>
  )
}

export default Home
