import React, {Fragment} from 'react'


interface CopyToClipboardProps {
  text: string | number
	title?: string
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({text, title = 'Copy to clipboard'}) => {

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text).then(r => r)
	}

	return (
		<Fragment >
			<i className={'fa-duotone fa-copy fa-xs'}
			   onClick={() => copyToClipboard(text.toString())}
			   title={title}
			/>
    </Fragment>
	)
}

export default CopyToClipboard
