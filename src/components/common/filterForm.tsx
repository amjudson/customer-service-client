import React from 'react'
import {Col, Form, InputGroup, Row} from 'react-bootstrap'

interface FilterFormProps {
	filterText: string | undefined

	onFilterChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void

	onClearFilter(): void
}

const FilterForm: React.FC<FilterFormProps> = ({filterText, onFilterChange, onClearFilter}) => {
	return (
		<Form>
			<Row>
				<Col className={'col-3 ms-2'}>
					<InputGroup>
						<Form.Control
							type={'text'}
							placeholder={'Filter'}
							value={filterText}
							onChange={(e) => onFilterChange(e)}
							id={'filter-bodyTextElement'}
						/>
						<InputGroup.Text>
							<i onClick={onClearFilter}
							   className={'fa-duotone fa-square-x fa-lg'} />
						</InputGroup.Text>
					</InputGroup>
				</Col>
			</Row>
		</Form>
	)
}

export default FilterForm
