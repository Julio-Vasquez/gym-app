import { put, takeLatest, all } from "redux-saga/effects";
import { message } from "antd";

import { FailedConnectionServer } from "../Util/FailedConnectionServer";
import Api from "../../common/api";

import { clients } from './ClientsActions';

function* FetchGetClients({ payload }) {
  try {
    const res = yield Api.GET(`users/find/${payload.role}`);
    if (res && res.payload.success) {
      yield put(clients.getClientsSuccess(res.payload.payload))
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`);
      yield put(clients.getClientsFailed(`${res.payload.detail}`))
    } else {
      message.error(`Error Desconocido`);
      yield put(clients.getClientsFailed(new TypeError("ERROR_GET_CLIENTS")));
    }
  } catch (e) {
    yield put(clients.getClientsFailed(FailedConnectionServer()));
  }
}

function* ActionWatcher() {
  yield takeLatest(clients.getClients, FetchGetClients);
}

export default function* ClientSaga() {
  yield all([ActionWatcher()]);
}