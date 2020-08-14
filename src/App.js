import React, { Component } from 'react'
import { Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './style/style.scss'

import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import HomePage from './pages/'; // Home page
import PortfolioPage from './pages/portfolio'; // Portfolio page
import PortfolioItemPage from './pages/portfolioItem'; // Portfolio item page
import NotFoundPage from './pages/404'; // Contact page

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/portfolio" component={PortfolioPage} />
            <Route exact path="/portfolio/:id" component={PortfolioItemPage} />
            <Route exact path="/404" component={NotFoundPage} />

            <Redirect to="/404" />
          </Switch>

          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
