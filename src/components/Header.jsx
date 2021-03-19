import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg="primary" fluid="true">
      <Navbar.Brand href="/" className="mx-auto text-white">
        <i className="fas fa-home fa-2x"></i>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
