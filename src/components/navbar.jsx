import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import "./styles/navbar.css"

class NavBar extends Component {
  render() {
    return (
        <>
            {/* Navbar is here */}
            <Navbar className='navbar-custom' expand="lg" bg="white" variant="light" sticky='top' >
            <Container>
            <Navbar.Brand className="nav-brand" >
                <img src="src/assets/hems_logo.png" alt="" className='navbarLogo mb-1' style={{height:"30px",width:"40px"}}/>
                <span>HEMS</span>
                 {/* <span className='text-success'>H</span><span className="text-warning">E</span><span className="text-primary">MS</span> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="ms-auto mb-2 mb-lg-0 ">
                <NavLink to="/" className='anchor p-2'>Home</NavLink>
                <NavLink to="/about" className='anchor p-2'>About</NavLink>
                <NavLink to="/contact" className='anchor p-2'>Contact</NavLink>
                <NavLink to="/signin" className='anchor p-2'>Sign-In</NavLink>
                <NavLink to="/signup" className='anchor p-2'>Sign-Up</NavLink>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
           
        </>
    );
  }
}

export default NavBar;
