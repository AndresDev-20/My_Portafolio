import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import Portafolio from './page/Portafolio';
import { Route, Routes } from 'react-router-dom';
import Proyects from './page/Proyects';

function App() {
  const [Isloanding, setIsloanding] = useState(true)
  
    setTimeout(() => {
      setIsloanding(false);
    }, 3050);
 
  return (
    <div className='App'>
      {
        Isloanding 
        ?<Loading Isloanding={Isloanding}/>
        :(
          <Routes>
            <Route path='/' element={<Portafolio/>}/>
            <Route path='/proyects' element={<Proyects/>}/>
          </Routes>
        )
      }
    </div>
  )
}

export default App

