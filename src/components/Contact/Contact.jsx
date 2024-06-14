import './style/Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = ({t}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vz2us7f', 'template_i3pobus', form.current, {
        publicKey: 'Q9IesQb1m7BE5RKEA',
      })
      .then(
        () => {
          alert("Tu mensaje ha sido enviado");
          // Limpiar el formulario
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


	return (
		<section className='Contactame' id='Contact'>
			<br />
			<br />
			<br />
			<h1 className='Contactame_title'><span><i className='bx bx-support suport'></i></span> {t("contact.title")} <span className='Aqui'>{t("contact.text")}</span></h1>
			<div className='Contactame_Father'>
				<figure className='Contactame_image'>
					<img src="../../../images/Image8.png" alt="" />
				</figure>
				<form  ref={form} onSubmit={sendEmail}className='Contactame_form'  >
                    <input name='name' data-aos="fade-right" type="text" placeholder={t("contact.form.name")} required/>
					<input name='email' data-aos="fade-right" type="email" placeholder={t("contact.form.email")} required />
					<input name='phone' data-aos="fade-right" type="number" placeholder={t("contact.form.phone")}  required/>
					<textarea name='message' data-aos="fade-right"  id="" cols="30" rows="10" placeholder={t("contact.form.message")}required></textarea>
					<div className='Contactame_btn'>
						<button type="submit"  >{t("contact.form.send")}   <i className='bx bx-navigation'></i></button>
					</div>
				</form>
			</div>

		</section>
	)
}

export default Contact
