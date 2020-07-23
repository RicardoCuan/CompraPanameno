import styled, {css} from 'styled-components'
import { Link as LinkRoute } from 'gatsby'
import { device } from '../../style'

export const HeaderStyle = styled.header`
  
  /* position: relative; */
`

export const BurgerButton = styled.div`
  border-radius: 50%;
  position: fixed;
  z-index: 10000;
  top: 0;
  right: 0;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0239A3;
  color: white;
  margin: 10px 10px;
  width: 20px;
  height: 20px;

  @media ${device.mobileL} {
    display: none;
  }
  /* width: 30px;
  height: 30px;
  font-size: 24px; */
`

export const Toggle = ({active}) => ({
  true: css`
    right: 0;
  `,
  false: css`
    right: 200vw;
  `
}[active])

export const Wrap = styled.div`
  right: ${({ open }) => open ? '0' : '-200vw'};
  position: fixed;
  top: 0;
  width: 70%;
  display: flex;
  padding: 30px 0;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  height: 50%;
  background: #0239A3;
  transition: all 0.3s linear;

  @media ${device.mobileL} {
    display: flex;
    position: static;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    padding: 0;
    flex-direction: row;
    padding-bottom: 5px;
  }
`

export const TitleContainer = styled.div`
`

export const Title = styled.h1`
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: 20px;
  text-align: center;

  @media ${device.mobileL} {
    padding-bottom: 0px;
    padding-top: 0;
    font-size: 20px;
    margin-left: 20px;
  }
  @media ${device.tablet} {
    margin-left: 20px;
  }
`

export const Nav = styled.nav`

`

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media ${device.mobileL} {
    flex-direction: row;
  }
`

export const ListItem = styled.li`
  border-bottom: 1px solid #DB0A13;
  margin: 0 20px;
  font-size: 16px;
  margin-top: 20px;
  &:hover { 
    border-bottom: 3px solid #DB0A13;
  }

  @media ${device.mobileL} {
    margin-top: 0px;
    border-bottom: none;
  }
`

export const Link = styled(LinkRoute)`
  color: white;
  text-decoration: none;
`


