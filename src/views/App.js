import React from 'react';

import Private from './Private/Private';
import Public from './Public/Public';

function App() {

  const auth = true;

  return (
    <div className="App">
      {auth ? <Private /> : <Public />}
    </div>
  );
}

export default App;
