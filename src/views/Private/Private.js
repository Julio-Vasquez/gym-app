import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Loading } from "./../../components/Loading";
import Layout from "./Layout";

const Users = lazy(() => import("./Users"));

const Private = () => {
  return (
    <Layout
      appName="Cool Gym App"
      logo="https://i.pinimg.com/originals/6c/44/e8/6c44e8d2cc9dca61e592c09cb9f82286.jpg"
    >
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/users" component={Users} />
            <Redirect from="*" to="/" />
          </Switch>
        </Suspense>
      </Router>
    </Layout>
  );
};

export default Private;
