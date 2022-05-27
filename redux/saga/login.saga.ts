import { put, call } from "redux-saga/effects";
import actions from "../actions";
import httpClient from "../../utils/httpClient";
import { dResultOk, kResultNok, lResultOk } from "./../../utils/contants";
import Router from "next/router";
import axios from "axios";
import { setCookie, removeCookie, getCookie } from "../../utils/cookie";

export function* sagaLogin({ payload }: any) {
  try {
    yield put(actions.loginFetching());
    // console.log("test");
    // console.log(payload);

    const response = yield call(httpClient.post, "/customer/login", payload);

    //   const response = yield call();
    const { data } = response;
    console.log(data);

    if (data.result == lResultOk) {
      setCookie("token", data.data.AccessToken);
      yield put(actions.loginSuccess({ result: data.data }));
      // console.log(getCookie("token"));

      Router.push("/selfLineData");
    } else {
      yield put(actions.loginFailed({ result: data }));
    }
  } catch (error) {
    console.log("fail");
    console.log(error);

    yield put(
      actions.loginFailed({
        result: { message: "มีข้อผิดพลาดอื่นกรุณารอแก้ไข!" },
      })
    );
  }
}

export function* sagaLogout() {
  removeCookie("token");
  yield put(actions.logoutSuccess());
  Router.push("/login");
}