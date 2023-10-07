import { FC, useCallback, useEffect, useState } from 'react';
import classes from './InputWithLabel.module.scss';
import classNames from "classnames";
import { debounce } from '../../../helpers/debounce';

interface IInputError {
    message: string;
    isShow: boolean;
}
interface InputWithLabelProps {
    placeholder: string;
    labelValue: string;
    className?: string;
    value: string;
    onChange: (value: string) => void;
    error?: IInputError;
}
const InputWithLabel: FC<InputWithLabelProps> = ({
    placeholder,
    labelValue,
    className = '',
    value,
    onChange,
    error
}) => {
    const [inputValue, setInputValue] = useState(value)
    
    const onChangeHandler = useCallback(debounce(onChange, 500), [onChange])

    useEffect(() => {
        onChangeHandler(inputValue)
    }, [inputValue])

    useEffect(() => {
        setInputValue(value)
    }, [value])

    
    const selectedInputClasses = classNames({
        [classes.input]: true,
        [className]: !!className,
        [classes.error]: error?.isShow
    })

    return (
        <div className={classes.wrap}>
            <p className={classes.label}>{labelValue}</p>
            <input className={selectedInputClasses}
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            {error?.isShow &&
                <label className={classes.message} htmlFor={classes.input}>
                    {error.message}
                </label>}
        </div>
    );
};

export default InputWithLabel;