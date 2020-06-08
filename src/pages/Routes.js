import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Me from './Me/index'
import Projects from './Projects/index'
import Experience from './Experience/index'
import Education from './Education/index'
import NoRoute from '../components/NoRoute'

const Routes = ({ user }) => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Me user={user} />
				</Route>
				<Route path='/projects'>
					<Projects user={user} />
				</Route>
				<Route path='/experience'>
					<Experience user={user} />
				</Route>
				<Route path='/education'>
					<Education user={user} />
				</Route>
				<Route component={NoRoute} />
			</Switch>
		</Router>
	)
}

export default Routes
