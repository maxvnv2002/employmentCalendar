import {TRow, TTable} from "../../types/table";
import {getEmptyRows} from "../../helpers/getEmptyRows";
import {ICalendarState} from "../../types/calendar";

export const DAYS = [
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


function getNewTABLE() {
    const TABLE: TTable = [
        headersRow,
        ...getEmptyRows(ROWS_COUNT, DAYS.length)
    ]
    return TABLE
}

const employee: string = '';
const note: string = ''
const isDivided: boolean = false;
const isModalShowed: boolean = false;
const isEmployeeInputEmpty: boolean = false

export function getInitialCalendarState() {
    const initialCalendarState: ICalendarState= {
        table: getNewTABLE(),
        employee: employee,
        note: note,
        isDivided: isDivided,
        isModalShowed: isModalShowed,
        isEmployeeInputEmpty: isEmployeeInputEmpty
    }
    return initialCalendarState
}