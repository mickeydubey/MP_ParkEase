import React from 'react';
import './Footer.css'; // Import CSS for styling
import { FaFacebookF, FaInstagram, FaTimes } from 'react-icons/fa'; // Font Awesome icons
import logo from './assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <img src={logo} alt="ParkEase logo" className="footer-logo" /> {/* Replace with your logo path */}
        
      </div>
      <div className="footer-center">
        <p>ParkEase© 2024. All rights reserved.</p>
      </div>
      <div className='right-gh' >
        <a href="#" aria-label="Twitter" className="social-icon"><FaTimes /></a>
        <a href="#" aria-label="Facebook" className="social-icon"><FaFacebookF /></a>
        <a href="#" aria-label="Instagram" className="social-icon"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;
