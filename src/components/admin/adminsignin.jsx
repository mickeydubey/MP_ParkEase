import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Img from '../../assets/user.png';

const AdminSignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    id: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form fields
  const validateForm = () => {
    const { email, id, phone, password, confirmPassword } = formData;
    if (!email || !id || !phone || !password || !confirmPassword) {
      setError('All fields are required.');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    setError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const { confirmPassword, ...dataToSend } = formData; // Exclude confirmPassword from submission
      const response = await axios.post('http://localhost:3000/api/admin/loginadmin', dataToSend, {
        headers: { 'Content-Type': 'application/json' },
      })

      if (response.status === 200) {
        setSuccess('Admin signed in successfully! Redirecting...');
        setTimeout(() => navigate('/adminlogin'), 2000); // Redirect after 2s
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error during sign-in.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mt-32">
        
        {/* Illustration Section */}
        <div className="w-full md:w-10/12 flex justify-center">
          <img src={Img} alt="Admin Illustration" className="max-w-full h-auto" />
        </div>

        {/* Form Section */}
        <div className="w-auto md:w-5/6 bg-white p-8 rounded-3xl shadow-md border border-black">
          <h2 className="text-2xl font-bold text-center mb-4">Admin Sign In</h2>

          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.id}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
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
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-1/2 ml-36 bg-[#2F3645] text-white p-2 rounded-lg transition duration-200"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>

            <p className="text-center text-gray-600 mt-4">
              New admin? <a href="/adminsignup" className="text-blue-600">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn;
