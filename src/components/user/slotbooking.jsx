import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/bg.png'; // Adjust path based on your component’s location
import Layout from './../layout'; 

const SlotBooking = () => {
  const navigate = useNavigate();
  return (
    
    <div
    className="min-h-screen  flex flex-row  "
    style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: '100%', // Adjust this percentage to reduce or increase the size of the background image
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
      
      }}
    >
      <main className="flex-grow flex flex-col items-center justify-end pb-12">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 sm:p-8 border-t-4 border-blue-600 mb-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Slot Booking</h2>
          {/* Form Fields */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">
                  Owner Name
                </label>
                <input
                  type="text"
                  id="ownerName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="slotNumber" className="block text-sm font-medium text-gray-700">
                  Slot Number
                </label>
                <input
                  type="text"
                  id="slotNumber"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Slot number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="vehicleReg" className="block text-sm font-medium text-gray-700">
                  Vehicle Registration No.
                </label>
                <input
                  type="text"
                  id="vehicleReg"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Vehicle number"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                  Contact No.
                </label>
                <input
                  type="tel"
                  id="contact"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Contact number"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => navigate('/bookingconfrimation')}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Book Slot
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
    
  );
};


export default SlotBooking;
