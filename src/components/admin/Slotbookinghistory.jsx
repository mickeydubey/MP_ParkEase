import React, { useState, useEffect } from 'react';
import axiosInstance from '../../lib/axiosInstance';

const ParkingTableadmin = () => {
  const [parkingData, setParkingData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/slotbooking');
        setParkingData(response.data);
      } catch (error) {
        console.error('Error fetching parking data:', error);
      }
    };

    fetchData();
  }, []);
  // Pagination logic
  const totalPages = Math.ceil(parkingData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = parkingData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-4 max-w-full sm:max-w-3xl lg:max-w-6xl mx-auto mt-40">
      <h2 className="text-xl font-bold text-gray-800 mb-4">🚗 Booking History</h2>
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="min-w-full text-left border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">Sr No.</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">Owner Name</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">Contact</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">Vehicle No.</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">Slot No.</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">Date</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">Time</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr key={item._id}>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">{item.ownername}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{item.contact}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{item.vehicle_no}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{item.slot_no}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{item.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{item.time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-3 text-center text-gray-500">
                  No booking history found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm font-medium rounded ${
            currentPage === 1
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Previous
        </button>

        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-sm font-medium rounded ${
            currentPage === totalPages
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ParkingTableadmin;
