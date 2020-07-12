import styled from 'styled-components'
import { device } from '../../style'

export const Wrap = styled.div`
  grid-area: Card;
  display: block;
  width: auto;
`

export const Container = styled.div`
  display: flex;
  border: 1px solid gray;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Img = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 5px;
  @media ${device.mobileM} {
    margin-left: 10px;
  }
`

export const TextContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
`

export const Title = styled.h3`
  display: inline;
`

export const Province = styled.small`
  display: block;
  padding-left: 10px;
`

export const Desc = styled.p`
  width: 230px;
  @media ${device.mobileM} {
    width: 300px;
  }
`


export const SocialContainer = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #011E56;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`

export const ListItem = styled.li`
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink:initial;
`

export const Anchor = styled.a`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  text-decoration: none;
  padding: 5px;
  &:hover {
    border-radius: 10px;
    background-color: white;
    color: black;
  }
`

export const SocialText = styled.small`
  display: block;
`