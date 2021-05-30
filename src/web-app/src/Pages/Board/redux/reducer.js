import initialState from "./initialState";

const BOARD_DATA_LOADING_START = 'BOARD_DATA_LOADING_START';
const BOARD_DATA_LOAD = 'BOARD_DATA_LOAD';
const BOARD_DATA_LOADING_END = 'BOARD_DATA_LOADING_END';

const boardDataLoadingStartEvent = () => ({
    type: BOARD_DATA_LOADING_START
});
const boardDataLoadEvent = (boardData) => ({
    type: BOARD_DATA_LOAD,
    boardData: boardData
});
const boardDataLoadingEndEvent = () => ({
    type: BOARD_DATA_LOADING_END
});

export function loadBoardData(boardId = 0) {
    return async (dispatch) => {
        await dispatch(boardDataLoadingStartEvent());

        {
            console.log("Test")

            await dispatch(boardDataLoadEvent({}))
        }

        await dispatch(boardDataLoadingEndEvent())
    }
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case BOARD_DATA_LOADING_START: {
            return {
                ...state,
                boardDataIsLoading: true
            }
        }
        case BOARD_DATA_LOAD: {
            return {
                ...state,
                boardData: action.boardData
            }
        }
        case BOARD_DATA_LOADING_END: {
            return {
                ...state,
                boardDataIsLoading: false
            }
        }
        default:
            return state;
    }
}