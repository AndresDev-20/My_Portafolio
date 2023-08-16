import React from 'react'
import Header from '../components/Header'
import ProyectFourr from '../components/proyectInfo/ProyectFourr'
import './page.style/proyectone.css'

const ProyectFor = () => {
  return (
    <div>
           <div className='Proyectone'>
      <Header/>
      <div className={close ? 'ProductInfo' : 'productClose'}>
        <ProyectFourr/>
      </div>
    </div>
    </div>
  )
}

export default ProyectFor
