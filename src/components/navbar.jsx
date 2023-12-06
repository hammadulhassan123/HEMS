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
import UserHome from './Dashboard/userHome';
import Footer from './Footer';
import AuthUser from '../AuthUser';

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
            <Navbar className='navbar-custom' expand="lg" bg="white" variant="light" sticky='top' >
            <Container>
            <Navbar.Brand className="nav-brand" >
                <NavLink to="/" className="active" style={{textDecoration:"none"}}>
                  <img src="src/assets/hems_logo.png" alt="" className='navbarLogo mb-1' style={{height:"30px",width:"40px", borderRadius:"10px"}}/>
                  {/* <span>HEMS</span> */}
                  <span className='text-success'>H</span><span className="text-success">E</span><span className="text-dark">MS</span>
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="ms-auto mb-2 mb-lg-0 ">
                <NavLink to="/" className='anchor p-2 active'>Home</NavLink>
                <NavLink to="/about" className='anchor p-2'>About</NavLink>
                <NavLink to="/contact" className='anchor p-2'>Contact</NavLink>
                <NavLink to="/signin" className='anchor p-2'>Sign-In</NavLink>
                <NavLink to="/signup" className='anchor p-2'>Sign-Up</NavLink>
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
