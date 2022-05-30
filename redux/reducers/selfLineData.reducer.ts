import { SelfLineDataReducer } from "../../types/selfLineData.reducer.types";
import * as actions from "../saga/actionTypes";

const initialState: SelfLineDataReducer = {
  result: "",
  isFailed: false,
  isFetching: false,
  data: [],
  pagination: {},
  message: ""
};

export default (
  state = initialState,
  { type, payload }:any
): SelfLineDataReducer => {
  switch (type) {
    case actions.SELF_LINE_DATA_FETCHING:
      return {
        ...state,
        result: "",
        isFetching: true,
        isFailed: false,
        // data: payload.data,
        // pagination: payload.pagination,
      };
    case actions.SELF_LINE_DATA_FAILED:
      return {
        ...state,
        result: "",
        isFetching: false,
        isFailed: true,
        data: [],
        pagination: {},
      };
    case actions.SELF_LINE_DATA_SUCCESS:
      return { ...state, result: payload, isFetching: false, isFailed: false };
    default:
      return state;
  }
};
