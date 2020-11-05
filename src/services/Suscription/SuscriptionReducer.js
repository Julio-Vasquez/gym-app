import { handleActions } from "redux-actions";

export const INITIAL_STATE = {
  loading: false,
  success: undefined,
  error: undefined,
  loadingRemove: false,
  successRemove: undefined,
  errorRemove: undefined,
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

      REMOVE_TIME: (state, { payload }) => ({
        ...state,
        loadingRemove: true,
      }),

      REMOVE_TIME_SUCCESS: {
        next(state, { payload: { success } }) {
          return {
            ...state,
            errorRemove: false,
            successRemove: true,
            loadingRemove: false,
          };
        },
      },

      REMOVE_TIME_FAILED: (state, { payload: { error } }) => ({
        ...state,
        errorRemove: true,
        successRemove: false,
      }),
    },
  },
  INITIAL_STATE
);

export default reducerSuscription;
