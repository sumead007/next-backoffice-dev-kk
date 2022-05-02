import { put, call } from "redux-saga/effects";
import actions from "../actions";
import httpClient from "../../utils/httpClient";
import { kResultOk, kResultNok } from "./../../utils/contants";
import Router from "next/router";
import axios from "axios";

export function* sagaRegister({ payload }: any) {
  try {
    yield put(actions.selfLineDataFetching());
    // const response = yield call(httpClient.post, "/authen/register", payload);
      const response = yield call(axios.get("https://randomuser.me/api?results=10&page=1&pagination%5Bcurrent%5D=1&pagination%5BpageSize%5D=10"));
    const { results } = response.data;
    if (result == kResultOk) {
      yield put(actions.selfLineDataSuccess({ result: response.data }));
    //   Router.push("/login");
    } else {
      yield put(actions.selfLineDataFailed());
    }
  } catch (error) {
    yield put(actions.selfLineDataFailed());
  }
}
