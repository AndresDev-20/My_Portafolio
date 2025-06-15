import React from 'react'
import './style/Experience.css'

const Experience = ({t}) => {


	return (
		<section className='Experience' id='Experience'>
			<br />
			<br />
			<br />
			<h1 className='Experience_title'> <span><i className='bx bxs-briefcase bxs-brie'></i></span> {t("experience.title")} <span className='laboral'>{t("experience.text")}</span> </h1>
            <div className='Experience_contain'>
               <div className='Experience_works'>
				<div className='Experience_work' data-aos="fade-right">
					<h1><span><i className='bx bxs-briefcase icon'></i></span>{t("experience.full_stack.title")}</h1>
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
				<div className='Experience_work' data-aos="fade-right">
					<h1> <span><i className='bx bxs-briefcase icon'></i></span> {t("experience.full_stack-work.title")}</h1>
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
            </div>
			
		</section>
	)
}

export default Experience