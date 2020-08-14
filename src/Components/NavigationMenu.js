import React from 'react'
import { NavLink } from 'react-router-dom';

function NavigationMenuItems() {
    let menuItems = [
        {
            'title': "Home",
            'path': '/',
            'exact': true
        },
        {
            'title': "Portfolio",
            'path': '/portfolio',
            'exact': false
        },
        {
            'title': "About",
            'path': '/about',
            'exact': true
        },
        {
            'title': "Contact",
            'path': '/contact',
            'exact': true
        }
    ]
    return(
        menuItems.map(menuItem => 
            <li>
                <NavLink
                    exact={menuItem.exact}
                    to={menuItem.path}
                    activeClassName="active"
                >
                    {menuItem.title}
                </NavLink>
            </li>
        )
    )
}

export default NavigationMenuItems;
