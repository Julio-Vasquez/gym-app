import { handleActions } from "redux-actions";

export const INITIAL_STATE = {
  loading: false,
  success: undefined,
  error: undefined,
};

const reducerSuscription = handleActions(
  {
    SUSCRIPTION: {
      ADD_SUSCRIPTION: (state, { payload }) => ({
        ...state,
        loading: true,
      }),

      ADD_SUSCRIPTION_SUCCESS: {
        next(state, { payload: { success } }) {
          return {
            ...state,
            error: false,
            success: true,
            loading: false,
          };
        },
      },

      ADD_SUSCRIPTION_FAILED: (state, { payload: { error } }) => ({
        ...state,
        error: true,
        success: false,
      }),
    },
  },
  INITIAL_STATE
);

export default reducerSuscription;
