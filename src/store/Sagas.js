import { fork, all } from "redux-saga/effects";

import AuthSaga from "../services/Auth/AuthSaga";
import ClientsSaga from '../services/Clients/ClientsSaga';

export default function* rootSaga() {
  yield all(
    [
      fork(AuthSaga),
      fork(ClientsSaga)
    ]
  );
}
