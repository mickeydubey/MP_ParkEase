import React from 'react';
import { FaSearch, FaFilter, FaEdit, FaTrash, FaPrint } from 'react-icons/fa';

// Toolbar Component
const Tool_bar = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center sm:justify-start mt-44">
      {/* Search Button */}
      <button className="flex items-center px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
        <FaSearch className="mr-2" />
        <span>Search Vehicle Number</span>
      </button>

      {/* Filter Button */}
      <button className="flex items-center px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
        <FaFilter className="mr-2" />
        <span>Filter</span>
      </button>
    </div>
  );
};

// Table Component with Placeholder Data
const Table = () => {
  // Sample placeholder data
  const placeholderData = [
    {
      id: 1, vehicleNo: "MH 34 BL 3726", parkingSlot: "L1/A/01", date: "06/09/24", fastTagNo: "123456789",
      checkin: "11:09 AM", checkout: "11:55 AM", time: "1 hr", rate: 50
    },
    {
      id: 2, vehicleNo: "MH 34 AM 3330", parkingSlot: "L1/A/02", date: "06/09/24", fastTagNo: "987654321",
      checkin: "11:09 AM", checkout: "11:30 AM", time: "1 hr", rate: 50
    },
    // Add more placeholder entries as needed
  ];

  return (
    <div className="p-4">
      <div className="bg-gray-200 p-4 rounded-lg">
        <div className="overflow-auto">
          <table className="min-w-full bg-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="p-2 border-b-2 border-gray-300 text-left">S.No</th>
                <th className="p-2 border-b-2 border-gray-300 text-left">Vehicle No.</th>
                <th className="p-2 border-b-2 border-gray-300 text-left">Parking Slot</th>
                <th className="p-2 border-b-2 border-gray-300 text-left">Date</th>
                <th className="p-2 border-b-2 border-gray-300 text-left">FastTag No.</th>
                <th className="p-2 border-b-2 border-gray-300 text-left">Checkin</th>
                <th className="p-2 border-b-2 border-gray-300 text-left">Checkout</th>
                <th className="p-2 border-b-2 border-gray-300 text-left">Time</th>
                <th className="p-2 border-b-2 border-gray-300 text-left">Rate</th>
                <th className="p-2 border-b-2 border-gray-300 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {placeholderData.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-300">
                  <td className="p-2 border-b border-gray-300">{index + 1}</td>
                  <td className="p-2 border-b border-gray-300">{item.vehicleNo}</td>
                  <td className="p-2 border-b border-gray-300">{item.parkingSlot}</td>
                  <td className="p-2 border-b border-gray-300">{item.date}</td>
                  <td className="p-2 border-b border-gray-300">{item.fastTagNo}</td>
                  <td className="p-2 border-b border-gray-300">{item.checkin}</td>
                  <td className="p-2 border-b border-gray-300">{item.checkout}</td>
                  <td className="p-2 border-b border-gray-300">{item.time}</td>
                  <td className="p-2 border-b border-gray-300">{item.rate}</td>
                  <td className="p-2 border-b border-gray-300 flex gap-2">
                    <button className="p-1 rounded hover:bg-gray-400">
                      <FaEdit />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-400">
                      <FaTrash />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-400">
                      <FaPrint />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <Tool_bar />
      <Table />
    </div>
  );
};

export default App;
