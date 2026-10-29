import './style/viewproject.css'
import Project from '../../features/projects/Project'
import BackButton from '../../components/back/BackButton';


const ViewProjets = ({t}) => {
  return (
	<div className='ViewProject'>
	  <BackButton t={t} section="Projects" />
	  <Project t={t}/>
	</div>
  )
}

export default ViewProjets
