import React from 'react';
import Img from '../../assets/user.png';

const UserSignIn = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mt-32">
        
        {/* Illustration Section */}
        <div className="w-full md:w-10/12 flex justify-center">
          {/* Replace the src with your image URL */}
          <img
            src={Img}
            alt="Parking Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* Form Section */}
        <div className="w-auto md:w-5/6 bg-white p-8 rounded-3xl shadow-md border border-black">
          <h2 className="text-2xl font-bold text-center mb-4">User Sign In</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            
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

            <div>
              <label htmlFor="phone" className="block text-gray-600 mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

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

            <div>
              <label htmlFor="confirmPassword" className="block text-gray-600 mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-1/2 ml-36 bg-[#2F3645] text-white p-2 rounded-lg  transition duration-200"
            >
              Sign In
            </button>

            <p className="text-center text-gray-600 mt-4">
              Existing One? <a href="/userlogin" className="text-blue-600">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSignIn;
