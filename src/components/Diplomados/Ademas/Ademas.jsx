import React, { useState } from 'react'
import './style/Ademas.css'
import { useNavigate } from 'react-router-dom';

const Ademas = ({ Academlos, setAcademlos, t }) => {
	const navigate = useNavigate()
	const VolverHome = () => {
		navigate('/', { state: { scrollTo: 'Education' } });
	  };

	const [Image, setImage] = useState(true)
	const VerImage = () => {
		setImage(false)
	}
	const CerrarImage = () => {
		setImage(true)
	}

	const [Fundamentos, setFundamentos] = useState(true)
	const VerImage1 = () => {
		setFundamentos(false)
	}
	const CerrarImage1 = () => {
		setFundamentos(true)
	}

	const [Front, setFront] = useState(true)
	const VerImage2 = () => {
		setFront(false)
	}
	const CerrarImage2 = () => {
		setFront(true)
	}

	const [Back, setBack] = useState(true)
	const VerImage3 = () => {
		setBack(false)
	}
	const CerrarImage3 = () => {
		setBack(true)
	}

	const [Ts, setTs] = useState(true)
	const VerImage4 = () => {
		setTs(false)
	}
	const CerrarImage4 = () => {
		setTs(true)
	}
	return (
		<div  className="Diplomados">
			<div className="Diplomados_exit">	
        <h1 onClick={VolverHome}>Volver</h1>
      </div>
	  <br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />

			<div className='Diplomados__carrer-diploma'>
				<div className={Academlos ? "Clear_Diploma" : 'DiplomasAdemass'}>
					<div>
						<h1>{t("education.diploma")}</h1>
						<p>{t("education.not_available")}</p>
					</div>
				</div>
			</div>


			<br />
			<hr />
			<br />
			<div className='Diplomados__complementarios'>
				<div className={Academlos ? "Clear_Diploma" : 'DiplomaAdemas1'}>
					<div>
						<h1>Html5</h1>
						<button onClick={VerImage1}>{t("education.ver")}</button>
					</div>
				</div>
				<div className={Academlos ? "Clear_Diploma" : 'DiplomaAdemas2'}>
					<div>
						<h1>Css3</h1>
						<button onClick={VerImage2}>{t("education.ver")}</button>
					</div>
				</div>
				<div className={Academlos ? "Clear_Diploma" : 'DiplomaAdemas3'}>
					<div>
						<h1>JavaScript</h1>
						<button onClick={VerImage3}>{t("education.ver")}</button>
					</div>
				</div>
				<div className={Academlos ? "Clear_Diploma" : 'DiplomaAdemas4'}>
					<div>
						<h1>TypeScript</h1>
						<button onClick={VerImage4}>{t("education.ver")}</button>
					</div>
				</div>


			</div>


			<div className={Image ? "Image_Clear" : 'Diploma_Image'}>
				<div className='Diplomado__exit'>
					<i onClick={CerrarImage} className='bx bx-x'></i>
				</div>
				<img src="../../../../" alt="" />
			</div>

			<div className={Fundamentos ? "Image_Clear" : 'Diploma_Image'}>
				<div className='Diplomado__exit'>
					<i onClick={CerrarImage1} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/Ademass-Html.png" alt="" />
			</div>

			<div className={Front ? "Image_Clear" : 'Diploma_Image'}>
				<div className='Diplomado__exit'>
					<i onClick={CerrarImage2} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/Ademass-Css3.png" alt="" />
			</div>

			<div className={Back ? "Image_Clear" : 'Diploma_Image'}>
				<div className='Diplomado__exit'>
					<i onClick={CerrarImage3} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/Ademass-JavaScript.png" alt="" />
			</div>
			<div className={Ts ? "Image_Clear" : 'Diploma_Image'}>
				<div className='Diplomado__exit'>
					<i onClick={CerrarImage4} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/TypeScript-Ademas.jpg" alt="" />
			</div>
		</div>
	)
}

export default Ademas
