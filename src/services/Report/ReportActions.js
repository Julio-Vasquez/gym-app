import { createActions } from "redux-actions";

export const { report } = createActions({
  REPORT: {
    GET_PAY_IDENTIFICATION: (identification) => ({ identification }),
    GET_PAY_IDENTIFICATION_SUCCESS: (user) => ({ user }),
    GET_PAY_IDENTIFICATION_FAILED: (error) => ({ error }),

    GET_PAY_DATES: (start, end) => ({ start, end }),
    GET_PAY_DATES_SUCCESS: (peoples) => ({ peoples }),
    GET_PAY_DATES_FAILED: (error) => ({ error }),
  },
});
