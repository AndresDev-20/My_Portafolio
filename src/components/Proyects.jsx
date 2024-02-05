import React, { useState } from 'react';
import Projects from "../Utils/Trabajos";
import "./style/proyects.css";
import Proyectssss from './proyectssss';

const Proyects = () => {

 ;
console.log(Projects.id)
  const projectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  const currentProjects = Projects.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(Projects.length / projectsPerPage)));
  };
  return (
    <article className="Proyectos" id="Proyects">
      <br /><br />
      <nav>
        <h1>Proyectos...</h1>
        <p>
          Aquí puedes visualizar los proyectos que he desarrollado en mi carrera
          como desarrollador...
        </p>
      </nav>
      <div className="Proyects">
        {currentProjects.map(Project => (
           <Proyectssss
            key={Project.id}
            Project={Project}
           />
        ))}
      </div>

      {/* Flechas de navegación */}
      <div className="navigation-arrows">
        <button onClick={handlePrevPage}>&#8249;</button>
        <button onClick={handleNextPage}>&#8250;</button>
      </div>

      <h1><i onClick={() => document.querySelector('#certificados').scrollIntoView({ behavior: 'smooth' })} className='bx bx-chevrons-down bx_P'></i></h1>
    </article>
  );
};

export default Proyects;
