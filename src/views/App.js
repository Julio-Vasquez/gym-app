import React from "react";
import { useSelector } from "react-redux";

import Private from "./Private/Private";
import Public from "./Public/Public";

function App({ history }) {
  const { authentication } = useSelector((state) => state.Auth);
  return (
    <div className="App">
      {authentication
        ? <Private history={history} />
        : <Public history={history} />
      }
    </div>
  );
}

export default App;