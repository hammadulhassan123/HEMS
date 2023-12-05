import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Route, Routes,NavLink,Link } from 'react-router-dom'
import UserHome from './Dashboard/userHome'
import Appliances from './Dashboard/Appliances'
import Page404 from './Page404'


export default function Navdashboard() {
  return (
    <> 
        <Navbar className='navbar-custom' expand="lg" bg="white" variant="light" sticky='top' >
            <Container>
            <Navbar.Brand className="nav-brand" >
                  <img src="src/assets/hems_logo.png" alt="" className='navbarLogo mb-1' style={{height:"30px",width:"40px", borderRadius:"10px"}}/>
                  <span className='text-success'>H</span><span className="text-success">E</span><span className="text-dark">MS</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="ms-auto mb-2 mb-lg-0 ">
                <NavLink to='/userhome' className='anchor p-2'>DashBoard</NavLink>
                <NavLink to='/appliances' className='anchor p-2'>Appliances</NavLink>
                
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
          <Routes>
                <Route path="/userhome" element={<UserHome/>} />
                <Route path="/appliances" element={<Appliances/>}/>
                <Route path='/*' element={<Page404/>}/>
          </Routes>
    </>
  )
}
