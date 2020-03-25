import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='links'>
          <Link to="/login">Login</Link>
          {/* <Link to="/protected">List of Friends</Link> */}
        </div>
        {/* <Switch> */}
          <PrivateRoute path="/protected" component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;