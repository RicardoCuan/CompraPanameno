import styled from 'styled-components'
import { device } from '../../style'

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
`

export const List = styled.ul`
  /* border: 1px solid red; */
  list-style-type: none;
  /* display: grid; */
  display: flex;
  /* grid-template-columns: repeat( auto-fill, minmax(135px, 135px) ); */
  justify-content: center;
  align-items: center;

  /* grid-template-columns: repeat(2, 1fr); */
  /* grid-gap: 5px; */

  @media ${device.mobileL} {
    /* grid-gap: 15px; */
    width: 700px;
    /* grid-template-columns: repeat(3, 1fr); */
  }
  @media ${device.tablet} {
    /* grid-template-columns: repeat(3, 1fr); */
    width: 900px;
  }

  @media ${device.laptop} {
    /* grid-template-columns: repeat(5, 1fr); */
    max-width: 1000px;
  }
`

export const ListItem = styled.li`
  margin-left: 5px;
  /* border: 1px solid violet; */
`
