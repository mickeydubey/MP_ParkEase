import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
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
          <Link to="/slotbooking" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
            <span className="material-icons">event_seat</span>
            <span>Slot Booking</span>
          </Link>
          <Link to="/parkingcost" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
            <span className="material-icons">local_parking</span>
            <span>Parking Cost</span>
          </Link>
          <Link to="/bookinghistory" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
            <span className="material-icons">history</span>
            <span>Booking History</span>
          </Link>
          <Link to="/location" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
            <span className="material-icons">location_on</span>
            <span>Location</span>
          </Link>
          <Link to="/spacesection" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
            <span className="material-icons">layers</span>
            <span>Space Section</span>
          </Link>
          <Link to="/accountsetting" className="flex items-center space-x-3 space-y-48 text-gray-800 hover:text-blue-600 font-semibold">
            <span className="material-icons">settings</span>
            <span>Account Settings</span>
          </Link>
          <Link to="/userlogin" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
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

export default Layout;
