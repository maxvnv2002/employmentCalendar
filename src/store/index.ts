import { combineReducers, createStore } from 'redux';
import {tableReducer} from "./reducers/tableReducer";
import {composeWithDevTools} from "redux-devtools-extension";
const rootReducer = combineReducers({table: tableReducer})

const store = createStore(rootReducer, composeWithDevTools());

export default store;