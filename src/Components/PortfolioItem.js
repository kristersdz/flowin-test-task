import React from 'react'
import { Link } from 'react-router-dom';

import { useAxiosGet } from '../hooks/HttpRequests'

function PortfolioItem(props) {
    const { id, title, acf, content, featured_media } = props.post;

    let getImageUrlPath = `/wp-json/wp/v2/media/${featured_media}`;
    let getImageUrl = useAxiosGet(getImageUrlPath);
    let imgUrl = null;

    if(getImageUrl.data) {
        imgUrl = getImageUrl.data.guid.rendered;
        if(props.link) {
            return (
                <div className="portfolio__item">
                    <Link to={`/portfolio/${id}`}>
                        <div className="portfolio__item__img">
                            <img src={imgUrl} alt={title.rendered} />
                        </div>
                    </Link>
                    <Link to={`/portfolio/${id}`}>
                        <h3 className="portfolio__item__title">{title.rendered}</h3>
                    </Link>
                    <h4 className="portfolio__item__secondary-title">{acf.page__title_secondary}</h4>
                    <div className="portfolio__item__content" dangerouslySetInnerHTML={{__html: content.rendered}}></div>
                </div>
            )
        }
        return (
            <div className="portfolio__item">
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