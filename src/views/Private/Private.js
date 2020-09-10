import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Loading } from './../../components/Loading';

const Users = lazy(() => import('./Users'));


const Private = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/users" component={Users} />
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </Router>
  )
};

export default Private;
