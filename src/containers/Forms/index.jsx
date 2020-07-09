import React from 'react'

import { Card,InputBox,HeroCat,Button } from '../../components'
import {
  Wrap,
  Container,
  CardContauner
} from './style'

const Forms = () => {
  return (
    <Wrap>
      <HeroCat 
        title = "Buscamos Emprendimientos"
        description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ratione eaque debitis veritatis voluptatem aliquid, cum provident, nostrum fuga non veniam officia qui dolore. Non aperiam quae animi nam deleniti!"
      />
      <Container>
        <CardContauner>
          <Card />
        </CardContauner>
        <form>
          <InputBox title="Nombre del Emprendimiento" placeholder="Sombrero Pintao PTY" type="text" />
          <p>Provincia Sede</p>
          <select name="provincias" placeholder="provincia">
            <option value="Panama">Panamá</option>
            <option value="PanamaOeste">Panamá Oeste</option>
            <option value="Colon">Colón</option>
            <option value="Cocle">Coclé</option>
            <option value="Chiriqui">Chiriquí</option>
            <option value="Herrera">Herrera</option>
            <option value="LosSantos">Los Santos</option>
            <option value="Veraguas">Veraguas</option>
            <option value="BocasDelToro">Bocas del Toro</option>
            <option value="Darien">Darién</option>
            <option value="NgabeBugle">Ngäbe-Buglé</option>
            <option value="GunaYala">Guna Yala</option>
            <option value="EmberaWounaan">Emberá-Wounaan</option>
          </select>
          <p>Descripción</p>
          <textarea placeholder="Vendemos Sombreros Pintados en la provincia de Veraguas"></textarea> 
          <InputBox title="Número de Whatsapp (opcional)" placeholder="61234567" type="text" />
          <InputBox title="Cuenta de Instagram (opcional)" placeholder="SombreroPintao" type="text" />
          <InputBox title="Cuenta de Facebook (opcional)" placeholder="SombreroPintao" type="text" />
          <InputBox title="Página Web (opcional)" placeholder="sombreropintao.com" type="text" />
          <Button>¡Registrar!</Button>
        </form>
      </Container>
    </Wrap>
  )
}

export default Forms