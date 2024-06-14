import React, { useState } from 'react'
import Inicio from '../../components/Inicio/Inicio'
import About from '../../components/About/About'
import './style/Home.css'
import Skills from '../../components/Skills/Skills'
import Education from '../../components/Education/Education'
import Experience from '../../components/Experience/Experience'
import Projects from '../../components/Proyect/Projects'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const {t, i18n} = useTranslation("global")

  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };
  return (
    <article className='Home'>
    <div tabIndex={0} className='Translate' onClick={toggleLanguage}>
    <button>Es</button>
      <div className={`rueda ${isEnglish ? 'english' : 'spanish'}`}></div>
      <button>En</button>
    </div>
		<Inicio t={t}/>
    <About t={t}/>
    <Skills t={t}/>
    <Education t={t}/>
    <Experience t={t}/>
    <Projects t={t}/>
    <Contact t={t}/>
    <Footer t={t}/>
	</article>
  )
}

export default Home
