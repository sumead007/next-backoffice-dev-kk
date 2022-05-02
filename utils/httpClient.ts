import axios from "axios";
import Router from "next/router";
import actions from "../redux/actions";

import { kToken } from "./contants";
import { getCookie, removeCookie } from "./cookie";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_API_URL,
});
export const setInterceptor = (dispatch) => {
  // ทุกreuest => api
  httpClient.interceptors.request.use((req) => {
    const token = getCookie(kToken);
    if (token) req.headers = { "x-access-token": token };
    return req;
  });

  //ทุก response ที่ยิงกลับมา

  httpClient.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (
        403 === error.response.status ||
        401 === error.response.status ||
        500 === error.response.status
      ) {
        dispatch(actions.logout())
      } else {
        return Promise.reject(error);
      }
    }
  );
};
export default httpClient;
