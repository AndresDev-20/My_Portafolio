import './style/contact.css'
import React, { useState } from 'react';
import { Images } from '../../assets/images';

// Correo donde quieres recibir los mensajes (FormSubmit.co)
const CONTACT_EMAIL = 'yeisonmarroquin887@gmail.com';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export const Contact = ({ t }) => {
  const [isSending, setIsSending] = useState(false);

  const illustration = Images?.Conatctme;

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSending) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot anti-spam: si este campo oculto viene lleno, es un bot
    if (data.get('_honey')) return;

    setIsSending(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          // --- Configuración de FormSubmit ---
          _subject: `Nuevo mensaje de ${data.get('user_name')} desde tu portafolio`,
          _template: 'box', // plantillas disponibles: basic | table | box
          _captcha: 'false',

          // --- Datos que verás en el correo (salen en este orden) ---
          Nombre: data.get('user_name'),
          email: data.get('user_email'), // FormSubmit lo usa como "Reply-To"
          Teléfono: data.get('user_phone') || 'No indicado',
          Mensaje: data.get('message'),
          Recibido: new Date().toLocaleString('es-CO', {
            timeZone: 'America/Bogota',
            dateStyle: 'full',
            timeStyle: 'short',
          }),
          Sitio: window.location.hostname,
        }),
      });

      const result = await response.json();

      if (!response.ok || String(result.success) === 'false') {
        throw new Error(result.message || 'Error al enviar');
      }

      alert(t('contact.form.success'));
      form.reset();
    } catch (error) {
      console.error('FormSubmit error:', error);
      alert(t('contact.form.error'));
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className='contact' id='Contact' aria-labelledby='contact-title'>

      <header className='contact__header Reveal'>
        <h2 className='contact__title Section_title Reveal' id='contact-title'>
          <svg className='contact__title-icon' viewBox='0 0 24 24' aria-hidden='true'>
            <path d='M3 14v-2a9 9 0 0 1 18 0v2' />
            <path d='M21 15v2a3 3 0 0 1-3 3h-3' />
            <rect x='2' y='14' width='4' height='6' rx='1.5' />
            <rect x='18' y='14' width='4' height='6' rx='1.5' />
          </svg>
          <span>{t('contact.title')}</span>
          <span className='contact__title-accent'>{t('contact.text')}</span>
        </h2>

        <p className='contact__description'>{t('contact.description')}</p>

        <p className='contact__status'>
          <span className='contact__status-dot' aria-hidden='true'></span>
          {t('contact.availability')}
        </p>
      </header>

      <div className='contact__card'>

        {illustration && (
          <figure className='contact__media'>
            <img
              className='contact__image'
              src={illustration}
              alt=''
              loading='lazy'
              draggable='false'
            />
          </figure>
        )}

        <form className='contact__form Reveal-stagger' onSubmit={sendEmail}>

          {/* Honeypot anti-spam (oculto para personas) */}
          <input
            type='text'
            name='_honey'
            tabIndex='-1'
            autoComplete='off'
            aria-hidden='true'
            style={{ display: 'none' }}
          />

          <div className='contact__field'>
            <input
              className='contact__input'
              type='text'
              id='contact-name'
              name='user_name'
              placeholder=' '
              autoComplete='name'
              required
            />
            <label className='contact__label' htmlFor='contact-name'>{t('contact.form.name')}</label>
          </div>

          <div className='contact__field'>
            <input
              className='contact__input'
              type='email'
              id='contact-email'
              name='user_email'
              placeholder=' '
              autoComplete='email'
              required
            />
            <label className='contact__label' htmlFor='contact-email'>{t('contact.form.email')}</label>
          </div>

          <div className='contact__field'>
            <input
              className='contact__input'
              type='tel'
              id='contact-phone'
              name='user_phone'
              placeholder=' '
              autoComplete='tel'
            />
            <label className='contact__label' htmlFor='contact-phone'>{t('contact.form.phone')}</label>
          </div>

          <div className='contact__field'>
            <textarea
              className='contact__input contact__input--textarea'
              id='contact-message'
              name='message'
              placeholder=' '
              rows='5'
              required
            ></textarea>
            <label className='contact__label' htmlFor='contact-message'>{t('contact.form.message')}</label>
          </div>

          <button
            className={`contact__submit${isSending ? ' contact__submit--sending' : ''}`}
            type='submit'
            data-ripple
            disabled={isSending}
            aria-busy={isSending}
          >
            <span className='contact__submit-text'>
              {isSending ? t('contact.form.sending') : t('contact.form.send')}
            </span>
            <svg className='contact__submit-icon' viewBox='0 0 24 24' aria-hidden='true'>
              <path d='M22 2 11 13' />
              <path d='M22 2 15 22l-4-9-9-4 20-7Z' />
            </svg>
            <span className='contact__submit-spinner' aria-hidden='true'></span>
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact