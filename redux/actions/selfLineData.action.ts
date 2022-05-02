//rxaction
import * as actionTypes from "../saga/actionTypes";

export const selfLineData = (payload) => ({
  type: actionTypes.SELF_LINE_DATA_REQUEST,
  payload,
});

export const selfLineDataFetching = () => ({
  type: actionTypes.SELF_LINE_DATA_FETCHING,
});

export const selfLineDataSuccess = (payload) => ({
  type: actionTypes.SELF_LINE_DATA_SUCCESS,
  payload,
});

export const selfLineDataFailed = () => ({
  type: actionTypes.SELF_LINE_DATA_FAILED,
});

export default {
  selfLineData,
  selfLineDataFetching,
  selfLineDataSuccess,
  selfLineDataFailed,
};
