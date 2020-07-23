import React from 'react'

import { 
  Wrap,
  ImgContainer,
  Img,
  Paragraph,
  Link
} from './style'

const Cat = ({
  cover = "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
  title = "Titulo",
  id = "categoria"
}) => {
  
  return (
    <Wrap>
      <Link to={`/${id}`}>
        <ImgContainer>
          <Img src={cover} alt={title} />
        </ImgContainer>
        <Paragraph>{title}</Paragraph>
      </Link>
    </Wrap>
  )
}

export default Cat
