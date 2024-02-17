import React from 'react'
import './style/Projects.css'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
	<section className='Projects' id='Projects'>
		<br />
		<br />
		<br />
		<br />
	  <h1 className='Projects_title'><span><i className='bx bxs-folder folder'></i></span> Mis <span className='pro'>Proyectos</span></h1>
	  <div className='Projects_todos'>
		<div className='Projects_Project' data-aos="fade-right">
		<h1>Klickylisto e-comerce </h1>
			<figure>
				<img src="../../../images/Klickylisto.png" alt="" />
			</figure>
			<div>
				<span><Link to="https://keen-fudge-5ae06d.netlify.app/">App</Link></span>
				<span><Link to="https://github.com/yeisonmarroquin887/My_e-Comerce.git">Code</Link></span>
				<span><Link to="https://github.com/yeisonmarroquin887/My_e-Comerce-Api.git">Back-end</Link></span>
			</div>
		</div>

		<div className='Projects_Project' data-aos="fade-right">
		<h1>E-comerce CLA</h1>
			<figure>
				<img src="../../../images/Image7.png" alt="" />
			</figure>
			<div>
				<span> <Link to="https://zippy-pavlova-3da0ad.netlify.app/">App</Link> </span>
				<span> <Link to="https://github.com/yeisonmarroquin887/Computers-Store.git">Code</Link> </span>
			</div>
		</div>

		<div className='Projects_Project' data-aos="fade-right">
		<h1>Cookies App</h1>
			<figure>
				<img src="../../../images/Cokies.png" alt="" />
			</figure>
			<div>
			<span> <Link to="https://storied-stroopwafel-f2f6e0.netlify.app/">App</Link> </span>
				<span> <Link to="https://github.com/yeisonmarroquin887/proyecto.git">Code</Link> </span>
			</div>
		</div>

		<div className='Projects_Project' data-aos="fade-right">
		<h1>Riky and mortid</h1>
			<figure>
				<img src="../../../images/Riky.png" alt="" />
			</figure>
			<div>
			<span> <Link to="https://calm-kulfi-7e2e7e.netlify.app/">App</Link> </span>
				<span> <Link to="https://github.com/yeisonmarroquin887/tercerEntregable.git">Code</Link> </span>
			</div>
		</div>

		<div className='Projects_Project' data-aos="fade-right">
		<h1>Pokedex</h1>
			<figure>
				<img src="../../../images/Pokedex.png" alt="" />
			</figure>
			<div>
			<span> <Link to="https://capable-zabaione-ea68ab.netlify.app/">App</Link> </span>
				<span> <Link to="https://github.com/yeisonmarroquin887/Entregablecinco.git">Code</Link> </span>
			</div>
		</div>

		<div className='Projects_Project' data-aos="fade-right">
		<h1>Weather App</h1>
			<figure>
				<img src="../../../images/Weather App.png" alt="" />
			</figure>
			<div>
			<span> <Link to="https://zingy-gecko-5df221.netlify.app/">App</Link> </span>
				<span> <Link to="https://github.com/yeisonmarroquin887/segundo-entregable.git">Code</Link> </span>
			</div>
		</div>
	  </div>
	</section>
  )
}

export default Projects
