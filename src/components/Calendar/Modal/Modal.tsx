import React, {FC, useState} from 'react';
import classNames from "classnames";
import classes from './Modal.module.scss';
import Caption from "./Caption/Caption";
import {useDispatch, useSelector} from "react-redux";
import {ICalendarState} from "../../../types/calendar";
import List from "./List/List";
import {changeModalStatus} from "../../../store/actions/calendarActionCreators";

interface ModalProps {
    title: string
}

const Modal: FC<ModalProps> = ({title}) => {
    const dispatch = useDispatch();
    const calendarState = useSelector((state: ICalendarState) => state)

    const isClosed = !calendarState.isModalShowed
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [isOpening, setIsOpening] = useState<boolean>(true);

    const modalClasses = classNames({
        [classes.modalWrapper]: true,
        [classes.opening]: !isClosed && isOpening,
        [classes.closed]: isClosed,
        [classes.closing]: isClosing,
    })

    function closeModalHandler () {
        setIsClosing(true)
    }
    function onAnimationEndHandler() {
        if (isClosing) {
            setIsClosing(false)
            dispatch(changeModalStatus())
            setIsOpening(true)
        }
        if (isOpening) {
            setIsOpening(false)
        }
    }

    return (
        <div className={modalClasses}
             onAnimationEnd={onAnimationEndHandler}
        >
            <div className={classes.modal}>
                <div className={classes.topBar}>
                    <p className={classes.title}>{title}</p>
                    <div className={classes.close}
                         onClick={closeModalHandler}>
                    </div>
                </div>
                <div className={classes.content}>
                    <Caption title='Сотрудник'>
                        <p>{calendarState.employee}</p>
                    </Caption>
                    <Caption title='Занятость'>
                        <List array={calendarState.table}/>
                    </Caption>
                    <Caption title='Примечание'>
                        <p>{calendarState.note}</p>
                    </Caption>
                </div>
            </div>
        </div>
    );
};

export default Modal;