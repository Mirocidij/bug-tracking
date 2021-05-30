import initialState from "./initialState";
import BoardInteractor from "../../DataCore/Interactor/BoardInteractor";

const ON_LOAD_BOARDS = 'ON_LOAD_BOARDS';

const onLoadAllBoardsEvent = (boards) => ({
    type: ON_LOAD_BOARDS,
    boards: boards
});

export function getAllBoards() {
    return async (dispatch) => {
        let boards = await BoardInteractor.getAll();

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