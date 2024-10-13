import React, { useState } from 'react'
import './style/Education.css'
import Academlo from '../Diplomados/Academlo/Academlo'
import Sena from '../Diplomados/Sena/Sena'
import Ademas from '../Diplomados/Ademas/Ademas'

const Education = ({t}) => {
   const [Academlos, setAcademlos] = useState(true)
   const AcademloDiplomas = () => {
	setAcademlos(false)
   }

const [Senas, setSenas] = useState(true)
   const SenaDiplomas = () => {
	setSenas(false)
   }

   const [Ademass, setAdemass] = useState(true)
   const AdemasDiplomas = () => {
	setAdemass(false)
   }

  return (
	<section className='Education' id='Education'>
	  <h1 className='Education_title'><i className='bx bxs-graduation'></i>{t("education.title")} <span className='edu_name'>{t("education.text")}</span></h1>

	  <div className={ Academlos ?"Clear_Diploma":'Education_Diplomas'}>
	  <Academlo  Academlos={Academlos} setAcademlos={setAcademlos} t={t}/> 			
		</div>
		<div className={ Senas ?"Clear_Diploma":'Education_Diplomas'}>
	  <Sena   Academlos={Senas} setAcademlos={setSenas} t={t}/> 			
		</div>
		<div className={ Ademass ?"Clear_Diploma":'Education_Diplomas'}>
	  <Ademas  Academlos={Ademass} setAcademlos={setAdemass} t={t}/> 			
		</div>


	  <div className='edu'  data-aos="fade-right">
	  <div className='Education_study'>
          <figure className='Education_image'>
			<img src="../../../images/America-english.png" alt="" />
		  </figure>
		  <div className='Education_info'>
			<h1>{t("education.institutions.american school way.name")}</h1>
			<p> {t("education.institutions.american school way.institution")} </p>
			<span>{t("education.institutions.american school way.dates")}</span><br />
			<div>
			<button > {t("education.institutions.american school way.certificates")} </button>
			</div>
		  </div>
	   </div>

       <div className='Education_study'>
          <figure className='Education_image'>
			<img src="../../../images/Image4.webp" alt="" />
		  </figure>
		  <div className='Education_info'>
			<h1>{t("education.institutions.academlo.name")}</h1>
			<p> {t("education.institutions.academlo.institution")} </p>
			<span>{t("education.institutions.academlo.dates")}</span><br />
			<div>
			<button onClick={AcademloDiplomas}> {t("education.institutions.academlo.certificates")} </button>
			</div>
		  </div>
	   </div>


	   <div className='Education_study'>
          <figure className='Education_image'>
			<img src="../../../images/Image5.png" alt="" />
		  </figure>
		  <div className='Education_info'>
			<h1>{t("education.institutions.sena.name")}</h1>
			<p> {t("education.institutions.sena.institution")} </p>
			<span>{t("education.institutions.sena.dates")}</span><br />
			<div>
			<button onClick={SenaDiplomas}> {t("education.institutions.academlo.certificates")} </button>
			</div>
		  </div>
	   </div>

	   <div className='Education_study'>
          <figure className='Education_image'>
			<img src="../../../images/Image6.jpg" alt="" />
		  </figure>
		  <div className='Education_info'>
			<h1>{t("education.institutions.ademass.name")}</h1>
			<p> {t("education.institutions.ademass.institution")} </p>
			<span>{t("education.institutions.ademass.dates")}</span><br />
			<div>
			<button onClick={AdemasDiplomas}> {t("education.institutions.academlo.certificates")} </button>
			</div>
		  </div>
	   </div>
	   <div>
	  </div>
	   </div>
	</section>
  )
}

export default Education
