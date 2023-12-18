import { createStore, combineReducers, compose } from "redux";


const rootReduser = combineReducers({});

export const store = createStore(rootReduser{}, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
));