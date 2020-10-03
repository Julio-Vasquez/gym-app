import { handleActions } from 'redux-actions'

export const INITIAL_STATE = {
  loading: false,
  error: { message: '', error: undefined },
  errorUpdate: { message: '', error: undefined },
  errorCreate: { message: '', error: undefined },
  success: undefined,
  successCreate: undefined,
  successUpdate: undefined,
  listClients: [],
  create: {},
  update: false
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
      }),


      CREATE_CLIENT: (state, { payload }) => ({
        ...state,
        loading: true,
      }),

      CREATE_CLIENT_SUCCESS: {
        next(state, { payload: { client } }) {
          return {
            ...state,
            loading: false,
            successCreate: true,
            listClients: client
          };
        },
      },

      CREATE_CLIENT_FAILED: (state, { payload: { error } }) => ({
        ...state,
        errorCreate: { ...state.error, message: error, error: true },
        successCreate: false,
        loading: false
      }),


      UPDATE_CLIENT: (state, { payload }) => ({
        ...state,
        loading: true,
      }),

      UPDATE_CLIENT_SUCCESS: {
        next(state, { payload: { success } }) {
          return {
            ...state,
            loading: false,
            successUpdate: true,
            update: true
          };
        },
      },

      UPDATE_CLIENT_FAILED: (state, { payload: { error } }) => ({
        ...state,
        errorUpdate: { ...state.error, message: error, error: true },
        successUpdate: false,
        loading: false
      })
    }
  },
  INITIAL_STATE
)

export default reducerClients;
