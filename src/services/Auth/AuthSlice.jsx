import { createSlice } from '@reduxjs/toolkit'

import { Token } from '../../common/storage'

export const Auth = 'Auth'

export const initialState = {
  authentication: Token.IsTokenValid(),
  loading: false,
  token: Token.GetToken(),
  error: {
    login: undefined,
    ResetPassword: undefined,
    newPassword: undefined,
  },
  success: {
    ResetPassword: undefined,
    newPassword: undefined,
    login: undefined,
  },
}

const AuthSlice = createSlice({
  name: Auth,
  initialState,
  reducers: {
    login: state => ({
      ...state,
      loading: true,
      error: { ...state.error, login: false },
    }),
    loginSuccess: (state, { payload: { token } }) => ({
      ...state,
      authentication: true,
      token: token,
      loading: false,
      success: { ...state.success, login: true },
      error: { ...state.error, login: false },
    }),
    loginFailed: state => ({
      ...state,
      error: { ...state.error, login: true },
      success: { ...state.success, login: false },
      loading: false,
    }),
    logout: state => ({ ...state, authentication: false }),
    resetPassword: state => ({
      ...state,
      loading: true,
      success: { ...state.success, ResetPassword: false },
      error: { ...state.error, ResetPassword: false },
    }),
    resetPasswordSuccess: state => ({
      ...state,
      success: { ...state.success, ResetPassword: true },
      error: { ...state.error, ResetPassword: false },
      loading: false,
    }),
    resetPasswordFailed: (state, { payload: { message } }) => ({
      loading: false,
      success: { ...state.success, ResetPassword: false },
      error: { ...state.error, ResetPassword: message },
    }),
    newPassword: state => ({
      ...state,
      loading: true,
      success: { ...state.success, newPassword: false },
      error: { ...state.error, newPassword: false },
    }),
    newPasswordSuccess: state => ({
      ...state,
      loading: false,
      success: { ...state.success, newPassword: true },
    }),
    newPasswordFailed: (state, { payload: { message } }) => ({
      ...state,
      loading: false,
      error: { ...state.error, newPassword: message },
    }),
  },
})

export const {
  login,
  loginSuccess,
  loginFailed,
  logout,
  resetPassword,
  resetPasswordSuccess,
  resetPasswordFailed,
  newPassword,
  newPasswordSuccess,
  newPasswordFailed,
} = AuthSlice.actions

export default AuthSlice.reducer
