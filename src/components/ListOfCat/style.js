import styled from 'styled-components'
import { device } from '../../style'

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-gap: 5px; */

  @media ${device.mobileL} {
    grid-gap: 15px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(5, 1fr);
  }
`

export const ListItem = styled.li`

`
