import React from 'react'
import './style/contact.css'
const Contactame = () => {
  return (
    <div className='contact' id='contact'>
      <br />
    <div className="content_contact hiddenLeft">
        <span>Do you want to contact me?</span>
        <h3 className='contact_title'>Here you can do it</h3>

        <form action="https://formsubmit.co/andresmarroquin887@gmail.com" method="POST">
            <input type="text" name='Nombre' placeholder='Enter your name' required />
            <input type="email" name='Correo' placeholder='Email' required />
            <input type="text" name='Motivo' placeholder='Reason' required />
            <textarea name="comentario" cols="30" rows="5" placeholder='Write something...' ></textarea>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value="https://andresmarroquin887@gmail.com"></input>

            <button className='btn'>Send</button>
        </form>
    </div>

</div>
  )
}

export default Contactame
