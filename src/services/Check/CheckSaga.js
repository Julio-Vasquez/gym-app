import { put, takeLatest, all } from "redux-saga/effects";
import { message } from "antd";

import { FailedConnectionServer } from "../Util/FailedConnectionServer";
import Api from "../../common/api";

import { check } from "./CheckActions";

function* FetchCheckPeople({ payload }) {
  try {
    const res = yield Api.GET(`users/find-${payload.identification}`);
    if (res && res.payload.success) {
      yield put(check.checkPeopleSuccess(res.payload.payload));
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`);
      yield put(check.checkPeopleFailed(`${res.payload.detail}`));
    } else {
      message.error(`Error Desconocido`);
      yield put(check.checkPeopleFailed(new TypeError("ERROR_CHECK_PEOPLE")));
    }
  } catch (e) {
    yield put(check.checkPeopleFailed(FailedConnectionServer()));
  }
}

function* FetchCheckPeopleIn({ payload }) {
  try {
    const res = yield Api.GET(`users/find-in-${payload.identification}`);
    if (res && res.payload.success) {
      yield put(check.checkPeopleInSuccess(res.payload.payload));
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`);
      yield put(check.checkPeopleInFailed(`${res.payload.detail}`));
    } else {
      message.error(`Error Desconocido`);
      yield put(check.checkPeopleInFailed(new TypeError("ERROR_CHECK_PEOPLE")));
    }
  } catch (e) {
    yield put(check.checkPeopleInFailed(FailedConnectionServer()));
  }
}

function* ActionWatcher() {
  yield takeLatest(check.checkPeople, FetchCheckPeople);
  yield takeLatest(check.checkPeopleIn, FetchCheckPeopleIn);
}

export default function* CheckSaga() {
  yield all([ActionWatcher()]);
}
