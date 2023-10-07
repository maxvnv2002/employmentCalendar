import {FC, useRef} from 'react';
import {TTable} from "../../../types/table";
import {DAYS} from "../../../store/reducers/getInitialCalendarState";
import classes from './List.module.scss';
import classNames from "classnames";

interface ListProps {
    array: TTable
}

const List: FC<ListProps> = ({array} ) => {
    const listRef = useRef<HTMLUListElement | null>(null);
    const listChildren = listRef.current?.children;
    const listClasses = classNames({
        [classes.hidden]: listChildren && listChildren.length > 1,
    })

    function getDayItemInfo(day: string, dayIndex: number) {
        const dayCellsChecked = array.reduce((acc, curr, i) => {
            const currentDayIndex = curr[dayIndex]
            const currDayCells = currentDayIndex.innerCells

            if (!currDayCells) return acc

            const isWholeCellChecked = currDayCells.every((cell) => cell.isChecked)
            const isSomeCellChecked = currDayCells.some((cell) => cell.isChecked)

            const startOfNewCell = acc ? ', ' : ''

            if (isWholeCellChecked) {
                acc += `${startOfNewCell}${i}`
                return acc
            }

            if (isSomeCellChecked){
                acc += `${startOfNewCell}${i}/${currDayCells.findIndex(cell => cell.isChecked) + 1}`
            }
            
            return acc
        }, '')

        if (dayCellsChecked) {
            return <li key={day}>{`${day}: ${dayCellsChecked}`}</li>
        }
    }

    return (
        <ul className={classes.list} ref={listRef}>{
            DAYS.map((day, dayIndex) => getDayItemInfo(day, dayIndex))
        }

            <li className={listClasses}>Дни недели не были выбраны</li>
        </ul>
    );

};

export default List;