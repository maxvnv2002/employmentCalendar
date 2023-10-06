import React, {FC, useMemo} from 'react';
import classNames from "classnames";
import classes from './Cell.module.scss';
import {ICell, IDividedCell, TRow, TTable} from '../../../../../types/table';
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
    const isTableDivided = useSelector((state: ICalendarState) => state.isDivided)
    const {rowIndex, cellIndex} = props
    const { value, checked, isHead, innerCells } = props.cell
    function cellClickHandler (e: React.MouseEvent<HTMLDivElement>, innerCellIndex: number = 0) {
        if(isHead) return

        store.dispatch(setCellStatus(rowIndex, cellIndex, !checked, innerCellIndex))
    }

    const cellClasses = useMemo(() => classNames({
        [classes.cell]: true,
        [classes.checked]: checked,
        [classes.head]: isHead,
        [classes.divided]: isTableDivided
    }), [checked, isHead, isTableDivided])

    if (innerCells && isTableDivided && !isHead) {
        return (
            <div className={cellClasses}>
                { innerCells.map((innerCell, index: number) => (
                    <div className={classNames({
                        [classes.innerCell]: true,
                        [classes.checkedInnerCell]: innerCell.isChecked
                    })}
                         onClick={(event) => cellClickHandler(event, index)}
                    >
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className={cellClasses}>
            {value}
            { !isHead && <div className={classes.innerCell} onClick={(event) => cellClickHandler(event, 0)}></div> }
        </div>
    );
};

export default Cell;