import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Route, Routes,NavLink,Link } from 'react-router-dom'
import UserHome from './Dashboard/userHome'
import Appliances from './Dashboard/Appliances'
import Page404 from './Dashboard/Page404'
import Footer from './Footer'
import AuthUser from '../AuthUser'

export default function Navdashboard() {

  const {token, logout}= AuthUser();

  function logoutUser(){
    if(token != undefined){
      logout();
    }
  }

  return (
    <> 
        <Navbar className='navbar-custom' expand="lg" bg="white" variant="light" sticky='top' >
            <Container>
            <Navbar.Brand className="nav-brand" >
                <NavLink to="/userhome" className="active" style={{textDecoration:"none"}}>
                  <img src="src/assets/hems_logo.png" alt="" className='navbarLogo mb-1' style={{height:"30px",width:"40px", borderRadius:"10px"}}/>
                  {/* <span>HEMS</span> */}
                  <span className='text-success'>H</span><span className="text-success">E</span><span className="text-dark">MS</span>
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="ms-auto mb-2 mb-lg-0 ">
                {/* <NavLink to='/' className='anchor p-2'>Home</NavLink> */}
                <NavLink to='/userhome' className='anchor p-2'>DashBoard</NavLink>
                <NavLink to='/addAppliances' className='anchor p-2'>Add Appliances</NavLink>
                <Button variant="outline-primary" onClick={logoutUser}>Logout</Button>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>


          <Routes>
                <Route path="/userhome" element={<UserHome/>} />
                <Route path="/addAppliances" element={<Appliances/>}/>
                <Route path='/*' element={<Page404/>}/>
          </Routes>
          <Footer/>   
    </>
  )
}
