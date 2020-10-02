import { handleActions } from 'redux-actions'

export const INITIAL_STATE = {
  loading: false,
  error: { message: '', error: undefined },
  success: undefined,
  client: {}
}

const reducerCheck = handleActions(
  {
    CHECK: {
      CHECK_PEOPLE: (state, { payload }) => ({
        ...state,
        loading: true,
      }),

      CHECK_PEOPLE_SUCCESS: {
        next(state, { payload: { people } }) {
          return {
            ...state,
            loading: false,
            success: true,
            client: people
          };
        },
      },

      CHECK_PEOPLE_FAILED: (state, { payload: { error } }) => ({
        ...state,
        error: { ...state.error, message: error, error: true },
        success: false,
        loading: false
      })
    }
  },
  INITIAL_STATE
);

export default reducerCheck