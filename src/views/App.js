import React from "react";
import { useSelector } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import Private from "./Private/Private";
import Public from "./Public/Public";

function App({ history }) {
  const { authentication } = useSelector((state) => state.Auth);
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        {authentication ? <Private history={history} /> : <Public />}
      </ConnectedRouter>
    </div>
  );
}

export default App;
