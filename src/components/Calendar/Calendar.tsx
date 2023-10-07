import { FC } from 'react';

import classes from './Calendar.module.scss';
import Table from "./Table/Table";
//import Modal from "./Modal/Modal";
import BarTop from './BarTop/BarTop';
import BarBottom from './BarBottom/BarBottom';

const Calendar: FC = () => {
    return (
        <div className={classes.calendar}>
            <div className="container">
                <h2>Календарь занятости</h2>
                <BarTop />
                <Table />
                <BarBottom/>
            </div>
        </div>
    );
};

export default Calendar;