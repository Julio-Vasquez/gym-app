import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import rootSaga from './Sagas'
import { rootReducers } from './Reducers'

const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

const MiddleWare = () => {
  const routeMiddleware = routerMiddleware()
  let middleware = [sagaMiddleware, routeMiddleware]
  if (true) middleware = [...middleware, logger]
  return middleware
}

const Store = configureStore({
  devTools: true,
  middleware: MiddleWare,
  reducer: rootReducers(history),
})

export { history }
export default Store

sagaMiddleware.run(rootSaga)
