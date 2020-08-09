import React from 'react'

import { useAxiosGet } from '../Hooks/HttpRequests'

import Header from '../Components/Header'

const HomePage = () => {
    let loading = true

    let path = '/wp-json/wp/v2/portfolio/';
    let portfolio = useAxiosGet(path);
    let content = null;

    let header = <Header />

    // Check if content is loading
    if(!portfolio.loading && header !== true){
        loading = false
    }

    if(portfolio.data){
        content = portfolio.data.map((post) => 
            <div>
                <h4>{post.title.rendered}</h4>
                <p>{post.acf.page__title_secondary}</p>
                <p>{post.content.rendered}</p>
            </div>
        )
    }

    if(loading){
        return <div>Loading...</div>
    }
    return (
        <div>
            { header }
            <h3>This is home!</h3>
            { content }
        </div>
    )
}

export default HomePage;
