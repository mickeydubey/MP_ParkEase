import React, { useState, useEffect } from 'react';

const ParkingTable = () => {
  const [parkingData, setParkingData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend here
    fetch('/api/parking-data')
      .then(response => response.json())
      .then(data => setParkingData(data))
      .catch(error => console.error('Error fetching parking data:', error));
  }, []);

  return (
    <div className="p-4 max-w-full sm:max-w-3xl lg:max-w-6xl mx-auto mt-40">
      <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden ">
        <table className="min-w-full text-left">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">Sr No.</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">Vehicle Type</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">Vehicle Number</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">Slot Name</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">Date</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">Parking Cost</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {parkingData.length > 0 ? (
              parkingData.map((item, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="px-4 py-3 text-sm text-gray-800">{index + 1}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{item.vehicleType}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{item.vehicleNumber}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{item.slotName}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{item.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{item.cost}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-4 py-3 text-center text-gray-600">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParkingTable;
