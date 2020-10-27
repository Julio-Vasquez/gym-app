import { handleActions } from "redux-actions";

export const INITIAL_STATE = {
  loading: false,
  error: {
    byIdentification: { message: "", error: undefined },
    byDates: { message: "", error: undefined },
  },
  success: {
    byIdentification: undefined,
    byDates: undefined,
  },
  peoples: [],
  user: {},
};

const reducerReport = handleActions(
  {
    REPORT: {
      GET_PAY_IDENTIFICATION: (state, { payload }) => ({
        ...state,
        loading: true,
      }),

      GET_PAY_IDENTIFICATION_SUCCESS: {
        next(state, { payload: { user } }) {
          return {
            ...state,
            loading: false,
            success: {
              ...state.success,
              byIdentification: true,
            },
            user: user,
          };
        },
      },
      GET_PAY_IDENTIFICATION_FAILED: (state, { payload: { error } }) => ({
        ...state,
        error: {
          ...state.error,
          byIdentification: {
            ...state.error.byIdentification,
            message: error,
            error: true,
          },
          loading: false,
        },
      }),

      GET_PAY_DATES: (state, { payload }) => ({
        ...state,
        loading: true,
      }),
      GET_PAY_DATES_SUCCESS: {
        next(state, { payload: { peoples } }) {
          return {
            ...state,
            loading: false,
            success: {
              ...state.success,
              byDates: true,
            },
            peoples: peoples,
          };
        },
      },
      GET_PAY_DATES_FAILED: (state, { payload: { error } }) => ({
        ...state,
        error: {
          ...state.error,
          byIdentification: {
            ...state.error.byDates,
            message: error,
            error: true,
          },
          loading: false,
        },
      }),
    },
  },
  INITIAL_STATE
);

export default reducerReport;
