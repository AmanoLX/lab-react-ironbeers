import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const HomeCard = (props) => {
  const { image, title, text, path } = props;

  return (
    <Link to={path} style={{ color: 'inherit', textDecoration: 'inherit' }}>
      <Card className="mb-4">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            <h1>{title}</h1>
          </Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default HomeCard;
