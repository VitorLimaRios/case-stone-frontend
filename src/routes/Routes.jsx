import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  Login,
  Register,
  Characters,
  CharacterDetails,
  Comics,
  ComicDetails,
  UserDetails,
} from '../pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/characters" component={Characters} />
      <Route exact path="/characters/:id" component={CharacterDetails} />
      <Route exact path="/comics" component={Comics} />
      <Route exact path="/comics/:id" component={ComicDetails} />
      <Route exact path="/user-details" component={UserDetails} />
    </Switch>
  );
}

export default Routes;
