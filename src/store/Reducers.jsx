import { combineReducers } from '@reduxjs/toolkit'

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

const appReducers = combineReducers({
  Auth: reducerAuth,
  Check: reducerCheck,
  Clients: reducerClients,
  Suscription: reducerSuscription,
  Report: reducerReport,
})

const rootReducers = (state, action) => {
  if (action.type === 'AUTH/LOGOUT' || action.type === logout().type)
    state = {
      Auth: initialAuth,
      Check: initialCheck,
      Clients: initialClients,
      Suscription: initialSuscription,
      Report: initialReport,
    }
  return appReducers(state, action)
}

export default rootReducers
