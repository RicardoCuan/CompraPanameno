import React from "react"
import { Router } from '@reach/router'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const IndexPage = () => (
  <Router>
    <NotFound default /> 
    <Home path='/' />
  </Router>
)

export default IndexPage
