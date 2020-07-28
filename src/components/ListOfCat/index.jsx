import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Cat } from '../../components'
import { 
  Wrap,
  List,
  ListItem
} from './style'

const ListOfCat = () => {

  const data = useStaticQuery( graphql`
    query ListOfCat {
      allDataJson(sort: {fields: id, order: ASC}) {
        edges {
          node {
            categories {
              _id
              name
            }
          }
        }
      }
    }
  `)

  const cats = data.allDataJson.edges[0].node.categories
  console.log({cats})
  return (
    <Wrap>
      <List>
        {
          cats.map(cat => (
            <ListItem key={cat._id}>
              <Cat
                id={cat._id}
                title={cat.name}
              />
            </ListItem>
          ))
        }
      </List>
    </Wrap>
  )
}

export default ListOfCat
