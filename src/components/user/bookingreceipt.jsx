import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Log.png';
import Bar from '../../assets/barcode.png';

const BookingReceipt = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // If no state data is passed, redirect back to slot booking
  if (!state || !state.receiptData) {
    navigate('/slotbooking');
    return null;
  }

  const { ownername, slot_no, vehicle_no, date, contact, time, vehicle_category } = state.receiptData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-14 px-4">
      <div className="bg-gray-200 rounded-lg shadow-lg w-full max-w-lg p-6 space-y-4">
        {/* Logo and Title */}
        <div className="flex flex-col items-center">
          <img src={Logo} alt="ParkEase Logo" className="w-24 h-12 mb-4" />
          <hr className="w-full border-t border-dotted border-black my-2" />
          <h1 className="text-2xl font-semibold text-gray-800">Booking Receipt</h1>
          <hr className="w-full border-t border-dotted border-black my-2" />
        </div>

        {/* Receipt Information */}
        <div className="text-gray-700 text-center space-y-2">
          <p><span className="font-semibold">Owner Name:</span> {ownername}</p>
          <p><span className="font-semibold">Vehicle Category:</span> {vehicle_category || 'N/A'}</p>
          <p><span className="font-semibold">Vehicle Registration No:</span> {vehicle_no}</p>
          <p><span className="font-semibold">Contact No:</span> {contact}</p>
          <p><span className="font-semibold">Date:</span> {date}</p>
          <p><span className="font-semibold">Time:</span> {time}</p>
          <p><span className="font-semibold">Slot Allotted:</span> {slot_no}</p>
        </div>

        <hr className="w-full border-t border-dotted border-black my-4" />

        {/* Thank You Note */}
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800">THANK YOU & DRIVE SAFELY!!</p>
        </div>

        {/* Barcode Image */}
        <div className="flex justify-center">
          <img src={Bar} alt="Barcode" className="w-48 h-12" />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-4">
          <button onClick={handlePrint} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
            Print
          </button>
          <button onClick={() => navigate('/slotbooking')} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingReceipt;
