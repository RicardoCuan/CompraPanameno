import React from 'react'

import { Cat } from '../../components'
import { 
  Wrap,
  List,
  ListItem
} from './style'

const ListOfCat = () => {
  return (
    <Wrap>
      <List>
        {
          [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(item => (
            <ListItem key={item}>
              <Cat />
            </ListItem>
          ))
        }
      </List>
    </Wrap>
  )
}

export default ListOfCat
