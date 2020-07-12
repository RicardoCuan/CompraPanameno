import styled from 'styled-components'
import { Link as LinkRoute } from 'gatsby'

export const Wrap = styled.div`
  padding-bottom: 15px;
  &:hover {
    transform: scale(1.05);
  }
`

export const ImgContainer = styled.div`

  `

export const Img = styled.img`
  max-width: 120px;
  border-radius: 20px;
  padding-left: 6px;
  padding-right: 6px;
`

export const Paragraph = styled.p`
  text-align: center;
`

export const Link = styled(LinkRoute)`
  color: black;
  font-weight: bold;
  text-decoration: none;
`
