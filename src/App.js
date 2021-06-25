import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Media css for responsivness
import './media.css';

// Components
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Home from './components/Home';

// Firebase
import { auth } from './config';

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged(res => {
      if(res) {
        console.log('Logged in')
      }
      else {
        console.log('Logged out')
      }
    })
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Signin} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
