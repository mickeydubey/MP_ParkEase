// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function ParkingList() {
//   const navigate = useNavigate();
//   const [selectedCity, setSelectedCity] = useState('');
  
//   const locations = [
//     { name: 'Downtown Parking', slots: 30, city: 'New York' },
//     { name: 'Mall Parking', slots: 45, city: 'New York' },
//     { name: 'Airport Parking', slots: 60, city: 'Los Angeles' },
//     { name: 'Beach Parking', slots: 25, city: 'Los Angeles' },
//     { name: 'City Center', slots: 35, city: 'Chicago' },
//   ];

//   const cities = [...new Set(locations.map(loc => loc.city))]; // Unique cities
//   const filteredSpots = selectedCity ? locations.filter(loc => loc.city === selectedCity) : [];

//   const handleSpotSelect = (spotName) => {
//     const spot = locations.find(loc => loc.name === spotName);
//     navigate(`/book/${spot.name}`, { state: { slots: spot.slots } });
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Parking Locations</h1>
      
//       {/* City Dropdown */}
//       <div className="mb-4">
//         <label htmlFor="city" className="block text-lg font-medium mb-2">Select City</label>
//         <select
//           id="city"
//           value={selectedCity}
//           onChange={(e) => setSelectedCity(e.target.value)}
//           className="p-2 border border-gray-400 rounded w-full max-w-xs"
//         >
//           <option value="">-- Select City --</option>
//           {cities.map(city => (
//             <option key={city} value={city}>{city}</option>
//           ))}
//         </select>
//       </div>

//       {/* Spot Dropdown */}
//       {selectedCity && (
//         <div className="mb-4">
//           <label htmlFor="spot" className="block text-lg font-medium mb-2">Select Spot</label>
//           <select
//             id="spot"
//             onChange={(e) => handleSpotSelect(e.target.value)}
//             className="p-2 border border-gray-400 rounded w-full max-w-xs"
//           >
//             <option value="">-- Select Spot --</option>
//             {filteredSpots.map(spot => (
//               <option key={spot.name} value={spot.name}>
//                 {spot.name} ({spot.slots} slots)
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       <button
//         onClick={() => navigate('/totalbookings')}
//         className="mt-4 p-2 bg-blue-500 text-white rounded"
//       >
//         View Total Bookings
//       </button>
//     </div>
//   );
// }

// export default ParkingList;





import React, { useState } from "react";
import Lcimg from "./../../assets/LOC.png"; // Replace with the actual path to your image
import { useNavigate } from "react-router-dom";

const ParkingList = () => { 

  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('');
  
  const locations = [
    { name: 'Downtown Parking', slots: 30, city: 'New York' },
    { name: 'Mall Parking', slots: 45, city: 'New York' },
    { name: 'Airport Parking', slots: 60, city: 'Los Angeles' },
    { name: 'Beach Parking', slots: 25, city: 'Los Angeles' },
    { name: 'City Center', slots: 35, city: 'Chicago' },
  ];

  const cities = [...new Set(locations.map(loc => loc.city))]; // Unique cities
  const filteredSpots = selectedCity ? locations.filter(loc => loc.city === selectedCity) : [];

  const handleSpotSelect = (spotName) => {
    const spot = locations.find(loc => loc.name === spotName);
    navigate(`/slotbooking/${spot.name}`, { state: { slots: spot.slots } });
  };

  // const navigate = useNavigate();

  // State to handle selected city and space
  // const [city, setCity] = useState("");
  // const [space, setSpace] = useState("");

  // const handleSelect = (e) => {
  //   e.preventDefault();

  //   if (!city || !space) {
  //     alert("Please select both city and space.");
  //     return;
  //   }

  //   // Store data in localStorage
  //   localStorage.setItem("selectedLocation", JSON.stringify({ city, space }));

  //   // Navigate to SlotBooking page
  //   navigate("/slotbooking");
  // };

  return (
    <div className="flex items-center justify-center min-h-screen w-full p-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-20">
        {/* Form Section */}
        <div className="w-full md:w-1/3 p-8 md:p-10 rounded-3xl border border-black shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Location</h2>

          {/* <form className="space-y-6" onSubmit={handleSelect}> */}
            {/* City Input */}
            <div>
              <label htmlFor="city" className="block text-gray-700 mb-2">
                Search for your city
              </label>
              <select
                id="city"
                name="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="">-- Select City --</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
                {/* Add more cities as options here */}
              </select>
            </div>

            {/* Space Input */}
            {selectedCity && (
            <div>
              <label htmlFor="space" className="block text-gray-700 mb-2">
                Space near you
              </label>
              <select
                id="space"
                name="space"
                onChange={(e) => handleSpotSelect(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="">-- Select Spot --</option>
            {filteredSpots.map(spot => (
              <option key={spot.name} value={spot.name}>
                {spot.name} ({spot.slots} slots)
              </option>
            ))}
              </select>
            </div>
           )}
            {/* Select Button */}
            {/* <button
              type="submit"
              className="w-full bg-[#2F3645] text-white p-3 rounded-lg hover:bg-[#1e2430] transition duration-200"
            >
              Select
            </button> */}
          {/* </form> */}
        </div>

        {/* Image Section */}
        <div className="w-full md:w-2/3 flex justify-center">
          <img
            src={Lcimg}
            alt="Parking Location Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ParkingList;
