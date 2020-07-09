import React from 'react'
import { AiOutlineWhatsApp, AiOutlineMail, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'

import { FooterStyled,Call,Social } from './style'

const Footer = () => {
  return (
    <FooterStyled>
      <Call>
        <h2>APOYA EL TALENTO LOCAL</h2>
        <h1>¡COMPRA PANAMEÑO!</h1>
        <p>Hecho con <span role='img' aria-label="emoji">❤️</span> por un <a href="https://ricardocuan.com">Panameño</a></p>
      </Call>
      <Social>
        <h1>¿Alguna sugerencia?</h1>
        <p>Escríbeme al twitter: <a href="https://twitter.com/RicardoCuan" target="_blank" rel="noreferrer">@RicardoCuan</a></p>
        <p>o a otras de mis redes sociales:</p>
        <div>
          <ul>
            <li>
              <a href="https://api.whatsapp.com/send?phone=50766516941&text=%C2%A1Hola!" target="_blank" rel="noreferrer">
                <AiOutlineWhatsApp size="3em" />
                <p>+507 6651-6941</p>
              </a>
            </li>
            <li>
              <a href="mailto:ricardocuan@aiesec.net" target="_blank" rel="noreferrer">
                <AiOutlineMail size="3em" />
                <p>    Correo    </p>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ricardocuan/" target="_blank" rel="noreferrer">
                <AiOutlineInstagram size="3em" />
                <p>@RicardoCuan</p></a>
            </li>
            <li>
              <a href="https://www.facebook.com/ricardocuan1/" target="_blank" rel="noreferrer">
                <AiFillFacebook size="3em" />
                <p>@RicardoCuan1</p></a>
            </li>
          </ul>
        </div>
        <p>© {new Date().getFullYear()} Todos los derechos reservados</p>
      </Social>
    </FooterStyled>
  )
}

export default Footer;
