import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from './rootReducer'
import {loadState, saveState} from "./loadState";

let persistedReduxStore = loadState();

const store = createStore(
    rootReducer,
    persistedReduxStore ? persistedReduxStore : {},
    compose(
        applyMiddleware(thunk)
    ));

store.subscribe(() => {
    saveState(store.getState())
})

export default store;