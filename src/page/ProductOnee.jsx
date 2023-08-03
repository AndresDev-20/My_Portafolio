import React, { useState } from 'react'
import Header from '../components/Header'
import './page.style/proyectone.css'
import ProyectOne from '../components/proyectInfo/ProyectOne'



const ProductOnee = () => {
  const [close, setclose] = useState(true)
  return (
    <div className='Proyectone'>
      <Header/>
      <div className={close ? 'ProductInfo' : 'productClose'}>
        <ProyectOne/>
      </div>
    </div>
  )
}

export default ProductOnee
