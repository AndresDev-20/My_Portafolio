import React from 'react'
import "./styleProjects.css"
import { useNavigate } from "react-router-dom";
const Projects = ({ Projects }) => {
	const navigate = useNavigate()
	const Fun = ()=>{
      navigate(`/proyects/${Projects.id}`)
	}
return (
			<nav onClick={Fun} className="proyecto">
				<h1>{Projects.name}</h1>
				<img src={Projects.image} alt="" />
				<nav className="Proyecto__text">
					<p>
						{Projects.descriptionOne}
					</p>
				</nav>
			</nav>

	)
}

export default Projects
