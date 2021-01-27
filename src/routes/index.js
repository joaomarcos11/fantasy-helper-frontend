import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyHome from '../pages/MyHome';
import MyStats from '../pages/MyStats';
import MyMatchup from '../pages/MyMatchup';

export default function Routes() {
  return(
    <Switch>
      <Route exact path="/" component={MyHome} />
      <Route exact path="/mystats" component={MyStats} />
      <Route exact path="/mymatchup" component={MyMatchup} />
    </Switch>
  );
}