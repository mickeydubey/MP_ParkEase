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
import AdminSignIn from './components/admin/adminsignin';
import AdminLogin from './components/admin/adminlogin';
import UserSignIn from './components/user/usersignin';
import UserLogin from './components/user/userlogin';

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
    
    <Route path="/usersignin" element={<UserSignIn />} />
    <Route path="/userlogin" element={<UserLogin />} />
  </Routes>
  <Footer></Footer>
</Router>
  );
}

export default App;
