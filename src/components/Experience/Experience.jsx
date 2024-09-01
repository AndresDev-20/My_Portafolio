import React from 'react'
import './style/Experience.css'
import {Link } from 'react-router-dom';
import ImageRude from '../ImageRude/ImageRude';

const Experience = ({t}) => {


	return (
		<section className='Experience' id='Experience'>
			<br />
			<br />
			<br />
			<div className='Eperieence_Image2-Luje'> 
			<ImageRude/>	
			</div>
			
			<h1 className='Experience_title'> <span><i className='bx bxs-briefcase bxs-brie'></i></span> {t("experience.title")} <span className='laboral'>{t("experience.text")}</span> </h1>
			<div className='Experience_works'>
				<span className='Experience_line'><i className='bx bxs-briefcase icon'></i></span>
				<div className='Experience_work' data-aos="fade-right">
					<h1>{t("experience.full_stack.title")}</h1>
					<p>{t("experience.full_stack.description")}</p>
					<ul className='Logros'>
						<h1>{t("experience.full_stack.name")}:</h1>
						<li>{t("experience.full_stack.logros.0")}</li>
						<li>{t("experience.full_stack.logros.1")}</li>
						<li>{t("experience.full_stack.logros.2")}</li>
						<li>{t("experience.full_stack.logros.3")}</li>
					</ul>
					<br />
					<span>{t("experience.full_stack.dates")}</span><br />
					<div>

					</div>
				</div>
			</div>
			<div className='Experience_works-2'>
				<span className='Experience_line-2'><i className='bx bxs-briefcase icon'></i></span>
				<div className='Experience_work' data-aos="fade-right">
					<h1>{t("experience.full_stack-work.title")}</h1>
					<p>{t("experience.full_stack-work.description")}</p>
					<ul className='Logros'>
						<h1>{t("experience.full_stack-work.name")}:</h1>
						<li>{t("experience.full_stack-work.logros.0")}</li>
						<li>{t("experience.full_stack-work.logros.1")}</li>
						<li>{t("experience.full_stack-work.logros.2")}</li>
						<li>{t("experience.full_stack-work.logros.3")}</li>
					</ul>
					<br />
					<span>{t("experience.full_stack-work.dates")}</span><br />
					<div>
						

					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
