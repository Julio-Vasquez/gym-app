import { put, takeLatest, all } from "redux-saga/effects";
import { message } from "antd";

import { history } from './../../store'

import Api from "../../common/api";
import { Token } from "../../common/storage";

import { FailedConnectionServer } from "../Util/FailedConnectionServer";

import { auth } from "./AuthActions";

function* FetchLogin({ payload }) {
  try {
    const res = yield Api.POST("auth/login", payload);
    if (res && res.payload.success) {
      Token.SetToken(res.payload.token);
      yield put(auth.loginSuccess(res.payload.token));
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`);
      yield put(auth.loginFailed(`${res.payload.detail}`));
    } else {
      message.error(`Error Desconocido`);
      const err = new TypeError("ERROR_LOGIN");
      yield put(auth.loginFailed(err));
    }
  } catch (e) {
    yield put(auth.loginFailed(FailedConnectionServer()));
  }
}

const FetchLogout = () => sessionStorage.clear();

function* FetchForgotPassword({ payload }) {
  try {
    const res = yield Api.POST("auth/request-forgot-password", payload);
    if (res && res.payload.success) {
      yield put(auth.resetPasswordSuccess("ok"));
      yield history.push("/");
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`, 3);
      yield put(auth.resetPasswordFailed(`${res.payload.detail}`));
    } else {
      message.error(`Error Desconocido`);
      const err = new TypeError("ERROR_RESET_PASSWORD");
      yield put(auth.resetPasswordFailed(err));
    }
  } catch (e) {
    yield put(auth.resetPasswordFailed(FailedConnectionServer()));
  }
}

function* ActionWatcher() {
  yield takeLatest(auth.login, FetchLogin);
  yield takeLatest(auth.resetPassword, FetchForgotPassword);
  yield takeLatest(auth.logout, FetchLogout);
}

export default function* AuthSaga() {
  yield all([ActionWatcher()]);
}
