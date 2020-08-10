import React from 'react'

import '../Style/frontpage.scss'

import Portfolio from '../Components/Portfolio'

const HomePage = () => {
    return (
        <div>
            <div className="main-container">
                <div className="page-info">
                    <div className="content">
                        <h2>Exterior Home Colors</h2>
                        <h3>It's What's on the Outside That Matters</h3>
                    </div>
                </div>
                <div className="page-img">
                    <img src="http://18.158.173.83/wp-content/uploads/2020/08/picking-house-colors.jpg" alt="" />
                </div>
            </div>
            <div className="portfolio-container">
                <div className="section-title">
                    <h2>Portfolio</h2>
                </div>
                <Portfolio perPage="3" link={true} />
            </div>

            <div className="circle"></div>
            <svg className="circle-outline">
                <circle cx="50" cy="50" r="40" stroke="#aed581" stroke-width="3" fill='none' />
            </svg> 
        </div>
    )
}

export default HomePage;
