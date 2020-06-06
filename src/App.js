import React, { useState, useEffect } from 'react'

import Routes from './pages/Routes'

import axios from 'axios'

const App = () => {
	const [ user, setUser ] = useState(null)

	useEffect(
		() => {
			axios
				.get('https://gitconnected.com/v1/portfolio/hutchcrowley')
				.then(res => {
					console.log('Respanse from the API: ', res.data)
				})
				.then(res => {
					let newUser = res.data
					console.log('newUser variable in axios API call: ', newUser)
					setUser(newUser)
				})
				.catch(err => console.log('Error: ', err))
		},
		[ user, setUser ],
	)

	return !user ? <div /> : <Routes user={user} />
}

export default App
