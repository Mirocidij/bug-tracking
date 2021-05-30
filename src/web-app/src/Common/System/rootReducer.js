import { combineReducers } from "redux";
import { reducer as userReducer } from "../../Features/Users/reducer";
import { reducer as boardsReducer } from "../../Features/Boards/reducer"
import { reducer as boardReducer } from '../../Features/Board/redux/reducer'

const reducerMap = {
  users: userReducer,
  boards: boardsReducer,
  board: boardReducer
};

export default combineReducers(reducerMap);