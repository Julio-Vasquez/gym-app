import React from "react";
import { useSelector } from "react-redux";

import Private from "./Private/Private";
import Public from "./Public/Public";

function App() {
  const { authentication } = useSelector((state) => state.Auth);
  //console.log(authentication);
  //const auth = true;
  return <div className="App">{authentication ? <Private /> : <Public />}</div>;
}

export default App;
