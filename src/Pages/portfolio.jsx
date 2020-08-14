import React from 'react'

import '../style/portfoliopage.scss'

import Portfolio from '../components/Portfolio'

const PortfolioPage = () => {
    return (
        <div className="portfolio-container container">
            <h1 class="page-title">Portfolio</h1>
            <div className="portfolio">
                <Portfolio link={true} />
            </div>
        </div>
    )
}

export default PortfolioPage;
