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
    const res = yield Api.GET(`users/find-${payload}`)
    if (res && res.payload.success) {
      yield put(checkPeopleSuccess({ people: res.payload.payload }))
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`)
      yield put(checkPeopleFailed({ error: `${res.payload.detail}` }))
    } else {
      message.error(`Error Desconocido`)
      yield put(
        checkPeopleFailed({ error: new TypeError('ERROR_CHECK_PEOPLE') })
      )
    }
  } catch (e) {
    yield put(checkPeopleFailed({ error: FailedConnectionServer() }))
  }
}

function* FetchCheckPeopleIn({ payload }) {
  console.log(payload)
  try {
    const res = yield Api.GET(`users/find-entry-${payload}`)
    if (res && res.payload.success) {
      yield put(checkPeopleInSuccess({ people: res.payload.payload }))
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`)
      yield put(checkPeopleInFailed({ error: `${res.payload.detail}` }))
    } else {
      message.error(`Error Desconocido`)
      yield put(
        checkPeopleInFailed({ error: new TypeError('ERROR_CHECK_PEOPLE') })
      )
    }
  } catch (e) {
    yield put(checkPeopleInFailed({ error: FailedConnectionServer() }))
  }
}

function* ActionWatcher() {
  yield takeLatest(checkPeople, FetchCheckPeople)
  yield takeLatest(checkPeopleIn, FetchCheckPeopleIn)
}

export default function* CheckSaga() {
  yield all([ActionWatcher()])
}
