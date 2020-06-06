import React from 'react'
import { useHistory } from 'react-router-dom'

export default function NoRoute() {
	let { history } = useHistory()
	return (
		<div className='404-page'>
			<h1>404 Error: Page Not Found</h1>
			<h2>Whoops! Looks like you got a little lost there..</h2>
			<button onClick={history.push('/')}>Go Home</button>
		</div>
	)
}
