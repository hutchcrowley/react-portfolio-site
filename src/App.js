import React, { useState, useEffect } from 'react'

import Routes from './pages/Routes'

import axios from 'axios'

const App = () => {
	const [ user, setUser ] = useState(null)
	const [ isLoading, setIsLoading ] = useState(false)

	useEffect(() => {
		axios
			.get('https://gitconnected.com/v1/portfolio/hutchcrowley')
			.then(setIsLoading(true))
			.then(res => {
				let newUser = res.data
				console.log('newUser variable in axios API call: ', newUser)
				setUser(newUser)
			})
			.catch(err => {
				setIsLoading(false)
				console.log('Error: ', err)
			})
			.then(setIsLoading(false))
	}, [])

	return <Routes user={user} isLoading={isLoading} />
}

export default App
