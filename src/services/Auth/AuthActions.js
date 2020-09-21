import { createActions } from "redux-actions";

export const { auth } = createActions({
  AUTH: {
    LOGIN: (userName, password) => ({ userName, password }),
    LOGIN_SUCCESS: (username) => ({ username }),
    LOGIN_FAILED: (error) => ({ error }),

    LOGOUT: () => ({}),

    RESET_PASSWORD: (userName) => ({ userName }),
    RESET_PASSWORD_SUCCESS: (success) => ({ success }),
    RESET_PASSWORD_FAILED: (error) => ({ error }),
  },
});
