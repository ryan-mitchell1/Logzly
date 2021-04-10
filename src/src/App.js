import React from "react";
import "./styles.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";  

import GroupPage from './components/GroupPage';
import LoginPage from './components/LoginPage';
import LogPage from './components/LogPage';

  export default function App() {
    return (
      <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/logs">
              <LogPage />
            </Route>
            <Route path="/groups">
              <GroupPage />
            </Route>
            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
      </Router>
    );
  }