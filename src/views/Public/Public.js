import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Loading } from './../../components/Loading';

const Login = lazy(() => import('./Login'));

const Public = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Public