import React, { useEffect, useState } from 'react'

import Routes from './pages/Routes'
import Spinner from './components/Spinner'

import axios from 'axios'

import './styles/styles'
import './styles/index.css'

const App = () => {
	const [ user, setUser ] = useState(null)
	const [ isLoading, setIsLoading ] = useState(false)

	useEffect(() => {
		axios
			.get(`https://gitconnected.com/v1/portfolio/hutchcrowley`)
			.then(setIsLoading(true))
			.then(res => {
				console.log('result of API call: ', res.data)
				setUser(res.data)
				console.log('user variable in axios API call: ', user)
				setIsLoading(false)
			})
			.catch(err => {
				console.log('Error: ', err)
				setIsLoading(false)
			})
	}, [])

	return !isLoading && user ? (
		<>
			<Routes user={user} />
		</>
	) : (
		<Spinner />
	)
}
export default App
