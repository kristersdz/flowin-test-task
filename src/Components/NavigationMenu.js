import React from 'react'
import { Link } from 'react-router-dom';

function NavigationMenuItems() {
    let menuItems = [
        {
            'title': "Home",
            'path': '/'
        },
        {
            'title': "Portfolio",
            'path': '/portfolio'
        },
        {
            'title': "About",
            'path': '/about'
        },
        {
            'title': "Contact",
            'path': '/contact'
        }
    ]
    return(
        menuItems.map(menuItem => 
            <li>
                <Link to={menuItem.path}>{menuItem.title}</Link>
            </li>
        )
    )
}

export default NavigationMenuItems;
