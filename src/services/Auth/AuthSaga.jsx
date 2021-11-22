import { put, takeLatest, all } from 'redux-saga/effects'
import { message } from 'antd'

import Api from '../../common/api'
import { Token } from '../../common/storage'

import { FailedConnectionServer } from '../Util/FailedConnectionServer'

import {
  login,
  loginFailed,
  loginSuccess,
  logout,
  newPassword,
  newPasswordFailed,
  newPasswordSuccess,
  resetPassword,
  resetPasswordFailed,
  resetPasswordSuccess,
} from './AuthSlice'

function* FetchLogin({ type, payload }) {
  try {
    const res = yield Api.POST('auth/login', payload)
    if (res && res.payload.success) {
      Token.SetToken(res.payload.token)
      yield put(loginSuccess(res.payload.token))
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`)
      yield put(loginFailed(`${res.payload.detail}`))
    } else {
      message.error(`Error Desconocido`)
      const err = new TypeError('ERROR_LOGIN')
      yield put(loginFailed(err))
    }
  } catch (e) {
    yield put(loginFailed(FailedConnectionServer()))
  }
}

const FetchLogout = () => localStorage.clear()

function* FetchForgotPassword({ payload }) {
  console.log(payload)
  try {
    const res = yield Api.POST('auth/request-forgot-password', {
      userName: payload,
    })
    console.log(res)
    if (res && res.payload.success) {
      yield put(resetPasswordSuccess('ok'))
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`, 3)
      yield put(resetPasswordFailed(`${res.payload.detail}`))
    } else {
      message.error(`Error Desconocido`)
      const err = new TypeError('ERROR_RESET_PASSWORD')
      yield put(resetPasswordFailed(err))
    }
  } catch (e) {
    yield put(resetPasswordFailed(FailedConnectionServer()))
  }
}

function* FetchNewPassword({ payload }) {
  try {
    const res = yield Api.PUT('auth/forgot-password', payload)
    if (res && res.payload.success) {
      yield put(newPasswordSuccess('ok'))
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`, 5)
      yield put(newPasswordFailed(`${res.payload.detail}`))
    } else {
      message.error(`Error Desconocido`)
      const err = new TypeError('ERROR_RESET_PASSWORD')
      yield put(newPasswordFailed(err))
    }
  } catch (e) {
    yield put(newPasswordFailed(FailedConnectionServer()))
  }
}

function* ActionWatcher() {
  yield takeLatest(login, FetchLogin)
  yield takeLatest(resetPassword, FetchForgotPassword)
  yield takeLatest(logout, FetchLogout)
  yield takeLatest(newPassword, FetchNewPassword)
}

export default function* AuthSaga() {
  yield all([ActionWatcher()])
}
