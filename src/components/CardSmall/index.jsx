import React from 'react'

import {
  Wrap,
  Container,
  ImgContainer,
  Img,
  TextContainer,
  Title,
  Province,
  Desc,
  SocialContainer,
  List,
  ListItem,
  Anchor,
  SocialText
} from './style'

import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineGlobal
} from 'react-icons/ai'

const CardSmall = ({ 
  img = "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
  title = "Sombrero Pintao PTY",
  province = "Panama",
  desc = "Vendemos Sombreros Pintados en la provincia de Veraguas",
  whatsapp = "61234567",
  instagram = "SombreroPintao",
  facebook = "SombreroPintao",
  website = "sombreropintao.com"
}) => {
  return (
    <Wrap>

      <Container>
        <ImgContainer>
          <Img src={img} alt={title} />
        </ImgContainer>
        
        <TextContainer>
          <Title>{title}</Title>
          <Province>{province}</Province>
          <Desc>{desc}</Desc>
        </TextContainer>
      </Container>
      
      <SocialContainer>
        <List>
          <ListItem>
            <Anchor href={`https://api.whatsapp.com/send?phone=507${whatsapp}`} target="_blank" rel="noopener noreferrer">
              <AiOutlineWhatsApp size="30px" />
              <SocialText>{whatsapp}</SocialText>
            </Anchor>
          </ListItem>
          <ListItem>
            <Anchor href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram size="30px" />
              <SocialText>{instagram}</SocialText>
            </Anchor>
          </ListItem>
          <ListItem>
            <Anchor href={`https://www.facebook.com/${facebook}`} target="_blank" rel="noopener noreferrer">
              <AiFillFacebook size="30px" />
              <SocialText>{facebook}</SocialText>
            </Anchor>
          </ListItem>
          <ListItem>
            <Anchor href={`https://${website}`} target="_blank" rel="noopener noreferrer">
              <AiOutlineGlobal size="30px" />
              <SocialText>Página web</SocialText>
            </Anchor>
          </ListItem>
        </List>
      </SocialContainer>
    </Wrap>
  )
}

export default CardSmall