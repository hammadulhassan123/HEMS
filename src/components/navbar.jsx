import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Route, Routes } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import "./styles/navbar.css"
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Page404 from './Page404';
import Footer from './Footer';
import AuthUser from '../AuthUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component {
  render() {
    // const {getToken}= AuthUser();
    // if(!getToken()){
    //   return (
    //     <>
    //       <SignIn/>
    //       <Footer/>
    //     </>
    //   )
    // }
    return (
        <>
            {/* Navbar is here */}
            <Navbar className='navbar-custom' expand="lg" bg="dark" variant="dark" sticky='top' >
            <Container>
            <Navbar.Brand className="nav-brand" >
                  <NavLink to="/userhome" className="active" style={{textDecoration:"none"}}>
                    <img src="src/assets/logo new.jpg" alt="" className='navbarLogo mb-1' />
                    {/* <span>HEMS</span> */}
                    {/* <span className='text-success'>H</span><span className="text-success">E</span><span className="text-light">MS</span> */}
                  </NavLink>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="ms-auto mb-2 mb-lg-0 ">
                <NavLink to="/" className='anchor p-2 active'>Home</NavLink>
                <NavLink to="/about" className='anchor p-2'>About</NavLink>
                <NavLink to="/contact" className='anchor p-2'>Contact</NavLink>
                <NavLink to="/signin" className='anchor p-2'>Sign-In <FontAwesomeIcon icon={faArrowRightToBracket} /> </NavLink>
                <NavLink to="/signup" className='anchor p-2'>Sign-Up <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </NavLink>
                {/* <NavLink to='/userhome' className='anchor p-2'>DashBoard</NavLink>
                <NavLink to='/appliances' className='anchor p-2'>Appliances</NavLink> */}
                
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
           

            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<ContactUs/>}/>
              <Route path='/signin' element={<SignIn/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              {/* <Route path="/userhome" element={<UserHome/>} /> */}
              <Route path='/*' element={<Page404/>}/>
            </Routes>
            <Footer/>
        </>
    );
  }
}

export default NavBar;
