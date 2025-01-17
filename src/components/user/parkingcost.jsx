// ParkingFeesCard.js
import React from 'react';
import CAR from '../../assets/car.png'
import CAR1 from '../../assets/car1.png'
function ParkingFeesCard() {
  return (
    <><div>
        <div className="flex flex-col w-full p-0">
          <div className="bg-gray-300 rounded-lg shadow-xl w-full max-w-sm  absolute left-80 mt-56 border border-gray">
            {/* Image Section */}
            <div className="w-full mb-4">
              <img
                src={CAR} // Replace with the actual car image path
                alt="Car Icon"
                className="w-full h-auto object-cover rounded-t-lg" // Ensures full width and rounded top corners
              />
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
                  <div className="bg-gray-300 rounded-lg shadow-xl w-full max-w-sm  absolute  border border-gray right-20 mt-80">
                      {/* Image Section */}
                      <div className="flex justify-center mb-4">
                          <div className="relative">
                              <img
                                  src={CAR1} // Replace with actual car image path
                                  alt="Car Icon"
                                  className="w-full h-auto object-cover rounded-t-lg" />
                              
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
                                  <td className="p-2 border-b">30rs</td>
                              </tr>
                              <tr>
                                  <td className="p-2 border-b">1-2 hours</td>
                                  <td className="p-2 border-b">60rs</td>
                              </tr>
                              <tr>
                                  <td className="p-2 border-b">2-3 hours</td>
                                  <td className="p-2 border-b">90rs</td>
                              </tr>
                              <tr>
                                  <td className="p-2">3+ hours</td>
                                  <td className="p-2">120rs</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div></>

      
    
  );
}

export default ParkingFeesCard;
