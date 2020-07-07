import React from 'react'

import { Hero,ListOfCat,Button } from '../../components'
import { DescriptionSection,Description,Registro } from './style'

const Homes = () => {
  return (
    <>
      <Hero />
      <DescriptionSection>
        <Description>
          <h2>¿Qué es Comprando Panameño?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati error amet earum aut, eos magnam nemo. Consectetur, magni. Beatae amet itaque iusto facilis reiciendis eum libero, mollitia ut rem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati error amet earum aut, eos magnam nemo. Consectetur, magni. Beatae amet itaque iusto facilis reiciendis eum libero, mollitia ut rem.</p>
        </Description>
        <Registro>
          <h2>¿Conoces algún emprendimiento panameño?</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, accusamus voluptatum! Numquam, debitis labore incidunt quis laboriosam laudantium dolorum harum. Distinctio corrupti, provident impedit porro consequatur assumenda ducimus ullam rem!</p>
          <Button to="/Form">Regístra un emprendimiento</Button>
        </Registro>
      </DescriptionSection>
      <ListOfCat />
    </>
  )
}

export default Homes