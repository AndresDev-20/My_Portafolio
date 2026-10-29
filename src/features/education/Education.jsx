import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Images } from '../../assets/images'
import './style/education.css'

// route: parámetro de /education-diplomas/:instituto (null = sin certificados todavía)
const STUDIES = [
	{ key: 'american school way', image: Images.American, route: null },
	{ key: 'ademass', image: Images.Ademas, route: 'ADEMAS' },
	{ key: 'sena', image: Images.Sena, route: 'SENA' },
	{ key: 'academlo', image: Images.Academlo, route: 'ACADEMLO' },
];

const Education = ({t}) => {
	const navigate = useNavigate();

	const GoDiplomas = (Instituto) => {
		navigate(`/education-diplomas/${Instituto}`, { state: { scrollTo: 'Diplos' } })
	}

  return (
	<section className='Education' id='Education'>
	  <h1 className='Education_title Section_title Reveal'><span><i className='bx bxs-graduation'></i></span>{t("education.title")} <span className='edu_name'>{t("education.text")}</span></h1>
	  <div className='edu'>
		{STUDIES.map((study, index) => {
			const base = `education.institutions.${study.key}`;
			const dates = t(`${base}.dates`);
			const [period, status] = dates.split('|').map((part) => part.trim());

			return (
				<div className='Education_study' key={study.key} data-aos="fade-up" data-aos-delay={index * 80} data-spotlight>
					<figure className='Education_image'>
						<img src={study.image} alt={t(`${base}.institution`)} loading='lazy' />
					</figure>
					<div className='Education_info'>
						<h1>{t(`${base}.name`)}</h1>
						<p> {t(`${base}.institution`)} </p>
						<span className='Education_dates'>
							<i className='bx bx-calendar'></i> {period}
							{status && <em className='Education_status'>{status}</em>}
						</span><br />
						<div>
						{study.route ? (
							<button onClick={() => GoDiplomas(study.route)} data-ripple>
								{t("education.institutions.academlo.certificates")} <i className='bx bx-right-arrow-alt'></i>
							</button>
						) : (
							<button disabled className='Education_btn--disabled'>
								<i className='bx bx-lock-alt'></i> {t(`${base}.certificates`)}
							</button>
						)}
						</div>
					</div>
				</div>
			);
		})}
	   </div>
	</section>
  )
}

export default Education
