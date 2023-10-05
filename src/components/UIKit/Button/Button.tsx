import React, {FC} from 'react';
import classes from './Button.module.scss'

interface ButtonProps {
    children: React.ReactChild | React.ReactNode;
    onClick: () => void;
}

const Button: FC<ButtonProps> = ({children, onClick}) => {
    return (
        <div className={classes.wrap}>
            <button className={classes.button} onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

export default Button;