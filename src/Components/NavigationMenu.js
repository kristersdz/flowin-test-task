import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faBullhorn, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faBullhorn, faInfoCircle);

function NavigationMenuItems() {
    let menuItems = [
        {
            'title': "Home",
            'path': '/',
            'icon': 'home'
        },
        {
            'title': "Portfolio",
            'path': '/portfolio',
            'icon': 'bullhorn'
        },
        {
            'title': "About Us",
            'path': '/about-us',
            'icon': 'info-circle'
        }
    ]
    return(
        menuItems.map((menuItem) => 
            <li>
                <span className="menu-item-icon">
                    <FontAwesomeIcon icon={menuItem.icon} />
                </span>
                <Link to={menuItem.path}>{menuItem.title}</Link>
            </li>
        )
    )
}

export default NavigationMenuItems;
