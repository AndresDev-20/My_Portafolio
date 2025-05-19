import './style/About.css';

const About = ({t}) => {

  return (
	<section className='About' id='About' data-aos="fade-right">
		<br />
		<br />
		<br />		
		
		
	<h1 className='About_title'>  <span><i className='bx bxs-user'></i></span>  {t("about_me")} <span className='About_Me'>{t("me")}</span></h1>
	<div className='About_div'>
		<div className='About_div1'></div>
		<div className='About_div2'>
			<p className='About_text one'>
			{t("about_me_text1")}
			<br />
			<div className='space'></div>
			{t("about_me_text1.1")}
			</p>
			<p className='About_text two'>
			{t("about_me_text2")}
			<br />
			<br />
			{t("about_me_text2.1")}
			</p>
			<ul className='About_datos'>
				<div>
					<li ><b className='About_item'> {t("contact_info.nombre")} </b> Andres.dev</li>
				    <li><b className='About_item'> {t("contact_info.email")} </b>yeisonmarroquin887@gmail.com</li>
				</div>
				<div>
					<li ><b className='About_item'> {t("contact_info.experiencia")} </b>1+ año</li>
				    <li><b className='About_item'> {t("contact_info.ubicacion")} </b>Ibague-Tolima, Colombia</li>
				</div>
			</ul>
		</div>

	</div>
	</section>
  )
}

export default About
