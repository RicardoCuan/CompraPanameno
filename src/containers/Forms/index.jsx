import React from 'react'

import { CardSmall,HeroCat } from '../../components'
import {
  Wrap,
  Container,
  CardContauner,
  Form,
  SubTitle,
  Input,
  Select,
  TextArea,
  Button,
  Name,
  Province,
  Description,
  Whatsapp,
  Instagram,
  Facebook,
  Web
} from './style'

const Forms = () => {
  return (
    <Wrap>
      <HeroCat 
        title = "¡Buscamos más Emprendimientos Panameños!"
        description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ratione eaque debitis veritatis voluptatem aliquid, cum provident, nostrum fuga non veniam officia qui dolore. Non aperiam quae animi nam deleniti!"
      />
      <Container>
        <CardContauner>
          <CardSmall />
        </CardContauner>
        <Form>
          <Name>
            <SubTitle>Nombre del Emprendimiento</SubTitle>
            <Input 
              placeholder="Sombrero Pintao PTY"
              type="text"
            />
          </Name>
          
          <Province>
            <SubTitle>Provincia Sede</SubTitle>
            <Select name="provincias" placeholder="provincia">
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
            </Select>
          </Province>
          
          <Description>
            <SubTitle>Descripción</SubTitle>
            <TextArea
              maxlength="200"
              placeholder="Vendemos Sombreros Pintados en la provincia de Veraguas"
            ></TextArea> 
          </Description>
          
          <Whatsapp>
            <SubTitle>Número de Whatsapp (opcional)</SubTitle>
            <Input
              placeholder="61234567" 
              type="text" 
            />
          </Whatsapp>
          
          <Instagram>
            <SubTitle>Cuenta de Instagram (opcional)</SubTitle>
            <Input
              placeholder="SombreroPintao"
              type="text"
            />
          </Instagram>

          <Facebook>
            <SubTitle>Cuenta de Facebook (opcional)</SubTitle>
            <Input
              placeholder="SombreroPintao"
              type="text" 
            />
          </Facebook>

          <Web>
            <SubTitle>Página Web (opcional)</SubTitle>
            <Input
              placeholder="sombreropintao.com"
              type="text"
            />
          </Web>

          <Button>¡Registrar!</Button>
        </Form>
      </Container>
    </Wrap>
  )
}

export default Forms