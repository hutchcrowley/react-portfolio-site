import React, { useEffect, useState } from 'react'

import Routes from './pages/Routes'
import Spinner from './components/Spinner'

import axios from 'axios'


const App = () => {
	const [ user, setUser ] = useState(null)

	useEffect(() => {
		axios
			.get(`https://gitconnected.com/v1/portfolio/hutchcrowley`)
			.then(res => {
				console.log('result of API call: ', res.data)
				setUser(res.data)
				console.log('user variable in axios API call: ', user)
			})
			.catch(err => {
				console.log('Error: ', err)
			})
	}, [])

	return user ? (
		 <Routes user={user} />
	) : (
		<Spinner />
		)

}

export default App
