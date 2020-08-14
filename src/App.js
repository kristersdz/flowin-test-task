import React, { Component } from 'react'
import { Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './style/style.scss'

import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import HomePage from './pages/'; // Home page
import PortfolioPage from './pages/portfolio'; // Portfolio page
import PortfolioItemPage from './pages/portfolioItem'; // Portfolio item page
// import AboutPage from './pages/about'; // About page
// import ContactPage from './pages/contact'; // Contact page

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
          </Switch>

          <Footer />
        </Router>
      </div>
    );
  }
}
/*

            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />*/
export default App;
