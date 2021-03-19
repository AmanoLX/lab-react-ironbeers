import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const BeersListCard = (beer) => {
  const { _id, image_url, name, tagline, contributed_by } = beer;
  return (
    <Link
      to={`/beers/${_id}`}
      style={{ color: 'inherit', textDecoration: 'inherit' }}
    >
      <Card className="my-3 p-4">
        <Row>
          <Col sm={3}>
            <Card.Img src={image_url} className="beersListCardImage" />
          </Col>
          <Col sm={9}>
            <Card.Body>
              <Card.Title>
                <h2>{name}</h2>
              </Card.Title>
              <Card.Text>
                <h4 className="text-secondary">{tagline}</h4>
                <span>
                  <strong>Created by:</strong> {contributed_by}
                </span>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Link>
  );
};

export default BeersListCard;
