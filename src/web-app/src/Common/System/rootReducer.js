import { combineReducers } from "redux";
import { reducer as userReducer } from "../../Pages/Users/reducer";
import { reducer as boardsReducer } from "../../Pages/UserBoards/Redux/reducer"
import { reducer as boardReducer } from '../../Pages/Board/Redux/reducer'
import { reducer as appReducer } from '../../Pages/App/Redux/reducer'

const reducerMap = {
  users: userReducer,
  boards: boardsReducer,
  board: boardReducer,
  app: appReducer
};

export default combineReducers(reducerMap);