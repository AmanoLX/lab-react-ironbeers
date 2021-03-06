import axios from 'axios';

export const beersList = async () => {
  const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
  console.log(response);
  return response.data;
};

export const singleBeer = async (id) => {
  const response = await axios.get(
    `https://ih-beers-api2.herokuapp.com/beers/${id}`
  );
  console.log(response);
  return response.data;
};

export const randomBeer = async () => {
  const response = await axios.get(
    'https://ih-beers-api2.herokuapp.com/beers/random'
  );
  console.log(response);
  return response.data;
};

export const newBeer = async () => {
  const response = await axios.post(
    'https://ih-beers-api2.herokuapp.com/beers/new'
  );
  return response.data;
};
