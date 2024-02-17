import React from 'react'
import './style/Experience.css'
import {Link } from 'react-router-dom';

const Experience = () => {


	return (
		<section className='Experience' id='Experience'>
			<br />
			<br />
			<br />
			<h1 className='Experience_title'> <span><i className='bx bxs-briefcase bxs-brie'></i></span> Experiencia <span className='laboral'>Laboral</span> </h1>
			<div className='Experience_works'>
				<span className='Experience_line'><i className='bx bxs-briefcase icon'></i></span>
				<div className='Experience_work' data-aos="fade-right">
					<h1>Desarrollador Full Stack</h1>
					<p>Lideré el desarrollo completo de un sistema de comercio electrónico para la empresa Klickylisto, construyendo tanto el backend como el frontend desde cero.</p>
					<span>2023-2024 | Teletrabajo</span><br />
					<div>
						<Link to="https://keen-fudge-5ae06d.netlify.app/">
					      <button>Ver Plataforma</button>						
						</Link>

					</div>
				</div>

			</div>
		</section>
	)
}

export default Experience
