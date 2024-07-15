import React from 'react'
import {Button, Modal} from 'react-bootstrap'

export interface ModalBoxProps {
	titleElement: React.ReactNode
	bodyElement: React.ReactNode
	show: boolean
	bodyTextElement: React.ReactNode
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
					<Button className={'me-1'} variant='secondary' onClick={handleNo}>
						{noText}
					</Button>
				}
				{handleYes &&
          <Button className={'me-1'}  variant='primary' onClick={handleYes}>
            {yesText}
          </Button>
        }
				<Button className={'me-1'}  variant='success' onClick={handleClose}>
					{closeText}
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default ModalBox
