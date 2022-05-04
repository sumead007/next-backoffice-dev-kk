import { Login } from "../../types/login.reducer.types";
import * as actions from "../saga/actionTypes";
const initialState: Login = {
  isFailed: false,
  isFetching: false,
  result: null,
  token: "",
  username: "",
};

export default (state = initialState, { type, payload }): Login => {
  switch (type) {
    case actions.LOGIN_FETCHING:
      return {
        ...state,
        isFetching: true,
        isFailed: false,
        result: null,
        token: "",
        username: "",
      };
    case actions.LOGIN_FAILED:
      return {
        ...state,
        isFetching: false,
        isFailed: true,
        result: null,
        token: "",
        username: "",
      };
      case actions.LOGIN_SUCCESS:
        return {
          ...state,
          isFetching: false,
          isFailed: false,
          result: payload,
          token: payload.token,
          username: payload.username,
        };

    default:
      return state;
  }
};
