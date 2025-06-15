import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Images } from '../../assets/images'
import './style/education.css'

const Education = ({t}) => {
	const navigate = useNavigate();
	const location = useLocation();

	const GoDiplomas = (Instituto) => {
		navigate(`/education-diplomas/${Instituto}`, { state: { scrollTo: 'Diplos' } })
	}

	useEffect(() => {
		if (location.state?.scrollTo === 'Education') {
			const section = document.getElementById('Education');
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' });
			}

			navigate(location.pathname, { replace: true });
		}
	}, [location]);
	
	  
	

  return (
	<section className='Education' id='Education'>
	  <h1 className='Education_title'><span><i className='bx bxs-graduation'></i></span>{t("education.title")} <span className='edu_name'>{t("education.text")}</span></h1>
	  <div className='edu'  data-aos="fade-right">
	  <div className='Education_study'>
          <figure className='Education_image'>
			<img src={Images.American} alt="" />
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
			<img src={Images.Sena} alt="" />
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
			<img src={Images.Academlo} alt="" />
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
			<img src={Images.Ademas} alt="" />
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