import { put, call, select, delay } from "redux-saga/effects";
import actions from "../actions";
import httpClient from "../../utils/httpClient";
import { dResultOk, kResultNok, lResultOk } from "./../../utils/contants";
import Router from "next/router";
import axios from "axios";
import { setCookie, removeCookie, getCookie } from "../../utils/cookie";

export function* sagaLogin({ payload }: any):any {
  try {
    yield put(actions.loginFetching());
    // console.log("test");
    // console.log(payload);

    const response:any = yield call(httpClient.post, "/customer/login", payload);

    //   const response = yield call();
    const { data } = response;
    // console.log(data);

    if (data.result == lResultOk) {
      setCookie("token", data.data.AccessToken);
      yield put(actions.loginSuccess({ result: data.data }));
      // console.log(getCookie("token"));

      Router.push("/home");
    } else {
      yield put(actions.loginFailed({ result: data }));
    }
  } catch (error) {
    // console.log("fail");
    // console.log(error);

    yield put(
      actions.loginFailed({
        result: { message: "มีข้อผิดพลาดอื่นกรุณารอแก้ไข!" },
      })
    );
  }
}

export function* sagaLogout() {
  removeCookie("token");
  console.log("logout");

  yield put(actions.logoutSuccess());
  Router.push("/login");
}

export function* sagaReLogin({ payload }: any):any {
  const state = yield select();

  yield delay(10);
  if (state.loginReducer.token) {
    // Router.push("/home");
  } else if (payload.token) {
    // debugger
    yield put(actions.loginSuccess(payload));
    // Router.push("/home");
  } else {
    const localToken = getCookie("token");

    if (localToken) {
      // console.log("localtojen"+ localToken);

      yield put(actions.loginSuccess({ result: { token: localToken } }));
      Router.push("/home");
    }
  }
}
