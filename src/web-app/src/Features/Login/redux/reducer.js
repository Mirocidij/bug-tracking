import initialState from "./initialState";

const ON_START_LOGIN = 'ON_START_LOGIN';
const ON_LOAD_LOGIN_DATA = 'ON_LOAD_LOGIN_DATA';
const ON_END_LOGIN = 'ON_END_LOGIN';

const onStartLoginEvent = () => ({
    type: ON_START_LOGIN
})

const onLoadLoginDataEvent = () => ({
    type: ON_LOAD_LOGIN_DATA
})

const onEndLoginEvent = () => ({
    type: ON_END_LOGIN
})

export function sendLoginRequest(params) {
    return async (dispatch) => {
        await dispatch(onStartLoginEvent());

        await setTimeout(() => dispatch(onEndLoginEvent()), 1000)
    }
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ON_START_LOGIN: {
            console.log("Start login")

            return {
                ...state,
                isDataLoading: true
            }
        }
        case ON_LOAD_LOGIN_DATA: {
            break;
        }
        case ON_END_LOGIN: {
            console.log("End login")

            return {
                ...state,
                isDataLoading: false
            }
        }
        default:
            return state;
    }
}