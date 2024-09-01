import React from 'react';
import './style/About.css';
import { useNavigate } from 'react-router-dom';
import ImageRude from '../ImageRude/ImageRude';
import Image2Rude from '../ImageRude/image2Rude';

const About = ({t}) => {
	const navigate = useNavigate()
	const cv = () => {
		navigate("cv")
	}

  return (
	<section className='About' id='About' data-aos="fade-right">
		<br />
		<br />
		<br />		
		<div className='About_Image-Luje'>
			<ImageRude/>
		</div>
		<div className='About_Image2-Luje'>
			<Image2Rude/>
		</div>
	<h1 className='About_title'> <span><i className='bx bxs-user'></i></span> {t("about_me")} <span className='Mo'>{t("me")}</span></h1>
	<div className='About_div'>
		<div className='About_div1'>
           <figure className='About_image'>
			<img src="../../../images/Image2.jpg" alt="" />
		   </figure>
		</div>
		<div className='About_div2'>
			<h1 className='About_name'> {t("I")} </h1>
			<span className='About_Profetional'>{t("profession")}</span>
			<p className='About_text one'>
			{t("about_me_text1")}
			</p>
			<p className='About_text two'>
			{t("about_me_text2")}
			</p>
			<ul className='About_datos'>
				<li ><b className='About_email'> {t("contact_info.email")} </b>andresmarroquin887@gmail.com</li>
				<li><b className='About_dire'> {t("contact_info.address")} </b>Ibague-Tolima, Colombia</li>
			</ul>
			<button onClick={cv} className='About_cv'>{t("contact_info.cv")}</button>
		</div>

	</div>
	</section>
  )
}

export default About
