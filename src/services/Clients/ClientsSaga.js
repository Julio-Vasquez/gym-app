import { put, takeLatest, all } from "redux-saga/effects";
import { message } from "antd";

import { FailedConnectionServer } from "../Util/FailedConnectionServer";
import Api from "../../common/api";

import { clients } from "./ClientsActions";

function* FetchGetClients({ payload }) {
  try {
    const res = yield Api.GET(`users/find/${payload.role}`);
    if (res && res.payload.success) {
      yield put(clients.getClientsSuccess(res.payload.payload));
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`);
      yield put(clients.getClientsFailed(`${res.payload.detail}`));
    } else {
      message.error(`Error Desconocido`);
      yield put(clients.getClientsFailed(new TypeError("ERROR_GET_CLIENTS")));
    }
  } catch (e) {
    yield put(clients.getClientsFailed(FailedConnectionServer()));
  }
}

function* FetchCreateClient({ payload }) {
  console.log(payload);
  try {
    const res = yield Api.POST("users/create", payload.client);
    console.log(res);
    if (res && res.payload.success) {
      yield put(clients.createClientSuccess(res.payload.payload));
      message.success("cliente creado");
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`);
      yield put(clients.createClientFailed(`${res.payload.detail}`));
    } else {
      message.error(`Error Desconocido`);
      yield put(
        clients.createClientFailed(new TypeError("ERROR_CREATE_CLIENT"))
      );
    }
  } catch (e) {
    yield put(clients.createClientFailed(FailedConnectionServer()));
  }
}

function* FetchUpdateClient({ payload }) {
  console.log(payload);
  try {
    const res = yield Api.PUT("users/update", {
      oldId: payload.identification,
      ...payload.newClient,
    });
    console.log(res);
    if (res && res.payload.success) {
      yield put(clients.updateClientSuccess(res.payload.success));
      message.success(res.payload.detail);
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`);
      yield put(clients.updateClientFailed(`${res.payload.detail}`));
    } else {
      message.error(`Error Desconocido`);
      yield put(
        clients.updateClientFailed(new TypeError("ERROR_CHECK_PEOPLE"))
      );
    }
  } catch (e) {
    yield put(clients.createClientFailed(FailedConnectionServer()));
  }
}

function* ActionWatcher() {
  yield takeLatest(clients.getClients, FetchGetClients);
  yield takeLatest(clients.createClient, FetchCreateClient);
  yield takeLatest(clients.updateClient, FetchUpdateClient);
}

export default function* ClientSaga() {
  yield all([ActionWatcher()]);
}
