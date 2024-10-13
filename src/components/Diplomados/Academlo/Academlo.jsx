import React, { useState } from 'react'
import './style/Academlo.css'

const Academlo = ({Academlos, setAcademlos, t}) => {
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
		const CerrarImage1= () => {
			setFundamentos(true)
		}

		const [Front, setFront] = useState(true)
		const VerImage2 = () => {
			setFront(false)
		}
		const CerrarImage2= () => {
			setFront(true)
		}

		const [Back, setBack] = useState(true)
		const VerImage3 = () => {
			setBack(false)
		}
		const CerrarImage3= () => {
			setBack(true)
		}
  return (
	  		<div>
			<div className='Academlo_exit'>
			<i onClick={ClearAcademlo} className='bx bx-x'></i>
			</div>

			<div className='Diplomas-one'>
		<div className={ Academlos ?"Clear_Diploma":'Diploma'}>
			<div>
		<h1>{t("education.diploma")}</h1>
              <button onClick={VerImage}>{t("education.ver")}</button>
			</div>
		</div>				
			</div>

		
	   <br />
	   <hr />
	   <br />
	   <div className='Diplomas-two'>
	   <div className={ Academlos ?"Clear_Diploma":'Diploma1'}>
			<div>
		<h1> {t("education.levels.fundamento")} </h1>
              <button onClick={VerImage1}>{t("education.ver")}</button>
			</div>
		</div>
		<div className={ Academlos ?"Clear_Diploma":'Diploma2'}>
			<div>
		<h1>{t("education.levels.frontend")}</h1>
              <button onClick={VerImage2}>{t("education.ver")}</button>
			</div>
		</div>
		<div className={ Academlos ?"Clear_Diploma":'Diploma3'}>
			<div>
		<h1> {t("education.levels.backend")} </h1>
              <button onClick={VerImage3}>{t("education.ver")}</button>
			</div>
		</div>
	   		
	   </div>


		<div className={Image ?"Image_Clear" :'Diploma_Image'}>
			<div className='exit'>
			<i onClick={CerrarImage} className='bx bx-x'></i>
			</div>
				<img src="../../../../images/FULL-STAK.png" alt="" />
			</div>

			<div className={Fundamentos ?"Image_Clear" :'Diploma_Image'}>
			<div className='exit'>
			<i onClick={CerrarImage1} className='bx bx-x'></i>
			</div>
				<img src="../../../../images/fundamentos.png" alt="" />
			</div>

			<div className={Front ?"Image_Clear" :'Diploma_Image'}>
			<div className='exit'>
			<i onClick={CerrarImage2} className='bx bx-x'></i>
			</div>
				<img src="../../../../images/ReactNative.png" alt="" />
			</div>

			<div className={Back ?"Image_Clear" :'Diploma_Image'}>
			<div className='exit'>
			<i onClick={CerrarImage3} className='bx bx-x'></i>
			</div>
				<img src="../../../../images/Back-end.png" alt="" />
			</div>
	   </div>
  )
}

export default Academlo
