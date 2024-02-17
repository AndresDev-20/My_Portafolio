import React from 'react';
import './style/About.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
	const navigate = useNavigate()
	const cv = () => {
		navigate("cv")
	}

  return (
	<section className='About' id='About' data-aos="fade-right">
		<br />
		<br />
		<br />
	<h1 className='About_title'> <span><i className='bx bxs-user'></i></span> Acerca De <span className='Mo'>Mi</span></h1>
	<div className='About_div'>
		<div className='About_div1'>
           <figure className='About_image'>
			<img src="../../../images/Image2.jpg" alt="" />
		   </figure>
		</div>
		<div className='About_div2'>
			<h1 className='About_name'>Soy Yeison</h1>
			<span className='About_Profetional'>desarrollador Fulll Stack</span>
			<p className='About_text one'>
			Soy un Desarrollador Full-Stack con 19 años de edad. Me gradué en Academlo, Academia de ciencias y tecnologia de Mexico y actualmente estoy a punto de completar mi tecnólogo en Análisis y Desarrollo de Software en el Servicio Nacional de Aprendizaje - SENA en colombia. Tengo una gran pasión por mejorar constantemente mis habilidades de codificación y desarrollar aplicaciones y sitios web.
			</p>
			<p className='About_text two'>
			Soy un Desarrollador Full-Stack de 19 años de edad, graduado de Academlo en México y actualmente cursando mi tecnólogo en Análisis y Desarrollo de Software en el SENA de Colombia. Me dedico al desarrollo de aplicaciones y sitios web.
			</p>
			<ul className='About_datos'>
				<li ><b className='About_email'>Correo: </b>andresmarroquin887@gmail.com</li>
				<li><b className='About_dire'>dirección: </b>Ibague-Tolima, Colombia</li>
			</ul>
			<button onClick={cv} className='About_cv'>Mi Curriculum</button>
		</div>
	</div>
	</section>
  )
}

export default About
