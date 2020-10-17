import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { auth } from "../services/Auth/AuthActions";

import reducerAuth, {
  INITIAL_STATE as initialAuth,
} from "./../services/Auth/AuthReducer";

import reducerCheck, {
  INITIAL_STATE as initialCheck,
} from "./../services/Check/CheckReducer";

import reducerClients, {
  INITIAL_STATE as initialClients,
} from "../services/Clients/ClientsReducer";

import reducerSuscription, {
  INITIAL_STATE as initialSuscription,
} from "../services/Suscription/SuscriptionReducer";

const appReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    Auth: reducerAuth,
    Check: reducerCheck,
    Clients: reducerClients,
    Suscription: reducerSuscription,
  });

export const rootReducers = (history) => (state, action) => {
  if (action.type === "AUTH/LOGOUT" || action.type === auth.logout().type)
    state = {
      Auth: initialAuth,
      Check: initialCheck,
      Clients: initialClients,
      Suscription: initialSuscription,
    };
  return appReducers(history)(state, action);
};
