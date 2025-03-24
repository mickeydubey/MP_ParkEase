import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract receiptData from state
  const receiptData = location.state?.receiptData;

  const handleRedirect = () => {
    if (receiptData) {
      navigate('/bookingreceipt', { state: { receiptData } }); // ✅ Pass receiptData to receipt page
    } else {
      alert('No booking data found. Redirecting to slot booking...');
      navigate('/');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-20">
      <div className="flex items-center space-x-6 p-10 border rounded-lg shadow-lg w-full max-w-xl h-72">
        {/* Green checkmark icon */}
        <div className="flex items-center justify-center w-24 h-24 mr-3 bg-green-800 rounded-full">
          <svg
            className="w-12 h-12 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Confirmation text */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            You have <br />
            successfully<br />booked your slot
          </h1>

          {/* Updated link to navigate dynamically */}
          <p className="text-xl text-gray-600 mt-2">
            To view your booking receipt,{' '}
            <span
              onClick={handleRedirect}
              className="text-blue-500 underline hover:text-blue-700 cursor-pointer"
            >
              click here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
