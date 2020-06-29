/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import {
  Header,
  Footer
} from '..'
import { GlobalStyle } from '../../style/Global'
import { Container } from './style'

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
