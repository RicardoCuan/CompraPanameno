import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  width: 835px;
`

export const Container = styled.div`
  display: flex;
  border: 1px solid gray;
  border-right: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Img = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  padding-left: 10px;
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
  display: inline;
  padding-left: 10px;
`

export const Desc = styled.p`
  width: 400px;
`

export const SocialContainer = styled.div`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #011E56;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`

export const ListItem = styled.li`
  margin: 0 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Anchor = styled.a`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
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
