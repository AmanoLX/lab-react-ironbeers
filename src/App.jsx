import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import BeersList from './views/BeersList';
import SingleBeer from './views/SingleBeer';
// import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/beers" component={BeersList} exact />
        <Route path="/beers/:id" component={SingleBeer} exact />
        <Route path="/new-beer" component={NewBeer} exact />
      </Switch>
    </Router>
  );
};

export default App;
