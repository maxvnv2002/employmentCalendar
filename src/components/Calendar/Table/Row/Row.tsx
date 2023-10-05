import { FC, useId } from 'react';
import classes from "../Table.module.scss";
import Cell from "./Cell/Cell";
import {TRow} from "../../../../types/table";

interface RowProps {
    row: TRow;
    rowIndex: number;
}

const Row: FC<RowProps> = ({ row, rowIndex }) => {
    const key = useId()

    return (
        <div className={classes.row}>
            <Cell
                cell={{
                    value: rowIndex === 0 ? "" : rowIndex,
                    checked: false,
                    isHead: true
                }}
                rowIndex={rowIndex}
                cellIndex={0}
            />

            {row.map((cell, i) => (
                <Cell key={key + i} cell={cell} rowIndex={rowIndex} cellIndex={i}/>
            ))}
        </div>
    );
}

export default Row

