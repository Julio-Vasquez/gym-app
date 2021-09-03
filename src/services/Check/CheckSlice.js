import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  error: { message: '', error: undefined },
  success: undefined,
  client: {},
}

const CheckSlice = createSlice({
  name: 'check',
  initialState,
  reducers: {
    checkPeople: (state, { payload }) => ({
      ...state,
      loading: true,
    }),
    checkPeopleSuccess: (state, { payload: { people } }) => ({
      ...state,
      loading: false,
      success: true,
      client: people,
    }),
    checkPeopleFailed: (state, { payload: { error } }) => ({
      ...state,
      error: { ...state.error, message: error, error: true },
      success: false,
      loading: false,
    }),

    checkPeopleIn: (state, { payload }) => ({
      ...state,
      loading: true,
    }),
    checkPeopleInSuccess: (state, { payload: { people } }) => ({
      ...state,
      loading: false,
      success: true,
      client: people,
    }),
    checkPeopleInFailed: (state, { payload: { error } }) => ({
      ...state,
      error: { ...state.error, message: error, error: true },
      success: false,
      loading: false,
    }),
  },
})

export const {
  checkPeople,
  checkPeopleFailed,
  checkPeopleIn,
  checkPeopleInFailed,
  checkPeopleInSuccess,
  checkPeopleSuccess,
} = CheckSlice.actions
export default CheckSlice.reducer
