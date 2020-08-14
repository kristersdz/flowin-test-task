import React from 'react'

import Portfolio from '../components/Portfolio'

import '../style/portfolioitempage.scss'

const PortfolioItemPage = (props) => {
    console.log(props.match.params.id)
    return (
        <div className="post-container container">
            <Portfolio id={props.match.params.id} />
        </div>
    )
}

export default PortfolioItemPage;