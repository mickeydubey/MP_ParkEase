import React from 'react';

const AdminSignIn = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        
        {/* Illustration Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          {/* Replace the src with your image URL */}
          <img
            src="your-image-url-here.png"
            alt="Parking Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4">Admin Sign In</h2>
          
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
              <label htmlFor="id" className="block text-gray-600 mb-1">ID</label>
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
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Sign In
            </button>

            <p className="text-center text-gray-600 mt-4">
              Existing One? <a href="/adminlogin" className="text-blue-600">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn;
