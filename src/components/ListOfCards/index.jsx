import React from 'react'

import { Card } from '../../components'
import { List,ListItem } from './style'

const ListOfCards = ({ pageContext }) => {
  return (
    <main>
      <List>
        {
          [1,2,3,4,5,6].map(item => (
            <ListItem>
              <Card />
            </ListItem>
          ))
        }
      </List>
    </main>
  )
}

export default ListOfCards