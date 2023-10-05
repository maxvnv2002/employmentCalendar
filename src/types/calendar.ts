import {TTable} from "./table";

export interface ICalendarState {
    [key: string]: any,
    table: TTable,
    employee: string,
    note: string,
    isDivided: boolean
}
