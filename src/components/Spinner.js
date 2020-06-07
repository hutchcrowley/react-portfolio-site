import React from 'react'
const spinner = require('../assets/spinner.gif')

const Spinner = () => {
	return (
		<div className='spinner-center'>
			<img src={spinner} alt='loading...' />
		</div>
	)
}

export default Spinner
