import React from 'react'

import {Container,Label,Input} from './style'

const InputBox = ({ title, placeholder, type }) => {
  return (
    <Container>
      <Label>{title}</Label>
      <Input type={type} name="name" placeholder={placeholder} />
    </Container>
  )
}

export default InputBox