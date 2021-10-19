import React, { lazy, Suspense } from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom'

import { Loading } from '../components/Loading'
import Layout from '../views/Private/Layout'

const Check = lazy(() => import('../views/Private/Check'))
const Clients = lazy(() => import('../views/Private/Clients'))
const Trainers = lazy(() => import('../views/Private/Trainers'))
const Dashboard = lazy(() => import('../views/Private/Dashboard'))
const Pays = lazy(() => import('../views/Private/Pays'))

const Private = ({ history }) => {
  return (
    <Layout appName="APOLO GYM">
      <Router history={history}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Dashboard} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/check" component={Check} />
            <Route exact path="/trainers" component={Trainers} />
            <Route exact path="/pays" component={Pays} />
            <Redirect from="/login" to="/" />
          </Switch>
        </Suspense>
      </Router>
    </Layout>
  )
}

export default Private
