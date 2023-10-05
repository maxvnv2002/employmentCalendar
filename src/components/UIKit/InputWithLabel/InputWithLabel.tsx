import React, {FC, useState} from 'react';
import classes from './InputWithLabel.module.scss';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {setInputValue} from "../../../store/actions/calendarActionCreators";
import {ICalendarState} from "../../../types/calendar";

interface InputWithLabelProps {
    placeholder: string;
    labelValue: string;
    className?: string;
    targetState: string
}
const InputWithLabel: FC<InputWithLabelProps> = ({
    placeholder,
    labelValue,
    className = '',
    targetState,
}) => {
    const dispatch = useDispatch()
    const inputValue = useSelector((state: ICalendarState) => state[targetState])
    const selectedInputClasses = classNames({[classes.input] : true, [className] : !!className})

    function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setInputValue(targetState, e.target.value))
    }

    return (
        <div className={classes.wrap}>
            <p className={classes.label}>{labelValue}</p>
            <input className={selectedInputClasses}
                   type="text"
                   placeholder={placeholder}
                   value={inputValue}
                   onChange={inputChangeHandler}
            />
        </div>
    );
};

export default InputWithLabel;