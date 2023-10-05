import { createStore } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {calendarReducer} from "./reducers/calendarReducer";


const store = createStore(calendarReducer, composeWithDevTools());

export default store;