import React from "react";
import Lcimg from "./../../assets/LOC.png"; // Replace with the actual path to your image
import { useNavigate } from 'react-router-dom';
const LocationPage = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        
        {/* Form Section */}
        <div className="w-full md:w-1/3 bg-white p-8 md:p-10 rounded-3xl border border-gray-300 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Location</h2>
          
          <form className="space-y-6">
            {/* City Input */}
            <div>
              <label htmlFor="city" className="block text-gray-700 mb-2">Search for your city</label>
              <select
                id="city"
                name="city"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="">Select City</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                {/* Add more cities as options here */}
              </select>
            </div>
            
            {/* Space Input */}
            <div>
              <label htmlFor="space" className="block text-gray-700 mb-2">Space near you</label>
              <select
                id="space"
                name="space"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="">Select Space</option>
                <option value="parking-1">Parking Lot 1</option>
                <option value="parking-2">Parking Lot 2</option>
                {/* Add more spaces as options here */}
              </select>
            </div>
            
            {/* Select Button */}
            <button
              onClick={() => navigate('/slotbooking')}
              type="submit"
              className="w-full bg-[#2F3645] text-white p-3 rounded-lg hover:bg-[#1e2430] transition duration-200"
            >
              Select
            </button>
          </form>
        </div>
        
        {/* Image Section */}
        <div className="w-full md:w-2/3 flex justify-center">
          <img src={Lcimg} alt="Parking Location Illustration" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
