import { put, takeLatest, all } from 'redux-saga/effects'
import { message } from 'antd'

import { FailedConnectionServer } from '../Util/FailedConnectionServer'
import Api from '../../common/api'

import {
  checkPeople,
  checkPeopleFailed,
  checkPeopleIn,
  checkPeopleInFailed,
  checkPeopleInSuccess,
  checkPeopleSuccess,
} from './CheckSlice'

function* FetchCheckPeople({ payload }) {
  try {
    const res = yield Api.GET(`users/find-${payload.identification}`)
    if (res && res.payload.success) {
      yield put(checkPeopleSuccess(res.payload.payload))
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`)
      yield put(checkPeopleFailed(`${res.payload.detail}`))
    } else {
      message.error(`Error Desconocido`)
      yield put(checkPeopleFailed(new TypeError('ERROR_CHECK_PEOPLE')))
    }
  } catch (e) {
    yield put(checkPeopleFailed(FailedConnectionServer()))
  }
}

function* FetchCheckPeopleIn({ payload }) {
  try {
    const res = yield Api.GET(`users/find-entry-${payload.identification}`)
    if (res && res.payload.success) {
      yield put(checkPeopleInSuccess(res.payload.payload))
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`)
      yield put(checkPeopleInFailed(`${res.payload.detail}`))
    } else {
      message.error(`Error Desconocido`)
      yield put(checkPeopleInFailed(new TypeError('ERROR_CHECK_PEOPLE')))
    }
  } catch (e) {
    yield put(checkPeopleInFailed(FailedConnectionServer()))
  }
}

function* ActionWatcher() {
  yield takeLatest(checkPeople, FetchCheckPeople)
  yield takeLatest(checkPeopleIn, FetchCheckPeopleIn)
}

export default function* CheckSaga() {
  yield all([ActionWatcher()])
}
