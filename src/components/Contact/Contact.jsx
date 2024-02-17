import './style/Contact.css'
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
	console.log(data);
  };

	return (
		<section className='Contactame' id='Contact'>
			<br />
			<br />
			<br />
			<h1 className='Contactame_title'><span><i className='bx bx-support suport'></i></span> Contactame <span className='Aqui'>aqui</span></h1>
			<div className='Contactame_Father'>
				<figure className='Contactame_image'>
					<img src="../../../images/Image8.png" alt="" />
				</figure>
				<form className='Contactame_form'  >
                    <input  data-aos="fade-right" type="text" placeholder="Nombre"/>
					<input  data-aos="fade-right" type="email" placeholder='Correo Electronico' />
					<input data-aos="fade-right" type="number" placeholder='Telefono' />
					<textarea data-aos="fade-right" name="" id="" cols="30" rows="10" placeholder='Mensaje'></textarea>
					<div className='Contactame_btn'>
						<button >enviar</button>
					</div>
				</form>
			</div>

		</section>
	)
}

export default Contact
