import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Loading } from "./../../components/Loading";

const Login = lazy(() => import("./Login"));
const ResetPassword = lazy(() => import("./ResetPassword"));

const Public = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/">
            <Login appName="Cool Gym" />
          </Route>
          <Route exact path="/login">
            <Login appName="Cool Gym" />
          </Route>
          <Route exact path="/reset-password">
            <ResetPassword appName="Cool Gym" />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Public;
