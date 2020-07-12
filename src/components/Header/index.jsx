import React from 'react'

import {
  HeaderStyle,
  BurgerButton,
  Link,
  Wrap,
  TitleContainer,
  Title,
  List,
  ListItem,
  Nav
} from './style'
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
  return (
    <HeaderStyle>
      <BurgerButton>
        <GiHamburgerMenu size="16px"/>
      </BurgerButton>
      <Wrap>
        <TitleContainer>
          <Title>
            <Link to="/">Compra Panameño</Link>
          </Title>
          </TitleContainer>
        <Nav id="menu">
          <List>
            <ListItem>
              <Link to="/">Catálogos</Link>
            </ListItem>
            <ListItem>
              <Link to="/Form">Añadir emprendimiento</Link>
            </ListItem>
          </List>
        </Nav>
      </Wrap>
    </HeaderStyle> 
  )
}

export default Header
