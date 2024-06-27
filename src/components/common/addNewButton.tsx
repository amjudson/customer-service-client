import React from 'react'
import {Col, Row} from 'react-bootstrap'
import Link from 'next/link'

interface AddNewButtonProps {
	route: string
}

const AddNewButton: React.FC<AddNewButtonProps> = ({route}) => {
	return (
		<Row>
			<Col className={'col-1 ms-2 my-1 p-0'}>
				<Link legacyBehavior href={`${route}/0`}>
					<i className={'fa-duotone fa-square-plus fa-xl'} />
				</Link>
			</Col>
		</Row>
	)
}

export default AddNewButton
