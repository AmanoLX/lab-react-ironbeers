import React, { Component } from 'react';
import Header from '../components/Header';
import { singleBeer } from './../services/beer-api';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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
    const {
      image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
      description,
      contributed_by,
    } = singleBeer;
    return (
      <div>
        <Header />
        {singleBeer && (
          <Card className="my-3 p-4">
            <Row>
              <Col sm={3}>
                <Card.Img src={image_url} className="beersListCardImage" />
              </Col>
              <Col sm={9}>
                <Card.Body>
                  <Card.Title>
                    <h2>{name}</h2>
                    <h4 className="text-secondary">{tagline}</h4>
                    <div className="d-flex justify-content-between">
                      <span>
                        <strong>{first_brewed}</strong>
                      </span>
                      <h4 className="text-secondary mr-5">
                        {attenuation_level}
                      </h4>
                    </div>
                  </Card.Title>
                  <Card.Text>
                    <p>{description}</p>
                    <span>
                      <strong>Created by:</strong> {contributed_by}
                    </span>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        )}
      </div>
    );
  }
}

export default SingleBeer;
