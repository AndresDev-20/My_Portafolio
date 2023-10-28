import { useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import Portafolio from './page/Portafolio';
import { Route, Routes } from 'react-router-dom';
import Proyectss from './page/Proyectss';
import Perfil from './page/Perfil';
import ProductOnee from './page/ProductOnee';
import ProyectTwoo from './page/ProyectTwoo';
import ProyectThreee from './page/ProyectThreee';
import ProyectFor from './page/ProyectFor';
import ProyectFive from './page/ProyectFive';
import Cv from './page/Cv';
import Header from './components/Header';

function App() {
  const [Isloanding, setIsloanding] = useState(true)
  
    setTimeout(() => {
      setIsloanding(false);
    }, 3050);
 
  return (
    <div className='App' >
      {
        Isloanding 
        ?<Loading Isloanding={Isloanding}/>
        :( 
   <Routes>
  
            <Route path='/' element={<Portafolio/>}/>
            <Route path='/proyects' element={<Proyectss/>}/>
            <Route path='/perfil' element={<Perfil/>}/>
                <Route path='/proyectone' element={<ProductOnee/>}/>
                <Route path='/proyecttwo' element={<ProyectTwoo/>}/>
                <Route path='/proyectthre' element={<ProyectThreee/>}/>
                <Route path='/proyectfour' element={<ProyectFor/>}/>
                <Route path='/proyectfive' element={<ProyectFive/>}/>
                <Route path='/curriculum' element={<Cv/>}/>
          </Routes>
          
          
       
        )
      }
</div>
  )
}

export default App

