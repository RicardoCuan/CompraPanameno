import React from 'react'
import { AiOutlineWhatsApp, AiOutlineMail, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <section>
        <h1>APOYA EL TALENTO LOCAL</h1>
        <p>Hecho con <span>💙</span> por un <a href="https://ricardocuan.com">Panameño</a></p>
      </section>
      <section>
        <h2>¿Alguna sugerencia?</h2>
        <p>Escríbeme al twitter: <a href="https://twitter.com/RicardoCuan" target="_blank" rel="noreferrer">@RicardoCuan</a></p>
        <p>o a otras de mis redes sociales:</p>
        <div>
          <ol>
            <li>
              <a href="https://api.whatsapp.com/send?phone=50766516941&text=%C2%A1Hola!" target="_blank" rel="noreferrer">
                <AiOutlineWhatsApp />
                <p>+507 6651-6941</p>
              </a>
            </li>
            <li>
              <a href="mailto:ricardocuan@aiesec.net" target="_blank" rel="noreferrer">
                <AiOutlineMail />
                <p>Correo</p>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ricardocuan/" target="_blank" rel="noreferrer">
                <AiOutlineInstagram />
                <p>@RicardoCuan</p></a>
            </li>
            <li>
              <a href="https://www.facebook.com/ricardocuan1/" target="_blank" rel="noreferrer">
                <AiFillFacebook />
                <p>@RicardoCuan1</p></a>
            </li>
          </ol>
        </div>
        <p>© {new Date().getFullYear()} Todos los derechos reservados</p>
      </section>
    </footer>
  )
}

export default Footer;
