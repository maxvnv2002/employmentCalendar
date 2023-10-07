import { getEmptyRows } from "../../helpers/getEmptyRows";
import { TRow, TTable } from "../../types/table";
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
            const newTable = JSON.parse(JSON.stringify([...state.table]))
            const currentCell = {...newTable[rowIndex][cellIndex]}
            const currentInnerCell = {...currentCell}.innerCells[innerCellIndex];

            const stateCell = state.table[rowIndex][cellIndex]
            const stateInnerCell = stateCell.innerCells[innerCellIndex]

            currentInnerCell.isChecked = !stateInnerCell.isChecked


            return {...state, table: [...newTable]}
        case actions.setInputValue:
            return {...state, [action.payload.targetState]: action.payload.value}
        case actions.setInputStatus:
            return {...state, isEmployeeInputEmpty: action.payload}
        case actions.changeModalStatus:
            console.log(state)
            return {...state, isModalShowed: !state.isModalShowed}
        case actions.setDivideStatus:
            return {...state, isDivided: !state.isDivided}
        case actions.resetCalendar:
            return {...getInitialCalendarState(!state.isDivided)}
        default: return state
    }
}