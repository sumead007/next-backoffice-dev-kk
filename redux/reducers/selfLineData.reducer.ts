import { SelfLineDataReducer } from "../../types/selfLineData.reducer.types";
import * as actions from "../saga/actionTypes";

const initialState: SelfLineDataReducer = {
  result: null,
  isFailed: false,
  isFetching: false,
};

export default (
  state = initialState,
  { type, payload }
): SelfLineDataReducer => {
  switch (type) {
    case actions.SELF_LINE_DATA_FETCHING:
      return { ...state, result: null, isFetching: true, isFailed: false };
    case actions.SELF_LINE_DATA_FAILED:
      return { ...state, result: null, isFetching: false, isFailed: true };
    case actions.SELF_LINE_DATA_SUCCESS:
      return { ...state, result: payload, isFetching: false, isFailed: false };
    default:
      return state;
  }
};
