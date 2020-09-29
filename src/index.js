import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store, history } from "./store";

import App from "./views/App";
import "./sass/main.scss";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();