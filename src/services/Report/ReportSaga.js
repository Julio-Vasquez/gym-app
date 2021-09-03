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
  try {
    const res = yield Api.GET(
      `reports/pays?start=${payload.start}&end=${payload.end}`
    )
    if (res && res.payload.success) {
      yield put(getPayDatesSuccess(res.payload))
    } else if (res.payload?.error) {
      message.error(res.payload.detail)
      yield put(getPayDatesFailed(res.payload.detail))
    } else {
      message.error(`Error Desconocido`)
      yield put(getPayDatesFailed(new TypeError('ERROR_GET_PAYS')))
    }
  } catch (e) {
    yield put(getPayDatesFailed(FailedConnectionServer()))
  }
}

function* FetchGetPayIdentification({ payload }) {
  console.log(payload)
  try {
    const res = yield Api.GET(`reports/pays-${payload.identification}`)
    if (res && res.payload.success) {
      yield put(getPayIdentificationSuccess(res.payload))
    } else if (res.payload?.error) {
      message.error(res.payload.detail, 5)
      yield put(getPayIdentificationFailed(res.payload.detail))
    } else {
      message.error(`Error Desconocido`)
      yield put(getPayIdentificationFailed(new TypeError('ERROR_GET_PAYS')))
    }
  } catch (e) {
    yield put(getPayIdentificationFailed(FailedConnectionServer()))
  }
}

function* ActionWatcher() {
  yield takeLatest(getPayIdentification, FetchGetPayIdentification)
  yield takeLatest(getPayDates, FetchGetPayDates)
}

export default function* ReportSaga() {
  yield all([ActionWatcher()])
}
