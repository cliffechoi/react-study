import {combineReducers} from 'redux';
import {playerReducer} from "./players";

// init state => {playerReducer: playerReducer 의 리턴 값}
export const rootReducer = combineReducers({playerReducer: playerReducer});