import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CarImage from '../../assets/carillustration.svg'; // Replace with your image path

const AdminLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center ">
          <img src={CarImage} alt="Car Illustration" className="max-w-full h-auto" />
        </div>
        
        {/* Form Section */}
        <div className="w-full md:w-1/3  bg-white p-16  rounded-3xl shadow-md border border-black">
          <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
          
          <form className="space-y-7">
            {/* ID Input */}
            <div>
              <label htmlFor="id" className="block text-gray-600 mb-1">ID</label>
              <input
                type="text"
                id="id"
                name="id"
                className="w-full border border-gray-300 p-1 rounded-lg focus:outline-none focus:border-blue-500"
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
                className="w-full border border-gray-300 p-1 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            
            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between  text-gray-600 relative top-3 ">
            <Link to="/adminsignin" className="text-blue-600 hover:none ">Sign Up</Link>
              <Link to="/adminforgotpass" className="text-blue-600 hover:none ">Forgot Password?</Link>
            </div>
            
            {/* Login Button */}
            <button
              onClick={() => navigate('/dashboard')}
              type="submit"
              className="w-full bg-[#2F3645] text-white  rounded-lg h-10 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
