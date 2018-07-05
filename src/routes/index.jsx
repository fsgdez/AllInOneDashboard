import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// pages
import Login from 'pages/Login';

const routes = () => (
  <Router>
    <Route path="/" component={Login}/>
  </Router>
);
export default routes;
