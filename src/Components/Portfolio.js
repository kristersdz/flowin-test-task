import React from 'react'

import { useAxiosGet } from '../hooks/HttpRequests'

import PorfolioItem from './PortfolioItem'

function Portfolio(props) {
    let perPage = props.perPage;
    let id = props.id;
    let postsPath = '/wp-json/wp/v2/portfolio';
    if (perPage && !isNaN(Number(perPage)) ) {
        postsPath = postsPath + '?per_page=' + perPage
    }
    if (id) {
        postsPath = postsPath + '/' + id
    }
    let getPortfolioPosts = useAxiosGet(postsPath);

    if(getPortfolioPosts.data){
        if(props.link) {
            return (
                <div className="portfolio">
                    {getPortfolioPosts.data.map(post =>
                        <PorfolioItem key={post.id} post={post} link={true} />
                    )}
                </div>
            )
        }
        if(id) {
            return (
                <div className="portfolio">
                    <PorfolioItem key={getPortfolioPosts.data.id} post={getPortfolioPosts.data} />
                </div>
            )
        }
        return (
            <div className="portfolio">
                {getPortfolioPosts.data.map(post =>
                    <PorfolioItem key={post.id} post={post} />
                )}
            </div>
        )
    }
    return <div>Loading...</div>
}

export default Portfolio;
