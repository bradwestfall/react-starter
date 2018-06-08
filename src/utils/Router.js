import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

// Handle routes with trailing slashes
// https://github.com/ReactTraining/react-router/pull/4357
const Router = ({ children }) => (
  <BrowserRouter>
    <Route render={({ history: { location: { pathname, search, hash } } }) => (
      pathname !== '/' && pathname.slice(-1) === '/'
        ? <Redirect to={`${pathname.slice(0, -1)}${search}${hash}`} />
        : children
    )} />
  </BrowserRouter>
)

export default Router