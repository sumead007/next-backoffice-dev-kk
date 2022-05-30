import { Login } from "../../types/login.reducer.types";
import * as actions from "../saga/actionTypes";
const initialState: Login = {
  isFailed: false,
  isFetching: false,
  result: "",
  token: "",
  username: "",
  message: "",
  prefix: "",
};

export default (state = initialState, { type, payload }: any): Login => {
  switch (type) {
    case actions.LOGIN_FETCHING:
      return {
        ...state,
        isFetching: true,
        isFailed: false,
        result: "",
        token: "",
        username: "",
        message: "",
        prefix: "",
      };
    case actions.LOGIN_FAILED:
      return {
        ...state,
        isFetching: false,
        isFailed: true,
        result: "",
        token: "",
        username: "",
        message: payload.result.message,
        prefix: "",
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFailed: false,
        result: payload,
        token: payload.result.token,
        username: payload.result.username,
        message: "",
        prefix: payload.result.prefix,
      };
    case actions.LOGOUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
};
