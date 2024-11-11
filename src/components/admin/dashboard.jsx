import React from 'react';

function Dashboard() {
  return (
    <div className="p-6 bg-gray-200 min-h-screen">
      {/* Top Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-300 p-4 rounded-lg text-center">
          <div className="text-lg font-semibold">Total Registers</div>
          <div className="text-xl">5.5k</div>
        </div>
        <div className="bg-gray-300 p-4 rounded-lg text-center">
          <div className="text-lg font-semibold">Active Users</div>
          <div className="text-xl">3.5k</div>
        </div>
        <div className="bg-gray-300 p-4 rounded-lg text-center">
          <div className="text-lg font-semibold">Available Spots</div>
          <div className="text-xl">50</div>
        </div>
        <div className="bg-gray-300 p-4 rounded-lg text-center">
          <div className="text-lg font-semibold">Booked Spots</div>
          <div className="text-xl">100</div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Bar Chart */}
        <div className="bg-gray-300 p-6 rounded-lg">
          <h2 className="text-md font-semibold mb-4">Peak Hours</h2>
          <div className="flex justify-between">
            {['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center">
                <div className="bg-gray-700 h-24 w-6 mb-2"></div>
                <div className="bg-brown-600 h-16 w-6"></div>
                <div className="mt-2 text-sm">{day}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-gray-300 p-6 rounded-lg flex flex-col items-center">
          <h2 className="text-md font-semibold mb-4">Available vs Booked Slots</h2>
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 rounded-full bg-gray-700" style={{ clipPath: 'inset(0 50% 0 0)' }}></div>
            <div className="absolute inset-0 rounded-full bg-brown-600" style={{ clipPath: 'inset(0 0 0 50%)' }}></div>
          </div>
          <div className="flex justify-between w-full mt-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-700 w-4 h-4 rounded-full"></div>
              <span>Available Slots</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-brown-600 w-4 h-4 rounded-full"></div>
              <span>Booked Slots</span>
            </div>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-gray-300 mt-6 p-6 rounded-lg overflow-x-auto">
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <span>Show</span>
            <select className="ml-2 p-1 rounded border border-gray-400 bg-white">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span className="ml-2">entries</span>
          </div>
          <input
            type="text"
            placeholder="Search Vehicle Number"
            className="p-2 rounded border border-gray-400"
          />
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-400">
              <th className="p-2">S.No</th>
              <th className="p-2">Vehicle No.</th>
              <th className="p-2">Parking Slot</th>
              <th className="p-2">FastTag No.</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="border-t border-gray-400">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">MH 34 BL {3726 + index}</td>
                <td className="p-2">L1/A/0{index + 1}</td>
                <td className="p-2">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
