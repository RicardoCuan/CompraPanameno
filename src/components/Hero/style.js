import styled from 'styled-components'

export const HeroStyled = styled.section`
  background-image: url('https://static.ricardocuan.com/img/compraPanameno/hero.jpg');
  background-position-y: -80px;
  height: 300px;
  margin-bottom: 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0) 100%);
    width: 80%;
    height: 100%;
  }
  h1 {
    margin-left: 100px;
    font-size: 54px;
  }
  
  p {
    margin-top: 10px;
    margin-left: 100px;
    width: 500px;
  }
`
