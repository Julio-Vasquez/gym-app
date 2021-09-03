import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  error: { message: '', error: undefined },
  errorUpdate: { message: '', error: undefined },
  errorCreate: { message: '', error: undefined },
  success: undefined,
  successCreate: undefined,
  successUpdate: undefined,
  listClients: [],
  create: {},
  update: false,
}

const ClientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    createClient: state => ({ ...state, loading: true }),
    createClientSuccess: (state, { payload: { client } }) => ({
      ...state,
      loading: false,
      successCreate: true,
      listClients: client,
    }),
    createClientFailed: (state, { payload: { error } }) => ({
      ...state,
      errorCreate: { ...state.error, message: error, error: true },
      successCreate: false,
      loading: false,
    }),
    getClients: state => ({
      ...state,
      loading: true,
    }),
    getClientsSuccess: (state, { payload: { listClients } }) => ({
      ...state,
      loading: false,
      success: true,
      listClients: listClients,
    }),
    getClientsFailed: (state, { payload: { error } }) => ({
      ...state,
      error: { ...state.error, message: error, error: true },
      success: false,
      loading: false,
    }),

    updateClient: state => ({ ...state, loading: true }),
    updateClientSuccess: state => ({
      ...state,
      loading: false,
      successUpdate: true,
      update: true,
    }),
    updateClientFailed: (state, { payload: { error } }) => ({
      ...state,
      errorUpdate: { ...state.error, message: error, error: true },
      successUpdate: false,
      loading: false,
    }),
  },
})

export const {
  createClient,
  createClientFailed,
  createClientSuccess,
  getClients,
  getClientsFailed,
  getClientsSuccess,
  updateClient,
  updateClientFailed,
  updateClientSuccess,
} = ClientsSlice.actions

export default ClientsSlice.reducer
