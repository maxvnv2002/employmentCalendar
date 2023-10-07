import { FC, useState, useEffect } from 'react';

import classes from './BarTop.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { ICalendarState } from '../../../types/calendar';
import InputWithLabel from '../../UIKit/InputWithLabel/InputWithLabel';
import { resetCalendar, setInputValue } from '../../../store/actions/calendarActionCreators';
import Checkbox from '../../UIKit/Checkbox/Checkbox';

const BarTop: FC = () => {
	console.log("BarTop update",);
	const isDivided = useSelector((state: ICalendarState) => state.isDivided)
	const employee = useSelector((state: ICalendarState) => state.employee)
	const isEmployeeInputEmpty = useSelector((state: ICalendarState) => state.isEmployeeInputEmpty)

	const [isErroredInputValue, setIsErroredInputValue] = useState(false)

	const dispatch = useDispatch()

	function inputChangeHandler(value: string) {
		dispatch(setInputValue('employee', value))
	}

	function checkboxHandler() {
		dispatch(resetCalendar())
	}

	useEffect(() => {
		setIsErroredInputValue(isEmployeeInputEmpty)
	}, [isEmployeeInputEmpty, employee])

	return (
		<div className={classes.bar}>
			<InputWithLabel placeholder='Фамилия Имя Отчество'
				labelValue='Сотрудник'
				value={employee}
				onChange={inputChangeHandler}
				error={{
					message: "Поле не должно быть пустым",
					isShow: isErroredInputValue
				}}
			/>
			<Checkbox children='Включить деление' isChecked={isDivided} setIsChecked={checkboxHandler} />
		</div>
	)
}

export default BarTop