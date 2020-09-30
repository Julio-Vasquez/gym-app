import { put, takeLatest, all } from "redux-saga/effects";
import { message } from "antd";
import { push } from "connected-react-router";

import Api from "../../common/api";
import { Token } from "../../common/storage";

import { FailedConnectionServer } from "../Util/FailedConnectionServer";

import { auth } from "./AuthActions";

function* FetchLogin({ payload }) {
  console.log(push)
  console.log(payload);
  try {
    const res = yield Api.POST("auth/login", payload);
    if (res && res.payload.success) {
      console.log('entro al IF');
      Token.SetToken(res.payload.token);
      yield put(auth.loginSuccess(res.payload.token));
      console.log('antes');
      push("/admin/dashboard");
      console.log('despues');
    } else if (res.payload.error) {
      console.log('else IF');
      message.error(`${res.payload.detail}`);
      yield put(auth.loginFailed(`${res.payload.detail}`));
    } else {
      console.log('else');
      message.error(`Error Desconocido`);
      const err = new TypeError("ERROR_LOGIN");
      yield put(auth.loginFailed(err));
    }
  } catch (e) {
    yield put(auth.loginFailed(FailedConnectionServer()));
  }
}

function* FetchLogout() {
  sessionStorage.clear();
  yield push('/');
};

function* FetchForgotPassword({ payload }) {
  try {
    const res = yield Api.POST("auth/request-forgot-password", payload);
    console.log('entro al IF');
    if (res && res.payload.success) {
      console.log('case true');
      yield put(auth.resetPasswordSuccess("ok"));
      yield put(push("/"));
    } else if (res.payload.error) {
      console.log('else IF');
      message.error(`${res.payload.detail}`, 3);
      yield put(auth.resetPasswordFailed(`${res.payload.detail}`));
    } else {
      console.log('else');
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
  yield takeLatest(auth.logout, FetchLogout);
  yield takeLatest(auth.resetPassword, FetchForgotPassword);
}

export default function* AuthSaga() {
  yield all([ActionWatcher()]);
}
