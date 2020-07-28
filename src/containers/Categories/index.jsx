import React from 'react'

import { ListOfCards,HeroCat,Button } from '../../components'
import { Registro } from './style'

const Categories = ({id, name, description}) => {
  return (
    <main>
      <HeroCat 
        title = {name}
        description = {description}
      />
      <ListOfCards id = {id} />
      <Registro>
        <h2>¿Conoces algun emprendimiento?</h2>
        <p></p>
        <Button to="/Form">Registra un emprendimiento</Button>
      </Registro>
    </main>
  )
}

export default Categories