import * as actions from './calendarActions'

export const setCellStatus = (rowIndex: number,
                              cellIndex: number,
                              checked: boolean,
                              innerCellIndex: number) => (
{
    type: actions.setStatus,
    payload: {rowIndex, cellIndex, checked, innerCellIndex}
})

export const setInputValue = (targetState: string, value: string) => ({
    type: actions.setInputValue,
    payload: {targetState, value}

})

export const setInputEmptyStatus = (boolean: boolean) => ({
    type: actions.setInputStatus,
    payload: boolean
})

export const changeModalStatus = () => ({
    type: actions.changeModalStatus
})

export const setDivideStatus = () => ({
    type: actions.setDivideStatus
})

export const resetCalendar = () => ({
    type: actions.resetCalendar
})
// export type TableActions =