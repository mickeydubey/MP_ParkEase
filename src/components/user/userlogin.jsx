import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CarImage from '../../assets/carillustration.svg';

const UserLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Fixed syntax error here
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateForm = () => {
    if (!username || !password) {
      setError('Both Username and Password are required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        const token = response.data.token;

        // Save the token in local storage
        localStorage.setItem('authToken', token);

        // Navigate to the location page
        navigate('/location');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError(error.response?.data?.message || 'An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
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
          <h2 className="text-2xl font-bold text-center mb-6">User Login</h2>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form className="space-y-7" onSubmit={handleSubmit}>
            {/* Username Input */}
            <div>
              <label htmlFor="username" className="block text-gray-600 mb-1">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-300 p-1 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 p-1 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {passwordVisible ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-gray-600 relative top-3">
              <Link to="/usersignin" className="text-blue-600 hover:none">Sign Up</Link>
              <Link to="/userforgotpass" className="text-blue-600 hover:none">Forgot Password?</Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#2F3645] text-white rounded-lg h-10 transition duration-200"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;