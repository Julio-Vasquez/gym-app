import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { auth } from "../services/Auth/AuthActions";

import reducerAuth, {
  INITIAL_STATE as initialAuth,
} from "./../services/Auth/AuthReducer";

const appReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    Auth: reducerAuth,
  });

console.log(auth.logout().type);

export const rootReducers = (history) => (state, action) => {
  if (action.type === "AUTH/LOGOUT" || action.type === auth.logout().type)
    state = {
      Auth: initialAuth,
    };
  return appReducers(history)(state, action);
};
