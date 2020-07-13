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
  // CardTitle,
  Web
} from './style'

class Forms extends React.Component {

  state = {
    form: {
      img: "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
      title: "Título del emprendimiento",
      province: "Provincia",
      desc: "Muy breve descripción del negocio, esta debe de ser muy  corta.",
      whatsapp: "61234567",
      instagram: "cuentaInsta",
      facebook: "cuentaFB",
      website: "ricardocuan.com"
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <Wrap>
        <HeroCat 
          title = "¡Buscamos más Emprendimientos Panameños!"
          description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ratione eaque debitis veritatis voluptatem aliquid, cum provident, nostrum fuga non veniam officia qui dolore. Non aperiam quae animi nam deleniti!"
        />
        <Container>
          <CardContauner>
            <p>
              Vista Previa
            </p>
            <CardSmall
              img = {this.state.form.img}
              title = {this.state.form.title}
              province = {this.state.form.province}
              desc = {this.state.form.desc}
              whatsapp = {this.state.form.whatsapp}
              instagram = {this.state.form.instagram}
              facebook = {this.state.form.facebook}
              website = {this.state.form.website}
            />
          </CardContauner>
          <Form>
            <Name>
              <SubTitle>Nombre del Emprendimiento</SubTitle>
              <Input 
                placeholder="Sombrero Pintao PTY"
                name="title"
                type="text"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </Name>
            
            <Province>
              <SubTitle>Provincia Sede</SubTitle>
              <Select 
                name="provincias" 
                placeholder="provincia"
                onChange={this.handleChange}
              >
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
                name="desc"
                maxlength="200"
                placeholder="Vendemos Sombreros Pintados en la provincia de Veraguas"
                onChange={this.handleChange}
                value={this.state.desc}
              ></TextArea> 
            </Description>
            
            <Whatsapp>
              <SubTitle>Número de Whatsapp (opcional)</SubTitle>
              <Input
                name="whatsapp"
                placeholder="61234567" 
                type="text" 
                onChange={this.handleChange}
                value={this.state.whatsapp}
              />
            </Whatsapp>
            
            <Instagram>
              <SubTitle>Cuenta de Instagram (opcional)</SubTitle>
              <Input
                name="instagram"
                placeholder="SombreroPintao"
                type="text"
                onChange={this.handleChange}
                value={this.state.instagram}
              />
            </Instagram>

            <Facebook>
              <SubTitle>Cuenta de Facebook (opcional)</SubTitle>
              <Input
                name="facebook"
                placeholder="SombreroPintao"
                type="text" 
                onChange={this.handleChange}
                value={this.state.facebook}
              />
            </Facebook>

            <Web>
              <SubTitle>Página Web (opcional)</SubTitle>
              <Input
                name="website"
                placeholder="sombreropintao.com"
                type="text"
                onChange={this.handleChange}
                value={this.state.website}
              />
            </Web>

            <Button>¡Registrar!</Button>
          </Form>
        </Container>
      </Wrap>
    )
  }
}

export default Forms