import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell'

import { StyledSideNav } from './styles'

// array containing teh names and paths for each route. Map over this data to create links dynamically.
const items = [
	{ name: 'Me', path: '/' },
	{ name: 'Education', path: '/education' },
	{ name: 'Experience', path: '/experience' },
	{ name: 'Projects', path: '/projects' },
]

const Sidebar = () => {
	// call the useLocation hook to determine witch path is currently active
	const location = useLocation()

	return (
		<StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label='Side navigation'>
			<SideNavItems>
				{items.map(i => (
					<SideNavLink
						isActive={location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path}
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
