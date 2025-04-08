import React, { useState } from 'react'
import './style/Sena.css'
import "../Diplomados.css"
import { useNavigate } from 'react-router-dom'

const Sena = ({ Academlos, setAcademlos, t }) => {
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

	const [Four, setFour] = useState(true)
	const VerImage4 = () => {
		setFour(false)
	}
	const CerrarImage4 = () => {
		setFour(true)
	}

	const [Five, setFive] = useState(true)
	const VerImage5 = () => {
		setFive(false)
	}
	const CerrarImage5 = () => {
		setFive(true)
	}

	const [six, setsix] = useState(true)
	const VerImage6 = () => {
		setsix(false)
	}
	const CerrarImage6 = () => {
		setsix(true)
	}
	return (
		<div className='Diplomados' id='Diplos'>
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
				<div className={Academlos ? "Clear_Diploma" : 'DiplomaSena'}>
					<div>
						<h1 className="Diplomados__title">{t("education.diploma")}a</h1>
						<br />
						<br />
						<br />
						<br />
						<br />
						<button className='Viw' onClick={VerImage}>{t("education.ver")}</button>
					</div>
				</div>
			</div>


			<br />
			<hr />
			<br />
			<div className="Diplomados__complementarios">
				<div className={Academlos ? "Clear_Diploma" : 'DiplomaSena1'}>
					<div>
						<h1 className='Diplomados__title'> {t("education.levels.english1")} </h1>
						<button onClick={VerImage1}>{t("education.ver")}</button>
					</div>
				</div>
				<div className={Academlos ? "Clear_Diploma" : 'DiplomaSena2'}>
					<div>
						<h1 className='Diplomados__title'> {t("education.levels.english2")} </h1>
						<button onClick={VerImage2}>{t("education.ver")}</button>
					</div>
				</div>
				<div className={Academlos ? "Clear_Diploma" : 'DiplomaSena3'}>
					<div>
						<h1 className='Diplomados__title'> {t("education.levels.english3")} </h1>
						<button onClick={VerImage3}>{t("education.ver")}</button>
					</div>
				</div>
				<div className={Academlos ? "Clear_Diploma" : 'DiplomaSena4'}>
					<div>
						<h1 className='Diplomados__title'>{t("education.levels.english4")}</h1>
						<button onClick={VerImage4}>{t("education.ver")}</button>
					</div>
				</div>

				<div className={Academlos ? "Clear_Diploma" : 'DiplomaSena5'}>
					<div>
						<h1 className='Diplomados__title'>{t("education.levels.english5")}</h1>
						<button onClick={VerImage5}>{t("education.ver")}</button>
					</div>
				</div>

				<div className={Academlos ? "Clear_Diploma" : 'DiplomaSena6'}>
					<div>
						<h1 className='Diplomados__title'>{t("education.levels.english6")}</h1>
						<button onClick={VerImage6}>{t("education.ver")}</button>
					</div>
				</div>

			</div>
			<br />

			

			<div className={Image ? "Image_Clear" : 'Diploma_ImageSenaT'}>
				<div className='Diplomado__exit'>
					<i onClick={CerrarImage} className='bx bx-x'></i>
				</div>
				<div>
					<img className='Tecnologo' src="../../../../images/Certificado-Tecnologo.jpg" alt="" />
				</div>
				
			</div>

			<div className={Fundamentos ? "Image_Clear" : 'Diploma_Image'}>
				<div className='Diplomado__exit'>
					<i onClick={CerrarImage1} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/Leven1.png" alt="" />
			</div>

			<div className={Front ? "Image_Clear" : 'Diploma_Image'}>
				<div className='Diplomado__exit'>
					<i onClick={CerrarImage2} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/Leven2.png" alt="" />
			</div>

			<div className={Back ? "Image_Clear" : 'Diploma_Image'}>
				<div className='Diplomado__exit'>
					<i onClick={CerrarImage3} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/Leven3.png" alt="" />
			</div>

			<div className={Four ? "Image_Clear" : 'Diploma_Image'}>
				<div className='Diplomado__exit'>
					<i onClick={CerrarImage4} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/Leven4.png" alt="" />
			</div>

			<div className={Five ? "Image_Clear" : 'Diploma_Image'}>
				<div className='Diplomado__exit'>
					<i onClick={CerrarImage5} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/Leven5.png" alt="" />
			</div>

			<div className={six ? "Image_Clear" : 'Diploma_Image'}>
				<div className='Diplomado__exit'>
					<i onClick={CerrarImage6} className='bx bx-x'></i>
				</div>
				<img src="../../../../images/Leven6.png" alt="" />
			</div>

			
		</div>
	)
}

export default Sena
