import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import Router from 'utils/Router'

const App = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route path="" render={() => {
          return <div>Home Page</div>
        }}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))