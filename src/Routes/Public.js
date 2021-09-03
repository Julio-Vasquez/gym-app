import React, { lazy, Suspense } from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom'

import { Loading } from '../components/Loading'

const Login = lazy(() => import('../views/Public/Login'))
const ResetPassword = lazy(() => import('../views/Public/ResetPassword'))
const NewPassword = lazy(() => import('../views/Public/NewPassword'))

const Public = ({ history }) => {
  return (
    <Router history={history}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/login" exact>
            <Login appName="APOLO GYM" />
          </Route>

          <Route exact path="/reset-password">
            <ResetPassword appName="APOLO GYM" />
          </Route>

          <Route exact path="/setnewpassword/:token" component={NewPassword} />
          <Route exact path="/setnewpassword/" component={NewPassword} />

          <Route path="/" exact>
            <Login appName="APOLO GYM" />
          </Route>

          <Redirect from="/*" to="/login" />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Public
