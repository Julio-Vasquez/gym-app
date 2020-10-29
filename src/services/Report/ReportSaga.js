import { put, takeLatest, all } from "redux-saga/effects";
import { message } from "antd";

import { FailedConnectionServer } from "../Util/FailedConnectionServer";
import Api from "../../common/api";

import { report } from "./ReportActions";

function* FetchGetPayIdentification({ payload }) {
  try {
    const res = yield Api.GET(`reports/pays-${payload.identification}`);
    if (res && res.payload.success) {
      yield put(report.getPayIdentificationSuccess(res.payload));
    } else if (res.payload?.error) {
      message.error(res.payload.detail);
      yield put(report.getPayIdentificationFailed(res.payload.detail));
    } else {
      message.error(`Error Desconocido`);
      yield put(
        report.getPayIdentificationFailed(new TypeError("ERROR_GET_PAYS"))
      );
    }
  } catch (e) {
    yield put(report.getPayIdentificationFailed(FailedConnectionServer()));
  }
}

function* FetchGetPayDates({ payload }) {
  try {
    const res = yield Api.GET(
      `reports/pays?start=${payload.start}&end=${payload.end}`
    );
    console.log(res);
    if (res && res.payload.success) {
      yield put(report.getPayDatesSuccess(res.payload));
    } else if (res.payload?.error) {
      message.error(res.payload.detail);
      yield put(report.getPayDatesFailed(res.payload.detail));
    } else {
      message.error(`Error Desconocido`);
      yield put(report.getPayDatesFailed(new TypeError("ERROR_GET_PAYS")));
    }
  } catch (e) {
    yield put(report.getPayDatesFailed(FailedConnectionServer()));
  }
}

function* ActionWatcher() {
  yield takeLatest(report.getPayIdentification, FetchGetPayIdentification);
  yield takeLatest(report.getPayDates, FetchGetPayDates);
}

export default function* ReportSaga() {
  yield all([ActionWatcher()]);
}
