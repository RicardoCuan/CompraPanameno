import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header>
      <h1>Comprando Panameño</h1>
      <nav>
        <ul>
          <li>
            <Link>Catálogos</Link>
          </li>
          <li>
            <Link>Añadir emprendimiento</Link>
          </li>
        </ul>
      </nav>
    </header> 
  )
}

export default Header
