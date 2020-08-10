import React from 'react'

import { useAxiosGet } from '../Hooks/HttpRequests'

import '../Style/header.scss'

import Navigation from './Navigation'

function Header() {
    let path = '/wp-json/'
    let content = useAxiosGet(path)
    let pageTitle

    if(content.data){
        pageTitle = content.data.name

        return(
            <header>
                <h1>{pageTitle}</h1>
                <Navigation/>
            </header>
        )
    }

    return <div>Loading...</div>
}

export default Header;
