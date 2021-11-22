import { createSlice } from '@reduxjs/toolkit'

export const Suscription = 'Suscription'

export const initialState = {
  loading: false,
  success: undefined,
  error: undefined,
  loadingRemove: false,
  successRemove: undefined,
  errorRemove: undefined,
}

const SuscriptionSlice = createSlice({
  name: Suscription,
  initialState,
  reducers: {
    addSuscription: state => ({ ...state, loading: true }),
    addSuscriptionSuccess: state => ({
      ...state,
      error: false,
      success: true,
      loading: false,
    }),
    addSuscriptionFailed: state => ({ ...state, error: true, success: false }),

    removeTime: state => ({ ...state, loadingRemove: true }),
    removeTimeSuccess: state => ({
      ...state,
      errorRemove: false,
      successRemove: true,
      loadingRemove: false,
    }),
    removeTimeFailed: state => ({
      ...state,
      errorRemove: true,
      successRemove: false,
    }),
  },
})

export const {
  addSuscription,
  addSuscriptionFailed,
  addSuscriptionSuccess,
  removeTime,
  removeTimeFailed,
  removeTimeSuccess,
} = SuscriptionSlice.actions

export default SuscriptionSlice.reducer
