import React from 'react'
import styled from 'styled-components'
import { device } from '../../style'

import { 
  TextContainer,
  Title,
  Desc
} from './style'

const cover = "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"

const HeroCat = ({
  title = "Titulo de la categoria",
  description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ratione eaque debitis veritatis voluptatem aliquid, cum provident, nostrum fuga non veniam officia qui dolore. Non aperiam quae animi nam deleniti!"
}) => (
  <Hero>
    <TextContainer>
      <Title>{title}</Title>
      <Desc>{description}</Desc>
    </TextContainer>
  </Hero>
)

const Hero = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(311deg, rgba(250,250,255,0.8) 0%, rgba(250,250,250,0.8) 100%), url(${cover});
  background-repeat: no-repeat;
  background-origin: center;
  background-size: cover;
  @media ${device.mobileM} {
    margin-bottom: 20px;
  }
`

export default HeroCat