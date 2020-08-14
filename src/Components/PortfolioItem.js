import React from 'react'
import { Link } from 'react-router-dom';

import { useAxiosGet } from '../hooks/HttpRequests'

function PortfolioItem(props) {
    const { id, date, title, acf, content, featured_media } = props.post;

    let getImageUrlPath = `/wp-json/wp/v2/media/${featured_media}`;
    let getImageUrl = useAxiosGet(getImageUrlPath);
    let imgUrl = null;

    if(getImageUrl.data) {
        imgUrl = getImageUrl.data.guid.rendered;
        if(props.link) {
            return (
                <Link to={`/portfolio/${id}`} className="post-link">
                    <div className="post-card">
                        <div className="post-card-img" style={{backgroundImage: `url(${imgUrl})`}}></div>
                        <div>
                            <h3 className="post-card-title">{title.rendered}</h3>
                            <h5 className="post-card-secondary-title">{acf.page__title_secondary}</h5>
                            <div class="post-card-date">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#868686" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                <p>{date}</p>
                            </div>
                            <div className="post-card-content" dangerouslySetInnerHTML={{__html: content.rendered}}></div>
                        </div>
                    </div>
                </Link>
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