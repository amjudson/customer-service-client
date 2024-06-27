import React, {Fragment} from 'react'
import Select from 'react-select'
import {Col, Form, Row} from 'react-bootstrap'
import {SelectOption} from '@/data'
import {baseStylesConfig} from '../configuration/selectStyles'
import {selectSize, SizeOption} from './helpers'

interface SelectControlProps {
	name: string
	value: SelectOption
	selectOptions: SelectOption[]
	id?: string
	isNumber?: boolean
	labelSize?: SizeOption
	size?: SizeOption
	isRow?: boolean
	defaultOption?: SelectOption
	justifyRight?: boolean
	isDisplayed?: boolean
	error?: string

	onChange(newValue: unknown): void
}

const SelectControl: React.FC<SelectControlProps> = ({
	                                                               name,
	                                                               selectOptions,
	                                                               value,
	                                                               id,
	                                                               onChange,
	                                                               size,
	                                                               labelSize,
	                                                               defaultOption,
	                                                               isRow = true,
	                                                               justifyRight = true,
	                                                               isDisplayed = false,
	                                                               error = '',
                                                               }) => {
	const selectBoxSize = size ? selectSize(size) : 'col-2'
	let selectLabelSize = labelSize ? selectSize(labelSize) : 'col-2'

	if (justifyRight) {
		selectLabelSize += ' text-end'
	}

	const controlId = id ? id : name.toLowerCase().replace(' ', '-').replace(':', '')

	if (defaultOption) {
		const withDefault: SelectOption[] = []
		withDefault.push(defaultOption)
		for (let i = 0; i < selectOptions.length; i++) {
			withDefault.push(selectOptions[i])
		}

		selectOptions = withDefault
	}

	const controlBody =
		<Fragment>
			<Col className={selectLabelSize}>
				<Form.Label htmlFor={controlId}>{name}</Form.Label>
			</Col>
				<Select
					isDisabled={isDisplayed}
					className={selectBoxSize}
					classNamePrefix={'react-select-box'}
					onChange={onChange}
					value={value}
					id={controlId}
					styles={baseStylesConfig}
					options={selectOptions}
					instanceId={`reactSelect${controlId}`}
				/>
			{error &&
					<Col className={`error-message col-4`}>{error}</Col>
			}
		</Fragment>

	return isRow ? <Row>{controlBody}</Row> : controlBody
}

export default SelectControl
