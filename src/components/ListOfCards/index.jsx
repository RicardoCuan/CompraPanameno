import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Card } from '../../components'
import { List,ListItem } from './style'

const ListOfCards = ({id}) => {
  
  const data = useStaticQuery( graphql`
    query Cats {
      dataJson {
        categories {
          _id
          account {
            _id
            img
            name
            description
            instagram
            facebook
            whatsapp
            website
          }
        }
      }
    }
  `)

  const cats = data.dataJson.categories.filter(function(cat){
    return cat._id === id
  })
  console.log(cats)

  return (
    <main>
      <List>
        {
          cats[0].account.map(cat => (
            <ListItem>
              <Card 
                title={cat.name}
                // province={}
                desc={cat.description}
                whatsapp={cat.whatsapp}
                instagram={cat.instagram}
                facebook={cat.facebook}
                website={cat.website}
              />
            </ListItem>
          ))
        }
      </List>
    </main>
  )
}

export default ListOfCards


