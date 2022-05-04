import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import { sagaLogin } from "./login.saga";

// Login
function* watchLoginRequest() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, sagaLogin);
}

export default function* rootSaga() {
  yield all([watchLoginRequest()]);
}
