import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Loading } from './../../components/Loading';
import Layout from './Layout';

const Users = lazy(() => import('./Users'));


const Private = () => {
  return (
    <Layout>
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/users" component={Users} />
            <Redirect from="*" to="/" />
          </Switch>
        </Suspense>
      </Router>
    </Layout>
  )
};

export default Private;
