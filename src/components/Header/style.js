import styled from 'styled-components'
import { Link as LinkRoute } from 'gatsby'

export const HeaderStyle = styled.header`
  
  /* position: relative; */
`

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: #011E56;
  background: #0239A3;
  padding-bottom: 5px;
  /* background: linear-gradient(180deg, rgba(1,30,86,1) 0%, rgba(1,30,86,0.5) 100%); */
  /* position: absolute;
  width: 100%;
  height: 50px; */
`

export const TitleContainer = styled.div`
  /* padding: 5px 10px;
  border-radius: 20px;
  background-color: white; */
`

export const Title = styled.h1`
  margin-left: 20px;
  font-size: 20px;
`

export const Nav = styled.nav`

`

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ListItem = styled.li`
  margin: 0 20px;
  font-size: 16px;
  &:hover { 
    border-bottom: 3px solid #DB0A13;
  }
`

export const Link = styled(LinkRoute)`
  color: white;
  text-decoration: none;
  
`