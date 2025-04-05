// import { useState } from 'react';
// import { useParams, useNavigate, useLocation } from 'react-router-dom';

// function BookingForm() {
//   const { locationName } = useParams();
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   const [form, setForm] = useState({ name: '', vehicleNumber: '', contactNumber: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate(`/book/${locationName}/slot`, { state: { ...form, slots: state.slots } });
//   };

//   return (
//     <div className="p-4 mt-96">
//       <h1 className="text-2xl font-bold mb-4">Book a Slot at {locationName}</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Name"
//           value={form.name}
//           onChange={e => setForm({ ...form, name: e.target.value })}
//           className="p-2 border border-gray-400 rounded w-full max-w-xs"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Vehicle Number"
//           value={form.vehicleNumber}
//           onChange={e => setForm({ ...form, vehicleNumber: e.target.value })}
//           className="p-2 border border-gray-400 rounded w-full max-w-xs"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Contact Number"
//           value={form.contactNumber}
//           onChange={e => setForm({ ...form, contactNumber: e.target.value })}
//           className="p-2 border border-gray-400 rounded w-full max-w-xs"
//           required
//         />
//         <button type="submit" className="p-2 bg-blue-500 text-white rounded">
//           Next: Select Slot
//         </button>
//       </form>
//     </div>
//   );
// }

// export default BookingForm;





// import { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/bg.png';
import axiosInstance from '../../lib/axiosInstance';
// import axiosInstance from '../../lib/axiosInstance'; // ✅ Import axiosInstance

const SlotBooking = () => {
  // const navigate = useNavigate();
    const { locationName } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation(); // Get slots from ParkingList
  const [form, setForm] = useState({ name: '', vehicleNumber: '', contactNumber: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/spacesection/${locationName}/slot`, { state: { ...form, slots: state.slots } });
  };

  // const [formData, setFormData] = useState({
  //   ownername: '',
  //   slot_no: '',
  //   vehicle_no: '',
  //   date: '',
  //   contact: '', 
  //   time: '',
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.id]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log('Submitting slot booking with data:', formData);

  //   try {
  //     const response = await axiosInstance.post('/api/slotbooking', formData);

  //     if (response.status === 201) {
  //       alert('Slot booked successfully!');
  //       navigate('/bookingconfirmation', { state: { receiptData: formData } });
  //     } else {
  //       alert(response.data.message || 'Slot booking failed!');
  //     }
  //   } catch (error) {
  //     console.error('Error booking slot:', error);
  //     alert(error.response?.data?.message || 'Failed to book slot. Please try again!');
  //   }
  // };

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

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="ownername" className="block text-sm font-medium text-gray-700">Owner Name</label>
                <input
                  type="text"
                  id="ownername"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your name"
                  required
                />
              </div>

              
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="vehicle_no" className="block text-sm font-medium text-gray-700">Vehicle Registration No.</label>
                <input
                  type="text"
                  id="vehicle_no"
          value={form.vehicleNumber}
          onChange={e => setForm({ ...form, vehicleNumber: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Vehicle number"
                  required
                />
              </div>

              
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact No.</label>
                <input
                  type="tel"
                  id="contact"
          value={form.contactNumber}
          onChange={e => setForm({ ...form, contactNumber: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Contact number"
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

