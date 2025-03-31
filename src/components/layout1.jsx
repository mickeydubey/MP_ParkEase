import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from './../assets/log.png'
import D from './../assets/D.png'
import SA from './../assets/SA.png'
import V from './../assets/V.png'
import R from './../assets/R.png'
import MP from './../assets/MP.png'
import AS from './../assets/AS.png'
import LO from './../assets/LO.png'

function Layout1() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-60 h-1/2  bg-gray-200 p-4 mt-44 rounded-r-2xl hidden md:block">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src={Logo} className="w-24 h-12 mb-2" />
         
        </div>

        {/* Sidebar Navigation */}
        <nav className="space-y-10">
          <Link to="/dashboard" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
          <span className="flex items-center">
         <img 
           src={D} // Replace with your actual image path
           alt="Seat Icon" 
           className="h-6 w-6 object-contain" // Adjust size as needed
           />
           </span>
            <span>DashBoard</span>
          </Link>
          <Link to="/spaceallotment" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
          <span className="flex items-center">
         <img 
           src={SA} // Replace with your actual image path
           alt="Seat Icon" 
           className="h-6 w-6 object-contain" // Adjust size as needed
           />
           </span>
            <span>Space Allotment</span>
          </Link>
          <Link to="/vehicle" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
          <span className="flex items-center">
         <img 
           src={V} // Replace with your actual image path
           alt="Seat Icon" 
           className="h-6 w-6 object-contain" // Adjust size as needed
           />
           </span>
            <span>Vehicle</span>
          </Link>
          <Link to="/revenue" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
          <span className="flex items-center">
         <img 
           src={R} // Replace with your actual image path
           alt="Seat Icon" 
           className="h-6 w-6 object-contain" // Adjust size as needed
           />
           </span>
            <span>Revenue</span>
          </Link>
          <Link to="/slotbookinghistory" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
          <span className="flex items-center">
         <img 
           src={R} // Replace with your actual image path
           alt="Seat Icon" 
           className="h-6 w-6 object-contain" // Adjust size as needed
           />
           </span>
            <span>Slot Booking History</span>
          </Link>
          <Link to="/manageparking" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
          <span className="flex items-center">
         <img 
           src={MP} // Replace with your actual image path
           alt="Seat Icon" 
           className="h-6 w-6 object-contain" // Adjust size as needed
           />
           </span>
            <span>Manage Parking</span>
          </Link>
          <Link to="/setting" className="flex items-center space-x-3 space-y-48 text-gray-800 hover:text-blue-600 font-semibold">
          <div className="flex items-center space-y-32">
  <img 
    src={AS} // Replace with your actual image path
    alt="Seat Icon" 
    className="h-7 w-6 object-contain relative top-16" // Moves image down
  />
  <span className="ml-2">Setting</span>
</div>
          
          </Link>
          <Link to="/adminlogin" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
          <span className="flex items-center">
         <img 
           src={LO} // Replace with your actual image path
           alt="Seat Icon" 
           className="h-6 w-6 object-contain" // Adjust size as needed
           />
           </span>
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
