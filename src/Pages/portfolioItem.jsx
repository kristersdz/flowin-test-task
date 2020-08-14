import React from 'react'

import Portfolio from '../components/Portfolio'

const PortfolioItemPage = (props) => {
    console.log(props.match.params.id)
    return (
        <div>
            <Portfolio id={props.match.params.id} />
        </div>
    )
}

export default PortfolioItemPage;