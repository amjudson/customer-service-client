import {Col} from 'react-bootstrap'
import React from 'react'

interface NullCheckBoxProps {
	value: boolean | string | number | null

	onClick(e: React.MouseEvent<HTMLDivElement> | null): void
}

const NullCheckBox: React.FC<NullCheckBoxProps> = ({value, onClick}) => {
	return (
		<Col className={'col-id'}>
			<div onClick={onClick}>
				{value === null
					? <i className={'fa-duotone fa-square-check checked'}/>
					: <i className={'fa-duotone fa-square is-not-null'}/>
				}
			</div>
		</Col>
	)
}

export default NullCheckBox
