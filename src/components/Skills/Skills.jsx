import React from 'react'
import './style/Skills.css'

const Skills = ({t}) => {
	return (
		<section className='Skills' id='Skills'>
			<br />
			<br />
			<br />
			<br />
			<h1 className='Skills_title'><i className='bx bx-laptop laptop'></i> {t("skills.title")} <span className='Habiliti'>{t("skills.text")}</span> </h1>
			<div className='Skills_container' data-aos="fade-right">


				<div>
					<i className='bx bxl-html5' ></i>
					<h1>Html5</h1>
				</div>

				<div>
					<i className='bx bxl-css3' ></i>
					<h1>Css3</h1>
				</div>

				<div>
					<i className='bx bxl-bootstrap'></i>
					<h1>Bootstrap</h1>
				</div>

				<div>
					<i className='bx bxl-javascript'></i>
					<h1>JavaScript</h1>
				</div>

				<div>
					<i className='bx bxl-typescript' ></i>
					<h1>TypeScript</h1>
				</div>

				<div>
				    <img src="../../../images/java.png" alt="" />
					<h1>Java</h1>
				</div>

				<div>
					<img src="../../../images/Imagen3.png" alt="" />
					<h1>Python</h1>
				</div>

				<div>
					<i className='bx bxl-react' ></i>
					<h1>React</h1>
				</div>

				<div>
					<i className='bx bxl-redux' ></i>
					<h1>Redux</h1>
				</div>

				<div>
					<i className='bx bxl-angular' ></i>
					<h1>Angular</h1>
				</div>

				<div>
					<i className='bx bxl-vuejs' ></i>
					<h1>Vue.js</h1>
				</div>

				<div>
					<i className='bx bxl-nodejs' ></i>
					<h1>Node.js</h1>
				</div>

				<div>
					<i className='bx bxl-postgresql' ></i>
					<h1>PostgreSQL</h1>
				</div>

				<div>
				    <img src="../../../images/mysql.png" alt="" />
					<h1>MySQL</h1>
				</div>

				<div>
				<i className='bx bxl-mongodb'></i>
					<h1>MongoDB</h1>
				</div>

				<div>
					<i className='bx bxl-github bxl-git'></i>
					<h1>GitHub</h1>
				</div>

			</div>
		</section>
	)
}

export default Skills
