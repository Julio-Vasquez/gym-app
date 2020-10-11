import { put, takeLatest, all } from "redux-saga/effects";
import { message } from "antd";

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

const FetchLogout = () => localStorage.clear();

function* FetchForgotPassword({ payload }) {
  try {
    const res = yield Api.POST("auth/request-forgot-password", payload);
    if (res && res.payload.success) {
      yield put(auth.resetPasswordSuccess("ok"));
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

function* FetchNewPassword({ payload }) {
  console.log(payload);
  try {
    const res = yield Api.PUT("auth/forgot-password", payload);
    console.log(res);
    if (res && res.payload.success) {
      yield put(auth.newPasswordSuccess("ok"));
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`, 5);
      yield put(auth.newPasswordFailed(`${res.payload.detail}`));
    } else {
      message.error(`Error Desconocido`);
      const err = new TypeError("ERROR_RESET_PASSWORD");
      yield put(auth.newPasswordFailed(err));
    }
  } catch (e) {
    yield put(auth.newPasswordFailed(FailedConnectionServer()));
  }
}

function* ActionWatcher() {
  yield takeLatest(auth.login, FetchLogin);
  yield takeLatest(auth.resetPassword, FetchForgotPassword);
  yield takeLatest(auth.logout, FetchLogout);
  yield takeLatest(auth.newPassword, FetchNewPassword)
}

export default function* AuthSaga() {
  yield all([ActionWatcher()]);
}
