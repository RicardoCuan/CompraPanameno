import React from 'react'

import { HeroStyled } from './style'

const Hero = ({ data }) => {
  return (
    <HeroStyled>
      <div>
        <h1>Compra</h1>
        <h1>Panameño</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus sequi facere, neque fuga consequuntur architecto ut itaque dicta? Asperiores.</p>
      </div>
    </HeroStyled>
  )
}

export default Hero