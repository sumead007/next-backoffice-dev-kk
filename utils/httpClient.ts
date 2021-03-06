import axios from "axios";
import Router from "next/router";
import actions from "../redux/actions";

import { kToken } from "./contants";
import { getCookie, removeCookie } from "./cookie";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_API_URL,
});

// export const setInterceptor = (dispatch) => {
// ทุกreuest => api
httpClient.interceptors.request.use((req) => {
  const token = getCookie(kToken);
  // console.log("token:" + token);
  // console.log("test");

  if (token)
    req.headers = {
      // "x-access-token": token,
      Authorization: "Bearer ".concat(token),
    };
  return req;
});

//ทุก response ที่ยิงกลับมา

httpClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // console.log(error);

    if (
      403 === error.response.status ||
      401 === error.response.status ||
      500 === error.response.status ||
      502 === error.response.status ||
      "ERR_NETWORK" === error.code
    ) {
      // dispatch(actions.logout())

      removeCookie("token");
      Router.push("/login");

      // console.log("log logout");
    } else {
      return Promise.reject(error);
    }
  }
);
// };
export default httpClient;
