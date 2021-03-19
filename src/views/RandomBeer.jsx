import React, { Component } from 'react';
import Header from '../components/Header';
import { randomBeer } from './../services/beer-api';
import SingleBeerCard from '../components/SingleBeerCard';

export class RandomBeer extends Component {
  state = {
    beer: '',
  };

  componentDidMount() {
    this.loadRandomBeer();
  }

  async loadRandomBeer() {
    const beer = await randomBeer();
    console.log('Load random beer successful');
    this.setState({
      beer: beer,
    });
  }

  render() {
    const singleBeer = this.state.beer;

    return (
      <div>
        <Header />
        {singleBeer && <SingleBeerCard {...singleBeer} />}
      </div>
    );
  }
}

export default RandomBeer;
