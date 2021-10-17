import { put, takeLatest, all } from 'redux-saga/effects'
import { message } from 'antd'

import { FailedConnectionServer } from '../Util/FailedConnectionServer'
import Api from '../../common/api'

import {
  getPayDates,
  getPayDatesFailed,
  getPayDatesSuccess,
  getPayIdentification,
  getPayIdentificationFailed,
  getPayIdentificationSuccess,
} from './ReportSlice'

function* FetchGetPayDates({ payload }) {
  console.log(payload)
  try {
    const res = yield Api.GET(
      `reports/pays?start=${payload.start}&end=${payload.end}`
    )
    if (res && res.payload.success) {
      yield put(getPayDatesSuccess({ peoples: res.payload }))
    } else if (res.payload?.error) {
      message.error(res.payload.detail)
      yield put(getPayDatesFailed({ error: res.payload.detail }))
    } else {
      message.error(`Error Desconocido`)
      yield put(getPayDatesFailed({ error: new TypeError('ERROR_GET_PAYS') }))
    }
  } catch (e) {
    yield put(getPayDatesFailed({ error: FailedConnectionServer() }))
  }
}

function* FetchGetPayIdentification({ payload }) {
  console.log(payload)
  try {
    const res = yield Api.GET(`reports/pays-${payload}`)
    if (res && res.payload.success) {
      yield put(getPayIdentificationSuccess({ user: res.payload }))
    } else if (res.payload?.error) {
      message.error(res.payload.detail, 5)
      yield put(getPayIdentificationFailed({ error: res.payload.detail }))
    } else {
      message.error(`Error Desconocido`)
      yield put(
        getPayIdentificationFailed({ error: new TypeError('ERROR_GET_PAYS') })
      )
    }
  } catch (e) {
    yield put(getPayIdentificationFailed({ error: FailedConnectionServer() }))
  }
}

function* ActionWatcher() {
  yield takeLatest(getPayIdentification, FetchGetPayIdentification)
  yield takeLatest(getPayDates, FetchGetPayDates)
}

export default function* ReportSaga() {
  yield all([ActionWatcher()])
}
