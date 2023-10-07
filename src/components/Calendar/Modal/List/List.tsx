import React, {FC, useRef} from 'react';
import {TTable} from "../../../../types/table";
import {DAYS} from "../../../../store/reducers/getInitialCalendarState";
import classes from './List.module.scss';
import classNames from "classnames";
import {useSelector} from "react-redux";
import {ICalendarState} from "../../../../types/calendar";

interface ListProps {
    array: TTable
}

const List: FC<ListProps> = ({array} ) => {
    const isTableDivided = useSelector((state: ICalendarState) => state.isDivided)
    const listRef = useRef<HTMLUListElement | null>(null);
    const listChildren = listRef.current?.children;
    const listClasses = classNames({
        [classes.hidden]: listChildren && listChildren.length > 1,
    })

    return (
        <ul className={classes.list} ref={listRef}>{
            DAYS.map((day, dayIndex) => {
                const daysChecked = array.reduce((acc, curr, i) => {
                    const currentDayIndex = curr[dayIndex]
                    const currDayCells = currentDayIndex.innerCells

                    if (currDayCells) {
                        const isWholeCellChecked = currDayCells.every((cell) => cell.isChecked)
                        const isSomeCellChecked = currDayCells.some((cell) => cell.isChecked)

                        const startOfNewCell = acc ? ', ' : ''

                        if (isWholeCellChecked) {
                            acc += `${startOfNewCell}${i}`
                        } else if (isSomeCellChecked){
                            acc += `${startOfNewCell}${i}/${currDayCells.findIndex(cell => cell.isChecked) + 1}`
                        }
                    }
                    return acc
                }, '')
                if (daysChecked) {
                    return <li key={day}>{`${day}: ${daysChecked}`}</li>
                }
            })
        }

            <li className={listClasses}>Дни недели не были выбраны</li>
        </ul>
    );

};

export default List;