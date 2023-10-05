import {TRow, TTable} from "../../types/table";
import {getEmptyRows} from "../../helpers/getEmptyRows";
import {ICalendarState} from "../../types/calendar";

const DAYS = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
]

const headersRow: TRow = DAYS.map((el) => ({
    value: el,
    checked: false,
    isHead: true,
}))

const ROWS_COUNT = 9

const TABLE: TTable = [
    headersRow,
    ...getEmptyRows(ROWS_COUNT, DAYS.length)
]

const employee: string = '';
const note: string = ''
const isDivided: boolean = false;


export const initialCalendarState: ICalendarState= {
    table: TABLE,
    employee: employee,
    note: note,
    isDivided: isDivided
}