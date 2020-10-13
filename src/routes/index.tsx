import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import Tasks from '../pages/Tasks';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/signin" component={SignIn} />
    <Route path="/tasks" component={Tasks} isPrivate />
  </Switch>
);

export default Routes;
