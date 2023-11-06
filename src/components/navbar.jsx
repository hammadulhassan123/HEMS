import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"

class NavBar extends Component {
  render() {
    return (
        <Navbar className='navbar-custom' expand="lg" bg="white" variant="light" fixed="top" >
        <Container>
          <Navbar.Brand className="text-secondary nav-brand" href="#">
            <span className='text-success'>H</span><span className="text-warning">E</span><span className="text-primary">MS</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ms-auto mb-2 mb-lg-0">
              <Nav.Link href="#home" className='anchor'>Home</Nav.Link>
              <Nav.Link href="#about" className='anchor'>About</Nav.Link>
              <Nav.Link href="#services" className='anchor'>Services</Nav.Link>
              <Nav.Link href="#contact" className='anchor'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
