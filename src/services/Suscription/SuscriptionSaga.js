import { put, takeLatest, all } from "redux-saga/effects";
import { message } from "antd";

import { FailedConnectionServer } from "../Util/FailedConnectionServer";
import Api from "../../common/api";

import { suscription } from "./SuscriptionActions";

function* FetchAddSuscription({ payload }) {
  try {
    const res = yield Api.POST("suscription/pay", payload.suscription);
    if (res && res.payload.success) {
      yield put(suscription.addSuscriptionSuccess(res.payload.payload));
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`);
      yield put(suscription.addSuscriptionFailed(`${res.payload.detail}`));
    } else {
      message.error(`Error Desconocido`);
      yield put(
        suscription.addSuscriptionFailed(new TypeError("ERROR_GET_CLIENTS"))
      );
    }
  } catch (e) {
    yield put(suscription.addSuscriptionFailed(FailedConnectionServer()));
  }
}

function* FetchRemoveTime({ payload }) {
  try {
    const res = yield Api.POST("suscription/remove", payload.time);
    if (res && res.payload.success) {
      yield put(suscription.removeTimeSuccess(res.payload.payload));
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`);
      yield put(suscription.removeTimeFailed(`${res.payload.detail}`));
    } else {
      message.error(`Error Desconocido`);
      yield put(
        suscription.removeTimeFailed(new TypeError("ERROR_GET_CLIENTS"))
      );
    }
  } catch (e) {
    yield put(suscription.removeTimeFailed(FailedConnectionServer()));
  }
}

function* ActionWatcher() {
  yield takeLatest(suscription.addSuscription, FetchAddSuscription);
  yield takeLatest(suscription.removeTime, FetchRemoveTime);
}

export default function* SuscriptionSaga() {
  yield all([ActionWatcher()]);
}
