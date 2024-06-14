import React, { useState } from 'react'
import './style/Ademas.css'

const Ademas = ({ Academlos, setAcademlos, t }) => {
	const ClearAcademlo = () => {
		setAcademlos(true)
	}

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
	return (
		<div>
			<div className='Academlo_exit'>
				<i onClick={ClearAcademlo} className='bx bx-x'></i>
			</div>

			<div className='Diplomas-one'>
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
			<div className='Diplomas-two'>
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

			</div>


			<div className={Image ? "Image_Clear" : 'Diploma_ImageAdemass'}>
				<div className='exitSena'>
					<i onClick={CerrarImage} className='bx bx-x'></i>
				</div>
				<img src="../../../../" alt="" />
			</div>

			<div className={Fundamentos ? "Image_Clear" : 'Diploma_ImageAdemass'}>
				<div className='exitSena'>
					<i onClick={CerrarImage1} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/Ademass-Html.png" alt="" />
			</div>

			<div className={Front ? "Image_Clear" : 'Diploma_ImageAdemass'}>
				<div className='exitSena'>
					<i onClick={CerrarImage2} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/Ademass-Css3.png" alt="" />
			</div>

			<div className={Back ? "Image_Clear" : 'Diploma_ImageAdemass'}>
				<div className='exitSena'>
					<i onClick={CerrarImage3} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/Ademass-JavaScript.png" alt="" />
			</div>
		</div>
	)
}

export default Ademas
