import './App.css'
import {HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Cv from './pages/Mi_Cv/Cv'
import ViewProjets from './pages/Projects/ViewProjets'
import Certificados from './pages/Certificados/Certificados'
import Loader from './components/Loader/Loader'
import { useEffect, useState } from 'react'
import Diplomas from './pages/Diplomas/Diplomas'

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, [])


  return (
    <div>
      <Header/>
      {
        !loading && (
          <div>
           <Loader/>
          </div>
        )
      }
     <Routes>
           <Route  path='/' element={<Home/>} />
           <Route path='/cv' element={<Cv/>}/>
           <Route path='/pro' element={<ViewProjets/>}/>
           <Route path='/diplomados' element={<Certificados/>}/>
           <Route path='/education-diplomas/:instituto' element={<Diplomas/>}/>
     </Routes>
    </div>
  )
}

export default App
