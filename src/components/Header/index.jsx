import React from 'react'

import { HeaderStyle,Link,Wrap,TitleContainer,Title,List,ListItem,Nav } from './style'

const Header = () => {
  return (
    <HeaderStyle>
      <Wrap>
        <TitleContainer>
          <Title>
            <Link to="/">Compra Panameño</Link>
          </Title>
          </TitleContainer>
        <Nav>
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
