import styled from 'styled-components'
import { Link as LinkRoute } from 'gatsby'

export const ButtonStyled = styled(LinkRoute)`
  background-color: transparent;
  border: 2px solid #011E56;
  border-bottom: 3px solid #011E56;
  padding: 7px 15px;
  border-radius: 5px;
  font-size: 16px;
  color: #011E56;
  text-decoration: none;
  &:hover {
    background-color: #012770;
    color: white;
  }
`
