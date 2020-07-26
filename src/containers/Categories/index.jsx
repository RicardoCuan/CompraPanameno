import React from 'react'

import { ListOfCards,HeroCat } from '../../components'

const Categories = ({id, name, description}) => {
  return (
    <main>
      <HeroCat 
        title = {name}
        description = {description}
      />
      <ListOfCards id = {id} />
    </main>
  )
}

export default Categories