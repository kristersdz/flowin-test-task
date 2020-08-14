import React from 'react'

import '../style/frontpage.scss'

import Portfolio from '../components/Portfolio'

const HomePage = () => {
    return (
        <>
            <div className="landing-page">
            <div className="page-info">
                    <h1>Exterior Home Colors</h1>
                    <p>It's What's on the Outside That Matters</p>
                    <button>Read more</button>
                </div>
                <div className="page-img" style={{backgroundImage: "url(http://18.158.173.83/wp-content/uploads/2020/08/picking-house-colors.jpg)"}}></div>
            </div>
            <div className="recent-posts-container container">
                <div className="container-title">
                    <h3>Portfolio</h3>
                </div>
                <div className="recent-posts">
                    <Portfolio perPage="3" link={true} />
                </div>
            </div>

            <div className="circle"></div>
            <svg className="circle-outline">
                <circle cx="50" cy="50" r="40" stroke="#aed581" stroke-width="3" fill='none' />
            </svg> 
        </>
    )
}

export default HomePage;
