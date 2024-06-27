import {Container} from 'react-bootstrap'
import {Vortex} from 'react-loader-spinner'

const VortexSpinner = () => {
	return <Container fluid={true} className={'container-center'}>
		<Vortex
			visible={true}
			height={'200'}
			width={'200'}
			ariaLabel={'vortex-loading'}
			wrapperStyle={{}}
			wrapperClass={'vortex-wrapper'}
			colors={['grey', 'lightyellow', 'lightblue', 'lightgrey', 'lightgreen', 'lightcyan']}
		/>
	</Container>
}

export default VortexSpinner
