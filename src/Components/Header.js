import React from 'react'

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
                <div class="title">{pageTitle}</div>
                <Navigation/>
            </header>
        )
    }

    return <div>Loading...</div>
}

export default Header;
