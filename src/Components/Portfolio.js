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
                <>
                    {getPortfolioPosts.data.map(post =>
                        <PorfolioItem key={post.id} post={post} link={true} />
                    )}
                </>
            )
        }
        if(id) {
            return (
                <>
                    <PorfolioItem key={getPortfolioPosts.data.id} post={getPortfolioPosts.data} />
                </>
            )
        }
        return (
            <>
                {getPortfolioPosts.data.map(post =>
                    <PorfolioItem key={post.id} post={post} />
                )}
            </>
        )
    }
    return <div>Loading...</div>
}

export default Portfolio;
