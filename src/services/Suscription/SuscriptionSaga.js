import { put, takeLatest, all } from 'redux-saga/effects'
import { message } from 'antd'

import { FailedConnectionServer } from '../Util/FailedConnectionServer'
import Api from '../../common/api'

import {
  addSuscription,
  addSuscriptionFailed,
  addSuscriptionSuccess,
  removeTime,
  removeTimeFailed,
  removeTimeSuccess,
} from './SuscriptionSlice'

function* FetchAddSuscription({ payload }) {
  try {
    const res = yield Api.POST('suscription/pay', payload.suscription)
    if (res && res.payload.success) {
      yield put(addSuscriptionSuccess(res.payload.payload))
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`)
      yield put(addSuscriptionFailed(`${res.payload.detail}`))
    } else {
      message.error(`Error Desconocido`)
      yield put(addSuscriptionFailed(new TypeError('ERROR_GET_CLIENTS')))
    }
  } catch (e) {
    yield put(addSuscriptionFailed(FailedConnectionServer()))
  }
}

function* FetchRemoveTime({ payload }) {
  try {
    const res = yield Api.POST('suscription/remove', payload.time)
    if (res && res.payload.success) {
      yield put(removeTimeSuccess(res.payload.payload))
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`)
      yield put(removeTimeFailed(`${res.payload.detail}`))
    } else {
      message.error(`Error Desconocido`)
      yield put(removeTimeFailed(new TypeError('ERROR_GET_CLIENTS')))
    }
  } catch (e) {
    yield put(removeTimeFailed(FailedConnectionServer()))
  }
}

function* ActionWatcher() {
  yield takeLatest(addSuscription, FetchAddSuscription)
  yield takeLatest(removeTime, FetchRemoveTime)
}

export default function* SuscriptionSaga() {
  yield all([ActionWatcher()])
}
