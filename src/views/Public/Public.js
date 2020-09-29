import React, { lazy, Suspense } from "react";
import {
  Router,
  Switch,
  Route,
  Redirect,
} from "react-router";

import { Loading } from "./../../components/Loading";

const Login = lazy(() => import("./Login"));
const ResetPassword = lazy(() => import("./ResetPassword"));

const Public = ({ history }) => {
  return (
    <Router history={history}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/">
            <Login appName="MIND BODY" />
          </Route>
          <Route exact path="/login">
            <Login appName="MIND BODY" />
          </Route>
          <Route exact path="/reset-password">
            <ResetPassword appName="MIND BODY" />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Public;
