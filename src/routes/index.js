import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import MyHome from '../pages/MyHome';
import AddStats from '../pages/AddStats';
import ReviewStats from '../pages/ReviewStats';
import MyMatchup from '../pages/MyMatchup';

export default function Routes() {
  return(
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/myhome" exact isPrivate component={MyHome} />
      <Route path="/addstats" exact isPrivate component={AddStats} />
      <Route path="/reviewstats" exact isPrivate component={ReviewStats} />
      <Route path="/mymatchup" exact isPrivate component={MyMatchup} />
    </Switch>
  );
}