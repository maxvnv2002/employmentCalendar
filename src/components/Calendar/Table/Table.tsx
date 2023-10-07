import {FC} from 'react';
import classes from './Table.module.scss'
import Row from "./Row/Row";
import store from "../../../store";

const Table: FC = () => {
    console.log("Table update",);
    const {table} = store.getState();

    return (
        <div className={classes.table}>
            { table.map((row, i) => (
                <Row key={i} row={row} rowIndex={i}/>
            )) }
        </div>
    );
};

export default Table;