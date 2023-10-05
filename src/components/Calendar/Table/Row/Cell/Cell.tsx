import React, {FC} from 'react';
import classNames from "classnames";
import classes from './Cell.module.scss';
import {ICell, TRow, TTable} from '../../../../../types/table';
import store from '../../../../../store';
import { setCellStatus } from '../../../../../store/actions/calendarActionCreators';
import {useSelector} from "react-redux";
import {ICalendarState} from "../../../../../types/calendar";

interface CellProps {
    cell: ICell;
    rowIndex: number;
    cellIndex: number;
}

const Cell: FC<CellProps> = (props) => {
    const {rowIndex, cellIndex} = props
    const { value, checked, isHead } = props.cell
    const isCellChecked = useSelector((state: ICalendarState) => state.table);
    function cellClickHandler (e: React.MouseEvent<HTMLDivElement>) {
        if(isHead) return

        store.dispatch(setCellStatus(rowIndex, cellIndex, !checked))
    }

    const cellClasses = classNames({
        [classes.cell]: true,
        [classes.checked]: checked,
        [classes.head]: isHead,
    })

    return (
        <div className={cellClasses} onClick={cellClickHandler}>
            {value}
        </div>
    );
};

export default Cell;