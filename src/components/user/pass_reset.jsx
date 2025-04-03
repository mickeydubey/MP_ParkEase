import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Password_ResetConfirmation = () => {
  const navigate = useNavigate();
   const location = useLocation();
  const email = location.state?.email;

  const handleConfirm = () => {
    // Navigate to the page where the user sets a new password, or wherever you want to redirect.
    navigate('/new_pass', { state: { email } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Password Reset</h2>
        <p className="text-gray-500 mb-6">
          Your password has been successfully reset. Click confirm to set a new password.
        </p>
        <button
          onClick={handleConfirm}
          className="w-full bg-[#2F3645] text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition duration-200"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Password_ResetConfirmation;
