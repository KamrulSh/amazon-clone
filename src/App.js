import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Payment';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app components load
    auth.onAuthStateChanged(authUser => {
      // console.log("The user is", authUser);

      if(authUser) {
        // the user just/was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

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
          {/* /payment route is for card payment */}
          <Route path="/payment">
            <Header />
            <Payment />
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
