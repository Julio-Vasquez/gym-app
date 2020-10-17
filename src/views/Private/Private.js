import React, { lazy, Suspense } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import { Loading } from "./../../components/Loading";
import Layout from "./Layout";

const Check = lazy(() => import("./Check"));
const Clients = lazy(() => import("./Clients"));
const Trainers = lazy(() => import("./Trainers"));
const Dashboard = lazy(() => import("./Dashboard"));

const Private = ({ history }) => {
  return (
    <Layout appName="MIND BODY APP">
      <Router history={history}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Dashboard} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/check" component={Check} />
            <Route exact path="/trainers" component={Trainers} />
            <Redirect from="/login" to="/" />
          </Switch>
        </Suspense>
      </Router>
    </Layout>
  );
};

export default Private;
