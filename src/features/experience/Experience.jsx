import React, { useEffect, useRef } from 'react'
import './style/experience.css'

const Experience = ({t}) => {
	const lineRef = useRef(null);

	// La línea de tiempo se va llenando a medida que se hace scroll
	useEffect(() => {
		const update = () => {
			const el = lineRef.current;
			if (!el) return;
			const r = el.getBoundingClientRect();
			const progress = (window.innerHeight * 0.65 - r.top) / r.height;
			el.style.setProperty('--progress', Math.min(Math.max(progress, 0), 1).toFixed(3));
		};
		update();
		window.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update);
		return () => {
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
		};
	}, []);

	return (
		<section className='Experience' id='Experience'>
			<br />
			<br />
			<br />
			<h1 className='Experience_title Section_title Reveal'> <span><i className='bx bxs-briefcase bxs-brie'></i></span> {t("experience.title")} <span className='laboral'>{t("experience.text")}</span> </h1>
            <div className='Experience_contain' ref={lineRef}>
				<div className='Experience_works'>
				<div className='Experience_work' data-aos="fade-right" data-spotlight>
					<h1><span><i className='bx bxs-briefcase icon'></i></span>{t("experience.alphalux.title")}</h1>
					<p>{t("experience.alphalux.description")}</p>
					<ul className='Logros'>
						<h1>{t("experience.alphalux.name")}:</h1>
						<li>{t("experience.alphalux.logros.0")}</li>
						<li>{t("experience.alphalux.logros.1")}</li>
						<li>{t("experience.alphalux.logros.2")}</li>
						<li>{t("experience.alphalux.logros.3")}</li>
					</ul>
					<br />
					<span>{t("experience.alphalux.dates")}</span><br />
					<div>

					</div>
				</div>
			</div>
               <div className='Experience_works'>
				<div className='Experience_work' data-aos="fade-right" data-spotlight>
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
				<div className='Experience_work' data-aos="fade-right" data-spotlight>
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