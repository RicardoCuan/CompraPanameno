import React from 'react'

import { AiOutlineWhatsApp, AiOutlineInstagram, AiFillFacebook, AiOutlineGlobal } from 'react-icons/ai'

const Card = ({ pageContext }) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h3>Nombre de la Empresa</h3>
        <small>Pma. Oeste</small>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis aperiam quis. </p>
      </div>
      <div>
        <ul>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <AiOutlineWhatsApp />
              <p>Whatsapp</p>
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram />
              <p>Instagram</p>
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <AiFillFacebook />
              <p>Facebook</p>
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <AiOutlineGlobal />
              <p>Página web</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Card