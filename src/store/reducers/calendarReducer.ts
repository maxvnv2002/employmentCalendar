import * as actions from '../actions/calendarActions'
import {getInitialCalendarState} from "./getInitialCalendarState";

const initialCalendarState = getInitialCalendarState()

interface someAction {
    type: string,
    payload?: any
}

export function calendarReducer(state = initialCalendarState, action: someAction) {
    switch (action.type) {
        case actions.setStatus:
            const {rowIndex, cellIndex, innerCellIndex} = action.payload

            const currentCell = JSON.parse(JSON.stringify(state.table[rowIndex][cellIndex]))
            const currentInnerCell = currentCell.innerCells[innerCellIndex]
            currentInnerCell.isChecked = !currentInnerCell.isChecked

            state.table[rowIndex][cellIndex] = currentCell

            return {...state, table: state.table}
        case actions.setInputValue:
            return {...state, [action.payload.targetState]: action.payload.value}
        case actions.setInputStatus:
            return {...state, isEmployeeInputEmpty: action.payload}
        case actions.changeModalStatus:
            return {...state, isModalShowed: !state.isModalShowed}
        case actions.setDivideStatus:
            return {...state, isDivided: !state.isDivided}
        case actions.resetCalendar:
            return {...getInitialCalendarState(!state.isDivided)}
        default: return state
    }
}