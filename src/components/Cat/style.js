import styled from 'styled-components'
import { Link as LinkRoute } from 'gatsby'
import { device } from '../../style'

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
  @media ${device.mobileS} {
    max-width: 140px;
  }
  @media ${device.mobileM} {
    max-width: 140px;
  }
  @media ${device.mobileM} {
    max-width: 160px;
  }
`

export const Paragraph = styled.p`
  text-align: center;
`

export const Link = styled(LinkRoute)`
  color: black;
  font-weight: bold;
  text-decoration: none;
`
