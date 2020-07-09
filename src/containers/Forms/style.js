import styled from 'styled-components'

export const Wrap = styled.main`
  
`

export const CardContauner = styled.div`
  grid-area: CardContainer;
  border: 1px solid red;
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'CardContainer' 'Form';
`

export const Form = styled.form`
  grid-area: Form;
`
