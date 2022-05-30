import { put, call } from "redux-saga/effects";
import actions from "../actions";
import httpClient from "../../utils/httpClient";
import { kResultNok } from "./../../utils/contants";
import Router from "next/router";
import axios from "axios";

export function* sagaSelfLineData({ payload }: any):any {
  try {
    yield put(actions.selfLineDataFetching());
    const response = yield call(
      httpClient.get,
      "/customer/reference/list?limit=10&page=1"
    );
    // console.log(response);

    // yield put(actions.selfLineDataSuccess(response.data));
  } catch (error) {
    yield put(actions.selfLineDataFailed());
  }
}
