import React, {FC, useState} from 'react';
import classNames from "classnames";
import classes from './Cell.module.scss';
import store from "../../store";
import {setCellStatus} from "../../store/actions/tableActionCreators";
interface CellProps {
    row: number;
    column: number;
    isHead: boolean;

}

const Cell: FC<CellProps> = ({ isHead, row, column }) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const cellClasses = classNames(classes.cell, {[classes.head]: isHead, [classes.active]: isActive})
    function cellClickHandler (e: React.MouseEvent<HTMLDivElement>) {
        setIsActive(prevState => !prevState);
        store.dispatch(setCellStatus(row, column, isActive))
    }




    return (
        <div className={cellClasses} onClick={cellClickHandler}></div>
    );

};

export default Cell;