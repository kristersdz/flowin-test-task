import React from 'react'
import { Link } from 'react-router-dom';

import { useAxiosGet } from '../hooks/HttpRequests'

import '../style/header.scss'

import Navigation from './Navigation'

function Header() {
    let path = '/wp-json/'
    let content = useAxiosGet(path)
    let pageTitle

    if(content.data){
        pageTitle = content.data.name

        return(
            <header>
                <Link to="/">
                    <div class="title">{pageTitle}</div>
                </Link>
                <Navigation/>
            </header>
        )
    }

    return <div>Loading...</div>
}

export default Header;
