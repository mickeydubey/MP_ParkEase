import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from './../assets/log.png'
import SB from './../assets/SB.png'
import Park from './../assets/Park.png'
import BH from './../assets/BH.png'
import L from './../assets/L.png'
import SS from './../assets/SS.png'
import AS from './../assets/AS.png'
import LO from './../assets/LO.png'
function Layout() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-60 h-1/2  bg-gray-200 p-4 mt-44 rounded-r-2xl hidden md:block">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src={Logo} className="w-24 h-12 mb-1" />
          
        </div>

        {/* Sidebar Navigation */}
        <nav className="space-y-10">
          <Link to="/slotbooking" className="flex items-center space-x-3  text-gray-800 hover:text-blue-600 font-semibold">
          <span className="flex items-center">
         <img 
           src={SB} // Replace with your actual image path
           alt="Seat Icon" 
           className="h-6 w-6 object-contain" // Adjust size as needed
           />
           </span>
            <span>Slot Booking</span>
          </Link>
          <Link to="/parkingcost" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
          <span className="flex items-center">
         <img 
           src={Park} // Replace with your actual image path
           alt="Seat Icon" 
           className="h-6 w-6 object-contain" // Adjust size as needed
           />
           </span>
            <span>Parking Cost</span>
          </Link>
          <Link to="/bookinghistory" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
          <span className="flex items-center">
         <img 
           src={BH} // Replace with your actual image path
           alt="Seat Icon" 
           className="h-6 w-6 object-contain" // Adjust size as needed
           />
           </span>
            <span>Booking History</span>
          </Link>
          <Link to="/location" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
          <span className="flex items-center">
         <img 
           src={L} // Replace with your actual image path
           alt="Seat Icon" 
           className="h-5 w-6 object-contain" // Adjust size as needed
           />
           </span>
            <span>Location</span>
          </Link>
          <Link to="/spacesection" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
          <span className="flex items-center">
         <img 
           src={SS} // Replace with your actual image path
           alt="Seat Icon" 
           className="h-5 w-6 object-contain" // Adjust size as needed
           />
           </span>
            <span>Space Section</span>
          </Link>
          <Link to="/accountsetting" className="flex items-center space-x-3  text-gray-800 hover:text-blue-600 font-semibold">
          <div className="flex items-center space-y-28">
  <img 
    src={AS} // Replace with your actual image path
    alt="Seat Icon" 
    className="h-7 w-6 object-contain relative top-14" // Moves image down
  />
  <span className="ml-2">Account Setting</span>
</div>
          </Link>
          <Link to="/userlogin" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 font-semibold">
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

export default Layout;
