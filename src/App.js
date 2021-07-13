import React, { Component } from 'react';
import Home from "./Pages/Home/Home";
import Topbar from "./Components/Topbar/Topbar";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { useState } from "react";



export default function App() {




  const [currentUser, setCurrentUser] = useState(localStorage.getItem('user'))

  return (

    <Router>
      <div>

        <Topbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            {currentUser ? <Redirect to="/" /> : <Login setCurrentUser={setCurrentUser} />}
          </Route>
          <Route path="/" exact >
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>


  );

}

