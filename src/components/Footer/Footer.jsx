import React from 'react'
import './style/Footer.css'
import {Link } from 'react-router-dom';

const Footer = () => {
	const handelWhass = (e) => {
		e.stopPropagation()
		const message = encodeURIComponent(`Hola Yeison, quisiera hablar contigo sobre un empleo de desarrollador.`);
		window.open(`https://wa.me/573227222010?text=${message}`, "_blank");
	  }
	return (
		<footer className='Footer'>
			<div className='Footer_one'>
				<div className='Footer_div1'>
					<h1>Yeison | Portafolio</h1>
					<p>Gracias por visitar mi sitio web, espero te haya gustado y contactes conmigo</p>
					<br />
					<p>"Never stop fighting for your dreams because every day that passes you are closer"</p>
				</div>
				<div className='Footer_div2'>
					<h1>Enlaces Rapidos</h1>
					<ul>
					<Link to="/#Inicio" onClick={() => document.querySelector('#Inicio').scrollIntoView({ behavior: 'smooth' })}><li> <i className='bx bx-chevron-right'></i> Inicio</li></Link>
			<Link to="/#About" onClick={() => document.querySelector('#About').scrollIntoView({ behavior: 'smooth' })}>	<li> <i className='bx bx-chevron-right'></i> Acerca De</li></Link>
			<Link to="/#Skills" onClick={() => document.querySelector('#Skills').scrollIntoView({ behavior: 'smooth' })}><li> <i className='bx bx-chevron-right'></i> Habilidades</li></Link>
			<Link to="/#Education" onClick={() => document.querySelector('#Education').scrollIntoView({ behavior: 'smooth' })}>	<li> <i className='bx bx-chevron-right'></i> Educación</li></Link>
			<Link to="/#Experience" onClick={() => document.querySelector('#Experience').scrollIntoView({ behavior: 'smooth' })}><li> <i className='bx bx-chevron-right'></i> Experiencia</li></Link>
			<Link to="/#Projects" onClick={() => document.querySelector('#Projects').scrollIntoView({ behavior: 'smooth' })}><li> <i className='bx bx-chevron-right'></i> Proyectos</li></Link>
			<Link to="/#Contact" onClick={() => document.querySelector('#Contact').scrollIntoView({ behavior: 'smooth' })}><li> <i className='bx bx-chevron-right'></i> Contactame</li></Link>
					</ul>
				</div>
				<div className='Footer_div3'>
					<h1>Mis Datos</h1>
					<ul className='Footer_div3_ul'>
						<li><span><i className='bx bxs-phone'></i></span> +57 3227222010</li>
						<li><span><i className='bx bxs-envelope'></i></span> andresmarroquin887@gmail.com</li>
						<li><span><i className='bx bxs-map'></i></span> Rovira-Tolima, Colombia</li>
					</ul>
					<ul className='Footer_div3_ul1'>
					<Link to="https://www.linkedin.com/in/yeison-andres-marroqu%C3%ADn-bernal-008138266/" className='lik'><li><i className='bx bxl-linkedin-square'></i></li></Link>
          <Link to="https://github.com/yeisonmarroquin887?tab=repositories" className='lik'> <li ><i className='bx bxl-github' ></i></li></Link>
          <Link onClick={handelWhass} className='lik'><li><i className='bx bxl-whatsapp-square'></i></li></Link>
          <Link to="https://www.instagram.com/marroquinbernalyeisonandres?igsh=MTY0eGRudTlpbW16Zg==" className='lik'><li><i className='bx bxl-instagram' ></i></li></Link>
          <Link to="/#Contact" onClick={() => document.querySelector('#Contact').scrollIntoView({ behavior: 'smooth' })} className='lik'><li><i className='bx bx-envelope' ></i></li></Link>
          <Link to="https://www.facebook.com/profile.php?id=61551874028183&mibextid=ZbWKwL" className='lik'><li><i className='bx bxl-facebook-square' ></i></li></Link>
					</ul>
				</div>
			</div>
			<hr />
			<div className='Footer_two'>
				<h1>Copyright © 2024 <span className='Footer_fin'>Yeison Marroquin.</span>❤️</h1>
			</div>
		</footer>
	)
}

export default Footer
