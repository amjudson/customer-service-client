import React from 'react'
import {Toast, ToastContainer} from 'react-bootstrap'

export interface ToastDisplayProps {
	toastShow: boolean
	toastDelay: number
	toastHeader: JSX.Element
	toastBody: JSX.Element
	setToastShow(showToast: boolean): void
}

const ToastDisplay: React.FC<ToastDisplayProps> = ({
	setToastShow,
	toastShow,
	toastDelay,
	toastHeader,
	toastBody,
                              }) => {
	return (
		<ToastContainer position={'top-end'}>
			<Toast
				onClose={() => setToastShow(false)}
				show={toastShow}
				delay={toastDelay}
				autohide
			>
				<Toast.Header>
					{toastHeader}
				</Toast.Header>
				<Toast.Body>
					{toastBody}
				</Toast.Body>
			</Toast>
		</ToastContainer>
	)
}

export default ToastDisplay
