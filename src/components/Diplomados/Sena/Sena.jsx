import React, { useState } from 'react'
import './style/Sena.css'

const Sena = ({ Academlos, setAcademlos }) => {
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

	const [Four, setFour] = useState(true)
	const VerImage4 = () => {
		setFour(false)
	}
	const CerrarImage4 = () => {
		setFour(true)
	}
	return (
		<div>
			<div className='Academlo_exit'>
				<i onClick={ClearAcademlo} className='bx bx-x'></i>
			</div>

			<div className='Diplomas-one'>
				<div className={Academlos ? "Clear_Diploma" : 'DiplomaSena'}>
					<div>
						<h1>Diploma De La Carrera</h1>
						<p>Aun No Disponible</p>
					</div>
				</div>
			</div>


			<br />
			<hr />
			<br />
			<div className='Diplomas-two'>
				<div className={Academlos ? "Clear_Diploma" : 'DiplomaSena1'}>
					<div>
						<h1>English Level 1</h1>
						<button onClick={VerImage1}>Ver</button>
					</div>
				</div>
				<div className={Academlos ? "Clear_Diploma" : 'DiplomaSena2'}>
					<div>
						<h1>English Level 2</h1>
						<button onClick={VerImage2}>Ver</button>
					</div>
				</div>
				<div className={Academlos ? "Clear_Diploma" : 'DiplomaSena3'}>
					<div>
						<h1>English Level 3</h1>
						<button onClick={VerImage3}>Ver</button>
					</div>
				</div>
				<div className={Academlos ? "Clear_Diploma" : 'DiplomaSena4'}>
					<div>
						<h1>English Level 4</h1>
						<button onClick={VerImage4}>Ver</button>
					</div>
				</div>

			</div>


			<div className={Image ? "Image_Clear" : 'Diploma_ImageSena'}>
				<div className='exitSena'>
					<i onClick={CerrarImage} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/.png" alt="" />
			</div>

			<div className={Fundamentos ? "Image_Clear" : 'Diploma_ImageSena'}>
				<div className='exitSena'>
					<i onClick={CerrarImage1} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/Leven1.png" alt="" />
			</div>

			<div className={Front ? "Image_Clear" : 'Diploma_ImageSena'}>
				<div className='exitSena'>
					<i onClick={CerrarImage2} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/Leven2.png" alt="" />
			</div>

			<div className={Back ? "Image_Clear" : 'Diploma_ImageSena'}>
				<div className='exitSena'>
					<i onClick={CerrarImage3} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/Leven3.png" alt="" />
			</div>

			<div className={Four ? "Image_Clear" : 'Diploma_ImageSena'}>
				<div className='exitSena'>
					<i onClick={CerrarImage4} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/level 4.png" alt="" />
			</div>

			
		</div>
	)
}

export default Sena
