import React from 'react'

import { ListOfCards,HeroCat } from '../../components'

const Categories = ({ pageContext }) => {
  return (
    <main>
      <HeroCat 
        title = "Titulo de la categoria"
        description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ratione eaque debitis veritatis voluptatem aliquid, cum provident, nostrum fuga non veniam officia qui dolore. Non aperiam quae animi nam deleniti!"
      />
      <ListOfCards />
    </main>
  )
}

export default Categories