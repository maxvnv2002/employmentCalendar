import { FC, memo } from 'react';
import classes from "../Table.module.scss";
import Cell from "./Cell/Cell";
import {TRow} from "../../../../types/table";

interface RowProps {
    row: TRow;
    rowIndex: number;
}

const Row: FC<RowProps> = ({ row, rowIndex }) => {
    return (
        <div className={classes.row}>
            <Cell
                cell={{
                    value: rowIndex === 0 ? "" : rowIndex,
                    isHead: true,
                    innerCells: [{isChecked: false}, {isChecked: false}]
                }}
                rowIndex={rowIndex}
                cellIndex={0}
            />

            {row.map((cell, i) => (
                <Cell key={i} rowIndex={rowIndex} cellIndex={i}/>
            ))}
        </div>
    );
}

export default memo(Row)

