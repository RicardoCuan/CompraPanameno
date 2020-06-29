/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require('react')
const Layout = require('./src/components/Layout/index').default

exports.wrapRootElement = ({ element }) => (
  <Layout>
    {element}
  </Layout>
)
