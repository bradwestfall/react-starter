import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import DashboardPage from 'pages/DashboardPage'
import ProductsPage from 'pages/ProductsPage'
import SettingsPage from 'pages/SettingsPage'

// const ProductsPage = React.lazy(() => import('pages/ProductsPage'))
// const SettingsPage = React.lazy(() => import('pages/SettingsPage'))

// const Loading = () => <div>Loading...</div>

export const loadTags = async () => {
  return true
}

const AuthorizedLayout = ({ match }) => {
  return (
    <div className="app">
      <header>
        Header
        <nav>
          <Link to={match.url}>Dashboard</Link> :{' '}
          <Link to={`${match.url}/products`}>Products</Link> :{' '}
          <Link to={`${match.url}/settings`}>Settings</Link>
        </nav>
      </header>
      <main>
        {/* <Suspense fallback={Loading}> */}
        <Switch>
          <Route path={match.url} exact component={DashboardPage} />
          <Route path={`${match.path}/products`} component={ProductsPage} />
          <Route path={`${match.path}/settings`} component={SettingsPage} />
        </Switch>
        {/* </Suspense> */}
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default AuthorizedLayout
