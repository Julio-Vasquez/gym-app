import { useSelector } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import Private from './../Routes/Private'
import Public from '../Routes/Public'

const App = ({ history }) => {
  const { authentication } = useSelector(state => state.Auth)
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        {authentication ? (
          <Private history={history} />
        ) : (
          <Public history={history} />
        )}
      </ConnectedRouter>
    </div>
  )
}

export default App
