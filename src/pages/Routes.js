import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Me from './Me/index.js'
import Projects from './Projects/index.js'
import Work from './Work/index.js'
import Education from './Education/index.js'

const Routes = ({ user }) => {
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

export default Routes
