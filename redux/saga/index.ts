import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import { sagaLogin, sagaLogout, sagaReLogin } from "./login.saga";
import { sagaSelfLineData } from "./selfLineData.saga";

// Login
function* watchLoginRequest() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, sagaLogin);
}

function* watchSelfLineData() {
  yield takeEvery(actionTypes.SELF_LINE_DATA_REQUEST, sagaSelfLineData);
}

// Logout
function* watchLogoutRequest() {
  yield takeEvery(actionTypes.LOGOUT_REQUEST, sagaLogout);
}

// ReLogin
function* watchReLoginRequest() {
  yield takeEvery(actionTypes.RELOGIN_REQUEST, sagaReLogin);
}

export default function* rootSaga() {
  yield all([
    watchLoginRequest(),
    watchSelfLineData(),
    watchLogoutRequest(),
    watchReLoginRequest(),
  ]);
}
