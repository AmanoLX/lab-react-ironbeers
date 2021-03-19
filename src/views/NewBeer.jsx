import React, { Component } from 'react';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const beer = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    };
    this.props.onAddNewBeer(beer);
  };

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Form className="my-3" onSubmit={this.handleSubmission}>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                required
              />
            </Form.Group>
            <Form.Group controlId="Tagline">
              <Form.Label>Tagline</Form.Label>
              <Form.Control
                type="text"
                name="tagline"
                onChange={this.handleChange}
                value={this.state.tagline}
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group controlId="Brewed">
              <Form.Label>First Brewed</Form.Label>
              <Form.Control
                type="text"
                name="first_brewed"
                onChange={this.handleChange}
                value={this.state.first_brewed}
                required
              />
            </Form.Group>
            <Form.Group controlId="BrewerTips">
              <Form.Label>Brewers Tips</Form.Label>
              <Form.Control
                type="text"
                name="brewers_tips"
                onChange={this.handleChange}
                value={this.state.brewers_tips}
                required
              />
            </Form.Group>
            <Form.Group controlId="AttenuationLevel">
              <Form.Label>Attenuation Level</Form.Label>
              <Form.Control
                type="number"
                name="attenuation_level"
                onChange={this.handleChange}
                value={this.state.attenuation_level}
                required
              />
            </Form.Group>
            <Form.Group controlId="Contributed By">
              <Form.Label>Contributed By</Form.Label>
              <Form.Control
                type="text"
                name="contributed_by"
                onChange={this.handleChange}
                value={this.state.contributed_by}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Add New Beer
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default NewBeer;
