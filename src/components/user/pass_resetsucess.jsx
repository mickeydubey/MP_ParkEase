import React from 'react';
import { useNavigate } from 'react-router-dom';

const Password_ResetSuccess = () => {
  const navigate = useNavigate();

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-800 rounded-full p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 14.293a1 1 0 011.414 0l5-5a1 1 0 10-1.414-1.414L11 12.586 9.707 11.293a1 1 0 00-1.414 1.414l2 2z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M12 2a10 10 0 100 20 10 10 0 000-20zM4 12a8 8 0 1116 0 8 8 0 01-16 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Successful</h2>
        <p className="text-gray-600 mb-4">
          Congratulations! Your password has been changed.
        </p>
        <p className="text-gray-600">
         Click  <span className="text-blue-500 cursor-pointer hover:underline" onClick={() => navigate('/userlogin')}>here</span> to login.
        </p>
      </div>
    </div>
  );
};

export default Password_ResetSuccess;
