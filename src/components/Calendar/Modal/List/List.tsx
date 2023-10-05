import React, {FC, useRef} from 'react';
import {TTable} from "../../../../types/table";
import {DAYS} from "../../../../store/reducers/getInitialCalendarState";
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

    return (
        <ul className={classes.list} ref={listRef}>{
            DAYS.map((day, dayIndex) => {
                const daysChecked = array.reduce((acc, curr, i) => {
                    if (curr[dayIndex].checked) {
                        if (acc) {
                            acc += `, ${i}`
                        } else {
                            acc += i
                        }
                    }
                    return acc
                }, '')

                if (daysChecked) {
                    return <li key={day}>{`${day}: ${daysChecked}`}</li>
                }
            })}
            <li className={listClasses}>Дни недели не были выбраны</li>
        </ul>
    );

};

export default List;