import { logger } from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import RootSaga from './Sagas'
import RootReducers from './Reducers'

const sagaMiddleware = createSagaMiddleware()

const MiddleWare = () => {
  let middleware = [sagaMiddleware]
  if (true) middleware = [...middleware, logger]
  return middleware
}

const Store = configureStore({
  devTools: true,
  middleware: MiddleWare,
  reducer: RootReducers,
})

export default Store

sagaMiddleware.run(RootSaga)
