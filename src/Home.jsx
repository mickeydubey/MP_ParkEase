import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    
    <div className="save-benefits-container">
      <div className="benefit-item">
        <i className="fas fa-wallet icon"></i>
        <h3>Save Money</h3>
        <p>Save up to 70% on our site compared to the cost of on-airport parking.</p>
      </div>
      <div className="benefit-item">
        <i className="fas fa-clock icon"></i>
        <h3>Save Time</h3>
        <p>It’s easy to compare parking at all major airports. Booking a reservation is quick & simple!</p>
      </div>
      <div className="benefit-item">
        <i className="fas fa-thumbs-up icon"></i>
        <h3>Save Stress</h3>
        <p>Guarantee your parking spot by booking in advance. Can’t make it? Cancellations are free!</p>
      </div>
    </div>
     
    
    
  );
};

export default Home;
   

