import styled from 'styled-components'
import { device } from '../../style'

export const HeroStyled = styled.section`
  background-image: url('https://static.ricardocuan.com/img/compraPanameno/hero.jpg');
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  @media ${device.mobileL} {
    background-position-y: -80px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.75) 70%, rgba(255,255,255,0) 100%);
    
    @media ${device.mobileL} {
      background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0) 100%);
    }
  }
  h1 {
    margin-left: 10px;
    line-height: 1;
    font-size: 36px;

    
    @media ${device.mobileM} {
      font-size: 44px;
    }
    @media ${device.mobileL} {
      /* font-size: 44px; */
      margin-left: 20px;
    }
  }
  
  p {
    margin-top: 10px;
    width: 200px;
    margin-left: 10px;
    padding-bottom: 10px;
    
    @media ${device.mobileL} {
      width: 300px;
      margin-left: 20px;
    }
  }
`
