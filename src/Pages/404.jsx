import React from 'react';
import { Link } from 'react-router-dom';

const notFoundPage = () => {
    return (
        <div className="container" style={{minHeight: "70vh"}}>
            <h1 style={{margin: "120px 0 20px 0"}}>Your page was not found!</h1>
            <Link to="/">
                <button>Go to home</button>
            </Link>
        </div>
    )
}

export default notFoundPage;
