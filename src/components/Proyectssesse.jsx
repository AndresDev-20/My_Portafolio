import React from 'react'
import { useNavigate } from "react-router-dom";

const Proyectssss = ({Project}) => {
	
	const navigate = useNavigate();
	const OneProject = () => {
		navigate(`/proyectss/${Project.id}`);
	  }
  return (
	<section key={Project.name}>
	<nav onClick={OneProject} className="proyecto">
	  <h1>{Project.name}</h1>
	  <img src={Project.image} alt="" />
	  <nav className="Proyecto__text">
		<p>{Project.descriptionOne}</p>
	  </nav>
	</nav>
  </section>
  )
}

export default Proyectssss
