import initialState from "./initialState";
import UserInteractor from "../../DataCore/Interactor/UserInteractor";

const ON_LOAD_USERS = "ON_LOAD_USERS";

const onLoadAllUsersEvent = (users) => ({
  type: ON_LOAD_USERS,
  users: users
});

export function getAllUsers() {
  return async (dispatch) => {
    let users = await UserInteractor.getAll();

    await dispatch(onLoadAllUsersEvent(users));
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ON_LOAD_USERS: {
      return {
        ...state,
        users: action.users
      }
    }
    default:
      return state;
  }
}