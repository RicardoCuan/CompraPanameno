import React from 'react'

import { HeroStyled } from './style'

const Hero = ({ data }) => {
  return (
    <HeroStyled>
      <div>
        <h1>Compra</h1>
        <h1>Panameño</h1>
        <p>¡Descubre emprendimientos panameños: Accesorios, artesanías, servicios y más!</p>
      </div>
    </HeroStyled>
  )
}

export default Hero