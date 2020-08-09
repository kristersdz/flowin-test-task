import React, { useState } from 'react'

import NavigationMenuItems from './NavigationMenu'

function Navigation() {
    const [showNav, setShowNav] = useState(false)

    let menu

    if (showNav) {
        menu = <ul>
            <NavigationMenuItems />
        </ul>
    }
    return(
        <nav>
            <div className={`${showNav ? 'active': ''} menu-icon`} onClick={() => setShowNav(!showNav)}>
                <div className="line"/>
                <div className="line"/>
            </div>
            <div className={`${showNav ? 'active': ''} menu-items`}>
                { menu }
            </div>
        </nav>
    )
}

export default Navigation;
