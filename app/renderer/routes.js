import React from 'react';
import { Switch, Route } from 'react-router';

import LoginPage from './containers/LoginPage';
import LoggedInPage from './containers/LoggedInPage';
import DashboardPage from './containers/DashboardPage'
import RskHome from './containers/RsjHomePage'

export default (
  <Switch>
    <Route exact path="/" component={DashboardPage} />
    <Route exact path="/loggedin" component={LoggedInPage} />
    <Route exact path="/rskjHome" component={RskHome} />
  </Switch>
);
