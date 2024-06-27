import React from 'react'
import {Button, Modal} from 'react-bootstrap'

export interface ModalBoxProps {
	titleElement: JSX.Element
	bodyElement: JSX.Element
	show: boolean
	bodyTextElement: JSX.Element
	yesText?: string
	noText?: string
	closeText?: string

	handleClose(): void

	handleYes?(): void

	handleNo?(): void
}

const ModalBox: React.FC<ModalBoxProps> = ({
	                                           titleElement,
	                                           show,
	                                           bodyTextElement,
	                                           bodyElement,
	                                           handleClose,
	                                           handleYes= undefined,
	                                           handleNo = undefined,
	                                           yesText = 'Yes',
	                                           noText = 'No',
	                                           closeText = 'Close',
                                           }) => {
	return (
		<Modal show={show} onHide={handleClose} backdrop={'static'}>
			<Modal.Header closeButton>
				<Modal.Title>{titleElement}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{bodyTextElement}
				{bodyElement}
			</Modal.Body>
			<Modal.Footer>
				{handleNo &&
					<Button variant='secondary' onClick={handleNo}>
						{noText}
					</Button>
				}
				<Button variant='secondary' onClick={handleClose}>
					{closeText}
				</Button>
				{handleYes &&
          <Button variant='primary' onClick={handleYes}>
            {yesText}
          </Button>
        }
			</Modal.Footer>
		</Modal>
	)
}

export default ModalBox
