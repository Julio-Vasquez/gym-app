import { put, takeLatest, all } from 'redux-saga/effects'
import { message } from 'antd'

import { FailedConnectionServer } from '../Util/FailedConnectionServer'
import Api from '../../common/api'

import {
  createClient,
  createClientFailed,
  createClientSuccess,
  getClients,
  getClientsFailed,
  getClientsSuccess,
  updateClient,
  updateClientFailed,
  updateClientSuccess,
} from './ClientsSlice'

function* FetchGetClients({ payload }) {
  try {
    const res = yield Api.GET(`users/find/${payload.role}`)
    if (res && res.payload.success) {
      yield put(getClientsSuccess(res.payload.payload))
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`)
      yield put(getClientsFailed(`${res.payload.detail}`))
    } else {
      message.error(`Error Desconocido`)
      yield put(getClientsFailed(new TypeError('ERROR_GET_CLIENTS')))
    }
  } catch (e) {
    yield put(getClientsFailed(FailedConnectionServer()))
  }
}

function* FetchCreateClient({ payload }) {
  try {
    const res = yield Api.POST('users/create', payload.client)
    if (res && res.payload.success) {
      yield put(createClientSuccess(res.payload.payload))
      message.success('cliente creado')
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`)
      yield put(createClientFailed(`${res.payload.detail}`))
    } else {
      message.error(`Error Desconocido`)
      yield put(createClientFailed(new TypeError('ERROR_CREATE_CLIENT')))
    }
  } catch (e) {
    yield put(clients.createClientFailed(FailedConnectionServer()))
  }
}

function* FetchUpdateClient({ payload }) {
  try {
    const res = yield Api.PUT('users/update', {
      oldId: payload.identification,
      ...payload.newClient,
    })
    if (res && res.payload.success) {
      yield put(updateClientSuccess(res.payload.success))
      message.success(res.payload.detail)
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`)
      yield put(updateClientFailed(`${res.payload.detail}`))
    } else {
      message.error(`Error Desconocido`)
      yield put(updateClientFailed(new TypeError('ERROR_CHECK_PEOPLE')))
    }
  } catch (e) {
    yield put(createClientFailed(FailedConnectionServer()))
  }
}

function* ActionWatcher() {
  yield takeLatest(getClients, FetchGetClients)
  yield takeLatest(createClient, FetchCreateClient)
  yield takeLatest(updateClient, FetchUpdateClient)
}

export default function* ClientSaga() {
  yield all([ActionWatcher()])
}
