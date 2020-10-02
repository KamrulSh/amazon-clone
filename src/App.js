/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* it is for user login */}
          <Route path="/login">
            <Login />
          </Route>
          {/* /checkout route is for only checking checkout */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* it is for default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
