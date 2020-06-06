import React from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowRight16 } from '@carbon/icons-react'

import { HeaderContainer, Header, Image, ViewResumeLink } from './styles'

const UserHeader = ({ user }) => {
	const location = useLocation()

	return (
		<HeaderContainer isHome={location.pathname === '/'} L>
			<Header>
				<Image src={user.picture} />
				<div>
					<h2>{user.name}</h2>
					<h4>
						<a href={`https://gitconnected.com/${user.username}`} target='_blank' rel='noreferrer noopener'>
							@{user.username}
						</a>
					</h4>
					<p>{user.label}</p>
					<p>Coding in {user.region}</p>
					<p>{user.yearsOfExperience} years of experience as a developer</p>
					<p>{user.headlline}</p>
					<p>
						Blog: {' '}
						<a href={user.blog} target='_blank' rel='noreferrer noopener'>
							{user.blog}
						</a>
					</p>
				</div>
			</Header>
			<div>
				<ViewResumeLink
					href={`https://gitconnected.com/${user.username}/resume`}
					target='_blank'
					rel='noopener noreferrer'
				>
					<span>View Resume</span>
					<ArrowRight16 />
				</ViewResumeLink>
			</div>
		</HeaderContainer>
	)
}

export default UserHeader
