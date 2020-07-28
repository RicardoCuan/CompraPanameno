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
  width: 90%;
  display: flex;
  padding: 30px 0;
  flex-direction: column;
  align-items: flex-end;
  justify-content: left;
  height: 100%;
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
  width: 100%;
  @media ${device.mobileL} {
    width: auto;
  }
`

export const Title = styled.h1`
  padding-top: 20px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobileL} {
    display: block;
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
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  margin-right: 30px;
  @media ${device.mobileL} {
    flex-direction: row;
  }
`

export const ListItem = styled.li`
  border-bottom: 1px solid #DB0A13;
  font-size: 1.3rem;
  margin-bottom: 30px;
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


