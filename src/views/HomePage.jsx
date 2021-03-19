import React from 'react';
import Container from 'react-bootstrap/Container';
import HomeCard from '../components/HomeCard';

import AllBeersImg from '../assets/beers.png';
import RandomBeerImg from '../assets/random-beer.png';
import NewBeerImg from '../assets/new-beer.png';

const HomePage = () => {
  return (
    <Container className="mt-5">
      <HomeCard
        path="/beers/"
        title="All Beers"
        image={AllBeersImg}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere, dolorem, distinctio vero dolorum hic fugiat molestiae odio neque nisi repudiandae quidem harum laudantium aliquid nostrum laboriosam. Nemo aperiam laboriosam ducimus, blanditiis est, suscipit libero rem optio enim, quo dolorum."
      />
      <HomeCard
        path="/beers/:id"
        title="Random Beer"
        image={RandomBeerImg}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere, dolorem, distinctio vero dolorum hic fugiat molestiae odio neque nisi repudiandae quidem harum laudantium aliquid nostrum laboriosam. Nemo aperiam laboriosam ducimus, blanditiis est, suscipit libero rem optio enim, quo dolorum."
      />
      <HomeCard
        path="/new-beer"
        title="New Beer"
        image={NewBeerImg}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere, dolorem, distinctio vero dolorum hic fugiat molestiae odio neque nisi repudiandae quidem harum laudantium aliquid nostrum laboriosam. Nemo aperiam laboriosam ducimus, blanditiis est, suscipit libero rem optio enim, quo dolorum."
      />
    </Container>
  );
};

export default HomePage;
