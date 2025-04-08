import React, { useState } from 'react'
import './style/Education.css'
import { useNavigate } from 'react-router-dom'

const Education = ({t}) => {
	const navigate = useNavigate();

	const GoDiplomas = (Instituto) => {
		navigate(`/education-diplomas/${Instituto}`, { state: { scrollTo: 'Diplos' } })
	}

  return (
	<section className='Education' id='Education'>
	  <h1 className='Education_title'><i className='bx bxs-graduation'></i>{t("education.title")} <span className='edu_name'>{t("education.text")}</span></h1>

	  


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
			<button onClick={() => GoDiplomas("ACADEMLO")} > {t("education.institutions.academlo.certificates")} </button>
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
			<button onClick={() => GoDiplomas("SENA")}> {t("education.institutions.academlo.certificates")} </button>
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
			<button onClick={() => GoDiplomas("ADEMAS")} > {t("education.institutions.academlo.certificates")} </button>
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
