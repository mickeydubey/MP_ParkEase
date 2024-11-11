import React from 'react';
import Logo from '../../assets/Log.png';
import Bar from '../../assets/barcode.png';
import { useNavigate } from 'react-router-dom';

function BookingReceipt() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 space-y-4">
        
        {/* Logo and Title */}
        <div className="flex flex-col items-center">
          <img
            src={Logo} // Replace with actual logo source
            alt="ParkEase Logo"
            className="w-24 mb-4"
          />
          <hr className="w-full border-t border-gray-300 my-2" />
          <h1 className="text-2xl font-semibold text-gray-800">Booking Receipt</h1>
          <hr className="w-full border-t border-gray-300 my-2" />
        </div>
        
        {/* Receipt Information */}
        <div className="text-gray-700 text-center space-y-2">
          <p><span className="font-semibold">Owner Name:</span> XYZ</p>
          <p><span className="font-semibold">Vehicle Category:</span> 4-Wheeler</p>
          <p><span className="font-semibold">Vehicle Registration No:</span> MH 34 BL 1234</p>
          <p><span className="font-semibold">Contact No:</span> 1234567890</p>
          <p><span className="font-semibold">Date:</span> 10/09/24</p>
          <p><span className="font-semibold">Slot Allotted:</span> L1/0A/06</p>
        </div>

        <hr className="w-full border-t border-gray-300 my-4" />
        
        {/* Thank You Note */}
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800">THANK YOU & DRIVE SAFELY!!</p>
        </div>

        {/* Barcode Image */}
        <div className="flex justify-center">
          <img
            src={Bar} // Replace with actual barcode source
            alt="Barcode"
            className="w-48 h-12"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-4">
          <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">Print</button>
          <button onClick={() => navigate('/slotbooking')} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">Home</button>
        </div>
      </div>
    </div>
  );
}

export default BookingReceipt;
