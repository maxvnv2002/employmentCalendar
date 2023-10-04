import * as actions from './tableActions'

export const setCellStatus = (row: number, column: number, status: boolean) => ({
    type: actions.setStatus,
    payload: {row, column, status}
})

export type TableActions = ReturnType<typeof setCellStatus>