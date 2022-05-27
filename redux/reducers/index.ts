import { combineReducers } from "redux";
import selfLineDataReducer from "./selfLineData.reducer";
import loginReducer from "./login.reducer";

export default combineReducers({
  loginReducer,
  selfLineDataReducer,
});
