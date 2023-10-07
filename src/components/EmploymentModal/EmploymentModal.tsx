import { FC } from 'react';

import classes from './EmploymentModal.module.scss'
import Modal from '../UIKit/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { ICalendarState } from '../../types/calendar';
import { changeModalStatus } from '../../store/actions/calendarActionCreators';
import Caption from './Caption/Caption';
import List from './List/List';


const EmploymentModal: FC = () => {
	const isModalShowed = useSelector((state: ICalendarState) => state.isModalShowed)
	const employee = useSelector((state: ICalendarState) => state.employee)
	const table = useSelector((state: ICalendarState) => state.table)
	const note = useSelector((state: ICalendarState) => state.note)

	const dispatch = useDispatch()

	function closeModalHandler() {
		dispatch(changeModalStatus())
	}

	return (
		<div>
			<Modal isOpen={isModalShowed} setIsOpen={closeModalHandler}>
				<div className={classes.topBar}>
					<p className={classes.title}>
						Занятость
					</p>
					<div className={classes.close}
						onClick={closeModalHandler}>
					</div>
				</div>
				<div className={classes.content}>
					<Caption title='Сотрудник'>
						<p>{employee}</p>
					</Caption>
					<Caption title='Занятость'>
						<List array={table} />
					</Caption>
					<Caption title='Примечание'>
						<p>{note ? note : "Пусто"}</p>
					</Caption>
				</div>
			</Modal>
		</div>
	)
}

export default EmploymentModal