import React, {FC, useState} from 'react';
import classes from './Checkbox.module.scss';

interface CheckboxProps {
    children: React.ReactChild | React.ReactNode;
}
const Checkbox: FC<CheckboxProps> = ({ children }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    function changeInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setIsChecked(prevState => !prevState)
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