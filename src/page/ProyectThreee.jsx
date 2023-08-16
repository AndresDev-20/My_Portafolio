import React from 'react'
import Header from '../components/Header'
import ProyectThree from '../components/proyectInfo/ProyectThree'
import './page.style/proyectone.css'

const ProyectThreee = () => {
  return (
    <div>
        <div className='Proyectone'>
      <Header/>
      <div className={close ? 'ProductInfo' : 'productClose'}>
        <ProyectThree/>
      </div>
    </div>
    </div>
  )
}

export default ProyectThreee
