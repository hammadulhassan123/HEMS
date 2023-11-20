import React, { useState, useRef } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import './styles/home.css';

function SideBar() {
  const [menuActive, setMenuActive] = useState(false);
  const menuListRef = useRef(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
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
          <li><a href="">DashBoard</a></li>
          <li><a href="">Add a new Device</a></li>
          <li><a href="">Scheduling</a></li>
        </ul>
      </div>

      <h3><b>Welcome to Home Energy Management System</b></h3>
    </>
  );
}

export default SideBar;
