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
  console.log(payload)
  try {
    const res = yield Api.POST('suscription/pay', payload)
    if (res && res.payload.success) {
      message.success('Tiempo Agregado')
      yield put(addSuscriptionSuccess())
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`)
      yield put(addSuscriptionFailed())
    } else {
      message.error(`Error Desconocido`)
      yield put(addSuscriptionFailed())
    }
  } catch (e) {
    yield put(addSuscriptionFailed(FailedConnectionServer()))
  }
}

function* FetchRemoveTime({ payload }) {
  console.log(payload)
  try {
    const res = yield Api.POST('suscription/remove', payload)
    if (res && res.payload.success) {
      message.success('Tiempo Modificado')
      yield put(removeTimeSuccess())
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`)
      yield put(removeTimeFailed())
    } else {
      message.error(`Error Desconocido`)
      yield put(removeTimeFailed())
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
