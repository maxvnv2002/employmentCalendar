import React, {FC} from 'react';
import classes from './Table.module.scss'
import Cell from "../Cell";
import {isHeadCell} from "./heplers/headCellsUlits";
import store from "../../store";
import Row from "./Row";
const Table: FC = () => {
    const tableStore = store.getState().table;
    const weekdays = Object.keys(tableStore)

    return (
        <div className={classes.table}>
            { weekdays.map((day, rowIndex) => (
                <Row rowArray={tableStore[day]} rowIndex={rowIndex}/>
            )) }
        </div>
    );
};

export default Table;