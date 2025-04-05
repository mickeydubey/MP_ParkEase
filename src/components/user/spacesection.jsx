import React from 'react';
import car from '../../assets/Car Top View.png';

function ParkingLot() {
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
          <div>Location: <span className="font-semibold">XYZ</span></div>
        </div>
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
        <div className="absolute left-4 top-10 text-gray-700 text-sm">ENTRY</div>
        <div className="absolute right-4 top-10 text-gray-700 text-sm">EXIT</div>
        <div className="absolute left-4 bottom-10 text-gray-700 text-sm">ENTRY</div>
        <div className="absolute right-4 bottom-10 text-gray-700 text-sm">EXIT</div>

        {/* Parking Grid */}
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-6">
          {Array.from({ length: 60 }, (_, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center w-20 h-10 bg-white rounded-md p-1 
                
              border border-gray-400`}
            >
              {/* Car Image */}
              <img
                src={car}
                alt="Car"
                className="w-10 h-12 mb-1"
              />
            
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
  );
}

export default ParkingLot;
