import React from "react";
import AboutUs from "../components/aboutus/aboutus"; // Import the AboutUs component

const LocalAboutUs = () => {  // Renamed the local component to avoid conflict
    return (
      <div className="App">
         <AboutUs />
      </div>
    );
  };
  
  export default LocalAboutUs;