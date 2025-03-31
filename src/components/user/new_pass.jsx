import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from "./../../lib/axiosInstance.js"

function Password_ResetForm() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
  const location = useLocation();
  const email = location.state?.email;
  const handleSubmit = async () => {
    if (password !== confirmPassword || !password) {
      return alert("Passwords do not match or are empty.");
    }
  
    try {
      const response = await axiosInstance.post('/reset-password', {
        email,
        newPassword: password,
      });
  
      if (response.status === 200) {
        alert("Password reset successful!");
        navigate('/pass_resetsucess');
      }
    } catch (error) {
      alert(error.response?.data?.error || "Error resetting password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-2">Set new password</h2>
        <p className="text-gray-500 text-center mb-6">
          Create a new password. Ensure it differs from previous ones for security.
        </p>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showPassword ? '🔓' : '🔒'}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1" htmlFor="confirmPassword">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showConfirmPassword ? '🔓' : '🔒'}
            </button>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          type="button"
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default Password_ResetForm;
