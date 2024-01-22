import { useState } from 'react'
import './style/perfil.css'
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

  const [Full, setfull] = useState(true)
  const handelclifull = () => {
     setfull(false)
  }
  const handelfull = () => {
    setfull(true)
  }
  const [Back, setBack] = useState(true)
  const handelcliback = () => {
     setBack(false)
  }
  const handelback = () => {
    setBack(true)
  }
  return (
    <div id='certificados'>  
    <br />
    <Header/>

        <section className="perfil " id='inicio'>
           <nav className={`diploma ${Full && 'clos'}`}>
            <i onClick={handelfull} class='bx bx-x'></i>
            <img src='./image/FULL-STAK.png' alt=''/>
           </nav>
        <nav className={`diploma ${close && 'clos'}`}>
        <i onClick={handelclose} class='bx bx-x'></i>
            <img  src="./image/fundamentos.jpg" alt="" />
            </nav>
            <nav className={`diploma ${Back && 'clos'}`}>
            <i onClick={handelback} class='bx bx-x'></i>
            <img src='./image/Back-end.png' alt=''/>
           </nav>
            <nav className={`diploma ${cloe && 'clos'}`}>
            <i onClick={handelclos} class='bx bx-x'></i>
            <img  src="./image/ReactNative.jpg" alt="" />
            </nav>
            <nav className={`diploma ${clo && 'clos'}`}>
            <i onClick={handelclo} class='bx bx-x'></i>
            <img  src="./image/level.jpg" alt="" />
            </nav>
            <nav className={`diploma ${cl && 'clos'}`}>
            <i onClick={handelcl} class='bx bx-x'></i>
            <img  src="./image/colaboracion.jpg" alt="" />
            </nav>

            <nav className={`diploma ${conte && 'clos'}`}>
            <i onClick={handelconte} class='bx bx-x'></i>
            <img  src="./image/contenido.jpg" alt="" />
            </nav>

            <nav className={`diploma ${segu && 'clos'}`}>
            <i onClick={handelsegu} class='bx bx-x'></i>
            <img  src="./image/seguridad.jpg" alt="" />
            </nav>

                <nav className={`diploma ${ges && 'clos'}`}>
            <i onClick={handelges} class='bx bx-x'></i>
            <img  src="./image/gestion.jpg" alt="" />
            </nav>        
           
 
    <div className='perfil_center'>
  <br />
  
  <h1 className='titles'>Diplomados</h1>
  <p className='text'>Puedes ver aqui mis certificados...</p>
  <nav className="perfil_info">
     <nav className='certificados'>
     <nav onClick={handelclifull} className='perfil_certificados'>
            <h1> CERTIFICADO DE: FULL-STACK</h1>
        </nav>
      
     <nav onClick={handelclickfront} className='perfil_certificados'>
            <h1>CERTIFICADO DE: Front-end developer con react native.</h1>
        </nav>

        <nav onClick={handelcliback} className='perfil_certificados'>
            <h1>CERTIFICADO DE: Back-end con Node.js.</h1>
        </nav>

         <nav onClick={handelclick} className='perfil_certificados'>
            <h1>  CERTIFICADO DE: Fundamentos html, css, javascript.</h1>
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
<h1><i onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })} class='bx bx-chevrons-down bx_P'></i></h1>
</section>
<br /><br /><br /><b></b>

    </div>

  )
}

export default Perfil
