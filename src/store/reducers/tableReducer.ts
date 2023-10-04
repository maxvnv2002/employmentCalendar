import {TableActions} from "../actions/tableActionCreators";
import * as actions from '../actions/tableActions'

interface IInitialState {
    [key: string]: [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]
}


const initialState: IInitialState = {
    'Понедельник' : [true, true, false, false, false, false, false, false, false],
    'Вторник': [false, false, false, false, false, false, false, false, false],
    'Среда': [false, false, false, false, false, false, false, false, false],
    'Четверг': [false, false, false, false, false, false, false, false, false],
    'Пятница': [false, false, false, false, false, false, false, false, false],
    'Суббота': [false, false, false, false, false, false, false, false, false],
    'Воскресенье': [false, false, false, false, false, false, false, false, false]
}
const weekdays = Object.keys(initialState)

export function tableReducer(state = initialState, action: TableActions) {
    switch (action.type) {
        case actions.setStatus:
            const {row, column, status} = action.payload;
            const weekdayState = state[weekdays[column]]
            console.log(weekdayState[row], column, row)

            return {...state}
        default: return state
    }
}