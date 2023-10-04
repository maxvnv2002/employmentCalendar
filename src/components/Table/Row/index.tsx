import React, {FC} from 'react';
import classes from "../Table.module.scss";
import Cell from "../../Cell";
import {isHeadCell} from "../heplers/headCellsUlits";
import store from "../../../store";

interface RowProps<T> {
    rowArray: T[],
    rowIndex: number
}

export default function Row<T>(props: RowProps<T>) {
    const tableStore = store.getState().table
    const weekdays = Object.keys(tableStore)
    const { rowIndex: row } = props
    console.log(props.rowArray)
    return (
        <div className={classes.row}>
            { props.rowArray.map((day, column) => (
                <Cell isHead={isHeadCell(row, column)} row={row} column={column} key={`${row}.${column}`}/>
            ))}
        </div>
    );
}

