// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate, useLocation } from 'react-router-dom';
// import car from '../../assets/Car Top View.png';


// function SlotSelection() {
//   const { locationName } = useParams();
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [bookedSlots, setBookedSlots] = useState([]);

//   // Generate 7 days from current date
//   const getNext7Days = () => {
//     const days = [];
//     const today = new Date(); // Real current date
//     for (let i = 0; i < 7; i++) {
//       const date = new Date(today);
//       date.setDate(today.getDate() + i);
//       days.push({
//         date: date.toISOString().split('T')[0], // e.g., '2025-04-03'
//         display: `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()} - ${date.toLocaleString('default', { weekday: 'short' })}`,
//       });
//     }
//     return days;
//   };
//   const dates = getNext7Days();

//   useEffect(() => {
//     if (selectedDate) {
//       axios.get('http://localhost:3000/bookings', {
//         params: { locationName, date: selectedDate },
//       })
//         .then(res => setBookedSlots(res.data.map(b => b.slot)))
//         .catch(err => console.error(err));
//     }
//   }, [locationName, selectedDate]);

//   const handleSubmit = async () => {
//     if (selectedSlot === null || !selectedDate) return alert('Please select a slot and date');

//     const bookingData = {
//       ...state,
//       locationName,
//       slot: selectedSlot,
//       date: selectedDate,
//     };

//     try {
//       await axios.post('http://localhost:3000/book', bookingData);
//       navigate('/thank-you');
//     } catch (err) {
//       alert('Booking failed: ' + err.response.data.message);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Select a Slot at {locationName}</h1>

//       <h2 className="text-lg font-medium mb-2">Select Date</h2>
//       <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7 mb-4">
//         {dates.map((d, i) => (
//           <div
//             key={i}
//             onClick={() => setSelectedDate(d.date)}
//             className={`p-4 border border-gray-400 rounded-lg text-center cursor-pointer ${
//               selectedDate === d.date ? 'bg-blue-200' : 'bg-white'
//             } hover:bg-blue-100 transition-colors`}
//           >
//             <p className="text-sm font-semibold">{d.display}</p>
//           </div>
//         ))}
//       </div>

//       {selectedDate && (
//         <div>
//           <h2 className="text-lg font-medium mb-2">Select a Slot</h2>
//           <div className="grid grid-cols-3 gap-4 lg:grid-cols-6">
//             {Array.from({ length: state.slots }, (_, index) => {
//               const isBooked = bookedSlots.includes(index);
//               const isSelected = selectedSlot === index;
//               return (
//                 <div
//                   key={index}
//                   onClick={() => !isBooked && setSelectedSlot(index)}
//                   className={`flex flex-col items-center justify-center w-20 h-10 rounded-md p-1 border border-gray-400 ${
//                     isBooked ? 'bg-red-200' : isSelected ? 'bg-yellow-200' : 'bg-white'
//                   } ${!isBooked ? 'cursor-pointer' : 'cursor-not-allowed'}`}
//                 >
//                   <img src={car} alt="Car" className="w-10 h-12 mb-1" />
//                 </div>
//               );
//             })}
//           </div>
//           <button onClick={handleSubmit} className="mt-4 p-2 bg-blue-500 text-white rounded">
//             Book Now
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SlotSelection;










import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import car from '../../assets/Car Top View.png';

function SlotSelection() {


  const { locationName } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [bookedSlots, setBookedSlots] = useState([]);


  const getNext7Days = () => {
    const days = [];
    const today = new Date(); // Real current date
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        date: date.toISOString().split('T')[0], // e.g., '2025-04-03'
        display: `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()} - ${date.toLocaleString('default', { weekday: 'short' })}`,
      });
    }
    return days;
  };
  const dates = getNext7Days();


  useEffect(() => {
    if (selectedDate) {
      axios.get('http://localhost:3000/bookings', {
        params: { locationName, date: selectedDate },
      })
        .then(res => setBookedSlots(res.data.map(b => b.slot)))
        .catch(err => console.error(err));
    }
  }, [locationName, selectedDate]);


  const handleSubmit = async () => {
    if (selectedSlot === null || !selectedDate) return alert('Please select a slot and date');

    const bookingData = {
      ...state,
      locationName,
      slot: selectedSlot,
      date: selectedDate,
    };

    try {
      await axios.post('http://localhost:3000/book', bookingData);
      navigate('/confirmation', { state: { ...bookingData, time: new Date().toLocaleTimeString() } });
    } catch (err) {
      alert('Booking failed: ' + err.response.data.message);
    }
  };


  return (
    <div className="p-4 mt-36  min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-7xl bg-white shadow-md p-4 rounded-lg flex flex-wrap justify-between items-center mb-4">
        <div className="flex flex-wrap space-x-4 text-gray-700 text-sm md:text-base">
          <div>Level: <span className="font-semibold">1</span></div>
          <div>Parking view: <span className="font-semibold">Block A</span></div>
          <div>Vehicle: <span className="font-semibold">4 wheeler</span></div>
        
          <div>Available slots: <span className="font-semibold">50</span></div>
          <div>Occupied: <span className="font-semibold">50</span></div>
          <div>Location: <span className="font-semibold">{locationName}</span></div>
        </div>
      </div>

      <h2 className="text-lg font-medium mb-2">Select Date</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7 mb-4">
        {dates.map((d, i) => (
          <div
            key={i}
            onClick={() => setSelectedDate(d.date)}
            className={`p-4 border border-gray-400 rounded-lg text-center cursor-pointer ${
              selectedDate === d.date ? 'bg-blue-200' : 'bg-white'
            } hover:bg-blue-100 transition-colors`}
          >
            <p className="text-sm font-semibold">{d.display}</p>
          </div>
        ))}
      </div>

      {/* Parking Slots Layout */}
      <div className="w-full max-w-7xl bg-gray-300 p-6 rounded-lg relative">

      {/* Parking Slots Layout */}
      <div className="w-full max-w-7xl bg-gray-300 p-6 rounded-lg relative">
        {/* Legend */}
        <div className="flex space-x-4 mb-4 text-sm text-gray-700">
          <div className="flex items-center space-x-2">
            <span className="bg-white h-4 w-4 border border-gray-500 inline-block"></span>
            <span>Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-gray-700 h-4 w-4 inline-block"></span>
            <span>Occupied</span>
          </div>
        </div>

        {/* Entry/Exit Labels */}
        {/* <div className="absolute left-4 top-10 text-gray-700 text-sm">ENTRY</div>
        <div className="absolute right-4 top-10 text-gray-700 text-sm">EXIT</div>
        <div className="absolute left-4 bottom-10 text-gray-700 text-sm">ENTRY</div>
        <div className="absolute right-4 bottom-10 text-gray-700 text-sm">EXIT</div> */}

        {/* Parking Grid */}
        {selectedDate && (
        <div>
          <h2 className="text-lg font-medium mb-2">Select a Slot</h2>
          <div className="grid grid-cols-3 gap-4 lg:grid-cols-6">
            {Array.from({ length: state.slots }, (_, index) => {
              const isBooked = bookedSlots.includes(index);
              const isSelected = selectedSlot === index;
              return (
                <div
                  key={index}
                  onClick={() => !isBooked && setSelectedSlot(index)}
                  className={`flex flex-col items-center justify-center w-20 h-10 rounded-md p-1 border border-gray-400 ${
                    isBooked ? 'bg-red-200' : isSelected ? 'bg-yellow-200' : 'bg-white'
                  } ${!isBooked ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                >
                  <img src={car} alt="Car" className="w-10 h-12 mb-1" />
                </div>
              );
            })}
          </div>
          <button onClick={handleSubmit} className="mt-4 p-2 bg-blue-500 text-white rounded">
            Book Now
          </button>
        </div>
      )}
      </div>
    </div>

    </div>
  );
}

export default SlotSelection;
