import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Route, Routes,NavLink,Link } from 'react-router-dom'
import UserHome from './Dashboard/UserHome'
import Appliances from './Dashboard/Appliances'
import Page404 from './Dashboard/Page404'
import Footer from './Footer'
import AuthUser from '../AuthUser'
import UserInfo from './Dashboard/UserInfo'
import ShowSchedule from './Dashboard/ShowSchedule'
import "./styles/navbar.css"

export default function Navdashboard() {

  const {token, logout}= AuthUser();

  function logoutUser(){
    if(token != undefined){
      logout();
    }
  }

  function logoutPrm(){
    if(confirm("Do You Want to Sign-out?")){
      logoutUser();
    }else{
      alert("Signout Cancelled")
    }
  }

  return (
    <> 
        {/* <Navbar className='navbar-custom' expand="lg" bg="white" variant="light" sticky='top' > */}
        <Navbar className='navbar-custom ' expand="lg" bg="dark" data-bs-theme="dark" sticky='top' >
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
                  <NavLink to='/userhome' className='anchor p-2'>DashBoard</NavLink>
                  <NavLink to='/addAppliances' className='anchor p-2'>Add Appliances</NavLink>
                  <NavLink to='/showscheduling' className='anchor p-2'>Scheduling</NavLink>
                  <NavLink to='/userinfo' className='anchor p-2'>Your Info</NavLink>
                  <Button variant="outline-warning btn-sm" onClick={logoutPrm}>Signout</Button>
                  </Nav>
              </Navbar.Collapse>
            </Container>
            </Navbar>


          <Routes>
                <Route path="/userhome" element={<UserHome/>} />
                <Route path="/addAppliances" element={<Appliances/>}/>
                <Route path='/userinfo' element={<UserInfo/>}/>
                <Route path='/showscheduling' element={<ShowSchedule/>}  />
                <Route path='/*' element={<Page404/>}/>
          </Routes>
          <Footer/>   
    </>
  )
}
