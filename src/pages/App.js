import React, { useEffect, useState } from 'react'

import { Switch, Route } from 'react-router-dom'

import Me from './Me'
import Projects from './Projects'
import Work from './Work'
import Education from './Education'

import axios from 'axios'

function App() {
	const [ resData, setResData ] = useState({})

	useEffect(() => {
		axios
			.get(`https://gitconnected.com/v1/portfolio/hutchcrowley`)
			.then(res => {
				setResData(res.data)
				console.log('Data returned from API: ', resData)
			})
			.catch(err => console.log('Error: ', err))
	}, [])

	return (
		<Switch>
			<Route exact path='/'>
				<Me user={resData} />
			</Route>
			<Route path='/projects'>
				<Projects user={resData} />
			</Route>
			<Route path='/work'>
				<Work user={resData} />
			</Route>
			<Route path='/education'>
				<Education user={resData} />
			</Route>
		</Switch>
	)
}

export default App
