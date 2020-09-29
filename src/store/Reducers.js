import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { auth } from "../services/Auth/AuthActions";

import reducerAuth, {
  INITIAL_STATE as initialAuth,
} from "./../services/Auth/AuthReducer";
import reducerCheck, {
  INITIAL_STATE as initialCheck,
} from './../services/Check/CheckReducer';

const appReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    Auth: reducerAuth,
    Check: reducerCheck
  });

console.log(auth.logout().type);

export const rootReducers = (history) => (state, action) => {
  if (action.type === "AUTH/LOGOUT" || action.type === auth.logout().type)
    state = {
      Auth: initialAuth,
      Check: initialCheck
    };
  return appReducers(history)(state, action);
};
