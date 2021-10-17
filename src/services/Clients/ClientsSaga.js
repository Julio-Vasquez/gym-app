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
    const res = yield Api.GET(`users/find/${payload}`)
    if (res && res.payload.success) {
      yield put(getClientsSuccess({ listClients: res.payload.payload }))
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`)
      yield put(getClientsFailed({ error: `${res.payload.detail}` }))
    } else {
      message.error(`Error Desconocido`)
      yield put(getClientsFailed({ error: new TypeError('ERROR_GET_CLIENTS') }))
    }
  } catch (e) {
    yield put(getClientsFailed({ error: FailedConnectionServer() }))
  }
}

function* FetchCreateClient({ payload }) {
  try {
    const res = yield Api.POST('users/create', payload)
    if (res && res.payload.success) {
      yield put(createClientSuccess({ client: res.payload.payload }))
      message.success('cliente creado')
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`)
      yield put(createClientFailed({ error: `${res.payload.detail}` }))
    } else {
      message.error(`Error Desconocido`)
      yield put(
        createClientFailed({ error: new TypeError('ERROR_CREATE_CLIENT') })
      )
    }
  } catch (e) {
    yield put(createClientFailed({ error: FailedConnectionServer() }))
  }
}

function* FetchUpdateClient({ payload }) {
  console.log(payload)
  try {
    const res = yield Api.PUT('users/update', {
      oldId: payload.identification,
      ...payload.newClient,
    })
    console.log(res)
    if (res && res.payload.success) {
      yield put(updateClientSuccess())
      message.success(res.payload.detail)
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`)
      yield put(updateClientFailed({ error: `${res.payload.detail}` }))
    } else {
      message.error(`Error Desconocido`)
      yield put(
        updateClientFailed({ error: new TypeError('ERROR_CHECK_PEOPLE') })
      )
    }
  } catch (e) {
    yield put(createClientFailed({ error: FailedConnectionServer() }))
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
