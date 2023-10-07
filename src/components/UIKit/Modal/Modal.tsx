import { FC, useEffect, useState } from 'react';

import classes from './Modal.module.scss'
import classNames from 'classnames';

interface ModalProps {
	children: React.ReactNode
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
}

const Modal: FC<ModalProps> = ({children, isOpen, setIsOpen}) => {
	const [isFirstOpen, setIsFirstOpen] = useState(true)

	useEffect(() => {
		if(isOpen) {
			setIsFirstOpen(false)
		}
	}, [isOpen])

	function closeHandler(e: React.MouseEvent) {
		e.preventDefault()

		setIsOpen(false)
	}

	const modalStyle = classNames({
		[classes.modal]: true,
		[isOpen ? classes.open : classes.close]: !isFirstOpen,
		[classes.closed]: isFirstOpen
	})

	return (
		<div className={modalStyle} onClick={closeHandler}>
			<div className={classes.wrapper} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default Modal