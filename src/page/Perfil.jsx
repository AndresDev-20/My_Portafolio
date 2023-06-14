import React, { useState } from 'react'
import './page.style/perfil.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Perfil = () => {
    const [close, setclose] = useState(true)
    const handelclick = () => {
       setclose(false)
    }
  const handelclose = () => {
    setclose(true)
  }
  const [cloe, setcloe] = useState(true)
  const handelclickfront = () => {
     setcloe(false)
  }
  const handelclos = () => {
    setcloe(true)
  }

  const [clo, setclo] = useState(true)
  const handelclicklevel = () => {
     setclo(false)
  }
  const handelclo = () => {
    setclo(true)
  }

  const [cl, setcl] = useState(true)
  const handelclicol = () => {
     setcl(false)
  }
  const handelcl = () => {
    setcl(true)
  }

  const [conte, setconte] = useState(true)
  const handelclickconte = () => {
     setconte(false)
  }
  const handelconte = () => {
    setconte(true)
  }

  const [segu, setsegu] = useState(true)
  const handelclicksegu = () => {
     setsegu(false)
  }
  const handelsegu = () => {
    setsegu(true)
  }

  const [ges, setges] = useState(true)
  const handelcliges = () => {
     setges(false)
  }
  const handelges = () => {
    setges(true)
  }
  return (
    <>  
    <Header/>

        <section className="perfil">
        <nav className={`diploma ${close && 'clos'}`}>
            <img  src="./image/fundamentos.jpg" alt="" />
            <button className='perfil_btn' onClick={handelclose}>volver</button>
            </nav>
        
            <nav className={`diploma ${cloe && 'clos'}`}>
            <img  src="./image/ReactNative.jpg" alt="" />
            <button className='perfil_btn' onClick={handelclos}>volver</button>
            </nav>
            <nav className={`diploma ${clo && 'clos'}`}>
            <img  src="./image/level.jpg" alt="" />
            <button className='perfil_btn' onClick={handelclo}>volver</button>
            </nav>
            <nav className={`diploma ${cl && 'clos'}`}>
            <img  src="./image/colaboracion.jpg" alt="" />
            <button className='perfil_btn' onClick={handelcl}>volver</button>
            </nav>

            <nav className={`diploma ${conte && 'clos'}`}>
            <img  src="./image/contenido.jpg" alt="" />
            <button className='perfil_btn' onClick={handelconte}>volver</button>
            </nav>

            <nav className={`diploma ${segu && 'clos'}`}>
            <img  src="./image/seguridad.jpg" alt="" />
            <button className='perfil_btn' onClick={handelsegu}>volver</button>
            </nav>

                <nav className={`diploma ${ges && 'clos'}`}>
            <img  src="./image/gestion.jpg" alt="" />
            <button className='perfil_btn' onClick={handelges}>volver</button>
            </nav>        
           
 
    <div className='perfil_center'>

          <nav className="perfil_image">
    <img className="perfil_img" src="./image/trabajo.jpg" alt="Yeison" />
     
  </nav>
   <hr className='line' />
  <nav className="perfil_info">
    <h2>A continuación te dejo los certificados de mis estudios: </h2>
     <nav className='certificados'>
      
         <nav onClick={handelclick} className='perfil_certificados'>
            <h1>  CERTIFICADO DE: Fundamentos html, css, javascript.</h1>
        </nav> 
        <nav onClick={handelclickfront} className='perfil_certificados'>
            <h1>CERTIFICADO DE: Front-end developer con react native.</h1>
        </nav>
        <nav onClick={handelclicklevel} className='perfil_certificados'>
            <h1>CERTIFICADO DE: English does work - level 1.</h1>
        </nav>
        <nav onClick={handelclicol} className='perfil_certificados'>
            <h1>CERTIFICADO DE: Desarrollo de habilidades digitales para la comunicación y colaboración en linea.</h1>
        </nav>
        <nav onClick={handelclickconte} className='perfil_certificados'>
            <h1>CERTIFICADO DE: Desarrollo de habilidades digitales para la construción de contenido digital.</h1>
        </nav>
        <nav onClick={handelclicksegu} className='perfil_certificados'>
            <h1>CERTIFICADO DE: Desarrollo de habilidades digitales para experiencias seguras en linea.</h1>
        </nav>
        <nav onClick={handelcliges} className='perfil_certificados'>
            <h1>CERTIFICADO DE: Desarrollo de habilidades digitales para la gestión de la información.</h1>
        </nav>
     </nav>
  </nav> 
    </div>
</section>
    <Footer/>
    </>

  )
}

export default Perfil