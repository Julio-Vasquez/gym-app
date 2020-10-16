import React, { lazy, Suspense } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import { Loading } from "./../../components/Loading";
import Layout from "./Layout";

const Check = lazy(() => import("./Check"));
const Clients = lazy(() => import("./Clients"));
const Trainers = lazy(() => import("./Trainers"));

const Private = ({ history }) => {
  return (
    <Layout appName="MIND BODY APP">
      <Router history={history}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/">
              hola
            </Route>
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/check" component={Check} />
            <Route exact path="/trainers" component={Trainers} />
            <Redirect from="*" to="/" />
          </Switch>
        </Suspense>
      </Router>
    </Layout>
  );
};

export default Private;
