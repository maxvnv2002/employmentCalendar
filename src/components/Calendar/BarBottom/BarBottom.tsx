import { FC, useCallback, useEffect } from 'react';

import classes from './BarBottom.module.scss'
import InputWithLabel from '../../UIKit/InputWithLabel/InputWithLabel';
import Button from '../../UIKit/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ICalendarState } from '../../../types/calendar';
import { setInputEmptyStatus, changeModalStatus, setInputValue } from '../../../store/actions/calendarActionCreators';
import EmploymentModal from '../../EmploymentModal/EmploymentModal';

const BarBottom: FC = () => {
	console.log("BarBottom update",);

	const employee = useSelector((state: ICalendarState) => state.employee)
	const note = useSelector((state: ICalendarState) => state.note)
	const isEmployeeInputEmpty = useSelector((state: ICalendarState) => state.isEmployeeInputEmpty)

	const dispatch = useDispatch()

	useEffect(() => {
		if (employee.length && isEmployeeInputEmpty) {
			dispatch(setInputEmptyStatus(false))
		}
	}, [dispatch, employee, isEmployeeInputEmpty])

	function sendCalendarHandler() {
		if (!employee.length) {
			return dispatch(setInputEmptyStatus(true))
		}

		dispatch(setInputEmptyStatus(false))
		dispatch(changeModalStatus())
	}

	const noteChangeHandler = useCallback((value: string) => {
		dispatch(setInputValue('note', value))
	}, [])

	return (
		<div className={classes.barBottom}>
			<InputWithLabel
				placeholder='Введите примечание...'
				labelValue='Примечание'
				className={classes.input}
				value={note}
				onChange={noteChangeHandler}
			/>
			<Button children='Отправить' onClick={sendCalendarHandler} />
			<EmploymentModal/>
		</div>
	)
}

export default BarBottom