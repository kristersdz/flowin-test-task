import React, { Component } from 'react'
import { Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './Style/style.scss'

import Header from './Components/Header'

// Pages
import HomePage from './Pages/'; // Home page
import PortfolioPage from './Pages/portfolio'; // Portfolio page
import PortfolioItemPage from './Pages/portfolioItem'; // Portfolio item page
// import AboutPage from './Pages/about'; // About page
// import ContactPage from './Pages/contact'; // Contact page

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
        </Router>
      </div>
    );
  }
}
/*

            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />*/
export default App;
