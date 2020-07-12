import styled from 'styled-components'
import { device } from '../../style'

export const DescriptionSection = styled.section`
  display: grid;
  grid-gap: 20px;
  padding: 30px 10px;
  padding-bottom: 10px;
  background-color: #F9F9F9;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;

  @media ${device.mobileL} {
    padding: 30px 30px;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
  
  h2 {
   margin-bottom: 10px;
  }

  p {
   margin-bottom: 10px;
  }
`

export const Description = styled.div`

`

export const Registro = styled.div`
  p {
    margin-bottom: 20px;
  }
`
