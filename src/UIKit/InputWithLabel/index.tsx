import React, {FC, useState} from 'react';
import classes from './InputWithLabel.module.scss';
import classNames from "classnames";

interface InputWithLabelProps {
    placeholder: string;
    labelValue: string;
    className?: string;
}

const InputWithLabel: FC<InputWithLabelProps> = ({
    placeholder,
    labelValue,
    className = ''
}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const selectedInputClasses = classNames({[classes.input] : true, [className] : !!className})
    console.log(className)
    function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
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