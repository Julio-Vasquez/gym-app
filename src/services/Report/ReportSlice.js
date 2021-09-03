import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  error: {
    byIdentification: { message: '', error: undefined },
    byDates: { message: '', error: undefined },
  },
  success: {
    byIdentification: undefined,
    byDates: undefined,
  },
  peoples: {},
  user: {},
}

const ReportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    getPayDates: state => ({ ...state, loading: true }),
    getPayDatesSuccess: (state, { payload: { peoples } }) => ({
      ...state,
      loading: false,
      success: {
        ...state.success,
        byDates: true,
        byIdentification: false,
      },
      peoples: peoples,
    }),
    getPayDatesFailed: (state, { payload: { error } }) => ({
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
    getPayIdentification: state => ({ ...state, loading: true }),
    getPayIdentificationSuccess: (state, { payload: { user } }) => ({
      ...state,
      loading: false,
      success: {
        ...state.success,
        byIdentification: true,
        byDates: false,
      },
      user: user,
    }),
    getPayIdentificationFailed: (state, { payload: { error } }) => ({
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
  },
})

export const {
  getPayDates,
  getPayDatesFailed,
  getPayDatesSuccess,
  getPayIdentification,
  getPayIdentificationFailed,
  getPayIdentificationSuccess,
} = ReportSlice.actions
export default ReportSlice.reducer
