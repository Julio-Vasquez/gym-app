import React, { lazy, Suspense } from "react";
import {
  Router,
  Switch,
  Route,
  Redirect,
} from "react-router";

import { Loading } from "./../../components/Loading";
import Layout from "./Layout";

const Check = lazy(() => import('./Check'));
const Clients = lazy(() => import("./Users"));
//const DashBoard = lazy(() => import("./DashBoard"));

const Private = ({ history }) => {
  return (
    <Layout
      appName="Cool Gym App"
      logo="https://i.pinimg.com/originals/6c/44/e8/6c44e8d2cc9dca61e592c09cb9f82286.jpg"
    >
      <Router history={history}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/">
              hola
            </Route>
            {/*<Route exact path="/dashboard" component={DashBoard} />*/}
            <Route exact path="/clients" component={Users} />
            <Route exact path="/check" component={Check} />
            <Redirect from="*" to="/" />
          </Switch>
        </Suspense>
      </Router>
    </Layout>
  );
};

export default Private;
