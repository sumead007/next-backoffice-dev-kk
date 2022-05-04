import { put, call } from "redux-saga/effects";
import actions from "../actions";
import httpClient from "../../utils/httpClient";
import { kResultOk, kResultNok } from "./../../utils/contants";
import Router from "next/router";
import axios from "axios";

export function* sagaLogin({ payload }: any) {
  try {
    yield put(actions.selfLineDataFetching());
    // console.log("test");

    const response = yield call(httpClient.post, "/authen/login", payload);
    //   const response = yield call();
    const { results } = response.data;
    if (result == kResultOk) {
      yield put(actions.loginSuccess({ result: response.data }));
      //   Router.push("/login");
    } else {
      yield put(actions.loginFailed());
    }
  } catch (error) {
    yield put(actions.loginFailed());
  }
}
