import React, {FC} from 'react';
import classes from './Calendar.module.scss';
import InputWithLabel from "../UIKit/InputWithLabel/InputWithLabel";
import Table from "./Table/Table";
import Button from "../UIKit/Button/Button";
import Checkbox from "../UIKit/Checkbox/Checkbox";

enum inputTargets {
    note = 'note',
    employee = 'employee'
}

const Calendar: FC = () => {

    return (
        <div className={classes.calendar}>
            <div className="container">
                <h2>Календарь занятости</h2>
                <div className={classes.bar}>
                    <InputWithLabel placeholder='Фамилия Имя Отчество'
                                    labelValue='Сотрудник'
                                    targetState={inputTargets.employee}
                    />
                    <Checkbox children='Включить деление'/>
                </div>
                <Table/>
                <InputWithLabel placeholder='Введите примечание...'
                                labelValue='Примечание'
                                className={classes.input}
                                targetState={inputTargets.note}
                />
                <Button children='Отправить'/>
            </div>
        </div>
    );
};

export default Calendar;