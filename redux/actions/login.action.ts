//rxaction
import * as actionTypes from "../saga/actionTypes";

export const login = (payload:any) => ({
  type: actionTypes.LOGIN_REQUEST,
  payload,
});

export const loginFetching = () => ({
  type: actionTypes.LOGIN_FETCHING,
});

export const loginSuccess = (payload:any) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload,
});

export const loginFailed = (payload:any) => ({
  type: actionTypes.LOGIN_FAILED,
  payload,
});

export const logout = () => ({
  type: actionTypes.LOGOUT_REQUEST
})

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
});

export const relogin = (payload:any) => ({
  type: actionTypes.RELOGIN_REQUEST,
  payload
})

export default {
  login,
  loginFetching,
  loginSuccess,
  loginFailed,
  logout,
  logoutSuccess,
  relogin
};
