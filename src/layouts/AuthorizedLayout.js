import React, { Suspense } from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'

import DashboardPage from '../pages/DashboardPage'

// Example code splitting by route
const ProductsPage = React.lazy(() => import('../pages/ProductsPage'))
const SettingsPage = React.lazy(() => import('../pages/SettingsPage'))

const Loading = () => <div>Loading...</div>

export default function AuthorizedLayout() {
  const match = useRouteMatch()

  return (
    <div className="app">
      <header>
        Header
        <nav>
          <Link to={match.url}>Dashboard</Link> : <Link to={`${match.url}/products`}>Products</Link>{' '}
          : <Link to={`${match.url}/settings`}>Settings</Link>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path={match.url} exact component={DashboardPage} />
            <Route path={`${match.path}/products`} render={() => <ProductsPage />} />
            <Route path={`${match.path}/settings`} render={() => <SettingsPage />} />
          </Switch>
        </Suspense>
      </main>
      <footer>Footer</footer>
    </div>
  )
}
