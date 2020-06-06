import React, { useEffect, useState } from 'react'

import { Switch, Route } from 'react-router-dom'

import Me from './Me'
import Projects from './Projects'
import Work from './Work'
import Education from './Education'

import axios from 'axios'

function App() {
	const [ user, setUser ] = useState({})

	useEffect(() => {
		axios
			.get(`https://gitconnected.com/v1/portfolio/hutchcrowley`)
			.then(res => {
				res.json()
			})
			.then(user => {
				setUser(user)
				console.log('Data returned from API: ', user)
			})
			.catch(err => console.log('Error: ', err))
	}, [])

	return (
		<Switch>
			<Route exact path='/'>
				<Me user={user} />
			</Route>
			<Route path='/projects'>
				<Projects user={user} />
			</Route>
			<Route path='/work'>
				<Work user={user} />
			</Route>
			<Route path='/education'>
				<Education user={user} />
			</Route>
		</Switch>
	)
}

export default App
