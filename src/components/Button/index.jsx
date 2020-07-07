import React from 'react'
import { ButtonStyled } from './style'

const Button = ({ to, children }) => {
  return (
    <ButtonStyled to={to}>
      {children}
    </ButtonStyled>
  )
}

export default Button
