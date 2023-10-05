import React, {FC} from 'react';
import classes from './Caption.module.scss';

interface CaptionProps {
    title: string,
    children: React.ReactChild | React.ReactNode
}

const Caption: FC<CaptionProps> = ({title, children}) => {
    return (
        <div className={classes.caption}>
            <p className={classes.title}>{title}:</p>
            { children }
        </div>
    );
};

export default Caption;