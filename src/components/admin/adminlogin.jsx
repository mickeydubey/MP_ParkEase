import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../lib/axiosInstance';
import CarImage from '../../assets/carillustration.svg';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axiosInstance.post('/api/admin/loginadmin', formData);
      const { token } = response.data;
      console.log("admin reponse:",response);
      
      localStorage.setItem('authToken', token); // Save token
      navigate('/dashboard'); // Redirect to admin dashboard
    } catch (error) {
      setError(error.response?.data?.error || 'Login failed!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={CarImage} alt="Car Illustration" className="max-w-full h-auto" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/3 bg-white p-16 rounded-3xl shadow-md border border-black">
          <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-7">
            {/* email Input */}
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Links */}
            <div className="flex items-center justify-between text-gray-600">
              <Link to="/adminsignin" className="text-blue-600">Sign Up</Link>
              <Link to="/adminforgotpass" className="text-blue-600">Forgot Password?</Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#2F3645] text-white rounded-lg h-10 transition duration-200"
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
