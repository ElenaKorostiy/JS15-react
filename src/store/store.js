import {combineReducers, compose, createStore, applyMiddleware } from "redux";
import { wordsReducer, learnedWordsReducer } from "./words/reducer";
import { productsReducer } from "./products/reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  words: wordsReducer,
  learnedWords: learnedWordsReducer,
  products: productsReducer,
});
    
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    {},
    composeEnhancer(applyMiddleware(thunk)),
);