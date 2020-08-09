import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css'

// Pages
import HomePage from './Pages/'; // Home page
import PortfolioPage from './Pages/portfolio'; // Portfolio

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/portfolio" component={PortfolioPage} />
            <Route path="/portfolio/:id">
              <h3>This is chosen portoflio page</h3>
            </Route>
            <Route path="/about-us">
              <h3>This is about us</h3>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
