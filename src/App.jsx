// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary modules from react-router-dom

import Home from './pages/home';
import Contactus from './pages/contactus';
import Service from './components/services/service';
import Admin from './pages/admin';
import Navbar from './components/navbar';
import Footer from './components/footer';
import User from './pages/user';
import AboutUs from './pages/aboutus';
import Layout from './components/layout';
import Layout1 from './components/layout1';

import AdminSignIn from './components/admin/adminsignin';
import AdminLogin from './components/admin/adminlogin';
import ForgotPassword from './components/admin/adminforgotpass';
import EmailVerification from './components/admin/emailverify';
import PasswordResetConfirmation from './components/admin/passwordreset';
import PasswordResetForm from './components/admin/newpass';
import PasswordResetSuccess from './components/admin/passwordresetsucess';
import Dashboard from './components/admin/dashboard';
import Profile_Details from './components/admin/setting';
import Toolbar from './components/admin/vehicle';
import Tool_bar from './components/admin/manageparking';
import Revenue from './components/admin/revenue';
import ParkingDashboard from './components/admin/spaceallotment';


import UserSignIn from './components/user/usersignin';
import UserLogin from './components/user/userlogin';
import Forgot_Password from './components/user/userforgotpass';
import Email_Verification from './components/user/email_verify';
import Password_ResetConfirmation from './components/user/pass_reset';
import Password_ResetForm from './components/user/new_pass';
import Password_ResetSuccess from './components/user/pass_resetsucess';
import ParkingApp from './components/user/location';
import SlotBooking from './components/user/slotbooking';
import BookingConfirmation from './components/user/BookingConfirmation';
import BookingReceipt from './components/user/bookingreceipt';
import ParkingFeesCard from './components/user/parkingcost';
import ParkingTable from './components/user/bookinghistory';
import ProfileDetails from './components/user/accountsetting';
import ParkingLot from './components/user/spacesection';
import './App.css'; // Importing the CSS styles for the application

function App() {
  return (
    
    <Router>
<Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contactus" element={<Contactus />} />
    <Route path="/aboutus" element={<AboutUs />} />

    <Route path="/services" element={<Service />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/user" element={<User />} />

    <Route path="/adminsignin" element={<AdminSignIn />} />
    <Route path="/adminlogin" element={<AdminLogin />} />
    <Route path="/adminforgotpass" element={<ForgotPassword />} />
    <Route path="/emailverify" element={<EmailVerification />} />
    <Route path="/passwordreset" element={<PasswordResetConfirmation/>} />
    <Route path="/newpass" element={<PasswordResetForm/>} />
    <Route path="/passwordresetsucess" element={<PasswordResetSuccess />} />

    <Route element={<Layout1 />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/spaceallotment" element={<ParkingDashboard />} />
          <Route path="/vehicle" element={<Toolbar/>} />
          <Route path="/setting" element={<Profile_Details/>} />
          <Route path="/revenue" element={<Revenue/>} />
          <Route path="/manageparking" element={<Tool_bar/>} />
          
          

        </Route>

    
    <Route path="/usersignin" element={<UserSignIn />} />
    <Route path="/userlogin" element={<UserLogin />} />
    <Route path="/userforgotpass" element={<Forgot_Password />} />
    <Route path="/email_verify" element={<Email_Verification />} />
    <Route path="/pass_reset" element={<Password_ResetConfirmation/>} />
    <Route path="/new_pass" element={<Password_ResetForm/>} />
    <Route path="/pass_resetsucess" element={<Password_ResetSuccess />} />
    <Route path="/location" element={<ParkingApp />} />
    <Route path="/bookingconfirmation" element={<BookingConfirmation />} />
    <Route path="/bookingreceipt" element={<BookingReceipt />} />
        
        <Route element={<Layout />}>
          <Route path="/slotbooking" element={<SlotBooking />} />
          <Route path="/parkingcost" element={<ParkingFeesCard />} />
          <Route path="/bookinghistory" element={<ParkingTable/>} />
          <Route path="/accountsetting" element={<ProfileDetails/>} />
          <Route path="/spacesection" element={<ParkingLot/>} />
        </Route>
      

    
   
    
  </Routes>
  <Footer></Footer>
</Router>
  );
}

export default App;
