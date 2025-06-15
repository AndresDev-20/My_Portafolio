import './style/viewproject.css'
import Project from '../../features/projects/Project'
import { useNavigate } from 'react-router-dom';


const ViewProjets = ({t}) => {
    const navigate = useNavigate();
  const VolverHome = () => {
    navigate("/", { state: { scrollTo: "Start" } });
  };

  return (
	<div className='ViewProject'>
        <div className="Certificate_volver">
        <h1 onClick={VolverHome}>Volver</h1>
      </div>
	  <Project t={t}/>
	</div>
  )
}

export default ViewProjets