import React from 'react'

import { useAxiosGet } from '../Hooks/HttpRequests'

function PortfolioItem(props) {
    const { title, acf, content, featured_media } = props.post;

    let getImageUrlPath = `/wp-json/wp/v2/media/${featured_media}`;
    let getImageUrl = useAxiosGet(getImageUrlPath);
    let imgUrl = null;

    if(getImageUrl.data) {
        imgUrl = getImageUrl.data.guid.rendered;
        return (
            <div className="portfolio__item">
                <div className="dummy"></div>
                <div className="portfolio__item__img">
                    <img src={imgUrl} alt={title.rendered} />
                </div>
                <h3 className="portfolio__item__title">{title.rendered}</h3>
                <h4 className="portfolio__item__secondary-title">{acf.page__title_secondary}</h4>
                <div className="portfolio__item__content" dangerouslySetInnerHTML={{__html: content.rendered}}></div>
            </div>
        )
    }
    
    return <div>Loading...</div>;
}

export default PortfolioItem;