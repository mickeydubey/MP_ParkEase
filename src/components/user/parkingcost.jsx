// ParkingFeesCard.js
import React from 'react';
import Layout from './../layout';  // Update with the correct path if necessary

function ParkingFeesCard() {
  return (
    <><div>
          <div className="flex flex-col  p-0  ">
              <div className="bg-gray-300 rounded-lg shadow-lg w-full max-w-md p-6 absolute left-72 mt-56">
                  {/* Image Section */}
                  <div className="flex justify-center mb-4">
                      <div className="relative">
                          <img
                              src="car-icon.png" // Replace with actual car image path
                              alt="Car Icon"
                              className="h-20 mx-auto" />
                          <img
                              src="parking-sign.png" // Replace with actual parking sign image path
                              alt="Parking Sign"
                              className="h-8 absolute right-0 top-0 transform translate-y-2" />
                      </div>
                  </div>

                  {/* Pricing Table */}
                  <table className="w-full text-center">
                      <thead>
                          <tr>
                              <th className="p-2 border-b-2 font-semibold">Duration</th>
                              <th className="p-2 border-b-2 font-semibold">Fees (per hour)</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td className="p-2 border-b">0-1 hours</td>
                              <td className="p-2 border-b">50rs</td>
                          </tr>
                          <tr>
                              <td className="p-2 border-b">1-2 hours</td>
                              <td className="p-2 border-b">100rs</td>
                          </tr>
                          <tr>
                              <td className="p-2 border-b">2-3 hours</td>
                              <td className="p-2 border-b">150rs</td>
                          </tr>
                          <tr>
                              <td className="p-2">3+ hours</td>
                              <td className="p-2">200rs</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      <div>
              <div className="flex flex-col  p-0  ">
                  <div className="bg-gray-300 rounded-lg shadow-lg w-full max-w-md p-6 absolute right-10 mt-96">
                      {/* Image Section */}
                      <div className="flex justify-center mb-4">
                          <div className="relative">
                              <img
                                  src="car-icon.png" // Replace with actual car image path
                                  alt="Car Icon"
                                  className="h-20 mx-auto" />
                              <img
                                  src="parking-sign.png" // Replace with actual parking sign image path
                                  alt="Parking Sign"
                                  className="h-8 absolute right-0 top-0 transform translate-y-2" />
                          </div>
                      </div>

                      {/* Pricing Table */}
                      <table className="w-full text-center">
                          <thead>
                              <tr>
                                  <th className="p-2 border-b-2 font-semibold">Duration</th>
                                  <th className="p-2 border-b-2 font-semibold">Fees (per hour)</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td className="p-2 border-b">0-1 hours</td>
                                  <td className="p-2 border-b">50rs</td>
                              </tr>
                              <tr>
                                  <td className="p-2 border-b">1-2 hours</td>
                                  <td className="p-2 border-b">100rs</td>
                              </tr>
                              <tr>
                                  <td className="p-2 border-b">2-3 hours</td>
                                  <td className="p-2 border-b">150rs</td>
                              </tr>
                              <tr>
                                  <td className="p-2">3+ hours</td>
                                  <td className="p-2">200rs</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div></>

      
    
  );
}

export default ParkingFeesCard;
