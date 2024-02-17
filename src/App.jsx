import './App.css'
import {HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Cv from './pages/Mi_Cv/Cv'

function App() {

  return (
    <div>
      <Header/>
     <Routes>
           <Route  path='/' element={<Home/>} />
           <Route path='/cv' element={<Cv/>}/>
     </Routes>
    </div>
  )
}

export default App
