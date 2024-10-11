import React from 'react';
import './Services.css'; // Optional: For custom styling
import homeicon from './assets/homeicon.png'; // Adjust the path accordingly
import parkingtechintegration from './assets/parkingtechintegration.png'; // Adjust the path accordingly
import consultingservices from './assets/consultingservices.png'; // Adjust the path accordingly
import securityncon from './assets/securityncon.png'; // Adjust the path accordingly
const Services = () => {
  return (
  <div>
    <div className='cardsfour'>
    <div className="card-ab">
      <div className="card-content">
        <div className="icon">
          <i className="fas fa-building"></i><img src={homeicon} alt="Home Icon" width="40" height="40" />
        </div>
        <h3>Parking Facility Management</h3>
        <p>
          From small lots to large parking structures, we manage every aspect to
          ensure smooth operations.
        </p>
      </div>
    </div>

    <div className="card-ab">
      <div className="card-content">
        <div className="icon">
          <i className="fas fa-building"></i><img src={parkingtechintegration} alt="Home Icon" width="40" height="40" />
        </div>
        <h3>Parking Technology Integration</h3>
        <p>
        We implement advanced parking solutions, including automated payment systems, real-time space availability tracking, and mobile app integrations.
        </p>
      </div> 
    </div>

    <div className="card-ab">
      <div className="card-content">
        <div className="icon">
          <i className="fas fa-building"></i><img src={securityncon} alt="Home Icon" width="40" height="40" />
        </div>
        <h3>Security and Compliance</h3>
        <p>
        We ensure that your parking facilities are safe, secure, and comply with all relevant regulations.
        </p>
      </div>
    </div>

    <div className="card-ab">
      <div className="card-content">
        <div className="icon">
          <i className="fas fa-building"></i><img src={consultingservices} alt="Home Icon" width="40" height="40" />
        </div>
        <h3>Consulting Services</h3>
        <p>
        Our experts provide strategic insights to help you maximize revenue, improve user experience, and reduce operational challenges
        </p>
      </div>
    </div>
     </div>
    </div>
     );
};
export default Services;