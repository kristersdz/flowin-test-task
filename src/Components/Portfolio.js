import React from 'react'

import { useAxiosGet } from '../Hooks/HttpRequests'

import PorfolioItem from './PortfolioItem'

function Portfolio(props) {
    let perPage = props.perPage;
    let postsPath = '/wp-json/wp/v2/portfolio';
    if (perPage && !isNaN(Number(perPage)) ) {
        postsPath = postsPath + '?per_page=' + perPage
    }
    let getPortfolioPosts = useAxiosGet(postsPath);

    if(getPortfolioPosts.data){
        return (
            <div className="portfolio">
                {getPortfolioPosts.data.map(post =>
                    <PorfolioItem key={post.id} post={post}/>
                )}
            </div>
        )
    }
    return <div>Loading...</div>
}

export default Portfolio;
