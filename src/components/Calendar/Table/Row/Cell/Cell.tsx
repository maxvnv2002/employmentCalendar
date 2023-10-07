import React, {FC, useMemo} from 'react';
import classNames from "classnames";
import classes from './Cell.module.scss';
import {ICell, IDividedCell, TRow, TTable} from '../../../../../types/table';
import store from '../../../../../store';
import { setCellStatus } from '../../../../../store/actions/calendarActionCreators';
import {useSelector} from "react-redux";
import {ICalendarState} from "../../../../../types/calendar";
import InnerCell from "./InnerCell/InnerCell";

interface CellProps {
    cell?: ICell;
    rowIndex: number;
    cellIndex: number;
}

const Cell: FC<CellProps> = React.memo(({rowIndex, cellIndex, cell}) => {
    const isTableDivided = useSelector((state: ICalendarState) => state.isDivided)
    const emptyCell = useSelector((state: ICalendarState) => state.table[rowIndex][cellIndex])
    const currCell = cell ? cell : emptyCell

    const { value, isHead, innerCells } = currCell

    function cellClickHandler (e: React.MouseEvent<HTMLDivElement>, innerCellIndex: number = 0) {
        if(isHead) return
        console.log('click on', rowIndex, cellIndex,innerCellIndex)
        store.dispatch(setCellStatus(rowIndex, cellIndex, innerCellIndex))
    }

    const cellClasses = classNames({
        [classes.cell]: true,
        [classes.head]: isHead,
        [classes.divided]: isTableDivided
    })

    if (!isHead) {
        return (
            <div className={cellClasses}>
                { innerCells.map((innerCell, index: number) => (
                    <InnerCell onClick={(event) => cellClickHandler(event, index)}
                               index={index}
                               isChecked={innerCell.isChecked}
                    />
                ))}
            </div>
        );
    }

    return (
        <div className={cellClasses}>
            {value}
        </div>
    );
});

export default Cell;