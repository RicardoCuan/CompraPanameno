import React from "react"
import styled from 'styled-components'

import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Wrap>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Wrap>
  </>
)

const Wrap = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;

  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
`

export default NotFoundPage
