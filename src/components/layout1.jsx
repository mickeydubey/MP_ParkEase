import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout1() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-60 h-1/2  bg-gray-200 p-4 mt-44 rounded-r-2xl hidden md:block">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src="/path/to/logo.png" alt="ParkEase Logo" className="w-12 h-12 mb-2" />
          <span className="font-semibold text-lg">ParkEase</span>
        </div>

        {/* Sidebar Navigation */}
        <nav className="space-y-4">
          <Link to="/dashboard" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
            <span className="material-icons">event_seat</span>
            <span>DashBoard</span>
          </Link>
          <Link to="/spaceallotment" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
            <span className="material-icons">local_parking</span>
            <span>Space Allotment</span>
          </Link>
          <Link to="/vehicle" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
            <span className="material-icons">history</span>
            <span>Vehicle</span>
          </Link>
          <Link to="/revenue" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
            <span className="material-icons">location_on</span>
            <span>Revenue</span>
          </Link>
          <Link to="/manageparking" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
            <span className="material-icons">layers</span>
            <span>Manage Parking</span>
          </Link>
          <Link to="/setting" className="flex items-center space-x-3 space-y-48 text-gray-800 hover:text-blue-600 font-semibold">
            <span className="material-icons">settings</span>
            <span>Settings</span>
          </Link>
          <Link to="/adminlogin" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
            <span className="material-icons">logout</span>
            <span>Log Out</span>
          </Link>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-grow ">
        {/* Outlet renders the child components here */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout1;
