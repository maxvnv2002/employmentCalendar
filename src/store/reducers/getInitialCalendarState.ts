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
    isHead: true,
    innerCells: [{isChecked: false}, {isChecked: false}]
}))

const ROWS_COUNT = 9


function getNewTABLE(isDivided: boolean) {
    const TABLE: TTable = [
        headersRow,
        ...getEmptyRows(ROWS_COUNT, DAYS.length, isDivided)
    ]
    return TABLE
}

const employee: string = '';
const note: string = ''
const initialDivide: boolean = false;
const isModalShowed: boolean = false;
const isEmployeeInputEmpty: boolean = false

export function getInitialCalendarState(isDivided = initialDivide) {
    const initialCalendarState: ICalendarState= {
        table: getNewTABLE(isDivided),
        employee: employee,
        note: note,
        isDivided: isDivided,
        isModalShowed: isModalShowed,
        isEmployeeInputEmpty: isEmployeeInputEmpty
    }
    return initialCalendarState
}