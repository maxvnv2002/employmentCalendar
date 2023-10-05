import { getEmptyRows } from "../../helpers/getEmptyRows";
import { TRow, TTable } from "../../types/table";
import * as actions from '../actions/calendarActions'
import {initialCalendarState} from "./getInitialCalendarState";


interface someAction {
    type: string,
    payload?: any
}

export function calendarReducer(state = initialCalendarState, action: someAction) {
    switch (action.type) {
        case actions.setStatus:
            const {rowIndex, cellIndex, checked} = action.payload

            const newTable = [...state.table]

            const currentCell = newTable[rowIndex][cellIndex]
            currentCell.checked = checked

            return {...state, table: [...newTable]}
        case actions.setInputValue:
            return {...state, [action.payload.targetState]: action.payload.value}
        case actions.setInputStatus:
            return {...state, isEmployeeInputEmpty: action.payload}
        case actions.changeModalStatus:
            return {...state, isModalShowed: !state.isModalShowed}
        case actions.setDivideStatus:
            return {...state, isDivided: !state.isDivided}
        default: return state
    }
}