import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar className="nav-custom justify-content-center p-1">
      <Nav>
        <Nav.Link as={Link} className='text-white' to="/">Home</Nav.Link>
        <span className="text-white p-3">|</span>
        <Nav.Link as={Link} className='text-white' to="/Favoritas">Favoritos</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
