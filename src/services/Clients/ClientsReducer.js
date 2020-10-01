import { handleActions } from 'redux-actions'

export const INITIAL_STATE = {
  loading: false,
  error: { message: '', error: undefined },
  success: undefined,
  listClients: []
}

const reducerClients = handleActions(
  {
    CLIENTS: {
      GET_CLIENTS: (state, { payload }) => ({
        ...state,
        loading: true,
      }),

      GET_CLIENTS_SUCCESS: {
        next(state, { payload: { listCLients } }) {
          return {
            ...state,
            loading: false,
            success: true,
            listClients: listCLients
          };
        },
      },

      GET_CLIENTS_FAILED: (state, { payload: { error } }) => ({
        ...state,
        error: { ...state.error, message: error, error: true },
        success: false,
        loading: false
      })
    }
  },
  INITIAL_STATE
)

export default reducerClients;
