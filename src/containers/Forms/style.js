import styled from 'styled-components'
import { device } from '../../style'

export const Wrap = styled.main`
`

export const CardContauner = styled.div`
  padding-top: 20px;
  padding-bottom: 30px;
  grid-area: CardContainer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Container = styled.section`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  grid-template-areas: 'Form' 'CardContainer';
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    grid-template-areas: 'CardContainer Form';
    grid-template-rows: 1fr;
    grid-template-columns: auto auto;
    grid-column-gap: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

export const Form = styled.form`
  width: 100%;
  grid-area: Form;
  padding-bottom: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    display: grid;
    grid-column-gap: 8px;
    justify-content: center;
    grid-template-areas: 
      'ShopName Province' 
      'Description Description'
      'Whatsapp Facebook'
      'Instagram Web'
      'button button';
  }
`

export const Name = styled.div`
  grid-area: ShopName;
`

export const Province = styled.div`
  grid-area: Province;
`

export const Description = styled.div`
  grid-area: Description;
`

export const Whatsapp = styled.div`
  grid-area: Whatsapp;
`

export const Instagram = styled.div`
  grid-area: Instagram;
`

export const Facebook = styled.div`
  grid-area: Facebook;
`

export const Web = styled.div`
  grid-area: Web;
`

export const SubTitle = styled.p`
  padding-top: 10px;
  padding-bottom: 3px;
  font-size: 18px;
`

export const Input = styled.input`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px 10px;
  font-size: 18px;
  width: 250px;
  outline: none;
  @media ${device.mobileM} {
    width: 300px;
  }
  @media ${device.mobileL} {
    width: 400px;
  }
  @media ${device.tablet} { 
    width: 400px;
    width: 200px;
    width: calc(100% - 22px);
  }
`

export const Select = styled.select`
  width: 270px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px 10px;
  font-size: 18px;
  @media ${device.mobileM} {
    width: 320px;
  }
  @media ${device.mobileL} {
    width: 422px;
  }
  @media ${device.tablet} { 
    width: 422px;
    width: 222px;
    width: calc(100%);
  }
`

export const TextArea = styled.textarea`
  width: 250px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px 10px;
  font-size: 18px;
  outline: none;
  resize: none;
  overflow: auto;
  font-family: -apple-system, System-ui , BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  @media ${device.mobileM} {
    width: 300px;
  }
  @media ${device.mobileL} {
    width: 400px;
  }
  @media ${device.tablet} { 
    width: 200px;
    width: 400px;
    width: calc(100% - 20px);
  }
`

export const Button = styled.button`
  grid-area: button;
  display: block;
  margin-top: 20px;
  padding: 10px;
  width: calc(100% - 10px);
  font-size: 20px;
  color: white;
  font-weight: bold;
  background-color: #009432;
  border: 1px solid #006266;
  border-bottom: 4px solid #006266;
  border-radius: 20px;
  outline: none;
  
  @media ${device.mobileS} { 
    width: calc(100% - 20px);
  }
  @media ${device.mobileL} { 
    justify-content: center;
    width: 422px;
  }
`
