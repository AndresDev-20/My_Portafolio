import React, { useState } from 'react'
import './style/Education.css'
import Academlo from '../Diplomados/Academlo/Academlo'
import Sena from '../Diplomados/Sena/Sena'
import Ademas from '../Diplomados/Ademas/Ademas'

const Education = () => {
   const [Academlos, setAcademlos] = useState(true)
   const AcademloDiplomas = () => {
	setAcademlos(false)
   }

const [Senas, setSenas] = useState(true)
   const SenaDiplomas = () => {
	setSenas(false)
   }

   const [Ademass, setAdemass] = useState(true)
   const AdemasDiplomas = () => {
	setAdemass(false)
   }

  return (
	<section className='Education' id='Education'>
	  <h1 className='Education_title'><i className='bx bxs-graduation'></i>Mi <span className='edu_name'>Educación</span></h1>

	  <div className={ Academlos ?"Clear_Diploma":'Education_Diplomas'}>
	  <Academlo Academlos={Academlos} setAcademlos={setAcademlos}/> 			
		</div>
		<div className={ Senas ?"Clear_Diploma":'Education_Diplomas'}>
	  <Sena Academlos={Senas} setAcademlos={setSenas}/> 			
		</div>
		<div className={ Ademass ?"Clear_Diploma":'Education_Diplomas'}>
	  <Ademas Academlos={Ademass} setAcademlos={setAdemass}/> 			
		</div>


	  <div className='edu'  data-aos="fade-right">
       <div className='Education_study'>
          <figure className='Education_image'>
			<img src="../../../images/Image4.webp" alt="" />
		  </figure>
		  <div className='Education_info'>
			<h1>Bootcamp de desarrollador Full Stack</h1>
			<p>ACADEMLO | ACADEMIA DE CIENCIAS DE LA COMPUTACION E INFORMATICA</p>
			<span>2022-2023 | Terminado</span><br />
			<div>
			<button onClick={AcademloDiplomas}>Ver Certificados</button>
			</div>
		  </div>
	   </div>


	   <div className='Education_study'>
          <figure className='Education_image'>
			<img src="../../../images/Image5.png" alt="" />
		  </figure>
		  <div className='Education_info'>
			<h1>Tecnologo en analísis y desarrollo de software</h1>
			<p>SENA | SERVICIO NACIONAL DE APRENDIZAJE</p>
			<span>2022-2024 | Cursando</span><br />
			<div>
			<button onClick={SenaDiplomas}>Ver Certificados</button>
			</div>
		  </div>
	   </div>

	   <div className='Education_study'>
          <figure className='Education_image'>
			<img src="../../../images/Image6.jpg" alt="" />
		  </figure>
		  <div className='Education_info'>
			<h1>Elevación de conocimientos en el desarrollo de codigo</h1>
			<p>Ademass | Plataforma virtual de desarrollo</p>
			<span>2024 | Cursando</span><br />
			<div>
			<button onClick={AdemasDiplomas}>Ver Certificados</button>
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
