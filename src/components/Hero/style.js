import styled from 'styled-components'

export const HeroStyled = styled.section`
  background-image: url('https://static.ricardocuan.com/img/compraPanameno/hero.jpg');
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  /* background-position-y: -80px; */

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 100%;
    background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.75) 70%, rgba(255,255,255,0) 100%);
    /* background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0) 100%); */
  }
  h1 {
    margin-left: 10px;
    font-size: 44px;

    /* font-size: 54px; */
    /* margin-left: 100px; */
  }
  
  p {
    margin-top: 10px;
    width: 280px;
    margin-left: 10px;
    padding-bottom: 10px;
    
    /* width: 500px; */
    /* margin-left: 100px; */
  }
`
