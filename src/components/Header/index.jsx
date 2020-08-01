import React, { useState } from 'react'

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
  
  const [open, setOpen] = useState(false)
  
  const handleClick = e => {
    setOpen(!open)
  }

  const handleClickItem = e => {
    if (open === true) {
      setOpen(false)
    }
  }

  return (
    <HeaderStyle>
      <BurgerButton onClick={ handleClick }>
        <GiHamburgerMenu size="16px"/>
      </BurgerButton>
      <Wrap open={open}>
        <TitleContainer>
          <Title onClick={ handleClickItem }>
            <Link to="/">Compra Panameño</Link>
          </Title>
          </TitleContainer>
        <Nav id="menu">
          <List>
            <ListItem onClick={ handleClickItem }>
              <Link to="/#c">Catálogos</Link>
            </ListItem>
            <ListItem onClick={ handleClickItem }>
              <Link to="/Form">Añadir emprendimiento</Link>
            </ListItem>
          </List>
        </Nav>
      </Wrap>
    </HeaderStyle> 
  )
}

export default Header
