import React from 'react'
import { Link } from 'react-router-dom'

export default function NoRoute() {
	return (
		<div id='no-route'>
			<h1>404 Error: Page Not Found</h1>
			<h2>Whoops! Looks like you got a little lost there...</h2>
            <Link to='/experience'>Home</Link>
		</div>
	)
}
