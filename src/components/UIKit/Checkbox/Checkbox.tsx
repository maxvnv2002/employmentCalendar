import React, {FC, useState} from 'react';
import classes from './Checkbox.module.scss';

interface CheckboxProps {
    children: React.ReactChild | React.ReactNode;
    isChecked: boolean,
    setIsChecked: () => void;
}
const Checkbox: FC<CheckboxProps> = ({ children, isChecked, setIsChecked }) => {

    function changeInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setIsChecked()
    }

    return (
        <div className={classes.checkboxWrapper}>
            <label>
                <input type="checkbox" onChange={(e) => changeInputHandler(e)} checked={isChecked} className={isChecked ? classes.checked : ''}/>
                <span>Включить деление</span>
            </label>
        </div>
    );
};

export default Checkbox;