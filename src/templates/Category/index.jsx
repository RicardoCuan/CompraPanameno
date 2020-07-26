import React from "react"

import { SEO } from "../../components"
import { Categories } from '../../containers'

const Category = ({pageContext}) => {
  const { id, name, description } = pageContext
  return (
    <>
      <SEO 
        title={name}
        description={description}
      />
      <Categories 
        id = {id}
        name = {name}
        description = {description}
      />
    </>
  )
}

export default Category