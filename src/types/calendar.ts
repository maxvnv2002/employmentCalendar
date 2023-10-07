import {TTable} from "./table";

export interface ICalendarState {
    table: TTable,
    employee: string,
    note: string,
    isDivided: boolean,
    isModalShowed: boolean,
    isEmployeeInputEmpty: boolean
}
