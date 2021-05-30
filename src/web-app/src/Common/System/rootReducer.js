import { combineReducers } from "redux";
import { reducer as userReducer } from "../../Pages/Users/reducer";
import { reducer as boardsReducer } from "../../Pages/Boards/reducer"
import { reducer as boardReducer } from '../../Pages/Board/redux/reducer'

const reducerMap = {
  users: userReducer,
  boards: boardsReducer,
  board: boardReducer
};

export default combineReducers(reducerMap);