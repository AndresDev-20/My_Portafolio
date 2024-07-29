import './App.css'
import {HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Cv from './pages/Mi_Cv/Cv'
import ViewProjets from './pages/Projects/ViewProjets'

function App() {

  return (
    <div>
      <Header/>
     <Routes>
           <Route  path='/' element={<Home/>} />
           <Route path='/cv' element={<Cv/>}/>
           <Route path='/proyects' element={<ViewProjets/>}/>
     </Routes>
    </div>
  )
}

export default App
