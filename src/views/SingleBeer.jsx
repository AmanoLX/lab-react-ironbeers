import React, { Component } from 'react';
import Header from '../components/Header';
import { singleBeer } from './../services/beer-api';
import SingleBeerCard from '../components/SingleBeerCard';

export class SingleBeer extends Component {
  state = {
    beer: '',
  };

  componentDidMount() {
    this.loadBeer();
  }

  async loadBeer() {
    const id = this.props.match.params.id;
    const beer = await singleBeer(id);
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

export default SingleBeer;
