//rxaction
import * as actionTypes from "../saga/actionTypes";

export const login = (payload) => ({
  type: actionTypes.LOGIN_REQUEST,
  payload,
});

export const loginFetching = () => ({
  type: actionTypes.LOGIN_FETCHING,
});

export const loginSuccess = (payload) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload,
});

export const loginFailed = () => ({
  type: actionTypes.LOGIN_FAILED,
});

export default {
    login,
    loginFetching,
    loginSuccess,
    loginFailed,
  };