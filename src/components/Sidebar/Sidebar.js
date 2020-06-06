import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell'

import { StyledSideNav } from './styles'

// array containing teh names and paths for each route. Map over this data to create links dynamically.
const items = [
	{ name: 'Me', path: '/' },
	{ name: 'Projects', path: '/projects' },
	{ name: 'Work', path: '/work' },
	{ name: 'Education', path: '/education' },
]

const Sidebar = () => {
	// call the useLocation hook to determine witch path is currently active
	const location = useLocation()

	return (
		<StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label='Side navigation'>
			<SideNavItems>
				{items.map(i => (
					<SideNavLink
						isActive={location.pathname === '/' && i.path === '/' ? true : loacation.pathname === i.path}
						element={Link}
						to={i.path}
						key={i.name}
					>
						{i.name}
					</SideNavLink>
				))}
			</SideNavItems>
		</StyledSideNav>
	)
}

export default Sidebar
