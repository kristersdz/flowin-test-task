import React, { useState } from 'react'

import NavigationMenuItems from './NavigationMenu'

function Navigation() {
    const [showNav, setShowNav] = useState(false)
    
    return(
        <nav>
            <div className={`${showNav ? 'active': ''} menu-icon`} onClick={() => setShowNav(!showNav)}>
                <div className="line"/>
                <div className="line"/>
            </div>
            <div className={`${showNav ? 'active': ''} menu-items`}>
                <ul>
                    <NavigationMenuItems closeMenu={() => setShowNav(false)}/>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;
