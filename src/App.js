/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        {/* header is common for all pages */}
        <Header />
        <Switch>
          {/* /checkout route is for only checking checkout */}
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* it is for default route */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
