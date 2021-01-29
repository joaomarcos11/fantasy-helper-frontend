import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import MyHome from '../pages/MyHome';
import MyStats from '../pages/MyStats';
import MyMatchup from '../pages/MyMatchup';

export default function Routes() {
  return(
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/myhome" exact isPrivate component={MyHome} />
      <Route path="/mystats" exact isPrivate component={MyStats} />
      <Route path="/mymatchup" exact isPrivate component={MyMatchup} />
    </Switch>
  );
}