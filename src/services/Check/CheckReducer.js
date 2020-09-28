import { handleActions } from "redux-actions";

export const INITIAL_STATE = {
  loading: false,
  error: undefined,
  success: undefined,
  people: undefined
}

const reducerCheck = handleActions(
  {
    CHECK: {
      CHECK_PEOPLE: (state, { payload }) => ({
        ...state,
        loading: true,
        error: false,
      }),

      CHECK_PEOPLE_SUCCESS: {
        next(state, { payload: { people } }) {
          return {
            ...state,
            loading: false,
            success: true,
            error: false,
            people: people
          };
        },
      },

      CHECK_PEOPLE_FAILED: (state, { payload: { error } }) => ({
        ...state,
        loading: false,
        success: false,
        error: true,
        people: undefined
      }),
    }
  },
  INITIAL_STATE
);

export default reducerCheck;