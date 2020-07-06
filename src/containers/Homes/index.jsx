import React from 'react'

import { Hero, ListOfCat } from '../../components'

const Homes = () => {
  return (
    <>
      <Hero />
      <section>
        <h2>¿Qué es Comprando Panameño?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati error amet earum aut, eos magnam nemo. Consectetur, magni. Beatae amet itaque iusto facilis reiciendis eum libero, mollitia ut rem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati error amet earum aut, eos magnam nemo. Consectetur, magni. Beatae amet itaque iusto facilis reiciendis eum libero, mollitia ut rem.</p>

        <h2>¿Conoces algún emprendimiento panameño?</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, accusamus voluptatum! Numquam, debitis labore incidunt quis laboriosam laudantium dolorum harum. Distinctio corrupti, provident impedit porro consequatur assumenda ducimus ullam rem!</p>
        <button>Leer más</button>
      </section>
      <ListOfCat />
    </>
  )
}

export default Homes