import { combineReducers } from "redux";

import { auth } from "./../services/Auth/actions";

import reducerAuth, {
  INITIAL_STATE as initialAuth,
} from "./../services/Auth/reducer";

const appReducers = combineReducers({
  Auth: reducerAuth,
});

console.log(auth.logout().type);

export const rootReducers = (state, action) => {
  if (action.type === "AUTH/LOGOUT" || action.type === auth.logout().type)
    state = {
      Auth: initialAuth,
    };
  return appReducers(state, action);
};
