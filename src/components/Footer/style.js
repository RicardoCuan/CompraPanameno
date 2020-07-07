import styled from 'styled-components'

export const FooterStyled = styled.footer`
  a {
    color: white;
    text-decoration: none;
    border-bottom: 2px solid #DB0A13;
    &:hover {
      font-weight: bold;
      border-bottom: 3px solid #DB0A13;
    }
  }
`

export const Call = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #011E56;
  color: white;
  height: 200px;

  h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }

`

export const Social = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #000C24;
  padding-top: 40px;
  padding-bottom: 10px;
  h1 {
    margin-bottom: 5px;
    font-size: 30px;
  }
  p {
    margin-bottom: 5px;
  }
  ul {
    margin-top: 30px;
    margin-bottom: 20px;
    list-style-type: none;
    display: flex;
  }
  li {
    text-align: center;
    margin: 0 20px;
  }
  ul > li > a {
    border: none;
    &:hover {
      border: none;
    }
  }
`
