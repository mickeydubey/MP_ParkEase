import React from 'react';
import { Link } from 'react-router-dom';
import CarImage from '../../assets/carillustration.svg'; // Replace with your image path

const UserLogin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-14">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center ">
          <img src={CarImage} alt="Car Illustration" className="max-w-full h-auto" />
        </div>
        
        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-white p-20 rounded-3xl border border-black shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">User Login</h2>
          
          <form className="space-y-4">
            {/* ID Input */}
            <div>
              <label htmlFor="id" className="block text-gray-600 mb-1">Username</label>
              <input
                type="text"
                id="id"
                name="id"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            
            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            
            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-gray-600">
            <Link to="/userignin" className="text-blue-500 hover:none">Sign Up</Link>
              <Link to="/userforgotpass" className="text-blue-500 hover:none">Forgot Password?</Link>
            </div>
            
            {/* Login Button */}
            <button
              type="submit"
              className="w-full justify-center bg-[#2F3645] text-white p-2 rounded-lg hover:bg-[#2F3645] transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
