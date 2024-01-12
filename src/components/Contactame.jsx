import React from 'react'
import './style/contact.css'
const Contactame = () => {
  return (
    <div id='contact'>
      <br /><br /><br /><br />
    <div className='contact' >
      <br />
    <div className="content_contact hiddenLeft">
        <span>¿Quieres contactar conmigo?</span>
        <h3 className='contact_title'>Aquí puedes hacerlo</h3>

        <form action="https://formsubmit.co/andresmarroquin887@gmail.com" method="POST">
            <input type="text" name='Nombre' placeholder='Enter your name' required />
            <input type="email" name='Correo' placeholder='Email' required />
            <input type="text" name='Motivo' placeholder='Reason' required />
            <textarea name="comentario" cols="30" rows="0" placeholder='Write something...' ></textarea>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value="https://andresmarroquin887@gmail.com"></input>

            <button className='btn'>Enviar</button>
        </form>
    </div>

</div>      
<br /><br /><br />
    </div>

  )
}

export default Contactame
