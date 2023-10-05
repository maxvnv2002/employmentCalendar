import React, {FC} from 'react';
import classes from './Calendar.module.scss';
import InputWithLabel from "../UIKit/InputWithLabel/InputWithLabel";
import Table from "./Table/Table";
import Button from "../UIKit/Button/Button";
import Checkbox from "../UIKit/Checkbox/Checkbox";
import Modal from "./Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {changeModalStatus, setDivideStatus, setInputEmptyStatus} from "../../store/actions/calendarActionCreators";
import {ICalendarState} from "../../types/calendar";
import classNames from "classnames";

enum inputTargets {
    note = 'note',
    employee = 'employee'
}

const Calendar: FC = () => {
    const calendarState = useSelector((state: ICalendarState) => state)

    const dispatch = useDispatch()
    function sendCalendarHandler () {
        if (calendarState.employee.length !== 0) {
            dispatch(setInputEmptyStatus(false))
            dispatch(changeModalStatus())
        } else {
            dispatch(setInputEmptyStatus(true))
        }
    }
    function checkboxHandler () {
        dispatch(setDivideStatus())
    }

    return (
        <div className={classes.calendar}>
            <div className="container">
                <h2>Календарь занятости</h2>
                <div className={classes.bar}>
                    <InputWithLabel placeholder='Фамилия Имя Отчество'
                                    labelValue='Сотрудник'
                                    targetState={inputTargets.employee}
                                    canBeEmpty={false}
                    />
                    <Checkbox children='Включить деление' isChecked={calendarState.isDivided} setIsChecked={checkboxHandler}/>
                </div>
                <Table/>
                <InputWithLabel placeholder='Введите примечание...'
                                labelValue='Примечание'
                                className={classes.input}
                                targetState={inputTargets.note}
                />
                <Button children='Отправить' onClick={sendCalendarHandler}/>
            </div>
            <Modal title={'Занятость'}/>
        </div>
    );
};

export default Calendar;