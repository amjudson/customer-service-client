import React from 'react'

interface ValueListItemProps {
	name: string
	value: string | boolean | number | null
	isBool?: boolean
}

const ValueListItem: React.FC<ValueListItemProps> = ({name, value, isBool = false}) => {
	if (isBool) {
		return (
			<li className={'no-decor'}>
				{name + ' '}
				<span>
					{value === null ? '<null>'
						: value ? 'true' : 'false'}
				</span>
			</li>
		)
	} else {
		return (
			<li className={'no-decor'}>
				{name + ' '}
				<span>
					{value === null ? '<null>' : value}
				</span>
			</li>
		)
	}
}

export default ValueListItem
