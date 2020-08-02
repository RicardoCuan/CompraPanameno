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

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Forms extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      form: {
        img: "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
        title: "",
        province: "Panamá",
        desc: "",
        whatsapp: "",
        instagram: "",
        facebook: "",
        website: ""
      }
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": form.getAttribute('name'), ...this.state.form })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
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
          <Form 
            onSubmit={this.handleSubmit}
            name="registro"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="registro" />
            <Name>
              <SubTitle>Nombre del Emprendimiento</SubTitle>
              <Input 
                placeholder="Sombrero Pintao PTY"
                name="title"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.title}
              />
            </Name>
            
            <Province>
              <SubTitle>Provincia Sede</SubTitle>
              <Select 
                name="province" 
                placeholder="provincia"
                onChange={this.handleChange}
                value={this.state.form.province}
              >
                <option value="Panamá">Panamá</option>
                <option value="Panamá Oeste">Panamá Oeste</option>
                <option value="Colón">Colón</option>
                <option value="Coclé">Coclé</option>
                <option value="Chiriquí">Chiriquí</option>
                <option value="Herrera">Herrera</option>
                <option value="Los Santos">Los Santos</option>
                <option value="Veraguas">Veraguas</option>
                <option value="Bocas del Toro">Bocas del Toro</option>
                <option value="Darién">Darién</option>
                <option value="Ngäbe-Buglé">Ngäbe-Buglé</option>
                <option value="Guna Yala">Guna Yala</option>
                <option value="Emberá-Wounaan">Emberá-Wounaan</option>
              </Select>
            </Province>
            
            <Description>
              <SubTitle>Descripción</SubTitle>
              <TextArea
                name="desc"
                maxlength="200"
                placeholder="Vendemos Sombreros Pintados en la provincia de Veraguas"
                onChange={this.handleChange}
                value={this.state.form.desc}
              ></TextArea> 
            </Description>
            
            <Whatsapp>
              <SubTitle>Número de Whatsapp (opcional)</SubTitle>
              <Input
                name="whatsapp"
                placeholder="61234567" 
                type="text" 
                onChange={this.handleChange}
                value={this.state.form.whatsapp}
              />
            </Whatsapp>
            
            <Instagram>
              <SubTitle>Cuenta de Instagram (opcional)</SubTitle>
              <Input
                name="instagram"
                placeholder="SombreroPintao"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.instagram}
              />
            </Instagram>

            <Facebook>
              <SubTitle>Cuenta de Facebook (opcional)</SubTitle>
              <Input
                name="facebook"
                placeholder="SombreroPintao"
                type="text" 
                onChange={this.handleChange}
                value={this.state.form.facebook}
              />
            </Facebook>

            <Web>
              <SubTitle>Página Web (opcional)</SubTitle>
              <Input
                name="website"
                placeholder="sombreropintao.com"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.website}
              />
            </Web>

            <Button type="submit">¡Registrar!</Button>
          </Form>
        </Container>
      </Wrap>
    )
  }
}

export default Forms