import React from 'react';
import './NavBar.css'; // Link to the CSS file
import logo from './assets/logo.png'; // Adjust the path based on where your image is located


const NavBar = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="navbar-logo">
        <img src={logo} alt="ParkEase Logo" className="logo" />
        
      </div>
      <ul className="navbar-links">
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="btn admin">Admin</button>
        <button className="btn user">User</button>
      </div>
    </nav>
  );
};

export default NavBar;
