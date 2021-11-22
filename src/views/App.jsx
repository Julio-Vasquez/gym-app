import { useSelector } from 'react-redux'

import Private from './../Routes/Private'
import Public from '../Routes/Public'

const App = ({ history }) => {
  const { authentication } = useSelector(state => state.Auth)
  return <div className="App">{authentication ? <Private /> : <Public />}</div>
}

export default App
