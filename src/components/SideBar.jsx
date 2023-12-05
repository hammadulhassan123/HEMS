import React, { useState, useRef } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link,NavLink, Route, Routes } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './styles/home.css';
import UserHome from './Dashboard/userHome';

function SideBar() {
  const [menuActive, setMenuActive] = useState(false);
  const menuListRef = useRef(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  
  return (
    <>
    <div className="sideNav">
      <div className="menu">
        <Button
          id='menuToggle'
          className='menuBtn m-1'
          variant='outline-success'
          onClick={toggleMenu}
          >
          <FontAwesomeIcon icon={faBars}/> <span>Menu</span>
        </Button>
        <ul id='menuList' ref={menuListRef} className={menuActive ? 'active' : ''}>
          <li><NavLink to='/userhome' className='anchor p-2'>DashBoard</NavLink></li>
          <li><NavLink to="/">Add a New Device</NavLink></li>
          <li><NavLink to="/">Scheduling</NavLink></li>
        </ul>
      </div>
    </div>
    <Routes>
          <Route path="/userhome" element={<UserHome/>} />
          <Route path="/appliances" element={<Appliances/>}/>
    </Routes>
    </>
  );
}

export default SideBar;
