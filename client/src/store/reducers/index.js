import { combineReducers } from "redux";
import reportReducer from './report';

export const allReducer = combineReducers({
    report: reportReducer,
});

export default allReducer;
