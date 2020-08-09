import React from 'react'

import { useAxiosGet } from '../Hooks/HttpRequests'

import Navigation from './Navigation'

function Header() {
    let loading = true

    let path = '/wp-json/'
    let content = useAxiosGet(path)
    let pageTitle

    // Check if content is loading
    if(!content.loading){
        loading = false
    }

    if(content.data){
        pageTitle = content.data.name
    }

    if(loading){
        return true
    }
    return(
        <header>
            <h1>{pageTitle}</h1>
            <Navigation/>
        </header>
    )
}

export default Header;
