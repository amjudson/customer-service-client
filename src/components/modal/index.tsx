import React, {useState} from 'react'
import {Container, Button, Modal} from 'react-bootstrap'

interface ModalComponentProps {
	header: React.ReactElement
	body: React.ReactElement
	show: boolean
	closeButton: boolean
	cancelButton: boolean
	actionButton: boolean

	actionCall(): any
}

const ModalComponent: React.FC<ModalComponentProps> = ({
	                                                       header,
	                                                       body,
	                                                       show,
	                                                       actionButton,
	                                                       cancelButton,
	                                                       closeButton,
	                                                       actionCall,
                                                       }) => {
	const [showModal, setShowModal] = useState(show)
	const handleClose = () => setShowModal(false)

	return (
		<Container fluid>
			<Modal show={showModal} onHide={handleClose} backdrop={'static'}>
				<Modal.Header closeButton>
					<Modal.Title>{header}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{body}
				</Modal.Body>
				<Modal.Footer>
					{closeButton &&
						<Button variant={'secondary'} onClick={handleClose}>
							Close
						</Button>
					}
					{cancelButton &&
						<Button variant={'primary'} onClick={handleClose}>
							Cancel
						</Button>
					}
					{actionButton &&
						<Button variant={'primary'} onClick={actionCall}>
							Save
						</Button>
					}
				</Modal.Footer>
			</Modal>
		</Container>
	)
}

export default ModalComponent
