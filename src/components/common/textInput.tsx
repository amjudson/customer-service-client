import React, {Fragment} from 'react'
import {Col, Form, Row} from 'react-bootstrap'
import {selectSize, SizeOption} from './helpers'

interface TextInputProps {
	name?: string
	value: string | number | null | undefined
	id?: string
	placeholder?: string
	isReadonly?: boolean
	isNumber?: boolean
	isDisabled?: boolean
	isRow?: boolean
	size?: SizeOption
	labelSize?: SizeOption
	inputType?: 'text' | 'number' | 'password'
	error?: string | null
	justifyRight?: boolean
	autoFocus?: boolean
	showEditIcon?: boolean

	onChange(e: React.ChangeEvent<HTMLInputElement>): void
	onEdit?(): void
	onClick?(): void
}

const TextInput: React.FC<TextInputProps> = ({
	                                             name,
	                                             value,
	                                             id,
	                                             onChange,
																							 onEdit,
																							 onClick,
																							 placeholder = '',
	                                             size = 'md',
	                                             labelSize = 'sm',
	                                             inputType = 'text',
	                                             isDisabled,
	                                             isRow = true,
	                                             isReadonly = false,
	                                             error = null,
	                                             justifyRight = true,
	                                             autoFocus = false,
																							 showEditIcon = false,
                                             }) => {
	const valueType = inputType ? inputType : 'text'

	const selectBoxSize = selectSize(size)
	let labelColumnSize = selectSize(labelSize)
	if (justifyRight) {
		labelColumnSize += ' text-end'
	}

	const controlId = id ? id : name ? name.toLowerCase().replace(' ', '-').replace(':', '') : 'id'
	const formControl =
		<Fragment>
			{name &&
				<Col className={labelColumnSize}>
					<Form.Label htmlFor={controlId}>{name}</Form.Label>
				</Col>
			}
			<Col className={selectBoxSize}>
				<Form.Control
					disabled={isDisabled}
					readOnly={isReadonly}
					className={isReadonly ? 'form-control-readonly' : ''}
					onChange={onChange}
					value={value ? value : ''}
					type={valueType}
					id={controlId}
					autoFocus={autoFocus}
					onClick={onClick}
					placeholder={placeholder}
				/>
				{error && <div className={'error-message'}>{error}</div>}
			</Col>
			{showEditIcon && <Col> <i onClick={onEdit} className='fa-duotone fa-marker'/> </Col>}
		</Fragment>

	return isRow
		? <Row>{formControl}</Row>
		: formControl
}

export default TextInput
