import React from "react";
import './aboutus.css' // Assuming custom CSS is in this file
import aboutImage from '../../assets/about-image.png';



const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h2>ABOUT US</h2>
        <p>
          Welcome to ParkEase, your trusted partner in seamless parking management.
          We specialize in providing innovative parking solutions that cater to the
          needs of businesses, municipalities, and property owners. With years of
          industry experience, we understand the complexities of parking management
          and are dedicated to simplifying the process for our clients.
        </p>
      </div>
      <div className="about-image">
       <img src={aboutImage} alt="Parking illustration" />

      </div>
      <div className="mission-content">
        <h2>OUR MISSION</h2>
        <p>
          At ParkEase, our mission is to transform the parking experience through
          technology, efficiency, and customer-centric services. We aim to optimize
          parking operations, reduce costs, and enhance convenience for both operators
          and users.
        </p>
      </div>
      
    </div>
  );
}

export default AboutUs