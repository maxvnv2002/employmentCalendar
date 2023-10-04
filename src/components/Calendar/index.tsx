import React, {FC} from 'react';
import classes from './Calendar.module.scss';
import InputWithLabel from "../../UIKit/InputWithLabel";
import Table from "../Table";
import Button from "../../UIKit/Button";
import Checkbox from "../../UIKit/Checkbox";

const Calendar: FC = () => {
    return (
        <div className={classes.calendar}>
            <div className="container">
                <h2>Календарь занятости</h2>
                <div className={classes.bar}>
                    <InputWithLabel placeholder='Фамилия Имя Отчество' labelValue='Сотрудник'/>
                    <Checkbox children='Включить деление'/>
                </div>
                <Table/>
                <InputWithLabel placeholder='Введите примечание...' labelValue='Примечание' className={classes.input}/>
                <Button children='Отправить'/>
            </div>
        </div>
    );
};

export default Calendar;