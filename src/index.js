import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import Router from './utils/Router'
import './global-styles.scss'

// Layouts
import UnauthorizedLayout from './layouts/UnauthorizedLayout'
import AuthorizedLayout from './layouts/AuthorizedLayout'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={UnauthorizedLayout} />
        <Route path="/dashboard" component={AuthorizedLayout} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
