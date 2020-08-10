import React from 'react'

import '../Style/portfoliopage.scss'

import Portfolio from '../Components/Portfolio'

const PortfolioPage = () => {
    return (
        <div className="portfolio-page-container">
            <div className="page-title">
                <h2>Portfolio</h2>
            </div>
            <Portfolio link={true} />
        </div>
    )
}

export default PortfolioPage;
