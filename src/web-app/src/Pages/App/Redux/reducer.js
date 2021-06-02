import initialState from "./initialState";

const ON_CHANGE_BACKGROUND_STATE = 'ON_CHANGE_BACKGROUND_STATE';
const onChangeBackgroundStateEvent = () => ({
  type: ON_CHANGE_BACKGROUND_STATE
})

export function changeBackgroundState() {
  return async (dispatch) => {
    dispatch(onChangeBackgroundStateEvent())
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ON_CHANGE_BACKGROUND_STATE: {
      const { backgroundIsPicture } = state;

      return {
        ...state,
        backgroundIsPicture: !backgroundIsPicture
      };
    }
    default:
      return state;
  }
}