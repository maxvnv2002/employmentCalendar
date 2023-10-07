import React, {FC} from 'react';
import classNames from "classnames";
import classes from "../Cell.module.scss";

interface InnerCellProps {
    onClick: (event: React.MouseEvent<HTMLDivElement>, index: number) => void;
    index: number;
    isChecked: boolean
}

const InnerCell: FC<InnerCellProps> = ({onClick, index, isChecked}) => {
    return (
        <div className={classNames({
            [classes.innerCell]: true,
            [classes.checkedInnerCell]: isChecked
        })}
             onClick={(event) => onClick(event, index)}
        >
        </div>
    );
};

export default InnerCell;