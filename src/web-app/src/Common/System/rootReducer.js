import { combineReducers } from "redux";
import { reducer as userReducer } from "../../Pages/Users/reducer";
import { reducer as boardsReducer } from "../../Pages/Boards/reducer"
import { reducer as loginReducer } from '../../Features/Login/redux/reducer'
import { reducer as boardReducer } from '../../Features/Board/redux/reducer'

const reducerMap = {
  users: userReducer,
  boards: boardsReducer,
  login: loginReducer,
  board: boardReducer
};

export default combineReducers(reducerMap);