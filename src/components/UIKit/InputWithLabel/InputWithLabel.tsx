import { FC } from 'react';
import classes from './InputWithLabel.module.scss';
import classNames from "classnames";

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
    console.log("InputWithLabel update",);

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
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {error?.isShow &&
                <label className={classes.message} htmlFor={classes.input}>
                    {error.message}
                </label>}
        </div>
    );
};

export default InputWithLabel;