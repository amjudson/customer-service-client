import React, {Fragment} from 'react'
import {Col, Form, Row} from 'react-bootstrap'
import {SelectSize, SizeOption} from './helpers'

interface CheckBoxControlProps {
	name: string // name connected to Form.Check as label
	isChecked: boolean | null // current state
	checkBoxType?: 'switch' | 'checkbox' | 'radio' // type of check to display
	isRow?: boolean // return as a Row element
	isColumn?: boolean // include Col elements
	labelLeft?: boolean // place 'name' on left side of element
	label?: string // optional label external to the Form.Check
	labelSize?: SizeOption // Col size
	size?: SizeOption // Form.Check control Col size
	disabled?: boolean

	onChange(): void
}

const CheckBoxControl: React.FC<CheckBoxControlProps> = ({
	                                                         name,
	                                                         isChecked,
	                                                         checkBoxType,
	                                                         isRow = true,
	                                                         isColumn = true,
	                                                         labelLeft = false,
	                                                         label,
	                                                         size = 'md',
	                                                         labelSize = 'sm',
	                                                         onChange,
																													 disabled = false,
                                                         }) => {
	const id = name.replace(' ', '-').replace(':', '')
	const useType = checkBoxType ? checkBoxType : 'switch'
	const elementColumnSize = SelectSize(size)
	const labelColumnSize = SelectSize(labelSize)

	const formLabel = (
		<Form.Label htmlFor={id}>{label}</Form.Label>
	)

	const formCheckBox = (
		<Fragment>
			<Form.Check
				disabled={disabled}
				reverse={labelLeft}
				id={id}
				type={useType}
				label={name}
				checked={isChecked === null ? false : isChecked}
				onChange={onChange}
			/>
		</Fragment>
	)

	let formControl = formCheckBox

	if (isColumn) {
		formControl = (
			<Fragment>
				{!labelLeft && <Col className={labelColumnSize + ' text-end'}>{formLabel}</Col>}
				<Col className={elementColumnSize}>{formCheckBox}</Col>
			</Fragment>
		)
	}

	return isRow ? <Row>{formControl}</Row> : <>{formControl}</>
}

export default CheckBoxControl
