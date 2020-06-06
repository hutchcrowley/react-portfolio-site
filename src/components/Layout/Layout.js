import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import MobileNav from '../MobileNav/MobileNav'

import { StyledContent } from './styles'

const Layout = ({ user, children }) => {
    return (
        <>
        <MobileNav />
        <Sidebar />
        <StyledContent>
            <Header user={user} />
            <div>{children}</div>
        </StyledContent>
        </>
    )
}