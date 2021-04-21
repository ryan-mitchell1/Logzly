import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GroupPage from './components/GroupPage';
import HomePage from './components/HomePage';
import LogPage from './components/LogPage';
import { useAuth } from "./lib/auth";
import LoginPage from "./components/LoginPage";
import NotFoundPage from "./components/NotFoundPage";

export default function App() {
  const auth = useAuth();
  const showLogs = auth.user ? <LogPage /> : <LoginPage />
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/logs/:groupId">
          {showLogs}
        </Route>
        <Route path="/groups">
          <GroupPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/not-found">
          <NotFoundPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
