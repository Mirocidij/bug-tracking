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
      await dispatch(boardDataLoadEvent({ boardId }))
    }

    await dispatch(boardDataLoadingEndEvent())
  }
}

const ON_DRAG_END = 'ON_DRAG_END';
const onDragEndEvent = (newBoardState) => ({
  type: ON_DRAG_END,
  newBoardState: newBoardState
});

export function onDragEnd(result) {
  const { destination, source, draggableId, type } = result;

  if (!destination) {
    return () => {
    }
  }

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return () => {
    }
  }

  return async (dispatch, getState) => {
    const previousState = getState().board;

    let newBoardState;

    if (type === 'column') {
      const newColumnOrder = Array.from(previousState.columnOrder);
      newColumnOrder.splice(source.index, 1)
      newColumnOrder.splice(destination.index, 0, draggableId)

      newBoardState = {
        ...previousState,
        columnOrder: newColumnOrder
      }
    } else {
      const start = previousState.columns[source.droppableId];
      const finish = previousState.columns[destination.droppableId];

      if (start === finish) {
        const newTasksIds = Array.from(start.tasksIds);
        newTasksIds.splice(source.index, 1);
        newTasksIds.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...start,
          tasksIds: newTasksIds
        };

        newBoardState = {
          ...previousState,
          columns: {
            ...previousState.columns,
            [newColumn.id]: newColumn
          }
        }
      } else {
        const startTaskIds = Array.from(start.tasksIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
          ...start,
          tasksIds: startTaskIds,
        }

        const finishTasksIds = Array.from(finish.tasksIds);
        finishTasksIds.splice(destination.index, 0, draggableId)
        const newFinish = {
          ...finish,
          tasksIds: finishTasksIds
        }

        newBoardState = {
          ...previousState,
          columns: {
            ...previousState.columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish,
          }
        }
      }
    }

    await dispatch(onDragEndEvent(newBoardState));
  }
}

const ON_SAVE_NEW_CARD = 'ON_SAVE_NEW_CARD';
const onSaveNewCardEvent = (columnId, newCard) => ({
  type: ON_SAVE_NEW_CARD,
  newCard: newCard,
  columnId: columnId
});

export function saveNewCard(columnId, newCard) {
  return async (dispatch) => {
    await dispatch(onSaveNewCardEvent(columnId, newCard));
  }
}

const ON_ADD_NEW_COLUMN = 'ON_ADD_NEW_COLUMN';
const onAddNewColumnEvent = (newColumn) => ({
  type: ON_ADD_NEW_COLUMN,
  newColumn: newColumn
})

export function addNewColumn(newColumn) {
  return async (dispatch, getState) => {
    const { lastColumnId } = getState().board;

    await dispatch(onAddNewColumnEvent({
      id: lastColumnId + 1,
      title: 'Test column',
      tasksIds: []
    }))
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
        ...action.boardData
      }
    }
    case BOARD_DATA_LOADING_END: {
      return {
        ...state,
        boardDataIsLoading: false
      }
    }
    case ON_SAVE_NEW_CARD: {
      const card = action.newCard;
      const cardId = card.id;
      const newCardId = card.id ? card.id : '' + (++state.lastTaskId);
      card.id = newCardId;
      state.tasks[newCardId] = card;

      if (card.id !== cardId) {
        state.columns[action.columnId].tasksIds.push(newCardId);
      }

      return state;
    }
    case ON_ADD_NEW_COLUMN: {
      const column = action.newColumn;

      const newLastColumnId = column.id;
      const newColumnOrder = Array.from(state.columnOrder);
      const newId = 'column-' + newLastColumnId;
      column.id = newId;
      const newColumns = {
        ...state.columns,
        [newId]: column
      }
      newColumnOrder.push(newId)

      const newState = {
        ...state,
        lastColumnId: newLastColumnId,
        columns: newColumns,
        columnOrder: newColumnOrder
      }

      console.log(newState)

      return newState;
    }
    case ON_DRAG_END: {
      return {
        ...state,
        ...action.newBoardState
      }
    }
    default:
      return state;
  }
}