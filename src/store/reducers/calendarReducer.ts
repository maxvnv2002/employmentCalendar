import { getEmptyRows } from "../../helpers/getEmptyRows";
import { TRow, TTable } from "../../types/table";
import * as actions from '../actions/calendarActions'
import {initialCalendarState} from "./getInitialCalendarState";


interface someAction {
    type: string,
    payload: any
}

export function calendarReducer(state = initialCalendarState, action: someAction) {
    switch (action.type) {
        case actions.setStatus:
            const {rowIndex, cellIndex, checked} = action.payload

            const newTable = [...state.table]

            const currentCell = newTable[rowIndex][cellIndex]
            currentCell.checked = checked

            // console.log("action.payload",action.payload);
            // console.log("currentCell",currentCell);

            return {...state, table: [...newTable]}
        case actions.setInputValue:
            console.log([action.payload.targetState], action.payload.value)
            return {...state, [action.payload.targetState]: action.payload.value}
        default: return state
    }
}