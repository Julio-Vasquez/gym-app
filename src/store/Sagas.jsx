import { fork, all } from "redux-saga/effects";

import AuthSaga from "../services/Auth/AuthSaga";
import ClientsSaga from "../services/Clients/ClientsSaga";
import CheckSaga from "../services/Check/CheckSaga";
import SuscriptionSaga from "../services/Suscription/SuscriptionSaga";
import ReportSaga from "../services/Report/ReportSaga";

export default function* rootSaga() {
  yield all([
    fork(AuthSaga),
    fork(ClientsSaga),
    fork(CheckSaga),
    fork(SuscriptionSaga),
    fork(ReportSaga),
  ]);
}
