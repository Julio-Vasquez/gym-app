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
const NewPassword = lazy(() => import("./NewPassword"));

const Public = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/login" exact>
            <Login appName="MIND BODY" />
          </Route>

          <Route exact path="/reset-password">
            <ResetPassword appName="MIND BODY" />
          </Route>

          <Route exact path="/setnewpassword/:token" component={NewPassword}/>
          <Route exact path="/setnewpassword/" component={NewPassword}/>

          <Route path="/" exact>
            <Login appName="MIND BODY" />
          </Route>
          
          <Redirect from="/*" to="/login" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Public;
