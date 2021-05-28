import { combineReducers } from "redux";
import { reducer as userReducer } from "../../Pages/Users/reducer";

const reducerMap = {
  users: userReducer
};

export default combineReducers(reducerMap);