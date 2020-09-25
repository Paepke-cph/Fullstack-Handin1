import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch.jsx';
import Scrape from '../components/Scrape.jsx';
import Jokes from '../components/Jokes.jsx';
import Home from '../components/Home.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/jokes'>
        <Jokes />
      </Route>
      <Route path='/scrape'>
        <Scrape />
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default Routes;