import React from 'react';
import {
  Route, Switch, Redirect, BrowserRouter,
} from 'react-router-dom';
import {
  Login,
  Register,
  Characters,
  CharacterDetails,
  Comics,
  ComicDetails,
  UserDetails,
  FavoriteCharacters,
  FavoriteComics,
} from '../pages';

export default function Routes() {
  return (
    <BrowserRouter>
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
        <Route exact path="/user/details" component={UserDetails} />
        <Route exact path="/user/comics" component={FavoriteComics} />
        <Route exact path="/user/characters" component={FavoriteCharacters} />
      </Switch>
    </BrowserRouter>
  );
}
