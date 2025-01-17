import React from "react";

function Dashboard() {
  return (
    <div className="p-2 min-h-screen  ">
      {/* Top Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 mt-32">
        {["Total Registers", "Active Users", "Available Spots", "Booked Spots"].map(
          (label, index) => (
            <div
              key={index}
              className="bg-gray-300 p-4 rounded-lg text-center shadow-lg"
            >
              <div className="text-lg font-semibold">{label}</div>
              <div className="text-xl font-bold">
                {index === 0 ? "5.5k" : index === 1 ? "3.5k" : index === 2 ? "50" : "100"}
              </div>
            </div>
          )
        )}
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Side: Peak Hours and Table */}
        <div className="space-y-6">
          {/* Peak Hours Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full">
  <h1 className="text-lg font-bold mb-4">Peak Hours</h1>
  <div className="grid grid-cols-7 gap-4">
    {["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"].map((day, index) => (
      <div key={index} className="flex flex-col items-center h-40 relative">
        {/* Bars container */}
        <div className="flex space-x-2 items-end h-full">
          {/* Left Bar (2-W) */}
          <div
            className="bg-gray-800 w-6"
            style={{ height: `${Math.random() * 80 + 60}px` }} // Adjust height dynamically
          ></div>
          {/* Right Bar (4-W) */}
          <div
            className="bg-yellow-800 w-6"
            style={{ height: `${Math.random() * 80 + 40}px` }} // Adjust height dynamically
          ></div>
        </div>
        {/* Day Label */}
        <div className="mt-auto text-sm absolute bottom-[-20px]">{day}</div>
      </div>
    ))}
  </div>
  {/* Legend */}
  <div className="flex justify-center mt-4 space-x-4">
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 bg-gray-800"></div>
      <span className="text-sm">2-W</span>
    </div>
    <div className="flex items-center space-x-2 ">
      <div className="w-4 h-4 bg-yellow-800"></div>
      <span className="text-sm">4-W</span>
    </div>
  </div>
</div>

          {/* Data Table Section */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-full ">
            <div className="flex justify-between mb-4">
              <div className="flex items-center">
                <span>Show</span>
                <select className="ml-2 p-2 rounded border border-gray-400 bg-white">
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
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-300">
                  <th className="p-2">S.No</th>
                  <th className="p-2">Vehicle No.</th>
                  <th className="p-2">Parking Slot</th>
                  <th className="p-2">FastTag No.</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr
                    key={index}
                    className={`border-t ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                    }`}
                  >
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

        {/* Right Side: Pie Chart */}
        <div className="bg-gray-100 rounded-lg shadow-lg flex flex-col items-center justify-center w-full h-[36rem] mt-6">
          <h1 className="text-lg font-bold mb-4">Available vs Booked Slots</h1>
          <div className="relative w-[20rem] h-[20rem]">
            {/* Left half (Available Slots) */}
            <div
              className="absolute inset-0 rounded-full bg-gray-700"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            ></div>
            {/* Right half (Booked Slots) */}
            <div
              className="absolute inset-0 rounded-full bg-gray-500"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            ></div>
          </div>
          <div className="flex justify-around mt-6 w-full px-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-700 w-4 h-4 rounded-full"></div>
              <span>Available Slots</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-500 w-4 h-4 rounded-full"></div>
              <span>Booked Slots</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
