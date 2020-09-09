import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Loading } from './../../components/Loading';


const Private = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route />
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Private
