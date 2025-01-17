import React, { useState, useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [selectedLevel, setSelectedLevel] = useState('Level 1');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Close dropdown if clicked outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Data and options for the bar chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        backgroundColor: '#737373',
        borderRadius: 5,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#4B5563', // Text color for X-axis
        },
      },
      y: {
        grid: {
          color: '#D1D5DB', // Light grid lines for Y-axis
        },
        ticks: {
          color: '#4B5563', // Text color for Y-axis
          callback: function (value) {
            return value + '%'; // Add '%' to each Y-axis label
          },
        },
        max: 100,
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  };

  return (
    <div className="flex flex-col items-center mt-48">
      {/* Revenue Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mb-14">
        <div className="bg-gray-200 p-4 rounded-lg text-center shadow">
          <div className="text-gray-700 font-semibold">Today's Revenue</div>
          <div className="text-2xl font-bold">₹ 200</div>
        </div>

        {/* Level Revenue with Dropdown */}
        <div className="bg-gray-200 p-4 rounded-lg text-center shadow relative" ref={dropdownRef}>
          <div className="text-gray-700 font-semibold">Level Revenue</div>
          <div className="text-2xl font-bold">₹ 200</div>

          {/* Custom Dropdown */}
          <div
            className="flex justify-center items-center mt-4 cursor-pointer relative"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="text-gray-700">{selectedLevel}</span>
            <svg
              className="ml-2 w-4 h-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isDropdownOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
              />
            </svg>
          </div>

          {/* Dropdown Options */}
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 bg-white shadow rounded border border-gray-300 w-full">
              {['Level 1', 'Level 2', 'Level 3'].map((level) => (
                <div
                  key={level}
                  onClick={() => {
                    setSelectedLevel(level);
                    setIsDropdownOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {level}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-200 p-4 rounded-lg text-center shadow">
          <div className="text-gray-700 font-semibold">Cash Revenue</div>
          <div className="text-2xl font-bold">₹ 3000</div>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg text-center shadow">
          <div className="text-gray-700 font-semibold">Online Transaction</div>
          <div className="text-2xl font-bold">₹ 1000</div>
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="bg-gray-300 rounded-lg p-6 w-full h-96 max-w-5xl shadow-lg">
        <div className="flex justify-between items-center">
          <div className="text-gray-700 font-semibold">Select year</div>
          <select className="p-2 bg-white rounded border-gray-300 focus:outline-none">
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
        </div>

        <div className="relative w-full h-64 mt-6">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
