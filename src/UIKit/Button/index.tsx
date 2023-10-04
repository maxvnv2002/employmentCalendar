import React, {FC} from 'react';
import classes from './Button.module.scss'

interface ButtonProps {
    children: React.ReactChild | React.ReactNode;
}

const Button: FC<ButtonProps> = ({children}) => {
    return (
        <div className={classes.wrap}>
            <button className={classes.button}>
                {children}
            </button>
        </div>
    );
};

export default Button;