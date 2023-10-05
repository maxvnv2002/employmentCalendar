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
    targetState: string;
    canBeEmpty?: boolean
}
const InputWithLabel: FC<InputWithLabelProps> = ({
    placeholder,
    labelValue,
    className = '',
    targetState,
    canBeEmpty= true
}) => {
    const dispatch = useDispatch()
    const calendarState = useSelector((state: ICalendarState) => state)
    const inputValue = calendarState[targetState]
    const isEmpty = calendarState.isEmployeeInputEmpty;
    const isErrorShowed = !canBeEmpty && isEmpty

    const selectedInputClasses = classNames({
        [classes.input] : true,
        [className] : !!className,
        [classes.error]: isErrorShowed
    })

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
            { isErrorShowed && <label className={classes.message} htmlFor={classes.input}>Поле не должно быть пустым</label> }
        </div>
    );
};

export default InputWithLabel;