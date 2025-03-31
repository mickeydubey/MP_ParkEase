import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from "./../../lib/axiosInstance.js"

const Forgot_Password = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  const handleResetPassword = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axiosInstance.post('/api/users/send-otp', { email });
  
      if (response.status === 200) {
        alert('OTP sent to your email!');
        navigate('/email_verification', { state: { email } }); // ✅ Pass email to next page
      }
    } catch (error) {
      alert(error.response?.data?.error || 'Failed to send OTP');
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Forgot Password</h2>
        <p className="text-gray-500 text-center mb-6">Please enter your email to reset the password</p>
        
        <form onSubmit={handleResetPassword}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            placeholder="Enter your email"
            required
          />
          
          <button
            onClick={() => navigate('/email_verify')}
            type="submit"
            className="w-full bg-[#2F3645] text-white font-semibold py-3 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700"
          >
            Reset Password
          </button>
        </form>

        <button
          onClick={() => navigate('/userlogin')}
          className="text-blue-600 hover:underline mt-4 block text-center"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default Forgot_Password;
