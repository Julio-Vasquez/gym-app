import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'

import { logout } from '../services/Auth/AuthSlice'

import reducerAuth, {
  initialState as initialAuth,
} from '../services/Auth/AuthSlice'

import reducerCheck, {
  initialState as initialCheck,
} from '../services/Check/CheckSlice'

import reducerClients, {
  initialState as initialClients,
} from '../services/Clients/ClientsSlice'

import reducerSuscription, {
  initialState as initialSuscription,
} from '../services/Suscription/SuscriptionSlice'

import reducerReport, {
  initialState as initialReport,
} from '../services/Report/ReportSlice'

const appReducers = history =>
  combineReducers({
    router: connectRouter(history),
    Auth: reducerAuth,
    Check: reducerCheck,
    Clients: reducerClients,
    Suscription: reducerSuscription,
    Report: reducerReport,
  })

export const rootReducers = history => (state, action) => {
  if (action.type === 'AUTH/LOGOUT' || action.type === logout().type)
    state = {
      Auth: initialAuth,
      Check: initialCheck,
      Clients: initialClients,
      Suscription: initialSuscription,
      Report: initialReport,
    }
  return appReducers(history)(state, action)
}
