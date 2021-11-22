import { combineReducers } from '@reduxjs/toolkit'

import reducerAuth, {
  initialState as initialAuth,
  Auth,
  logout,
} from '../services/Auth/AuthSlice'

import reducerCheck, {
  initialState as initialCheck,
  Check,
} from '../services/Check/CheckSlice'

import reducerClients, {
  initialState as initialClients,
  Clients,
} from '../services/Clients/ClientsSlice'

import reducerSuscription, {
  initialState as initialSuscription,
  Suscription,
} from '../services/Suscription/SuscriptionSlice'

import reducerReport, {
  initialState as initialReport,
  Report,
} from '../services/Report/ReportSlice'

const appReducers = combineReducers({
  [Auth]: reducerAuth,
  [Check]: reducerCheck,
  [Clients]: reducerClients,
  [Suscription]: reducerSuscription,
  [Report]: reducerReport,
})

const rootReducers = (state, action) => {
  if (action.type === 'AUTH/LOGOUT' || action.type === logout().type)
    state = {
      [Auth]: initialAuth,
      [Check]: initialCheck,
      [Clients]: initialClients,
      [Suscription]: initialSuscription,
      [Report]: initialReport,
    }
  return appReducers(state, action)
}

export default rootReducers
