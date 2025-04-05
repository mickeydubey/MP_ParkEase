import React from 'react';

const ParkingDashboard = () => {
  // Dummy data for available and occupied slots
  const slots = Array(30).fill(true).map((_, index) => ({
    id: index,
    isOccupied: index % 2 === 0, // Occupied for even-indexed slots 
  }));

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mb-8">
        <div className="bg-gray-200 p-4 rounded-lg text-center shadow">
          <div className="text-gray-700 font-semibold">Available slots</div>
          <div className="text-2xl font-bold">50</div>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg text-center shadow">
          <div className="text-gray-700 font-semibold">Occupied</div>
          <div className="text-2xl font-bold">50</div>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg text-center shadow">
          <div className="text-gray-700 font-semibold">Level 1(A)</div>
          <div className="text-2xl font-bold">100</div>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg text-center shadow">
          <div className="text-gray-700 font-semibold">Total Revenue</div>
          <div className="text-2xl font-bold">₹ 3500</div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex gap-4 mb-6">
        <select className="p-2 bg-white rounded border-gray-300 focus:outline-none">
          <option>Level 1</option>
          <option>Level 2</option>
        </select>
        <select className="p-2 bg-white rounded border-gray-300 focus:outline-none">
          <option>Parking view: Block A</option>
          <option>Parking view: Block B</option>
        </select>
        <select className="p-2 bg-white rounded border-gray-300 focus:outline-none">
          <option>Vehicle: 4 wheeler</option>
          <option>Vehicle: 2 wheeler</option>
        </select>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 border border-gray-700 rounded"></div>
          <span className="text-gray-700">Available</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-gray-700 rounded"></div>
          <span className="text-gray-700">Occupied</span>
        </div>
      </div>

      {/* Parking Layout */}
      <div className="bg-gray-300 rounded-lg p-6 w-full max-w-4xl shadow-lg">
        <div className="flex justify-between mb-2 text-gray-700 font-semibold">
          <span>ENTRY</span>
          <span>EXIT</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {Array(3).fill(0).map((_, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-2 gap-2">
              {slots.slice(rowIndex * 10, rowIndex * 10 + 10).map(slot => (
                <div
                  key={slot.id}
                  className={`w-10 h-20 flex items-center justify-center ${
                    slot.isOccupied ? 'bg-gray-700' : 'border border-gray-700'
                  } rounded`}
                >
                  <div className="w-6 h-12 bg-gray-500 rounded"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4 text-gray-700 font-semibold">
          <span>ENTRY</span>
          <span>EXIT</span>
        </div>
      </div>
    </div>
  );
};

export default ParkingDashboard;