import styled from 'styled-components'
import { device } from '../../style'

export const TextContainer = styled.div`
  margin-left: 20px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 30px;
  padding-bottom: 10px;

  @media ${device.mobileM} {
    font-size: 40px;
  }
`

export const Desc = styled.p`
  font-size: 18px;
  max-width: 300px;
  @media ${device.mobileM} {
    max-width: 800px;
  }

`