import React, { Component } from 'react';
import { beersList } from './../services/beer-api';
import Header from '../components/Header';
import BeersListCard from '../components/BeersListCard';

class BeersList extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    this.loadBeersList();
  }

  async loadBeersList() {
    const beers = await beersList();
    this.setState({
      beers,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <ul>
          {this.state.beers &&
            this.state.beers.map((beer) => {
              return <BeersListCard key={beer.id} {...beer} />;
            })}
        </ul>
      </div>
    );
  }
}

export default BeersList;
