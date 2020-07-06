import React from "react"
import { Router } from '@reach/router'

import Home from '../pages/Home'
import Form from '../pages/Form'
import NotFound from '../pages/NotFound'

const IndexPage = () => (
  <Router>
    <NotFound default /> 
    <Home path='/' />
    <Form path='/agregar' />
  </Router>
)

export default IndexPage
