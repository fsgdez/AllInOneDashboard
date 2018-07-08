import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// pages
import Login from 'pages/login/Login';
import Dashboard from 'pages/dashboard/Dashboard';

const routes = () => (
  <Router>
    <Switch>
      <Route component={Login} exact path="/" />
      <Route component={Dashboard} exact path="/dashboard" />
      <Redirect from="/login" to="/" />
    </Switch>
  </Router>
);
export default routes;
