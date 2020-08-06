import React, { useState } from 'react'

function Navigation() {
    const [showNav, setShowNav] = useState(false)

    return(
        <nav>
            <div className={`${showNav ? 'active': null} menu-icon`} onClick={() => setShowNav(!showNav)}>
                <div className="line"/>
                <div className="line"/>
            </div>
            <div className={`${showNav ? 'active': null} menu-items`}>
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>About Us</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;
