import React from 'react'

import Spinner from '../Spinner'

import { Switch, Route } from 'react-router-dom'

import Me from './Me'
import Projects from './Projects'
import Work from './Work'
import Education from './Education'
import NoRoute from '../components/NoRoute'

const Routes = ({ user, isLoading }) => {
	console.log('User object inside Routes: ', user)
	return !isLoading ? (
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
			<Route component={NoRoute} />
		</Switch>
	) : (
		<Spinner />
	)
}

export default Routes
