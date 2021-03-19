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