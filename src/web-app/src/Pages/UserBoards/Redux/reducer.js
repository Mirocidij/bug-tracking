import initialState from "./initialState";
import BoardInteractor from "../../../DataCore/Interactor/BoardInteractor";
import { ON_LOAD_BOARDS } from './actionTypes'

const onLoadAllBoardsEvent = (boards) => ({
  type: ON_LOAD_BOARDS,
  boards: boards
});

export function getAllBoards() {
  return async (dispatch) => {
    let boards = await BoardInteractor.getAll();

    console.log(boards)

    await dispatch(onLoadAllBoardsEvent(boards))
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ON_LOAD_BOARDS: {
      return {
        ...state,
        boards: action.boards
      }
    }
    default:
      return state;
  }
}