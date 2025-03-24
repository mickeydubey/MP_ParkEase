import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/bg.png'; // Adjust path based on your component’s location

const SlotBooking = () => {
  const navigate = useNavigate();

  // State to store form data
  const [formData, setFormData] = useState({
    ownername: '',
    slot_no: '',
    vehicle_no: '',
    date: '',
    contact: '',
    time: '',
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitting slot booking with data:', formData);

    try {
      // Save the data in the backend
      const response = await fetch('http://localhost:3000/api/slotbooking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Slot booked successfully!');

        // Pass the form data to BookingReceipt without using an ID
        navigate('/bookingconfirmation', { state: { receiptData: formData } });
      } else {
        alert(data.message || 'Slot booking failed!');
      }
    } catch (error) {
      console.error('Error booking slot:', error);
      alert('Failed to connect to server. Please try again!');
    }
  };
  

  return (
    <div
      className="min-h-screen flex flex-row"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
      }}
    >
      <main className="flex-grow flex flex-col items-center justify-end pb-12">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 sm:p-8 border-t-4 border-blue-600 mb-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Slot Booking</h2>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="ownername" className="block text-sm font-medium text-gray-700">
                  Owner Name
                </label>
                <input
                  type="text"
                  id="ownername"
                  value={formData.ownername}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="slot_no" className="block text-sm font-medium text-gray-700">
                  Slot Number
                </label>
                <input
                  type="text"
                  id="slot_no"
                  value={formData.slot_no}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Slot number"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="vehicle_no" className="block text-sm font-medium text-gray-700">
                  Vehicle Registration No.
                </label>
                <input
                  type="text"
                  id="vehicle_no"
                  value={formData.vehicle_no}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Vehicle number"
                  required
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
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
                  value={formData.contact}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Contact number"
                  required
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <button
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
