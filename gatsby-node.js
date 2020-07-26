/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `dataJson`) {
    const value = createFilePath({
      node,
      getNode
    })
    createNodeField({
      name: `holiwis`,
      node,
      value,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  
  const listOfCat = require.resolve(`./src/templates/Category/index.jsx`)
  return graphql(
    `
    query {
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
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Lista de Categorias
    const catsId = result.data.allDataJson.edges[0].node.categories.map(cat => cat)
    
    // Páginas de Categorías
    catsId.forEach(cat => {
      createPage({
        path: `${cat._id}`,
        component: listOfCat,
        context: {
          id: cat._id,
          name: cat.name
        }
      })
    })

    return null
  })
}
