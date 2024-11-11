import React from 'react';
import { FaSearch, FaFilter, FaPlus, FaFileExport } from 'react-icons/fa';

// Toolbar Component
const Toolbar = () => {
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

      {/* Add New Entry Button */}
      <button className="flex items-center px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
        <FaPlus className="mr-2" />
        <span>Add New Entry</span>
      </button>

      {/* Export Button */}
      <button className="flex items-center px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
        <FaFileExport className="mr-2" />
        <span>Export</span>
      </button>
    </div>
  );
};

// Table Component with Placeholder Data
const Table = () => {
  // Sample placeholder data
  const placeholderData = [
    { id: 1, vehicleNo: "MH 34 BL 3726", parkingSlot: "L1/A/01", fastTagNo: "123456789", date: "06/09/24", checkin: "11:09" },
    { id: 2, vehicleNo: "MH 34 BL 3330", parkingSlot: "L1/A/02", fastTagNo: "987654321", date: "06/09/24", checkin: "11:10" },
    // Add more placeholder entries as needed
  ];

  return (
    <div className="p-4">
      <div className="bg-gray-200 p-4 rounded-lg">
        {/* Table */}
        <div className="overflow-auto">
          <table className="min-w-full bg-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="p-2 border-b-2 border-gray-300 text-left">S.No</th>
                <th className="p-2 border-b-2 border-gray-300 text-left">Vehicle No.</th>
                <th className="p-2 border-b-2 border-gray-300 text-left">Parking Slot</th>
                <th className="p-2 border-b-2 border-gray-300 text-left">FastTag No.</th>
                <th className="p-2 border-b-2 border-gray-300 text-left">Date</th>
                <th className="p-2 border-b-2 border-gray-300 text-left">Checkin</th>
              </tr>
            </thead>
            <tbody>
              {placeholderData.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-300">
                  <td className="p-2 border-b border-gray-300">{index + 1}</td>
                  <td className="p-2 border-b border-gray-300">{item.vehicleNo}</td>
                  <td className="p-2 border-b border-gray-300">{item.parkingSlot}</td>
                  <td className="p-2 border-b border-gray-300">{item.fastTagNo}</td>
                  <td className="p-2 border-b border-gray-300">{item.date}</td>
                  <td className="p-2 border-b border-gray-300">{item.checkin}</td>
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
      <Toolbar />
      <Table />
    </div>
  );
};

export default App;
