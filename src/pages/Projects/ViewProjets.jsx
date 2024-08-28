import React from 'react'
import './ViewProject.css'
import Projects from '../../components/Proyect/Projects'
import { useTranslation } from 'react-i18next'


const ViewProjets = () => {
	const {t, i18n} = useTranslation("global")

  return (
	<div className='ViewProject'>
	  <Projects t={t}/>
	</div>
  )
}

export default ViewProjets
